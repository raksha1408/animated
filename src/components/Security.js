// Security.js

import React from 'react';
import './Security.css';
import { Element } from 'react-scroll';

const Security = () => {
  return (
    <Element name="security" id="security">
      <div className="security">
        <h2 className="section-title">We don't track user data or cross-associate wallets.<br></br>
         We do not store your private keys or seed phrase.</h2>
        <div className="content">
          <div className="text-box">
            <h3>Security Feature 1</h3>
            <p>Description of Security Feature 1</p>
          </div>
          <div className="text-box">
            <h3>Security Feature 2</h3>
            <p>Description of Security Feature 2</p>
          </div>
          <div className="text-box">
            <h3>Security Feature 3</h3>
            <p>Description of Security Feature 3</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Security;
