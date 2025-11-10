import React from 'react';
import './AboutUs.css';

import AboutImage from '../../assets/Apps Date/AboutUs.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text-column">
          <h2 className="about-us-heading">
            Best and Easiest Tools for Apps and Games 
          </h2>
          <p className="about-us-description">
            AppBrain helps Android developers succeed by offering easy tools for promoting and earning money from apps or games. With us, you can start quickly and manage everything yourself.
          </p>
          
          <div className="header-auth">
          <button className="auth-btn auth-login">SDK Documentation</button>
          <button className="auth-btn auth-register">Learn More</button>
        </div>
        </div>
        
        <div className="about-us-image-column">
          <img 
            src={AboutImage} 
            alt="AppBrain team working together" 
            className="about-us-image" 
          />
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
