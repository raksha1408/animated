// PreAbout.js

import React from 'react';
import './PreAbout.css'; // Import your CSS file
import { Element } from 'react-scroll';

const PreAbout = () => {
  return (
    <Element name="preAbout"id="pre">
      <div className="conten">
        <div className="animation"></div>
        <p className="description">Investment, Portfolio Management and Security Solutions Powered by Artificial Intelligence</p>
        <p className="animated-text">Discover the Future of Finance</p>
      </div>
    </Element>
  );
};

export default PreAbout;
