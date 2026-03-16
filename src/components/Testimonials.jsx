import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { name: "Aisha R.", role: "Homeowner", text: "They transformed our outdated living room into a modern masterpiece. The attention to detail and material selection was beyond our expectations." },
    { name: "Vikram S.", role: "Restaurant Owner", text: "The bespoke lighting and seating arrangements completely changed the vibe of our cafe. Our customers constantly ask who designed the space." },
    { name: "Priya M.", role: "Corporate Client", text: "Professional, punctual, and visionary. They turned a boring office floor into a collaborative, inspiring workspace." }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="testimonials-section">
      <div className="testi-container" data-aos="zoom-in">
        <h2 className="section-title text-center">Client <span className="accent">Stories</span></h2>
        
        <div className="testi-slider">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className={`testi-card ${index === current ? 'active' : ''}`}
            >
              <div className="quote-icon">"</div>
              <p className="testi-text">{rev.text}</p>
              <div className="testi-author">
                <h4>{rev.name}</h4>
                <span>{rev.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-dots">
          {reviews.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;