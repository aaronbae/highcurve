import { useEffect, useState } from 'react'
import UnderConstruction from '../components/underconstruction'
import '../styles/index.css'

export default function Home() {
  if(process.env.NODE_ENV === "production") {
    return <UnderConstruction />
  }
  function current() {
    const days_in_milli = 1000 * 60 * 60 * 24
    return new Date(Math.floor(Date.now() / days_in_milli) * days_in_milli)
  }
  
  useEffect(()=>{
    const rounded_date = current()
    // fetch(`${process.env.NEXT_PUBLIC_STOCKS_URL}topmovers/${rounded_date}/20`) 
    // .then(response => response.json())
    // .then(data => {
    //   if(data.stocks){
    //     setData(filtered)
    //   }
    // })
  }, [])

  return (
    <div id="home">
      Nothing to show
    </div>
  )
}
