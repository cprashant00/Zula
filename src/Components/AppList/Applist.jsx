// AppList.jsx
import React from 'react';
import HotApps from './HotApps';
import TopNewApps from './TopNewApps';
import TopAppDeals from './TopAppDeals';
import FeaturedByAppBrain from './FeaturedByAppBrain';
import './AppList.css';

const AppList = () => {
  return (
    <div className="app-list-container">
      <div className="app-list">
        <HotApps />
        {/* <TopNewApps /> */}
        <TopAppDeals />
        <FeaturedByAppBrain />
      </div>
    </div>
  );
};

export default AppList;