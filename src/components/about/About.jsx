import React from 'react';
import './About.css';
import Photo from './../../assets/my-photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about-container">
      <h1 className='about-heading'>About Me</h1>
      <div className="separator"></div>
      <div className="about-content">
        <div className="about-text">
          <p className='highlight'>Hello, my Name is Medha Shree</p>
          <p>As a student at Scaler School of Technology, I am specializing in software development. I excel in Java and Python, creating efficient and scalable solutions.

Beyond my technical pursuits, I have a passion for the arts, particularly poetry. This creative outlet not only enriches my life but also enhances my problem-solving skills by allowing me to think outside the box.

Whether I am debugging code or crafting a new poem, I bring enthusiasm and a fresh perspective to every challenge. I'm always eager to learn and grow, both as a developer and as a creative individual.</p>
          <p className='highlight'>For any business related inquiries you can contact me using:</p>
          <p>
            <div className='connect'><FontAwesomeIcon icon ={faEnvelope} /> <span>medha17074@gmail.com</span></div>
            <div className='connect'><FontAwesomeIcon icon ={faPhone} /> <span>+91 7042580991</span></div>
            <div className='connect'><FontAwesomeIcon icon ={faLocationPin} /> <span>Room No. 61, Stanza Living, Lisbon House, Electronic City, Bengaluru</span></div>
          </p>
          <p className='sub-heading'>Get in touch using the web:</p>
          <div className='semi-separator'></div>
          <div className="social-links">
            <a href="https://github.com/Medha170"><FontAwesomeIcon icon={faGithub}/> Github</a>
            <a href="https://www.youtube.com/channel/UCx9q1yfITSqXARKkmJk9oUw"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
            <a href="https://www.linkedin.com/in/medha-shree-1b2832281/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="https://www.instagram.com/medha4772/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
          </div>
        </div>
        <div className="about-photo">
          <img src={Photo} alt="Medha Shree" />
        </div>
      </div>
    </div>
  );
}

export default About;