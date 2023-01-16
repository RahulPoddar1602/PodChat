import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className="formContainer" >
        <div className="formWrapper">
            <span className="logo">PodChat</span>
            <span className="title">Register</span>
            <form >
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password Please' />
                <input style={{display:"none"}} type="file" id="file"  />
                <div style={{boxShadow: "0.3rem 0.3rem rgb(26,26,26)" ,background:"aquamarine"}}>
                <label htmlFor="file">
                <img src={Add}  alt="" />
                <span>Add an avatar</span>
                </label>
                </div>
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register