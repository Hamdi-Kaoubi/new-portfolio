import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import PersonaImage from '../../Assets/personal.png'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Hamdi Kaoubi</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='personal-image'>
          <img src={PersonaImage} alt='my personal'></img>
        </div>
        <a href='#footer' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header