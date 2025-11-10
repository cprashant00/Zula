import React, { useState } from "react";
import "./Header.css";
import Logo from "./logo";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Logo />
        </div>

        {/* Navigation Links */}
        <nav className="header-nav">
          <NavLink
            to='/'
            className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Apps
          </NavLink>

          <NavLink
            to='/Blogs'
            className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to='/Docs'
            className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Docs
          </NavLink>
          
          <NavLink
            to='/Developer'
            className={({ isActive }) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Developers
          </NavLink>
        </nav>

        {/* Search Bar */}
        <div className="header-search">
          <div className="search-container">
            <span className="search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input 
              type="text" 
              placeholder="Search for apps" 
              className="search-input"
            />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="header-auth">
          <button className="auth-btn auth-login">Login</button>
          <button className="auth-btn auth-register">Register</button>
        </div>
      </div>
    </header>
  );
};