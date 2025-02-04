import React from 'react'
import './Footer.css'
import user  from '../../Assets/user_profile.png'
import logo from '../../Assets/Logo_3.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt=''/>
                <p>I am a full stack developer based in Pune, adept at solving complex challenges with innovative solutions by leveraging my analytical skills and continuous learning approach.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt=''/>
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
      <hr/>
      <div className='footer-bottom'>
            <p className="footer-bottom-left">© 2025 Priyanka Lala.All rights reserved</p>
            <div className='footer-bottom-right' >
           <a href='https://github.com/Priyanka-Lala?tab=repositories'style={{textDecoration:'none', color:'white'}} ><p>Github</p> </a>
          <a href='https://www.linkedin.com/in/priyanka-lala-24641722b' style={{textDecoration:'none', color:'white'}}><p>LinkedIn</p></a>
                <p>Contact me</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
