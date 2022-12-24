import React, { useState, useEffect, useRef } from 'react'
import dp from '../../../assets/dp.png'
import { MdSend } from 'react-icons/md';
import { BsEmojiSmileFill } from "react-icons/bs";
import Picker from "emoji-picker-react";
import Welcome from './Welcome/Welcome';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import './ChatContent.css';

function ChatContent({ currChatUser, user, socket }) {

  const [message, setMessage] = useState([])
  const [chats, setChats] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  // const handleChange = (e) => {
  //   setMessage({ ...message, [e.target.name]: e.target.value });
  // }

  useEffect(() => {
    async function fetch() {
      try {
        if(currChatUser){
        // const user = await JSON.parse(localStorage.getItem('token'));
        const response = await axios.post("http://localhost:5000/api/message/getMessage", {
          from: user._id,
          to: currChatUser._id
        });
        setChats(response.data);
      }
      }
      catch (error) {
        console.log("Internal Server Error")
        console.log(error);
      }
    }
    fetch();
  }, [currChatUser])

  const sendMessage = async () => {
    // const user = await JSON.parse(localStorage.getItem('token'));
    // API Call
    // const response = await fetch("http://localhost:5000/api/message/addMessage", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     message: message,
    //     from: user._id,
    //     to: currChatUser._id
    //   });

    await axios.post("http://localhost:5000/api/message/addMessage", {
      message: message,
      from: user._id,
      to: currChatUser._id,
    });

    socket.current.emit("send-msg", {
      message: message,
      from: user._id,
      to: currChatUser._id,
    });

    const msgs = [...message];
    msgs.push({ forUser: false, message: message });
    setMessage(msgs);
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ forUser: true, message: msg });
      });
    }
  }, []);

  // useEffect(() => {
  //   arrivalMessage && setMessage((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.length > 0) {
      sendMessage(message)
      setMessage("");
    }
  }

  return (
    <div className='chat-content'>

      <div className='chat-header'>
        <img src={dp} alt='img'></img>
        <h1>{currChatUser.name}</h1>
      </div>

      <div className='bg-success chat'>
        {chats.map((chat) => {
          return (
            <div key={uuidv4()} className={`message ${chat.forUser ? "recieved" : "sent"}`}>{chat.message}</div>
          )
        })}
      </div>

      <div className='bg-info chat-input-container'>
        <form onSubmit={handleSubmit}>
          <div className='chat-input'>
            {/* <BsEmojiSmileFill className='emoji' onClick={emojiPickerhideShow} /> */}
            {/* {showEmojiPicker && <Picker onEmojiClick={emojiClick} />} */}
            <input type='text' className='input' onChange={(e) => setMessage(e.target.value)} value={message}></input>
            <MdSend className='icons' />

          </div>
        </form>
      </div>

    </div>
  )
}

export default ChatContent;