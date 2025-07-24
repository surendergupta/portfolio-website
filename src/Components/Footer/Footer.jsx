import React from 'react'

import './Footer.css' // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    
    <div className='footer-container'>
      <div className='footer-links'>
        <ul className='footer-list'>
          <li className='footer-item'><a href="/">Home</a></li>
          <li className='footer-item'><a href="/about">About</a></li>
          <li className='footer-item'><a href="/projects">Projects</a></li>
          <li className='footer-item'><a href="/articles">Articles</a></li>
          <li className='footer-item'><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className='footer-copyright'>
        <p>&copy; {new Date().getFullYear()} Surender Gupta. All rights reserved.</p>
      </div>
    </div>
    
  )
}

export default Footer
