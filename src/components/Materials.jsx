import React from 'react';
import './Materials.css';

// Ensure your images are named exactly like this in your folder
import int2 from '../assets/images/int_2.jpg';
import int3 from '../assets/images/int_3.jpg';

const Materials = () => {
  return (
    <section className="materials-section">
      <div className="materials-header" data-aos="fade-down">
        <h2 className="section-title">Built to Last. <br/><span className="accent">Crafted to Inspire.</span></h2>
        <p className="section-desc">
          We don't compromise on the foundation. Our interiors use premium HDHMR and high-grade plywood, ensuring your spaces resist moisture, wear, and time.
        </p>
      </div>

      <div className="materials-grid">
        {/* Card 1: Slides UP from the BOTTOM-LEFT */}
        <div className="material-card" data-aos="fade-up-right">
          <div className="card-content">
            <h3>01. Premium Plywood</h3>
            <p>ISI marked, commercial and marine grade plywood for core structural strength and unmatched durability.</p>
          </div>
          <div className="card-image" style={{ backgroundImage: `url(${int2})` }}></div>
        </div>

        {/* Card 2: Also slides UP from the BOTTOM-LEFT, but waits 0.2 seconds first */}
        <div className="material-card reverse" data-aos="fade-up-right" data-aos-delay="200">
          <div className="card-content">
            <h3>02. HDHMR Boards</h3>
            <p>High Density High Moisture Resistance. The absolute pinnacle of engineered wood for kitchen cabinets and humid environments.</p>
          </div>
          <div className="card-image" style={{ backgroundImage: `url(${int3})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Materials;