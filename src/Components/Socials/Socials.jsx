import React from 'react'

import { Link } from 'react-router-dom';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Socials.css';

const Socials = () => {
  return (
    <>
    <div className='social-links'>
        <ul className='social-list'>
            <li>
                <Link to="https://github.com/SurenderGupta" target="_blank" rel="noopener noreferrer">
                    <div className='social-icon'>
                        <FontAwesomeIcon icon={faGithub} className="social-icon-fa" />
                    </div>
                    <div className='social-text'>Follow on GitHub</div>
            </Link>
            </li>
            <li>
            <Link to="https://www.linkedin.com/in/surender-gupta/" target="_blank" rel="noopener noreferrer">
                <div className='social-icon'>
                <FontAwesomeIcon icon={faLinkedin} className="social-icon-fa" />
                </div>
                <div className='social-text'>Follow on LinkedIn</div>
            </Link>
            </li>
            <li>
            <Link to="https://twitter.com/SurenderGupta" target="_blank" rel="noopener noreferrer">
                <div className='social-icon'>
                <FontAwesomeIcon icon={faXTwitter} className="social-icon-fa" />
                </div>
                <div className='social-text'>Follow on Twitter</div>
            </Link>
            </li>
            <li>
            <Link to="https://www.instagram.com/surendergupta/" target="_blank" rel="noopener noreferrer">
                <div className='social-icon'>
                <FontAwesomeIcon icon={faInstagram} className="social-icon-fa" />
                </div>
                <div className='social-text'>Follow on Instagram</div>
            </Link>
            </li>
            <li>
            <Link to="mailto:gupta.surender1990@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className='social-icon'>
                <FontAwesomeIcon icon={faEnvelope} className="social-icon-fa" />
                </div>
                <div className='social-text'>gupta.surender.1990@gmail.com</div>
            </Link>
            </li>
        </ul>
        </div>
      
    </>
  )
}

export default Socials;
