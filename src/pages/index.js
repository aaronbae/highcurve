import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import Table from '../components/table'
import '../styles/index.css'

export default function Home() {
  const router = useRouter();
  const [date, setDate] = useState(moment().subtract(1, 'days').startOf("day"))
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  
  useEffect(()=>{
    const rounded_milli = date.toDate().getTime()
    fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}topgainers/${rounded_milli}/20`) 
    .then(response => response.json())
    .then(gainers => {
      if(gainers.stocks){
        setGainers(gainers.stocks.map(x=>{
          return {...x, 
            close: "$" + Math.round(100*x.close)/100, 
            change: Math.round(10000*x.change)/100 + "%"}
        }))
      }
    })
    
    fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}toplosers/${rounded_milli}/20`) 
    .then(response => response.json())
    .then(losers => {
      if(losers.stocks){
        setLosers(losers.stocks.map(x=>{
          return {...x, 
            close: "$" + Math.round(100*x.close)/100, 
            change: Math.round(10000*x.change)/100 + "%"}
        }))
      }
    })
  }, [])

  const handle_click = (event) => {
    const ticker = event.target.parentNode.getAttribute("data")
    router.push("/quote/[id]", `/quote/${ticker}`)
  }

  return (
    <div id="home">
      <div className="articles-container card">
        <p className="date-header">{date.format("MMMM Do")}</p>
      </div>
      <div className="gainers-and-losers-container">
        <div className="topgainers-container">
          <Table title="Top Gainers" header={["Symbol", "Price", "Change"]}>
            {gainers.length > 0 && gainers.map((item, index)=>
              <tr key={index} className="index-table-row" onClick={handle_click} data={item.ticker}>
                <td>{item.ticker}</td>
                <td>{item.close}</td>
                <td>{item.change}</td>
              </tr>
            )}
          </Table>
        </div>
        <div className="toplosers-container">
          <Table title="Top Losers" header={["Symbol", "Price", "Change"]}>
            {losers.length > 0 && losers.map((item, index)=>
              <tr key={index} className="index-table-row" onClick={handle_click} data={item.ticker}>
                <td>{item.ticker}</td>
                <td>{item.close}</td>
                <td>{item.change}</td>
              </tr>
            )}
          </Table>
        </div>
      </div>
    </div>
  )
}
