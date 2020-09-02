import { useEffect, useState, useRef } from 'react';
import socketIOClient from "socket.io-client";
import '../styles/searchbar.css'

export default function SearchBar() {
  const [possibles, setPossibles] = useState([])
  const dropdown = useRef(null)

  useEffect(()=>{
    //const socket = socketIOClient(process.env.NEXT_PUBLIC_WSS)
  }, [])


  const handle_focus = (event)=>{
    console.log("focused")
    dropdown.current.classList.remove("hidden")
  }
  const handle_blur = (event)=>{
    console.log("blurred")
    dropdown.current.classList.add("hidden")
    console.log(dropdown.current.classList)
  }

  return (
    <div className="search-container">
      <input className="searchbar" type="text" onClick={handle_focus} onBlur={handle_blur}/>
      <div className="searchbar-dropdown-wrapper">
        <div ref={dropdown} className="searchbar-dropdown hidden">
          {possibles.map((item, index)=>
            <span>shit</span>
          )}
        </div>
      </div>
    </div>
  )
}