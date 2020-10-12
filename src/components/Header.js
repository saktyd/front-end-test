import React from 'react'
import logo from '../assets/image/y-logo-white.png'

function Header() {
    return (
        <div className="header">
            <img  className="header__logo" src={logo} alt=""/>
            <div className="header__content">
                <p className="header__content--name">​Hello! I’m Sakti Dewantoro</p>
                <h2>Consult, Design, and Develop Websites</h2>
                <p className="header__content--info">Have something great in mind? Feel free to contact me. <br/>
                I'll help you to make it happen.</p>
                <button className="button__transparent--blue"><h5>LET'S MAKE CONTACT</h5></button>
            </div>
        </div>
    )
}

export default Header
