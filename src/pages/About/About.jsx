import React from 'react'
import { Helmet } from 'react-helmet-async';

import NavBar from "../../Components/NavBar/NavBar";
import Socials from '../../Components/Socials/Socials';
import Footer from '../../Components/Footer/Footer';

import INFO from "../../data/info";
import SEO from "../../data/seo";

import './About.css'


const About = () => {

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <NavBar currentPage="about" logoUrl={INFO.main.logo} />
        <div className="content-wrapper">
          <div className='about-container'>
            <div className='right-content'>
              <div className='title'>{INFO.about.title}</div>
              <div className='subtitle'>{INFO.about.description}</div>
            </div>
            <div className='left-content'>
              <div className='image-container'>
                <img src="/about.jpg" alt="About Me" />
              </div>
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

export default About
