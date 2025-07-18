import React from 'react';
import { FaBolt } from 'react-icons/fa';
import './AnnouncementBanner.css';

const messages = [
  "Urban Center Grand Opening Sale – Up to 50% OFF on Fashion & Grocery Essentials!",
  "Get Flat 25% OFF on All Snacks & Beverages – This Week Only!",
  "Buy More Save More: Extra 10% OFF on Grocery Orders Above ₹999",
  "New Arrivals: Trendy Summer Collection – Shop Now at Urban Center!",
  "Combo Deals: Groceries + Snacks + Essentials at Unbeatable Prices!",
  "Your One-Stop Store for Food, Fashion & More – Visit Urban Center Today!",
];

const AnnouncementBanner = () => {
  return (
    <div className="announcement-banner">
      <div className="scrolling-wrapper">
        <div className="scrolling-text">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <FaBolt className="bolt-icon" />
              <span>{msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
