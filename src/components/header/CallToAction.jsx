import React from 'react'
import Resume from '../../assets/resume.pdf'
const CallToAction = () => {
  return (
    <div className='cta'>
      <a href={Resume} download={`Anil's Resume`} className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's talk</a>

    </div>
  )
}

export default CallToAction