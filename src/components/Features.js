// Features.js

import React from 'react';
import './Features.css';
import { Element } from 'react-scroll';

const Features = () => {
  return (
    <Element name="features" id="features">
      <div className="features">
        <h2 className="section-title">Features</h2>
        <div className="conte">
          <div className="animate"></div>
          <div className="text-boxes">
            <div className="animated-text-box">
              <h3>Feature 1</h3>
              <p>Description of Feature 1</p>
            </div>
            <div className="animated-text-box">
              <h3>Feature 2</h3>
              <p>Description of Feature 2</p>
            </div>
            <div className="animated-text-box">
              <h3>Feature 3</h3>
              <p>Description of Feature 3</p>
            </div>
            <div className="animated-text-box">
              <h3>Feature 4</h3>
              <p>Description of Feature 4</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Features;
