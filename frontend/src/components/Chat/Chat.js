import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import ChatContent from './ChatContent/ChatContent';
import Contact from './Contact/Contact';
import './Chat.css'
import axios from 'axios';

function Chat() {
  const navigate = useNavigate();
  
  useEffect(() => {
      if (localStorage.getItem('token')) {
        navigate('./')
      }
      else{
        navigate('./login')
      }
  }, [])

  const [contacts, setContacts] = useState([])
  const [user, setUser] = useState({})
  
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.post('/api/auth/getallusers',{},
          {
            headers: { 
              "Content-Type": "application/json", 
              // authorization: `Bearer ${localStorage.getItem('token')}` },
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMDllNDUzOGY0Nzc3Njk2MTRhM2I4IiwibmFtZSI6Imt1bGRlZXAifSwiaWF0IjoxNjcxNDcwNzI0fQ.47UZ1Eys_ZkgaahsNazQxLHJLgK9Dnv88LwXbPXQKTc" },
            withCredentials: true,
          }
        )
        console.log("Hello")
        // console.log(response);
        setContacts(response.data.otherUsers);
        setUser(response.data.user)
        console.log(contacts)
      }
      catch (error) {
        console.log("An Error occurred")
        console.log(error);
      }
    }
    fetch();
  }, [])


  return (
    <div className='chat-container'>
        <div className='cntct'><Contact contacts={contacts} user={user}/></div>
        <div className='chat-cntnt'><ChatContent /></div>
    </div>
  )
}

export default Chat;
