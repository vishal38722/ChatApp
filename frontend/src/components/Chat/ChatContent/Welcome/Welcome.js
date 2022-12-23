import React from 'react'
import './Welcome.css'

function Welcome({ user }) {
    return (
        <div className='welcome'>
            <div>
                <h1>Welcome</h1>
                <h4>Hi {user.name}!</h4>
            </div>
        </div>
    )
}

export default Welcome
