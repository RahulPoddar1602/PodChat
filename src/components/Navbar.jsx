import React from 'react'
import IMG from '../img/Rahul.jfif'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">PodChat</span>
      <div className="user">
        <img src={IMG} alt="" />
        <span>Rahul</span>
        <button><span>LogOut</span></button>
      </div>
    </div>
  )
}

export default Navbar