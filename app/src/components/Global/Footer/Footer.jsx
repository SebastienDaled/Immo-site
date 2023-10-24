import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>Immo Sebastien</h2>
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;