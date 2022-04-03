import React from 'react'
import './portfolio.css'
import Sample from '../../assets/sample.webp'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Sample,
      title: "Mark Me Present",
      github: "https://github.com/anilfromdit/Mark-Me-Present-Pro--MMP",
      demo: "https://github.com/anilfromdit/Mark-Me-Present-Pro--MMP"
    }, {
      id: 2,
      image: Sample,
      title: "We Do",
      github: "https://github.com",
      demo: "https://github.com"
    }, {
      id: 3,
      image: Sample,
      title: "E-mart",
      github: "https://github.com/anilfromdit/E-Mart",
      demo: "https://github.com/anilfromdit/E-Mart"
    }, {
      id: 4,
      image: Sample,
      title: "Portfolio Website",
      github: "https://github.com/anilfromdit/Portfolio-Website",
      demo: "#"
    }, {
      id: 5,
      image: Sample,
      title: "Let Me Watch Anime",
      github: "https://github.com/anilfromdit/Let-Me-Watch-Anime",
      demo: "https://github.com/anilfromdit/Let-Me-Watch-Anime"
    },
  ]
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio