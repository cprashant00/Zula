import React from "react";
import "./AppBrain.css";

import Monetize from "../../assets/AppBrain/Monetize.jpg";
import Fast from "../../assets/AppBrain/fast.jpg";
import wallet from "../../assets/AppBrain/Wallet.jpg";
import statistics from "../../assets/AppBrain/Statistics.jpg";
import graph from "../../assets/AppBrain/graph.jpg";

const Monetise = () => {
  return (
    <div className="section">
      <div className="align-center">
        <div className="app-Brain-text-column">
          <h2 className="app-Brain-heading">AppBrain Monetize</h2>
          <p className="app-Brain-description">
            The AppBrain SDK lets you show user-friendly app install ads to your
            users through interstitial or banner ad units. Our high-quality ads
            provide a good user experience and great monetization potential.
          </p>
        </div>
      </div>
      <div className="align-center">
        <div className="Monetise-grid1">
          <div className="promote-card">
            <div className="promote-image-div">
              <img src={Monetize} alt={Monetize} className="promote-logo" />
              <div className="promote-disc-div">
                <h3 className="promote-name">
                  Monetization with user-friendly app install ads
                </h3>
              </div>
            </div>
          </div>
          <div className="promote-card">
            <div className="promote-image-div">
              <img src={Fast} alt={Fast} className="promote-logo" />
              <div className="promote-disc-div">
                <h3 className="promote-name">
                  Easy and fast integration of our small SDK
                </h3>
              </div>
            </div>
          </div>
          <div className="promote-card">
            <div className="promote-image-div">
              <img src={wallet} alt={wallet} className="promote-logo" />
              <div className="promote-disc-div">
                <h3 className="promote-name">Quick payout of your revenue</h3>
              </div>
            </div>
          </div>
          
        </div>
        </div>
        <div className="align-center">
            <div className="Monetise-grid2">
                <div className="promote-card">
            <div className="promote-image-div">
              <img src={statistics} alt={statistics} className="promote-logo" />
              <div className="promote-disc-div">
                <h3 className="promote-name">
                  Clear usage statistics and retention figures for your app
                </h3>
              </div>
            </div>
          </div>
          <div className="promote-card">
            <div className="promote-image-div">
              <img src={graph} alt={graph} className="promote-logo" />
              <div className="promote-disc-div">
                <h3 className="promote-name">
                  High-earning ads from 25+ leading ad networks
                </h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Monetise;
