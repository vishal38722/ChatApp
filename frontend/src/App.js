import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Chat/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
