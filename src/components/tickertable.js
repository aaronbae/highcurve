import { useEffect, useState } from 'react'
import '../styles/tickertable.css'

export default function TickerTable() {
  const [data, setData] = useState([])

  useEffect(()=>{
    const ticker = "TSLA"
    fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}${ticker}/20`) 
      .then(response => response.json())
      .then(data => {
        let temp = []
        Object.keys(data.stocks.history).forEach(key=>{
          const shit = data.stocks.history[key]
          shit.ticker = ticker
          temp.push(shit)
        })
        setData(temp)    
      })
  }, [])
  
  return (
    <table className="ticker-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index)=>
          <tr key={index}>
            <td>{item.ticker}</td>
            <td>{item.date.substring(0, 10)}</td>
            <td>{item.open}</td>
            <td>{item.high}</td>
            <td>{item.low}</td>
            <td>{item.close}</td>
          </tr>
        )}
      </tbody>
    </table>
    
  )
}