import { useEffect, useState } from 'react'
import moment from 'moment'
import UnderConstruction from '../components/underconstruction'
import Table from '../components/table'
import '../styles/index.css'

export default function Home() {
  const [date, setDate] = useState(moment().startOf("day"))
  const [data, setData] = useState([]);
  if(process.env.NODE_ENV === "production") {
    return <UnderConstruction />
  }
  
  useEffect(()=>{
    const rounded_milli = date.toDate().getTime()
    fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}topmovers/${rounded_milli}/20`) 
    .then(response => response.json())
    .then(data => {
      if(data.stocks){
        setData(data.stocks.map(x=>{
          return {...x, 
            close: "$" + Math.round(100*x.close)/100, 
            change: Math.round(10000*x.change)/100 + "%"}
        }))
      }
    })
  }, [])

  return (
    <div id="home">
      <p className="date-header">{date.format("MMMM Do")}</p>
      <div className="topmovers-container">
        <Table title="Top Movers" header={["Symbol", "Price", "Change"]}>
          {data.length > 0 && data.map((item, index)=>
            <tr key={index}>
              <td>{item.ticker}</td>
              <td>{item.close}</td>
              <td>{item.change}</td>
            </tr>
          )}
        </Table>
      </div>
    </div>
  )
}
