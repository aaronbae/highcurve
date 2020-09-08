import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Table from '../../components/table'
import { 
  ResponsiveContainer, 
  ReferenceLine, 
  XAxis,
  YAxis, 
  LineChart, 
  Tooltip, 
  Line 
} from 'recharts'
import '../../styles/quote/id.css'

export default function Quote() {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState([])

  function getRange(data, key, margin_scale_min=0.2, margin_scale_max=0.2) {
    const filtered = data.map(item => item[key])
    const temp = [Math.min(...filtered), Math.max(...filtered)]
    const range = temp[1] - temp[0]
    return [temp[0] - range*margin_scale_min, temp[1] + range*margin_scale_max]
  }

  function round(number, float_digits=2) {
    return Math.round(number*Math.pow(10, float_digits))/Math.pow(10, float_digits)
  }

  useEffect(()=>{
    if(id){
      fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}${id}/20`) 
      .then(response => response.json())
      .then(data => {
        if(data.stocks){
          const formatted = data.stocks.map(item=>{
            return {
              ticker: item.ticker,
              adj_close: item.adj_close,
              volume: item.volume,
              date: item.date.substring(0, 10),
              change: round(item.change, 4),
              open: round(item.open),
              high: round(item.high),
              low: round(item.low),
              close: round(item.close), 
              millisec: new Date(item.date).getTime()
            } 
          }) 
          const dates = formatted.map(item=>item.date)
          const filtered = formatted.filter((item, index)=>{
            return dates.indexOf(item.date) === index
          })
          setData(filtered)
        }
      })
    }
  }, [id])

  return (
    <div className="quote-container">
      {id && data.length > 0 &&
        <div>
          <div className="quote-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[...data].reverse()}>
                <XAxis 
                  dataKey="millisec" 
                  type="number" 
                  domain={getRange(data, "millisec", 0.01, 0.01)} 
                  hide/>
                <YAxis type="number" domain={getRange(data, "close", 0.1, 0.4)} hide />
                <ReferenceLine y={data[data.length-1].close} stroke="gray" strokeDasharray="3 3" />
                <Tooltip 
                  separator="" 
                  formatter={(value, name, props)=>[`$${value}`, ""]}
                  labelFormatter={milli=>new Date(milli).toLocaleDateString()}
                  contentStyle={{
                    border: "none", 
                    "backgroundColor":"rgba(0, 0, 0, 0)"
                  }}
                  itemStyle={{fontSize: "1.7rem"}}
                  position={{x: 0, y: 0}}/>
                <Line type="monotone" dataKey="close" stroke="red" />
              </LineChart> 
            </ResponsiveContainer>
          </div>
          <div className="quote-header">
            <span>{id}</span>
            <span className="quote-price">${data[0].close}</span>
          </div>
          <Table header={["Date", "Change", "Open", "High", "Low", "Close"]}>
            {data.map((item, index)=>
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.change}</td>
                <td>{item.open}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.close}</td>
              </tr>
            )}
          </Table>
        </div>
      }
    </div>
  )
}