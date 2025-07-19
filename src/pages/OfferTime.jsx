import React, { useState, useEffect } from "react";
import "./OfferTime.css";
import bgImage from "../assets/h1.jpg"; // Replace with your actual banner

const OfferTime = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-07-30T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Urban Center Mega Sale – Flat 50% OFF!</h1>
        <p className="hero-subtitle">
          Groceries, Fashion & Snacks at unbeatable prices. Shop now at Patna's favorite family store – Urban Center.
        </p>
        <div className="countdown">
          <div className="time-box">
            <span>{timeLeft.days}</span>
            <small>DAYS</small>
          </div>
          <div className="time-box">
            <span>{timeLeft.hours}</span>
            <small>HOURS</small>
          </div>
          <div className="time-box">
            <span>{timeLeft.minutes}</span>
            <small>MINS</small>
          </div>
          <div className="time-box">
            <span>{timeLeft.seconds}</span>
            <small>SECS</small>
          </div>
        </div>
        <button className="hero-button">SHOP DEALS NOW</button>
      </div>
    </section>
  );
};

export default OfferTime;
