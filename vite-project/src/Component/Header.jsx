import React from "react";
import { MenuOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import "./Header.css";

const UberHeader = ({ onMenuClick }) => {
  return (
    <header className="Header" role="banner" aria-label="Main header">
      <div className="Header__inner">
        
        <button
          className="Header__menu-btn"
          aria-label="Open menu"
          onClick={onMenuClick}
        >
          <MenuOutlined />
        </button>

        <a href="/" className="Header__logo" aria-label="Uber Home">
          <strong>UBER</strong>
        </a>

        <nav className="Header__nav" role="navigation" aria-label="Primary navigation">
          <a className="nav-link" href="/ride">Ride</a>
          <a className="nav-link" href="/Driver">Driver</a>
          <a className="nav-link" href="/deliver">Deliver</a>
          <a className="nav-link" href="/packages">Packages</a>
        </nav>

        <div className="Header__search">
          <div className="search-location">
            <input
              type="text"
              className="search-input"
              placeholder="Enter pickup location"
              aria-label="Pickup location"
            />
            <span className="location-dot"></span>
          </div>

          <div className="search-action">
            <input
              type="text"
              className="search-input"
              placeholder="Where to?"
              aria-label="Destination"
            />
            <button className="search-btn">
              <SearchOutlined />
              
            </button>
          </div>
        </div>

        <div className="Header__actions">
          <a className="action-btn desktop-only" href="/help">Help</a>
          <a className="action-btn" href="/login">
            <UserOutlined />
            <span className="action-text">Log in</span>
          </a>
          <a className="cta-btn" href="/">Sign up</a>
        </div>

      </div>
    </header>
  );
};

export default UberHeader;
