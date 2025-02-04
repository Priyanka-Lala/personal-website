import React from 'react'
import './About.css'
import pattern  from '../../Assets/theme_underline2.png'
import profile from '../../Assets/user_1.png'
import {tools} from '../../Assets/Assets'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={pattern} alt='pattern' style={{width:'65%'}}/>
        </div>
      <div className='about-section'>
        <div className='about-left'>
            <img src={profile} alt=''/>
        </div>
        <div className='about-right'>
         <div className="about-para">
            <p>I'm an enthusiastic and detail-oriented professional with over 2.5 years of experience seeking a position as a Python Full Stack Developer. I thrive on solving complicated challenges through unique solutions, utilizing my strong analytical skills and continual learning mentality.</p>
            <p>My path has given me a thorough understanding of both front-end and back-end development, enabling me to construct smooth and efficient applications. I am committed to improving my development skills and contributing to projects that have a significant impact. I am known for my collaborative approach and commitment to quality, and I hope to be a useful asset to any development or quality assurance team.</p>
         </div>
         <div className="about-skills">
            <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"100%"}}/></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Express&NodejS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>NextJs</p><hr style={{width:"50%"}}/></div>
         </div>
      </div>
    </div >
    <div className='achievements'>
  <div className='text'>Tools I use</div>
  <div className='tools-container'>
    {tools.map((tool, index) => (
      <div className='tool' key={index}>
        <img src={tool} alt='Tool' />
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default About
