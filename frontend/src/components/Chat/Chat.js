import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import ChatContent from './ChatContent/ChatContent';
import Contact from './Contact/Contact';
import './Chat.css'
import axios from 'axios';

function Chat() {
  const navigate = useNavigate();
  // const [contacts, setContacts] = useState("abcd");
  const [currentChatUser, setcurrentChatUser] = useState({})
  useEffect(() => {
      if (localStorage.getItem('token')) {
        navigate('./')
      }
      else{
        navigate('./login')
      }
  }, [])
  
  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const response = await axios.post('/api/auth/getallusers',
  //         {
  //           headers: { 
  //             "Content-Type": "application/json", 
  //             "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5NGFjMWU0NjZiMDQ3Y2NiODBhNDExIiwibmFtZSI6IlZpc2hhbCBTaGFybWEifSwiaWF0IjoxNjcxMDQ2NDQxfQ.wwaMLnxdjP0FGuHRrcNSOiRGDcRDcHmFv-KdGAKek6E' },
  //           // withCredentials: true,
  //         }
  //       )
  //       console.log(response);
  //       setContacts(response.data.otherUsers);
  //       console.log(contacts)
  //       // setUser(response.data.user);
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetch();
  // }, [])


  return (
    <div className='chat-container'>
        <div className='cntct'><Contact /></div>
        <div className='chat-cntnt'><ChatContent currentChatUser={currentChatUser}/></div>
    </div>
  )
}

export default Chat;
