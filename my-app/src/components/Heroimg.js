import React from 'react';
import "./Heroimgstyle.css";
import IntroImg from "../assets/frontpage1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className='content'>
        <h1>LISHIKA</h1>
        <p>Software Developer. Programmer. Web Developer</p>
        <div className='icons'>
          <a href="https://github.com/Lishika3009" target="_blank" rel="noopener noreferrer" className='icon'>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='icon'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:your.email@example.com" className='icon'>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Heroimg;

