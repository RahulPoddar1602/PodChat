import React from 'react'
import Rahul from '../img/Rahul.jfif'
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Rahul} alt=""/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Rahul} alt="" />
      </div>

    </div>
  )
}

export default Message