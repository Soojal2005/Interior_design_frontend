import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Locks the scroll while loading
    document.body.style.overflow = 'hidden';
    
    // Waits 2.5 seconds, then triggers the slide-up animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = 'auto'; // Unlocks scroll
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${isLoaded ? 'slide-up' : ''}`}>
      <div className="preloader-content">
        <h1 className="preloader-brand">WOOD & CRAFT</h1>
        <div className="loading-bar-container">
          <div className="loading-bar-fill"></div>
        </div>
        <p className="preloader-text">Loading Experience...</p>
      </div>
    </div>
  );
};

export default Preloader;