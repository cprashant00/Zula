import React, { useState, useEffect } from 'react';
import './Blogs.css';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
  const [BlogData, setBlogData] = useState([]);
  const navigate = useNavigate();
  
      const Count = 9;
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('/BlogData.xlsx');
              
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
      
              const arrayBuffer = await response.arrayBuffer();
              const workbook = XLSX.read(arrayBuffer, { type: 'array' });
              const sheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[sheetName];
              const json = XLSX.utils.sheet_to_json(worksheet);
      
              console.log('Fetched data:', json);
              const PopularBlogs = json.slice(0,Count);
              setBlogData(PopularBlogs);
            } catch (error) {
              console.error("Error reading Excel file:", error);
            }
          };
      
          fetchData();
        }, []);

        const handleViewDetails = (Id) => {
    navigate(`/BlogDetail/${Id}`); 
  };

    return (
     <div className="Blog-section">
        <div className='section-header'>
          <h2>All Articles</h2>
        {/* <button className="auth-btn auth-login see-all">View All</button> */}
        </div>
        <div className="Blog-grid">
          {BlogData.map((Blog, index) => (
            <div key={index} className="Blog-card" onClick={() => handleViewDetails(Blog.Id || index)}>
              <div className='Blog-image-div'> 
                <img src={Blog.ImagePath} alt={Blog.BlogTitle} className="Blog-logo" />
                <div className='Blog-disc-div'>
                  <h3 className="Blog-name">{Blog.BlogTitle}</h3>
                  <p className="Blog-Date">{Blog.Date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default AllBlogs