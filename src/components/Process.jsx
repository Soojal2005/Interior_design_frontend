import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

import img1 from '../assets/images/int_4.jpg';
import img2 from '../assets/images/int_5.jpg';
import img3 from '../assets/images/int_6.jpg';
import img4 from '../assets/images/int_2.jpg';

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery", text: "We begin by understanding your lifestyle, aesthetic preferences, and the architectural nuances of your space.", image: img1 },
    { num: "02", title: "Concept", text: "Our designers translate your vision into a comprehensive design narrative, complete with 3D renderings.", image: img2 },
    { num: "03", title: "Curation", text: "We source the finest bespoke furniture, textiles, and art from our global network of master artisans.", image: img3 },
    { num: "04", title: "Installation", text: "Our team executes the final build with uncompromising precision, delivering a turnkey masterpiece.", image: img4 }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        
        {/* TOP CENTER HEADER */}
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">The <span className="accent">Process</span></h2>
          <p>A meticulous journey from blank canvas to living masterpiece. Watch how we bring visions to life.</p>
        </motion.div>

        {/* 2x2 CARD GRID */}
        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-spring-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: index * 0.1 // This creates the 1-by-1 domino pop-in effect!
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 163, 115, 0.1)",
                borderColor: "rgba(212, 163, 115, 0.4)"
              }}
            >
              
              <div className="card-image-wrapper">
                <motion.img 
                  src={step.image} 
                  alt={step.title} 
                  className="card-image"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="card-num-badge">{step.num}</div>
              </div>

              <div className="card-text-wrapper">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;