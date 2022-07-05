import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can build Frontend of websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can build backend of websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hosting of websites</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desktop Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can build Frontend of Desktop Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can build backend ofApplications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>And I can build management systems using (Java & Mysql).</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services