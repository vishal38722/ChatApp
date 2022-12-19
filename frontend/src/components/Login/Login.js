import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa'
import './Login.css'

function Login() {

  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // setEmail(...email, [e.target.name], e.target.value);
    // setPassword(...password, [e.target.name], e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API Call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      localStorage.setItem('token', json.authToken)
      navigate("/")
    }
    else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div style={{ backgroundColor: '#32509c' }}>
      <div className='container'>
        <div className='card p-4'>
          <h2 className='text-center pt-2 pb-4'>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" className='form-control' onChange={handleChange} required name='email' id='email' />
            </div>
            <div className='mb-3'>
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" className='form-control' onChange={handleChange} required name='password' id='password' />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>

            <button type="submit" className='btn btn-primary btn-block mt-2'>Login</button>
            <div className='d-flex justify-content-center mt-4'>---------------------------- OR ------------------------------</div>
            <div className='d-flex justify-content-around'>
              <div ><FcGoogle className='icon' /></div>
              <div ><FaGithub className='icon' /></div>
              <div ><FaFacebook className='icon text-primary' /></div>
            </div>
            <p className='d-flex justify-content-end mt-4'>Don't have account? <Link style={{ textDecoration: 'none' }} to='/register'>signup</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;