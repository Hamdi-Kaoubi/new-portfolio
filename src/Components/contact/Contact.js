import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pj4wyc', 'template_ek6svap', form.current, 'nPrq6VW8zcVTIQyKm')
    .then(e.target.reset())
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hamdi.kaoubi1994@gmail.com</h5>
            <a href='mailto:hamdi.kaoubi1994@gmail.com'>Send A Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Hamdi Kaoubi</h5>
            <a href='https://m.me/hamdi.kaoubi' rel="noreferrer" target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+21620223395</h5>
            <a href='https://api.whatsapp.com/send?phone=+21620223395' rel="noreferrer" target='_blank'>Send A Message</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name Please' required/>
          <input type='email' name='email' placeholder='Your Email Please' required/>
          <textarea name='message' rows='7' placeholder='Message Me Here, Thanks' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact