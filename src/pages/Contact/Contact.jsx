import React from 'react'
import { Helmet } from 'react-helmet-async';

import NavBar from "../../Components/NavBar/NavBar";
import Socials from '../../Components/Socials/Socials';
import Footer from '../../Components/Footer/Footer';

import INFO from "../../data/info";
import SEO from "../../data/seo";

import './Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  
  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <NavBar currentPage="contact" logoUrl={INFO.main.logo} />
        <div className="content-wrapper">
          <div className='contact-container'>
            <div className='title'>{INFO.contact.title}</div>
              <div className='subtitle'>{INFO.contact.description}</div>
            <div className='contact-details'>
              <Socials />
            </div>
          </div>
          <div className="page-footer">
							<Footer />
						</div>
        </div>
      </div>
    </>
  )
}

export default Contact
