import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer at Tech Company</h3>
          <p><strong>Full-time</strong> | 2022 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React, Node.js, and TypeScript.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
            <li>Implemented new features and improved existing ones based on user feedback.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Intern at Another Company</h3>
          <p><strong>Internship</strong> | Summer 2021</p>
          <ul>
            <li>Assisted in the development of a new mobile application.</li>
            <li>Learned about agile methodologies and software development life cycle.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
