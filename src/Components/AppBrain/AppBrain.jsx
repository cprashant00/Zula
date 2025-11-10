// AppBrain.jsx
import React from 'react';
import './AppBrain.css';
import Promote from './Promote';
import Monetise from './Monetise';
import Ranking from './Ranking';
import Intelligence from './Intelligence';

const AppBrain = () => {
  return (
    <div className="container">
      <div className="app-Brain">
        <Promote/>
        <Monetise/>
        <Ranking/>
        <Intelligence/>
      </div>
    </div>
  );
};

export default AppBrain;