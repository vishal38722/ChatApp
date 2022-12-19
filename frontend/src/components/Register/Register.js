import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {

    let navigate = useNavigate ();

    const [credentials, setCredentials] = useState({name:"",email:"", password:"", cpassword:""});
    
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            navigate("/login")   
        }
    }

  return (
    <div style={{backgroundColor:'#32509c'}}>
    <div className='container'>
      <div className='card p-4'>
                <h2 className='text-center pt-2 pb-4'>Create a new account</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" className='form-control' onChange={handleChange} required name='name' id='name'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' onChange={handleChange} required name='email' id='email'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' onChange={handleChange} required minLength={5} name='password' id='password'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="cpassword" className='form-label'>Confirm Password</label>
                        <input type="password" className='form-control' onChange={handleChange} required minLength={5} name='cpassword' id='cpassword'/>
                    </div>

                    <button type="submit" className='btn btn-primary btn-block mt-2'>Signup</button>
                    <p className='d-flex justify-content-end mt-4'>Already have an account? <Link style={{textDecoration:'none'}} to='/login'>login</Link></p>
                </form>
            </div>
    </div>
    </div>
  )
}

export default Register;