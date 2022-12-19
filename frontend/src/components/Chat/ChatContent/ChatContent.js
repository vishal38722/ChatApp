import React, { useState } from 'react'
import './ChatContent.css'
import dp from '../../../assets/dp.png'
import { MdSend } from 'react-icons/md';
import { BsEmojiSmileFill } from "react-icons/bs";
import Picker from "emoji-picker-react";
import ChatInput from './ChatInput/ChatInput'

function ChatContent(currentChat) {
  const chats = [
    {
      forUser: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      forUser: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas.",
    },
    {
      forUser: true,
      content:
        "Lorem ipsum dolor sit amet",
    },
    {
      forUser: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      forUser: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    },
    {
      forUser: false,
      content:
        "Lorem ipsum dolor sit amet.",
    },
    {
      forUser: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      forUser: false,
      content:
        "Lorem ipsum dolor sit amet.",
    },
  ];

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length > 0) {
      setMessage("");
    }
  }

  return (
    <div className='chat-content'>

      <div className='chat-header'>
        <img src={dp} alt='img'></img>
        <h1>{currentChat.name}</h1>
      </div>

      <div className='bg-success chat'>
        {chats.map((chat) => {
          return (
            <div className={`message ${chat.forUser ? "recieved" : "sent"}`}>{chat.content}</div>
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