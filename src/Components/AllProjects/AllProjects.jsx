import React from 'react'

import Project from '../Project/Project'

import './AllProjects.css'
const AllProjects = ({projectlists}) => {
  return (
    <div className='all-projects-container'>
      {projectlists.map((project, index) => (
      <Project 
        key={index + 1} 
        logo={project.logo} 
        title={project.title} 
        description={project.description} 
        link={project.link}
        linkText={project.linkText}
      />
      ))}      
    </div>
  )
}

export default AllProjects;
