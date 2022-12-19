import React, { useEffect, useState } from 'react'
import dp from '../../../assets/dp.png'
import axios from 'axios';
import './Contact.css';
// import { contacts } from '../../../data';
function Contact() {
  const [contacts, setContacts] = useState("abcd");
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/getallusers',
          {
            headers: { 
              "Content-Type": "application/json", 
              "auth-token": `Bearer ${localStorage.getItem('token')}` },
            // withCredentials: true,
          }
        )
        console.log(response);
        // setContacts(response.data.otherUsers);
        console.log(contacts)
        // setUser(response.data.user);
      }
      catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])


  return (
    <>
    {  
    // <div className='contact-container'>

    //     <div className='header bg-info'>
    //       <div className='image'>
    //         <img src={dp} alt='img'></img>
    //       </div>
    //       <div className='text'>
    //         <h2>ChatApp</h2>
    //       </div>
    //       {/* <h1>{user.name}</h1> */}
    //     </div>
        
    //     <div className='contacts-container'>
    //       <div className='bg-success search-container'>
    //         <input type='text' className='search'></input>
    //       </div>

    //       <div className='bg-info contacts'>
    //         {/* <input type="button" onClick={onClick} value="Add User" /> */}
    //         {
    //           contacts.map((contact, index) => {
    //             return (
    //              /* <div
    //                 key={contact._id}
    //                 className="contact"
    //               // onClick={() => changeCurrentChat(index, contact)}
    //               >
    //                 <img src={dp} alt='img'></img>
    //                 {<h1>{contact.name}</h1>}
    //               </div>
    //               */
    //               <div className='contact'>
    //                 <div className='contact-image'
    //                 style={{
    //                   display:"flex",
    //                   alignItems:"center"
    //                 }}
    //                 > <img src={dp} alt='img' 
    //                 style={{
    //                   height:"3rem",
    //                   width: "3rem",
    //                   borderRadius:"50%",
                      
    //                   objectFit:"contain"
    //                 }}
    //                 /></div>
    //                 <div className='contact-name' style={{
    //                   display:"flex",
    //                   justifyContent:"center",
    //                   alignItems:"center",
    //                   paddingLeft:"0.7rem",
    //                   fontSize:"1.1rem",
    //                   fontWeight:"bold"

    //                 }}>
    //                   {
    //                     contact.name
    //                   }
    //                 </div>
    //               </div>

    //             )
    //           })

    //         }

    //       </div>
    //     </div>
    //   </div>
       }
       <div >HIII</div>
    </>

  )
}

export default Contact;

