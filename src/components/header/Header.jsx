import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import Me from '../../assets/me.png'
import MySocials from './MySocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello,I am</h5>
        <h1>Anil Gulati</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CallToAction/>
        <MySocials/>
        <div className="ME">
          <img src={Me} alt="my portfolio "/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header