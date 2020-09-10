import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import io from "socket.io-client";
import '../styles/searchbar.css'

export default function SearchBar() {
  const [possibles, setPossibles] = useState([])
  const [socket, setSocket] = useState(null)
  const dropdown = useRef(null)
  const searchbar = useRef(null)

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
    if(event.target.nodeName==="DIV"){
      event.target.children[0].click()
    } else {
      event.target.click()
    }
    searchbar.current.value = ""
  }
  const update_list = (event) => {
    if(event.key == "Enter" && possibles.length > 0){
      dropdown.current.children[0].children[0].click()
      searchbar.current.value = ""
    }
    if(socket){
      socket.emit("ticker_search", event.target.value)
    }
  }
  const handle_blur = (event) => {
    dropdown.current.classList.add("hidden")
  }

  return (
    <div className="search-container">
      <div className="search-inner-container">
        <input 
          ref={searchbar} 
          className="searchbar" 
          type="text"
          placeholder="Search" 
          onBlur={handle_blur} 
          onKeyUp={update_list}/>
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