import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // To make this work, you MUST create a free account at emailjs.com
    // and replace these three strings with your actual keys.
    const serviceID = 'service_erfqbwt'; 
    const templateID = 'template_w2y5fi4';
    const publicKey = 'wqvim5eJ_GrJdnn9W';

    // This is the magic that sends the email silently in the background
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus('success');
        form.current.reset(); // Clears the form
        setTimeout(() => setStatus('idle'), 5000); // Resets back after 5 seconds
      })
      .catch((error) => {
        console.error('Email failed:', error);
        setStatus('error');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glass-container" data-aos="zoom-in-up">
        
        {/* Left Side: The Pitch */}
        <div className="contact-glass-text">
          <h2 className="glass-title">Ready to <br/><span className="accent">Transform</span> your space?</h2>
          <p className="glass-desc">Drop us a message and our lead designer will get back to you within 24 hours.</p>
          
          <div className="glass-info-pills">
            <div className="info-pill">bajajsoojal123@gmail.com</div>
            <div className="info-pill">+91 78282 41099</div>
          </div>
        </div>

        {/* Right Side: The Glass Form */}
        <div className="contact-glass-form">
          {status === 'success' ? (
            <div className="success-message">
              <h3>Message Sent!</h3>
              <p>We've received your inquiry and will be in touch shortly.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit}>
              <div className="glass-input-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              
              <div className="glass-input-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              
              <div className="glass-input-group">
                <textarea name="message" placeholder="Tell us about your project requirements..." rows="5" required></textarea>
              </div>

              <button 
                type="submit" 
                className={`glass-btn ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
              
              {status === 'error' && <p className="error-text">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Contact;