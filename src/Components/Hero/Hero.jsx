import React from 'react'
import './Hero.css'

import profile_pic from '../../Assets/cropped_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_pic} alt=''/>
      <h1><span>I'm Priyanka Lala,</span>Full Stack Developer based in India.</h1>
      <p>Detail-oriented Quality Assurance Engineer with over 2.5 years of experience in manual and automated testing, seeking a challenging Development position. 
</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <div className="hero-resume"><a href='./PriyankaLala-resume-2025.pdf' target='_blank' download>My Resume </a> </div>
      </div>
    </div>
  )
}

export default Hero
