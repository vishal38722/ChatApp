import React, { useState } from 'react'
import { MdSend } from 'react-icons/md';
import { BsEmojiSmileFill } from "react-icons/bs";
import Picker from "emoji-picker-react";
import './ChatInput.css'

function ChatInput() {

  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length > 0) {
      setMessage("");
    }
  }

  const emojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  }

  const emojiClick = () => {
    console.log("Emoji Clicked");
  }

  return (
    <div className='chat-input'>
      <form onSubmit={handleSubmit}>

        {/* <BsEmojiSmileFill className='emoji' onClick={emojiPickerhideShow} /> */}
        {/* {showEmojiPicker && <Picker onEmojiClick={emojiClick} />} */}

        <input type='text' className='input' onChange={(e) => setMessage(e.target.value)} value={message}></input>

        {/* <MdSend className='icons' /> */}

      </form>
    </div>
  )
}

export default ChatInput
