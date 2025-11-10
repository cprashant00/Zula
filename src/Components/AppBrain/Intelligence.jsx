import React from "react";
import './AppBrain.css';

const Intelligence = () => {
  return (
    <div className="section intelidence-background-image">
      <div className="align-left">
        <div className="app-Brain-text-column width-917">
          <h2 className="app-Brain-heading">AppBrain Intelligence</h2>
          <p className="app-Brain-description">
            AppBrain App Intelligence tells you all about apps on Google Play. You can see how popular they are and find new ones easily.
          </p>
          <div className="Inteligence-search width-917">
          <div className="Inteligence-search-container">
            <input 
              type="text" 
              placeholder="Search for apps" 
              className="Inteligence-search-input"
            />
            <span className="Inteligence-search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
          </div>
          <div className="header-auth">
          <button className="auth-btn auth-register">Search</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
