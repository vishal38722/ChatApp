import React, { useEffect, useState } from 'react'
import dp from '../../../assets/dp.png'
import axios from 'axios';
import './Contact.css';
// import { contacts } from '../../../data';
function Contact({contacts, user, setCurrChatUser}) {

  const [currentChat, setCurrentChat] = useState(undefined)

  function changeUser (contact, index){
    // console.log(contact);
    setCurrentChat(index);
    setCurrChatUser(contact);
  }

  return (
    <>
    {  
    <div className='contact-container'>

        <div className='header bg-info'>
          <div className='image'>
            <img src={dp} alt='img'></img>
          </div>
          <div className='text'>
            <h2>{user.name}</h2>
          </div>
          {/* <h1>{user.name}</h1> */}
        </div>
        
        <div className='contacts-container'>
          <div className='bg-success search-container'>
            <input type='text' className='search'></input>
          </div>

          <div className='bg-info contacts'>
            {
              contacts.map((contact, index) => {
                return (
                  <div className={`contact ${index===currentChat? "selected" : ""}`} onClick={() => changeUser(contact, index)}>
                    <div className='contact-image'
                    key={index}
                    style={{
                      display:"flex",
                      alignItems:"center"
                    }}
                    > <img src={dp} alt='img' 
                    style={{
                      height:"3rem",
                      width: "3rem",
                      borderRadius:"50%",
                      
                      objectFit:"contain"
                    }}
                    /></div>
                    <div className='contact-name' style={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      paddingLeft:"0.7rem",
                      fontSize:"1.1rem",
                      fontWeight:"bold"
                    }}>
                      { contact.name }
                    </div>
                  </div>

                )
              })

            }

          </div>
        </div>
      </div>
       }
    </>

  )
}

export default Contact;

