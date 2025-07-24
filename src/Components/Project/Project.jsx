import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import './Project.css' // Assuming you have a CSS file for styling
const Project = ({ logo, title, description, link, linkText }) => {
  return (
    <div className='project-container'>
      <div className='project'>
        <Link to={link}>
          <div className='project-contentBox'>
            <div className='project-logo'>
              <img src={logo} alt="logo" />
            </div>
            <div className='project-title'>{title}</div>
            <div className='project-description'>
              { description }
            </div>
            <div className='project-links'>
              <div className='project-links-icon'><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
              <div className='project-links-text'>&nbsp; &nbsp;{linkText}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Project
