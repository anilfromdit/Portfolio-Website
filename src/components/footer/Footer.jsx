import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Anil Gulati</a>
 <ul className='permalinks'>
<li><a href='#'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#experience'>Skills</a></li>
<li><a href='#portfolio'>Projects</a></li>
<li><a href='#contact'>Contact</a></li>
 </ul>

<div className="footer__socials">
<a href='https://www.github.com/anilfromdit' target="_blank" rel="noreferrer"> <BsGithub/> </a>
<a href='https://www.linkedin.com/in/anilfromdit/' target="_blank" rel="noreferrer"><BsLinkedin/> </a>
<a href='https://instagram.com/anilfromdit' target="_blank" rel="noreferrer"> <BsInstagram/> </a>

</div>
<div className="footer__copyright">
  <small> &copy; Anil Gulati. All Right Reserved</small>
</div>
    </footer>
  )
}

export default Footer