import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import Me from '../../assets/me.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'
import MySocials from './MySocials'
<<<<<<< HEAD
import Typewriter from 'typewriter-effect';
=======
>>>>>>> 5b5b5291f7f13f334854b3f7444c22a8c08cf2ba
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='kindOfGray' >Hello,I am</h5>
<<<<<<< HEAD
        <h1 style={{color:'black'}}>Anil Gulati</h1>
      
<Typewriter 

options={
  {
    autoStart:true,
    loop:true,
    wrapperClassName:'primaryColor',
    cursorClassName:'primaryColor',
    
  }
}
  onInit={(typewriter) => {
    typewriter.typeString('I am a Full Stack Developer! ')
    .changeDeleteSpeed(10)
    .pauseFor(200)
    .deleteChars(24)
    typewriter.typeString('an Android App Developer! ')
    .pauseFor(200)
    .deleteAll()
    typewriter.typeString('2 Years of Experience! ')
    .pauseFor(200)
    .deleteAll()
    typewriter.typeString('Always learning new things! ')
    .pauseFor(200)
    .deleteAll()
    .start();
  }}
/>
=======
        <h1 className='kindOfGray' >Anil Gulati</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
>>>>>>> 5b5b5291f7f13f334854b3f7444c22a8c08cf2ba
        <CallToAction/>
        <MySocials/>
        <div className="ME">
          <img src={Me} alt="my portfolio "/>
        </div>
        <a href='#contact' className='scroll__down'>
          <>
          Scroll Down
          <AiOutlineArrowRight/>
          </>
        </a>
      </div>
    </header>
  )
}

export default Header