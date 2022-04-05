import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
const Contact = () => {
  const api = process.env.REACT_APP_FORM_SPREE_URL_API;
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <FiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>anilfromdit@gmail.com</h5>
            <a href='mailto:anilfromdit@gmail.com' target='_blank' rel='noreferrer'>Send an Email</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>Linked In</h4>
            <h5>Anil Gulati</h5>
            <a href='https://www.linkedin.com/in/anilfromdit/' target='_blank' rel='noreferrer'>Connect on LinkedIn</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@anilfromdit</h5>
            <a href='https://instagram.com/anilfromdit' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form action={api} method="POST" >
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact