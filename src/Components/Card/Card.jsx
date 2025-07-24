import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './Card.css' // Assuming you have a CSS file for styling

const Card = ({icon, title, body}) => {
  return (
    <div className="card">
        <div className="card-container">
            <div className="card-header">
                <div className="card-icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="card-title">{title}</div>
            </div>
            <div className="card-body">
                <div className="card-text">{body}</div>
            </div>
        </div>
    </div>
  )
}

export default Card