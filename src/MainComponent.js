
// MainComponent.js

import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll'; // Import scroller from react-scroll
import Hero from './components/Hero';
import PreAbout from './components/PreAbout';
import About from './components/About';
import Features from './components/Features';
import Security from './components/Security';
import Footer from './components/Footer';
 // Import your sections

const MainComponent = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const scrolledSections = ['hero','pre','about', 'features','security','footer']; // Add the IDs of your sections here
    const scrolledIntoView = scrolledSections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      }
      return false;
    });

    setActiveSection(scrolledIntoView || '');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (activeSection) {
      scroller.scrollTo(activeSection, {
        smooth: true,
        offset: -50,
      });
    }
  }, [activeSection]);

  return (
    <div>
      <Hero/>
      <PreAbout/>
      <About/>
      <Features/>
      <Security/>
      <Footer/>
  
    </div>
  );
};

export default MainComponent;
