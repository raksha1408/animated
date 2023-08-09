// Hero.js

import React from 'react';
import './Hero.css';
import { Element } from 'react-scroll';

import logo from 'D:/RAKSHA/react/mybot/src/components/bot.png'; // Replace with your logo image URL

const Hero = () => {

  return (
    <Element name="hero" id="hero">
      <div className="hero">
        <div className="content">
          <img src={logo} alt="Your Logo" className="logo" />
          <h1 className="heading">MY AI BOT</h1>
          <div className="animated-image"></div>
          <h1 className="title">Pioneering the Evolution of the Crypto Industry</h1>
          <p className="description">Investment, Portfolio Management and Security Solutions Powered by Artificial Intelligence</p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
