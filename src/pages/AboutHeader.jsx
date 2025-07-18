import React from 'react';
import './AboutHeader.css';

const AboutHeader = () => {
  return (
    <div className="about-header">
      <div className="overlay">
        <h1 className="about-title">About</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> - About
        </p>
      </div>

      <div className="wave-container">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,165.3C672,192,768,192,864,165.3C960,139,1056,85,1152,85.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutHeader;
