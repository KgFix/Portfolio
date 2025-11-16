import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-content">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" />
        <div className="profile-text">
          <h2>John Doe</h2>
          <h4>Software Developer</h4>
          <p>
            I am a passionate and creative software developer with a knack for building beautiful and functional web applications. 
            With a strong foundation in modern web technologies, I am dedicated to continuous learning and applying best practices to create efficient, scalable, and user-friendly solutions.
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
