import React from 'react'
import { Helmet } from 'react-helmet-async';

import NavBar from "../../Components/NavBar/NavBar";
import Footer from '../../Components/Footer/Footer';
import AllProjects from '../../Components/AllProjects/AllProjects';

import INFO from "../../data/info";
import SEO from "../../data/seo";

import './Projects.css'
const Projects = () => {
  const currentSEO = SEO.find((item) => item.page === "projects");
  return (
    <>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <NavBar currentPage="projects" logoUrl={INFO.main.logo} />
        <div className="content-wrapper">
          <div className='projects-container'>
            <div className='title'>{INFO.projects.title}</div>
            <div className='subtitle'>{INFO.projects.description}</div>
          </div>
          <div className="projects-list">
            <AllProjects projectlists={INFO.projectlists} />
          </div>
          <div className="page-footer">
							<Footer />
						</div>
        </div>
      </div>
    </>
  )
}

export default Projects
