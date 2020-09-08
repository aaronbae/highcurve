import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import io from "socket.io-client";
import '../styles/searchbar.css'

export default function SearchBar() {
  const [possibles, setPossibles] = useState([])
  const [socket, setSocket] = useState(null)
  const dropdown = useRef(null)

  useEffect(()=>{
    const socket = io(process.env.NEXT_PUBLIC_WSS)
    setSocket(socket)
    socket.on('ticker_search', tickers=>{setPossibles(tickers)})
    return ()=>{
      socket.disconnect()
    }
  }, [])
  useEffect(()=>{
    if(possibles.length===0){
      dropdown.current.classList.add("hidden")  
    } else {
      dropdown.current.classList.remove("hidden")
    }
  },[possibles])

  const remote_trigger =(event) =>{
    event.target.click()
  }
  const update_list = (event) => {
    if(socket){
      socket.emit("ticker_search", event.target.value)
    }
  }
  const handle_blur = (event) => {
    dropdown.current.classList.add("hidden")
  }

  return (
    <div className="search-container">
      <input className="searchbar" onBlur={handle_blur} type="text" onKeyUp={update_list}/>
      <div className="searchbar-dropdown-wrapper">
        <div ref={dropdown} className="searchbar-dropdown hidden">
          {possibles.map((item, index)=>
            <div key={index} onMouseDown={remote_trigger}>
              <Link href="/quote/[id]" as={`/quote/${item.ticker}`}>
                <a>{item.ticker}</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}