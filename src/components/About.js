// About.js

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Element } from 'react-scroll';
import './About.css';

const About = () => {
  useEffect(() => {
    // Animate text boxes with GSAP
    gsap.from('.floating-box', {
      y: '100%',
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <Element className="about" id="about" >
      <h1>Offering Features</h1>
      <div className="floating-box-container">
        <div className="floating-box">
          <h2>Portfolio tracking</h2>
          <p style={{color:'white'}}>
            The bot features AI that integrates with multiple exchanges and
            provides you with up-to-date information on your holdings and their
            performance.
          </p>
        </div>
        <div className="floating-box">
          <h2>Real-time quotes and prices</h2>
          <p style={{color:'white'}}>
            Users can see the current value of their investments, as well as
            historical price data for a specific token or NFT.
          </p>
        </div>
        {/* Add more floating boxes here */}
      </div>
    </Element>
  );
};

export default About;
