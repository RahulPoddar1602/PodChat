import React from 'react'
import Rahul from '../img/Rahul.jfif'
const Chats = () => {
  return (
    <div className="chats">

    <div className="userChat">
        <img src={Rahul} alt="" />
        <div className="userChatInfo">
          <span>Rahul</span>
          <p>Hello</p>
        </div>
    </div>  
    <div className="userChat">
        <img src={Rahul} alt="" />
        <div className="userChatInfo">
          <span>Rahul</span>
          <p>Hello</p>
        </div>
    </div>  
    <div className="userChat">
        <img src={Rahul} alt="" />
        <div className="userChatInfo">
          <span>Rahul</span>
          <p>Hello</p>
        </div>
    </div>  
    </div>
    )
}

export default Chats