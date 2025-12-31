import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import mainImage from '../assets/images/main.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mainImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KgFix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/kironegopaul" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kirone Gopaul</h1>
          <p>Software Engineer | Computer Science Graduate @ UKZN</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KgFix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/kironegopaul" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;