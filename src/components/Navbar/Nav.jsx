import React from 'react'
import "./nav.scss"

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="/svgs/logo.png"alt="" />
      </div>
      <div className="icons">
        <div className="searchinputContainer">
          <input type="text" placeholder='search' />
          <img src="/svgs/search.svg" alt="" className="icon" />

        </div>
        <img src="/svgs/apps.svg" alt="" className="icon" />
        <img src="/svgs/setting.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/svgs/notification.svg" alt="" />
          <span>9</span>
        </div>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <span>Fahim</span>
        </div>
      </div>
    </div>
  )
}

export default Nav