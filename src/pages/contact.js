import Banner from '../components/banner';
import { useState, useRef} from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [message_length, setMsgLength] = useState(0)
  const [success, setSuccess] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const resize = (event) => {
    setMsgLength(event.target.value.length)
    event.target.style.height = event.target.scrollHeight+2 + 'px';
  }
  const send = (event) => {
    const email_validation =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const n = name.current.value
    const e = email.current.value
    const m = message.current.value
    let should_send = true;
    if(n.length === 0){
      name.current.classList.add("error")
      should_send = false
    } else {
      name.current.classList.remove("error")
    }
    if(e.length === 0 || !email_validation.test(e)){
      email.current.classList.add("error")
      should_send = false
    } else {
      email.current.classList.remove("error")
    }
    if(m.length === 0){
      message.current.classList.add("error")
      should_send = false
    } else {
      message.current.classList.remove("error")
    }
    if(should_send) {
      name.current.value = ""
      email.current.value = ""
      message.current.value = ""
    }
    event.preventDefault();
  }
  return (
    <div className="contact-container">
      <Banner height="30vh">
        CONTACT
      </Banner>
      <div className="contact-main">
        <p className="contact-title">
          Contact
          {success && 
            <span className="contact-success">Successfully Sent!</span>
          }
        </p>
        <p className="contact-explanation">
          If you have any suggestions or experience any difficulties,
          feel free to reach out to me through this form. Any feedback
          is appreciated and I wil make sure to get back to you as
          soon as I can!
        </p>
        <form className="contact-form">
          <input ref={name} type="text" placeholder="name" />
          <input ref={email} type="text" placeholder="email" />
          <textarea ref={message} placeholder="message" maxLength="500" onChange={resize}/>
          <p>{message_length}/500</p>
          <button onClick={send}>Submit</button>
        </form>
      </div>
    </div>
  )
}