import React from 'react'
import './Services.css'
import pattern  from '../../Assets/theme_underline2.png'
import {assets, servicesData} from '../../Assets/Assets'
const Services = () => {
  return (
    <div className='services' id='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={pattern} alt='pattern' style={{width:'65%'}}/>
        </div>
      <div className='services-container'>
       {servicesData.map((services, index) => {
        return <div className='services-format' key={index}>
            <img src={services.dark_icon} alt='' />
            <h2>{services.title}</h2>
            <p>{services.description}</p>
        </div>
       })}
      </div>
    </div>
  )
}

export default Services
