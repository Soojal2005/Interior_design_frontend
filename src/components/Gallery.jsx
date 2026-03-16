import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Fallback images
import img1 from '../assets/images/int_4.jpg';
import img2 from '../assets/images/int_5.jpg';
import img3 from '../assets/images/int_6.jpg';
import img4 from '../assets/images/int_2.jpg';

const Gallery = ({ adminPreviewImages }) => {
  // 1. Memory and Admin Sync State
  const [images, setImages] = useState(() => {
    try {
      const savedAdminImages = localStorage.getItem('demoGalleryImages');
      if (savedAdminImages) {
        const parsedImages = JSON.parse(savedAdminImages);
        if (parsedImages && parsedImages.length > 0) return parsedImages.map(img => img.url);
      }
    } catch (error) { console.error(error); }
    return [img1, img2, img3, img4]; 
  });

  // 2. Slider State (Just like the Hero!)
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Sync with Admin Portal
  useEffect(() => {
    if (adminPreviewImages) {
      setImages(adminPreviewImages.length > 0 ? adminPreviewImages : [img1, img2, img3, img4]);
      setActiveIndex(0); // Reset slider when new images arrive
    }
  }, [adminPreviewImages]);

  // 3. The Auto-Slide Timer
  useEffect(() => {
    if (images.length <= 1) return; 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Rotates every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="gallery-section" id="portfolio">
      <div className="gallery-header">
        <h2 className="section-title">Selected <span className="accent">Works</span></h2>
        <p>A curated look at our most iconic interior transformations.</p>
      </div>

      {/* THE 3D SLIDER STACK */}
      <div className="gallery-slider-container">
        {images.map((imgUrl, index) => {
          // Calculate the relative position to create a 3D depth effect
          let position = "next"; // Hidden behind
          if (index === activeIndex) position = "active"; // Front center
          if (index === (activeIndex - 1 + images.length) % images.length) position = "prev"; // Pushed left

          return (
            <div
              key={index}
              className={`gallery-slide ${position}`}
              style={{ backgroundImage: `url(${imgUrl})` }}
              onClick={() => {
                setSelectedImage(imgUrl);
                document.body.style.overflow = 'hidden';
              }}
            >
              <div className="gallery-slide-overlay">
                <span className="expand-hint">Click to Enlarge</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN POPUP */}
      {selectedImage && (
        <div className="gallery-popup-overlay" onClick={() => { setSelectedImage(null); document.body.style.overflow = 'auto'; }}>
          <div className="gallery-close-btn">&times;</div>
          <img src={selectedImage} alt="Expanded Project" className="gallery-popup-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;