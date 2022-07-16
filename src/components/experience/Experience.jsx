import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const languages = ['Java', 'Java Script', 'Python', 'C', 'HTML', 'CSS']
const development = ['Android APP Development (Java)', 'Full Stack Web Development', 'Browser Extension Development']
const framework = ['React Js', 'Node Js', 'Express Js', 'Redux', 'Socket IO', 'MongoDB', 'GIT', 'SQL', 'Spring Boot', 'JSwing', 'Linux', 'Material UI', 'Ant Design']

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="languages">
          <h3>Languages</h3>
          <div className="experience__content">
            {
              languages.map(language => (
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>{language}</h4>
                  </div>
                </article>
              ))

            }
          </div>
        </div>

        <div className="development">
          <h3>Development</h3>
          <div className="experience__content">
            {
              development.map(tech => (
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>{tech}</h4>
                  </div>
                </article>
              ))

            }
          </div>
        </div>

        <div className="skills">
          <h3>Framework/Libraries</h3>
          <div className="experience__content  skillBox" >
            {
              framework.map(skill => (
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience