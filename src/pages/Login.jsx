import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer" >
        <div className="formWrapper">
            <span className="logo">PodChat</span>
            <span className="title">Login</span>
            <form >
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password Please' />
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login