import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>WOOD & CRAFT</h2>
          <p>Elevating spaces through thoughtful design and uncompromising craftsmanship.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="link-column">
            <h3>Socials</h3>
            <a href="#instagram" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#pinterest" target="_blank" rel="noreferrer">Pinterest</a>
            <a href="#linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wood & Craft Interior Design. All rights reserved.</p>
        <p className="developer-tag">Designed with precision.</p>
      </div>
    </footer>
  );
};
 
export default Footer;