import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'



const Nav = () =>{
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo"/>
                <p className="flash-logo-text">FlashType</p>
            </div>

            <div className="nav-right">
            <a 
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
            href="https://www.linkedin.com/in/ekansh21/">
                LinkedIn</a>    
            </div>
        </div>
    )
}

export default Nav;