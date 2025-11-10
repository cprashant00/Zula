import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; 
import './TopAppDeals.css';
import { useNavigate } from 'react-router-dom';

const TopAppDeals = () => {
  const [appData, setAppData] = useState([]);
  const navigate = useNavigate();

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

        console.log('Fetched data:', json);
        setAppData(json);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (Id) => {
    navigate(`/app-details/${Id}`); 
  };

  return (
    <div className="app-section">
      <div className='section-header'>
        <h2>Top App Deals</h2>
      <button className="auth-btn auth-login see-all">View All</button>
      </div>
      <div className="app-grid">
        {appData.map((app, index) => (
          <div key={index} className="app-card">
            <div className='app-image-div'> 
              <img src={app.AppLogo} alt={app.AppName} className="app-logo" />
              <div className='app-disc-div'>
                <h3 className="app-name">{app.AppName}</h3>
                <p className="app-developer">{app.Developer}</p>
                <p className="app-rating">★{app.Rating}</p>
              </div>
              <div className='app-btn-div'>
                <button className="auth-btn auth-register" onClick={() => handleViewDetails(app.Id || index)}>{app.Button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAppDeals;
