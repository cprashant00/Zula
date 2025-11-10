// src/components/AppList/FeaturedCard.jsx

import React from 'react';
import './Featured.css'; // Imports the specific styles for this card

/**
 * Renders a single vertical App card for the Featured section.
 * @param {object} app - The app data object (from AppData.xlsx).
 */
const FeaturedCard = ({ app }) => {
  return (
    <div className="featured-card"> 
      
      {/* App Icon */}
      <img 
        src={app.AppLogo || 'https://via.placeholder.com/64?text=F'} 
        alt={app.AppName || 'Featured App'} 
        className="featured-logo" 
      />

      {/* App Details */}
      <div className="featured-details">
        <h3 className="featured-name">{app.AppName || "App Name"}</h3>
        <p className="featured-developer">{app.Developer || "Developer"}</p>
        <div className="featured-rating">
          <span className="stars">★</span>
          <span>{app.Rating || 4.5}</span>
        </div>
      </div>

      {/* Get Button - Full width in vertical stack */}
      <button className="auth-btn auth-register featured-get-btn">
        {app.Button || 'Get'}
      </button>
    </div>
  );
};

export default FeaturedCard;