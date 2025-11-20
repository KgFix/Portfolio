import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-details">
          <a href="mailto:kirgopaul@gmail.com">
            <EmailIcon />
            <span>kirgopaul@gmail.com</span>
          </a>
          <div className="phone-number">
            <PhoneIcon />
            <span>083 453 7610</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://github.com/KgFix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://linkedin.com/in/kironegopaul" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
      </div>
      </footer>
  );
}

export default Footer;