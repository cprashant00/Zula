import React from "react";
import HotAppsData from "../../Data/hotAppsData";
import useImageColor from "../../Data/useImageColor"; // Import the custom hook
import "./HotApps.css";

const HotAppCard = ({ app }) => {
  const footerColor = useImageColor(app.banner);

  return (
    <div className="hotapp-card">
      {/* Banner */}
      <div
        className="hotapp-banner"
        style={{
          backgroundImage: `url(${app.banner})`,
        }}
      >
        {app.label && <span className="app-label">{app.label}</span>}
      </div>

      {/* Gradient + Footer */}
      <div
        className="hotapp-footer"
        style={{
          // Apply the dynamic color and keep the original gradient effect
          background: `linear-gradient(to top, ${footerColor || 'rgba(0,0,0,0.6)'}, rgba(0,0,0,0)), url(${app.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <img src={app.appIcon} alt={app.appName} className="app-icon" />
        <div className="app-details">
          <h4 className="app-name">{app.appName}</h4>
          <p className="app-developer">{app.developer}</p>
          <p className="app-age">{app.age}</p>
          <p className="purchase-type">{app.purchaseType}</p>
        </div>
        <button className="install-btn">{app.button}</button>
      </div>
    </div>
  );
};

const HotApps = () => {
  return (
    <div className="app-section"> {/* Wrapper for heading and cards */}
    <div className="section-header">
      <h2>Hot Apps</h2>
      <button className="auth-btn auth-login see-all">View All</button>
    </div>
      
      <div className="hotapps-container">
        {HotAppsData.map((app) => (
          <HotAppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default HotApps;
