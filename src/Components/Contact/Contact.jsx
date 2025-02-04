import React from 'react'
import './Contact.css'
import pattern  from '../../Assets/theme_underline2.png'
import mail from '../../Assets/dark_mail.png'
import location from '../../Assets/Location.png'
import call from '../../Assets/call.png'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9c68230f-341b-4a1e-bb71-dbde72508751");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Your message has been sent!");
    }
  };
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={pattern} alt='pattern' style={{width:'65%'}}/>
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail} alt='' style={{width:'40px',height:'40px'}}/><p>priyankalala50@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call} alt='' style={{width:'30px',height:'30px'}}/><p>+91 9096457442</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt='' style={{width:'30px',height:'30px'}}/><p>Pune,Maharashtra, India</p>
                </div>
            </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email'/>
            <label htmlFor=''>Your Message</label>
            <textarea name='message' placeholder='Enter your message'  rows="8" ></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
