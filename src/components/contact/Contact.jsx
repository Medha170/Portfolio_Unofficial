import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>Contact Me</h1>
      <div className="separator"></div>
      <div className='contact-content'>
        <h2 className='contact-subheading'>You can find me anywhere if you contact me using my social media, most of the time i'm available there.</h2>
        <h2 className='contact-alternative'>OR USE THE FORM BELOW TO GET IN TOUCH :</h2>
        <form className='contact-form'>
          <input type='text' placeholder='Full Name' className='contact-input'/>
          <input type='email' placeholder='Email address' className='contact-input'/>
          <textarea placeholder='Message' className='contact-input'></textarea>
          <button type='submit' className='contact-button'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;