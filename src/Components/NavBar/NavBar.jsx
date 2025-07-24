import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = ({currentPage, logoUrl}) => {
  return (
    <div className='navbar-container'>      
        <nav className="navbar">
            <div className='navbar-logo'>
                <Link to="/" className='logo-link'>
                    <img src={logoUrl} alt="Logo" className='logo-image' />
                </Link>
            </div>
            <div className='navbar-background'>
                <ul className='nav-list'>
                    <li className={`nav-item ${currentPage === "home" ? "active" : "" }` }><a href="/">Home</a></li>
                    <li className={`nav-item ${currentPage === "about" ? "active" : ""}` }><a href="/about">About</a></li>
                    <li className={`nav-item ${currentPage === "projects" ? "active" : ""}` }><a href="/projects">Projects</a></li>
                    <li className={`nav-item ${currentPage === "articles" ? "active" : ""}` }><a href="/articles">Articles</a></li>
                    <li className={`nav-item ${currentPage === "contact" ? "active" : ""}` }><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>      
    </div>
  )
}

export default NavBar;
