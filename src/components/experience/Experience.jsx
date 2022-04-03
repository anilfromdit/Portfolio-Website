import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill  } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="languages">
          <h3>Languages</h3>
          <div className="experience__content">

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java Script</h4>
              </div>
</article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C</h4>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
          </div>

        </div>
        <div className="development">

          <h3>Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Android App Development</h4>
              </div>
                </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Full Stack Web Development</h4>
              </div>
                </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Browser Extension Development</h4>
              </div>
                </article>
              
          </div>

        </div>



      </div>

    </section>
  )
}

export default Experience