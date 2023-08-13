import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Graphic Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good Designs With Colors Coordinating</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Punctuality, Customers' Satisfaction Is My Goal</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photoshop And Illustrator Are My Best Working Softwares</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Innovation And Creation</p>
            </li>
          </ul>
        </article>
        {/*End Of Graphic Design*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Applications Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI Designing Using Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Programming Also</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Punctuality And Customers' Satisfaction</p>
            </li>
          </ul>
        </article>
        {/*End Of Web Development*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Videos Editing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Videos Editing With Premier Pro And Filmora</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating Video From Zero Or Modifiying Old Videos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Giving Final Projects At Time</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Innovation and creation</p>
            </li>
          </ul>
        </article>
        {/*End Of Videos Editing*/}
      </div>
    </section>
  )
}

export default Services