import React from "react";
import "./Footer.css";
import { mockFooterLinks } from "../../mockData";
import Logo from "../Header/logo";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* More Apps */}
          <div className="footer-column">
            <h3 className="footer-title">More Apps</h3>
            <ul className="footer-links">
              {mockFooterLinks.moreApps.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Android Statistics */}
          <div className="footer-column">
            <h3 className="footer-title">Android Statistics</h3>
            <ul className="footer-links">
              {mockFooterLinks.androidStatistics.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About AppBrain */}
          <div className="footer-column">
            <h3 className="footer-title">About AppBrain</h3>
            <ul className="footer-links">
              {mockFooterLinks.aboutAppBrain.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-column">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-icons">
              {/* Add social media icons here later */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-brand">
              <div className="">
                <Logo/>
              </div>
            </div>
            <div className="copyright">
              © 2024 AppBrain. All Rights Reserved
            </div>
          </div>
        </div>

        {/* Mobile Bottom Bar */}
        <div className="mobile-bottom-bar">
          <div className="mobile-indicator"></div>
        </div>
      </div>
    </footer>
  );
};