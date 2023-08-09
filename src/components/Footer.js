import React from 'react';
import './Footer.css'; // Import your CSS file
import { Element } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <Element name="Footer" id="footer">
        {/* ... Social links */}
      </Element>
      <h1>MY AI BOT</h1>
      <p>&copy; 2023. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
