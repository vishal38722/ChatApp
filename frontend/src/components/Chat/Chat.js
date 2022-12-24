import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import ChatContent from './ChatContent/ChatContent';
import Welcome from './ChatContent/Welcome/Welcome';
import Contact from './Contact/Contact';
import axios from 'axios';
import './Chat.css'

function Chat() {
  const navigate = useNavigate();
  const [currChatUser, setCurrChatUser] = useState(undefined);
  const [contacts, setContacts] = useState([])
  const [user, setUser] = useState({})
  
  useEffect(() => {
      if (localStorage.getItem('token')) {
        navigate('./')
      }
      else{
        navigate('./login')
      }
  }, [])

  
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.post('/api/auth/getallusers',{},
          {
            headers: { 
              "Content-Type": "application/json", 
              // authorization: `Bearer ${localStorage.getItem('token')}` },
              "auth-token": localStorage.getItem('token') },
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
        console.log("Internal Server Error")
        console.log(error);
      }
    }
    fetch();
  }, [])


  return (
    <div className='chat-container'>
        <div className='cntct'><Contact contacts={contacts} user={user} changeCurrChat={setCurrChatUser}/></div>
        <div className='chat-cntnt'>{currChatUser===undefined ? <Welcome user={user}/> : <ChatContent currChatUser={currChatUser} user={user} />}</div>
    </div>
  )
}

export default Chat;
