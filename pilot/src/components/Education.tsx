import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-item">
          <h3>University of Example</h3>
          <p><strong>Bachelor of Science in Computer Science</strong> | 2018 - 2022</p>
          <p>Graduated with honors, focusing on software development and artificial intelligence.</p>
        </div>
        <div className="education-item">
          <h3>Online Courses</h3>
          <p><strong>Advanced React and Web Development</strong> | 2022 - Present</p>
          <p>Completed several courses on platforms like Coursera and Udemy to stay updated with the latest technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
