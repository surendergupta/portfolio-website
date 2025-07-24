import React from 'react'

import './NotFound.css'
const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL or return to the <a href='/'>homepage.</a></p>
      
    </div>
  )
}

export default NotFound