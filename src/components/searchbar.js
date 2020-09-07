import { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import '../styles/searchbar.css'

export default function SearchBar() {
  const [possibles, setPossibles] = useState([])
  const [socket, setSocket] = useState(null)
  const dropdown = useRef(null)

  useEffect(()=>{
    //const socket = io(process.env.NEXT_PUBLIC_WSS)
    //setSocket(socket)
    //return ()=>{
    //  socket.disconnect()
    //}
  }, [])


  const handle_focus = (event)=>{
    console.log("focused")
    if(socket){
      console.log("emitting...")
      socket.emit("something", 127)
      console.log("done...")
    }
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