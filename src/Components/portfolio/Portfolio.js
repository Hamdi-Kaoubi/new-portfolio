import React from 'react'
import './Portfolio.css'
import Tips from '../../Assets/tips and tricks.jpg'
import portfolio from '../../Assets/first-portfolio.jpg'
import Movie from '../../Assets/Screenshot 2023-06-22 182006.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Tips} alt='tips and tricks'/>
          </div>
          <h3>Tips And Tricks Web Application</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Hamdi-Kaoubi/final-project' className='btn' rel="noreferrer" target='_blank'>Github</a>
            <a href='https://64948837576c7e571ef4476c--quiet-crumble-b5d8e7.netlify.app/' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio} alt='tips and tricks'/>
          </div>
          <h3>First Portfolio</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Hamdi-Kaoubi/my-portfolio' className='btn' rel="noreferrer" target='_blank'>Github</a>
            <a href='https://hamdi-kb-portfolio.netlify.app/' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Movie} alt='tips and tricks'/>
          </div>
          <h3>Movie Application</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Hamdi-Kaoubi/movie-app' className='btn' rel="noreferrer" target='_blank'>Github</a>
            <a href='https://649486c8daa2445873e2b83f--lovely-kulfi-13b4a8.netlify.app/' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio