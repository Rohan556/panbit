import React from 'react'
import '../../styles/header.css'

function Header(props) {
  return (
    <div className='header-container'>
        <p className='navpage'>{props.navPage}</p>
        <div className='header-content'>
            <img src={props.userDetail.profilepicture} className="header-image"/>
            <span className='header-name'>{props.userDetail.name}</span>
        </div>
    </div>
  )
}

export default Header