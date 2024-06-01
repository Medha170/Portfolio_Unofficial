import React from 'react';
import './Footer.css';
import Signature from './../../assets/signature_blackbg.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={Signature} alt="Medha Shree" className="signature" height={150} width={250}/>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>My Social Media</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/medha-shree-1b2832281/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            <li><a href="https://www.youtube.com/channel/UCx9q1yfITSqXARKkmJk9oUw" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
            <li><a href="https://www.instagram.com/medha4772/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More from me</h3>
          <ul>
            <li><a href="https://github.com/Medha170" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a></li>
            <li><a href="https://drive.google.com/file/d/1VsWChYABHxG8cqd-ZiS9jZVfjUZBiORa/view"><FontAwesomeIcon icon={faFileAlt} /> Resume</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made with <span role="img" aria-label="heart">❤️</span> by Medha Shree</p>
      </div>
    </footer>
  );
};

export default Footer;