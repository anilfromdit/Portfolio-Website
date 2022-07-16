import React from 'react'
import './navbar.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineProject } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiTwotoneHome /> </a>
      <a href='#about' onClick={() => setActive('about')} className={active === 'about' ? 'active' : ''}><AiOutlineUser /> </a>
      <a href='#experience' onClick={() => setActive('experience')} className={active === 'experience' ? 'active' : ''}><BiBook /> </a>
      <a href='#projects' onClick={() => setActive('project')} className={active === 'project' ? 'active' : ''}><AiOutlineProject /> </a>
      <a href='#contact' onClick={() => setActive('contact')} className={active === 'contact' ? 'active' : ''}><BiMessageSquareDetail /> </a>


    </nav>

  )
}

export default Navbar