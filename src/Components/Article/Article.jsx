import React from 'react'
import { Link } from 'react-router-dom'
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Article.css'

const Article = ({ date, title, description, link }) => {
  return (
    <div className='article-container' >
      <div className='article-content'>
        <div className='article-date'>
          { '| '}
          { date || "8 May 2023"}
        </div>
        <div className='article-title'>
          { title || "The Benefits of Cloud Computing"}
        </div>
        <div className='article-description'>
          { description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  }
        </div>
        <div className='article-link'>
          <Link to={link}>Read Article <FontAwesomeIcon icon={faRightLong} /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Article
