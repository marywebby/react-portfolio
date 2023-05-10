import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "../styles/Footer.css"

function Footer() {
    return (
      <footer>
        <div className="social-media-icons">
          <a href="https://github.com/marywebby">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/marywebby">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/mary_webby">
            <FaTwitter />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;