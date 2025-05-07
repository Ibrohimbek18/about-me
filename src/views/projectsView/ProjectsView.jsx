import React from 'react';
import './projectsView.scss'; 
import { Img1, Img2, Img3, Img4, Img5, Img6 } from '../../helper/image';

const projects = [
  {
    url: 'https://ibrohimbek11.github.io/grayson/',
    title: 'Grayson',
    description: 'A web application built with React. It showcases user interaction and animations.',
    imageUrl: Img1, 
  },
  {
    url: 'https://ibrohimbek11.github.io/Airpots/',
    title: 'Airpots',
    description: 'A portfolio page created using modern web development tools and responsive design.',
    imageUrl: Img2,  
  },
  {
    url: 'https://ibrohimbek11.github.io/Gamburger/',
    title: 'Gamburger',
    description: 'A fun web app demonstrating a burger order system using vanilla JavaScript and CSS.',
    imageUrl: Img3,  
  },
  {
    url: 'https://ra1moff.github.io/Nike',
    title: 'Nike',
    description: 'A street food finder app that helps you discover great food spots around you.',
    imageUrl: Img4, 
  },
  {
    url: 'https://ra1moff.github.io/CloudBudget/',
    title: 'CloudBudget',
    description: 'A cloud-based budgeting application with detailed expense tracking and analytics.',
    imageUrl: Img5,  
  },
  {
    url: 'https://ra1moff.github.io/Construct/',
    title: 'Construct',
    description: 'A construction management app that helps streamline project workflows and collaboration.',
    imageUrl: Img6,  
  }
];

const ProjectsView = () => {
  return (
    <div id='projects' className="projects-view">
      <div className="container">
        <h1 className="projects__title">Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                </div>
                <div className="project-details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
