import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Project 1" />
            <div className="project-info">
              <h3>Project One</h3>
              <p>A brief description of the project. It was built using React and Node.js.</p>
              <a href="#">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Project 2" />
            <div className="project-info">
              <h3>Project Two</h3>
              <p>A brief description of the project. It was built using Vue and Firebase.</p>
              <a href="#">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Project 3" />
            <div className="project-info">
              <h3>Project Three</h3>
              <p>A brief description of the project. It was built using Angular and .NET.</p>
              <a href="#">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
