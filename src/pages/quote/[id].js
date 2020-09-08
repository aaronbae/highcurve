import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Table from '../../components/table'
import '../../styles/quote/id.css'

export default function Quote() {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState([])

  function round(number, float_digits=2) {
    return Math.round(number*Math.pow(10, float_digits))/Math.pow(10, float_digits)
  }

  useEffect(()=>{
    if(id){
      fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}${id}/20`) 
      .then(response => response.json())
      .then(data => {
        if(data.stocks){
          setData(data.stocks)
        }
      })
    }
  }, [id])

  return (
    <div className="quote-container">
      {id &&
        <div>        
          <p className="quote-title">{id}</p>
          <Table header={["Date", "Change", "Open", "High", "Low", "Close"]}>
            {data.map((item, index)=>
              <tr key={index}>
                <td>{item.date.substring(0, 10)}</td>
                <td>{round(item.change, 4)}</td>
                <td>{round(item.open)}</td>
                <td>{round(item.high)}</td>
                <td>{round(item.low)}</td>
                <td>{round(item.close)}</td>
              </tr>
            )}
          </Table>
        </div>
      }
    </div>
  )
}