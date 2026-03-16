import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      {/* We duplicate the text so it creates an infinite, seamless loop */}
      <div className="marquee-content">
        <span>BESPOKE DESIGN &nbsp; • &nbsp; PREMIUM MATERIALS &nbsp; • &nbsp; TIMELESS ELEGANCE &nbsp; • &nbsp; MASTER CRAFTSMANSHIP &nbsp; • &nbsp;</span>
        <span>BESPOKE DESIGN &nbsp; • &nbsp; PREMIUM MATERIALS &nbsp; • &nbsp; TIMELESS ELEGANCE &nbsp; • &nbsp; MASTER CRAFTSMANSHIP &nbsp; • &nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;