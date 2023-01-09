import React from "react";
import '../styles/Footer.css';
import { FaGithub , FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/ninobrown585" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/adrian-brown-655b05b2/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <p>&copy; 2023 Adrian-Brown   </p>
      </div>
    </div>
  );
}

export default Footer;