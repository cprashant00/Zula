// src/components/AppList/FeaturedByAppBrain.jsx (COMPLETE CODE)

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; 
import FeaturedCard from './FeaturedCard'; 
import './Featured.css'; 

import Featuredad from '../../assets/Apps Date/Featured.jpg'

// We'll assume we only want to display the first 4 results from the Excel data 
// unless you have a specific 'IsFeatured' column to filter by.
const FEATURED_APP_COUNT = 6; 

const FeaturedByAppBrain = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/AppData.xlsx'); 
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        // Filter: Take the first FEATURED_APP_COUNT apps
        const featuredApps = json.slice(0, FEATURED_APP_COUNT); 
        
        setAppData(featuredApps);
      } catch (error) {
        console.error("Error reading Excel file for Featured Apps:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    // Reuses the general app-section container from AppList.css
    <div className="app-section"> 
      
      
      {/* This grid class is defined in Featured.css */}
      <div className='Featured-container'>
        <div>
          <div className="section-header">
        <h2>Featured by AppBrain</h2>
        <button className="auth-btn auth-login see-all">View All</button>
      </div>
      <div className="featured-grid"> 
          
        {appData.map((app, index) => (
          <FeaturedCard key={index} app={app} />
        ))}
      </div>
        </div>
        
      <div className='Feature-image-grid'>
        <div className='Feature-image-wrapper'>
          <img src={Featuredad} alt={Featuredad} />
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default FeaturedByAppBrain;