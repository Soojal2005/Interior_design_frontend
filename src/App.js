import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
// Your existing components (Make sure these files exist!)
// import Materials from './components/Materials'; 
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// Admin components
import AdminLogin from './components/AdminLogin';
import AdminPortal from './components/AdminPortal';

export default function App() {
  const [currentView, setCurrentView] = useState('site'); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setCurrentView('portal');
    } else {
      setCurrentView('login');
    }
  };

  if (currentView === 'login') {
    return (
      <AdminLogin 
        onLogin={() => {
          setIsAuthenticated(true);
          setCurrentView('portal');
        }}
        onCancel={() => setCurrentView('site')}
      />
    );
  }

  if (currentView === 'portal' && isAuthenticated) {
    return (
      <AdminPortal 
        onLogout={() => {
          setIsAuthenticated(false);
          setCurrentView('site');
        }}
      />
    );
  }

  return (
    <div className="App">
      <Preloader />
      <CustomCursor />
      
      {/* The fixed Navbar prop */}
      <Navbar onAdminClick={handleAdminClick} />
      
      <div id="home"><Hero /></div>
      <Marquee /> 
      {/* <Materials /> Uncomment if you have this file */}
      <Process />
      <Services /> 
      <div id="portfolio"><Gallery /></div>
      <Testimonials /> 
      
      <Contact /> 
       <Footer />
    </div>
  );
}