import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import LogoMobile from './images/logo-mobile.png'
import LogoDesktop from './images/logo.png'

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <Link to="/">
          <img src={LogoMobile} alt="brand logo" className="brand-logo mobile" />
          <img src={LogoDesktop} alt="brand logo" className="brand-logo desktop" />
        </Link>
        <nav className="nav">
          <div className='contact-numbers'>
            <a href="tel:01457862181">T: 01457 862 181</a>
            <a href="tel:01457862744">F: 01457 862 744</a>
            <a href="tel:07816842703">M: 07816 842 703</a>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/help">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
