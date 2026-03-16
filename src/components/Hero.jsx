import React, { useState, useEffect } from 'react';
import './Hero.css';

import fallbackImg1 from '../assets/images/int_4.jpg';
import fallbackImg2 from '../assets/images/int_5.jpg';
import fallbackImg3 from '../assets/images/int_6.jpg';

// NEW: We accept "adminPreviewImages" as a prop!
const Hero = ({ adminPreviewImages }) => {
  const [images, setImages] = useState(() => {
    const savedAdminImages = localStorage.getItem('demoHeroImages');
    if (savedAdminImages) {
      const parsedImages = JSON.parse(savedAdminImages);
      if (parsedImages.length > 0) return parsedImages.map(img => img.url);
    }
    return [fallbackImg1, fallbackImg2, fallbackImg3]; 
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // NEW: If the Admin Portal sends us new images, update instantly!
  useEffect(() => {
    if (adminPreviewImages) {
      setImages(adminPreviewImages.length > 0 ? adminPreviewImages : [fallbackImg1, fallbackImg2, fallbackImg3]);
      setActiveIndex(0); // Reset the slider when new images arrive
    }
  }, [adminPreviewImages]);

  useEffect(() => {
    if (images.length <= 1) return; 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-3d-wrapper"><span className="text-3d-inner">Redefining</span></span>
          <span className="text-3d-wrapper"><span className="text-3d-inner accent">Modern</span></span>
          <span className="text-3d-wrapper"><span className="text-3d-inner">Living.</span></span>
        </h1>
        <p className="hero-subtitle">Elevating spaces with uncompromising craftsmanship.</p>
      </div>

      <div className="hero-stack-container">
        {images.map((imgUrl, index) => (
          <div
            key={index}
            className={`hero-stack-frame ${index === activeIndex ? 'auto-pop-side' : ''}`}
            style={{ backgroundImage: `url(${imgUrl})` }}
            onClick={() => { setSelectedImage(imgUrl); document.body.style.overflow = 'hidden'; }}
          >
            <div className="frame-shadow-overlay"></div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="hero-popup-overlay" onClick={() => { setSelectedImage(null); document.body.style.overflow = 'auto'; }}>
          <div className="hero-close-btn">&times;</div>
          <img src={selectedImage} alt="Expanded Design" className="hero-popup-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Hero;