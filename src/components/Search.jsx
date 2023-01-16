import React from 'react'
import Rahul from '../img/Rahul.jfif'
const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find user' />
      </div>
      <div className="userChat">
        <img src={Rahul} alt="" />
        <div className="userChatInfo">
          <span>Rahul</span>
        </div>
      </div>
    </div>
  )
}

export default Search