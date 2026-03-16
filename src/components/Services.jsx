import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  // Tracks which row is currently being hovered
  const [activeIndex, setActiveIndex] = useState(null);

  const servicesList = [
    { title: "Residential Design", desc: "Complete home transformations tailored to your lifestyle, focusing on comfort, flow, and timeless aesthetics." },
    { title: "Commercial Spaces", desc: "Engaging work environments and retail spaces designed to boost productivity and leave a lasting brand impression." },
    { title: "Bespoke Furniture", desc: "Custom-crafted pieces designed specifically for your space using premium woods and luxury finishes." },
    { title: "Space Planning", desc: "Strategic layout optimization to maximize your square footage while maintaining an elegant, uncluttered feel." }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header" data-aos="fade-up">
        <h2 className="section-title">Our <span className="accent">Expertise</span></h2>
        <p className="services-subtitle">Comprehensive design solutions for every environment.</p>
      </div>

      <div className="services-list" data-aos="fade-up" data-aos-delay="200">
        {servicesList.map((srv, index) => (
          <div 
            key={index} 
            className={`service-row ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="service-row-header">
              <span className="service-number">0{index + 1}</span>
              <h3>{srv.title}</h3>
              <span className="service-arrow">↗</span>
            </div>
            <div className="service-row-content">
              <p>{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;