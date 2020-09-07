import { useEffect, useState } from 'react'
import '../styles/tickertable.css'

export default function TickerTable(params) {
  const [data, setData] = useState([])

  function round(number, float_digits=2) {
    return Math.round(number*Math.pow(10, float_digits))/Math.pow(10, float_digits)
  }

  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}${params.ticker}/20`) 
      .then(response => response.json())
      .then(data => setData(data.stocks))
  }, [])
  
  return (
    <table className="ticker-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Date</th>
          <th>Change</th>
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
            <td>{round(item.change, 4)}</td>
            <td>{round(item.open)}</td>
            <td>{round(item.high)}</td>
            <td>{round(item.low)}</td>
            <td>{round(item.close)}</td>
          </tr>
        )}
      </tbody>
    </table>
    
  )
}