import React, { useState, useEffect } from 'react';
import './Navbar.css';

// FIX #1: We added { onAdminClick } right here inside the parentheses
const Navbar = ({ onAdminClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // This detects when the user scrolls down to change the navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`premium-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">WOOD & CRAFT</div>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Us</a></li>
        
        {/* FIX #2: We removed "props." so it just says onAdminClick */}
        <button onClick={onAdminClick} className="nav-admin-link">
          Admin Access
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;