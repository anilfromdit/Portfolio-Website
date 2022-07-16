import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
const MySocials = () => {
  return (
    <div className='my__socials'>
      <a href='https://www.github.com/anilfromdit' target="_blank" rel="noreferrer"> <BsGithub /> </a>
      <a href='https://www.linkedin.com/in/anilfromdit/' target="_blank" rel="noreferrer"><BsLinkedin /> </a>
      <a href='https://instagram.com/anilfromdit' target="_blank" rel="noreferrer"> <BsInstagram /> </a>

    </div>
  )
}

export default MySocials