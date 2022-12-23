import React, { useState, useEffect } from 'react'
import dp from '../../../assets/dp.png'
import { MdSend } from 'react-icons/md';
import { BsEmojiSmileFill } from "react-icons/bs";
import Picker from "emoji-picker-react";
import Welcome from './Welcome/Welcome';
import axios from 'axios';
import './ChatContent.css';

function ChatContent({currChatUser, user}) {
  // const chats = [
  //   {
  //     forUser: true,
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     forUser: false,
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas.",
  //   },
  //   {
  //     forUser: true,
  //     content:
  //       "Lorem ipsum dolor sit amet",
  //   },
  //   {
  //     forUser: false,
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     forUser: true,
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
  //   },
  //   {
  //     forUser: false,
  //     content:
  //       "Lorem ipsum dolor sit amet.",
  //   },
  //   {
  //     forUser: true,
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     forUser: false,
  //     content:
  //       "Lorem ipsum dolor sit amet.",
  //   },
  // ];

  const [message, setMessage] = useState([]);
  const [chats, setChats] = useState([]);

  // const handleChange = (e) => {
  //   setMessage({ ...message, [e.target.name]: e.target.value });
  // }

  useEffect(async () => {
    const response = await axios.post("http://localhost:5000/api/message/getMessage", {
      from : user._id,
      to : currChatUser._id
    });
    setChats(response.data);
  }, [currChatUser])   

  const sendMessage = async () => {
    // const currentUser = await JSON.parse(
    //   localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    // );
    
      // API Call
      const response = await fetch("http://localhost:5000/api/message/addMessage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          message: message, 
          from: user._id, 
          to: currChatUser._id })
      });

      console.log(response)

      // await axios.post(sendMessageRoute, {
      //   from: data._id,
      //   to: currChatUser._id,
      //   message: msg,
      // });
  }

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
            <div className={`message ${chat.forUser ? "recieved" : "sent"}`}>{chat.message}</div>
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