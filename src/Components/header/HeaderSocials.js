import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/hamdi-kaoubi-3315031a3/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Hamdi-Kaoubi' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://codepen.io/Hamdi-Kaoubi' target='_blank' rel="noreferrer"><FaCodepen/></a>
    </div>
  )
}

export default HeaderSocials