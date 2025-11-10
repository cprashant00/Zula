import React, { useState, useEffect } from "react";
import "./Hero.css";

import placeholderHero from "../../assets/Hero/Hero.jpg";
// import image2 from "../../assets/Hero/bannerimage2.png"

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image sources - you can add more images here
  const heroImages = [
    placeholderHero
  ].filter(Boolean);

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [heroImages.length]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Removed hero-content div */}
        
        <div className="hero-image-container">
          <div className={`hero-image-wrapper ${heroImages.length > 1 ? 'multiple-images' : ''}`}>
            <img 
              src={heroImages[currentImageIndex]} 
              alt="Zula App Showcase" 
              className="hero-image"
            />
            
            {/* Navigation dots - only show if multiple images */}
            {heroImages.length > 1 && (
              <div className="image-dots">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};