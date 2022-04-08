import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.webp'
import { FiAward } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

              <article className="about__card">
                <FaGraduationCap className='about__icon' />
                <h5>Qualification</h5>
                <small>Pursuing B.Tech CSE @DIT</small>
              </article>
            <article className="about__card">
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years of programming</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>

          </div>
          <p>
            I solve problems in creative ways. At DIT University, where I am completing my B. Tech Degree in Computer Science Engineering, I have learned the importance of applying classical strategies to modern-day projects
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>


    </section>
  )
}

export default About