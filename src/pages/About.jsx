import React from 'react';
import AboutHeader from '../pages/AboutHeader';
import './About.css';
import videoSrc from '../assets/dog2.mp4'; // Replace with an Urban Center promo video
import groceryIcon from '../assets/food2.png';
import clothesIcon from '../assets/food2.png';
import snacksIcon from '../assets/food2.png';
import hygieneIcon from '../assets/food2.png';
import certifiedIcon from '../assets/food2.png';
import foodIcon from '../assets/food2.png';

const features = [
  { icon: groceryIcon, label: "Fresh Groceries" },
  { icon: clothesIcon, label: "Trendy Clothing" },
  { icon: snacksIcon, label: "Tasty Snacks" },
  { icon: foodIcon, label: "Ready-to-Eat Meals" },
  { icon: hygieneIcon, label: "Hygiene Essentials" },
  { icon: certifiedIcon, label: "Certified Products" }
];

const About = () => {
  return (
    <div>
      <AboutHeader />

      <section className="why-section">
        <div className="left-video">
          <video autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="right-content">
          <p className="sub-heading">ABOUT US</p>
          <h2 className="main-heading">Urban Center – One-Stop Destination for Daily Essentials in Bihar</h2>
          <p className="description">
            Urban Center is Bihar’s fastest-growing retail destination offering a wide range of groceries, fashionable clothing, delicious snacks, and daily essentials — all under one roof.
          </p>
          <p className="description">
            Whether you're shopping for your home, wardrobe, or kitchen, Urban Center brings you trusted brands, fresh produce, and unbeatable prices with a modern shopping experience.
          </p>

          <h2 className="main-heading">Why Shop at Urban Center?</h2>

          <div className="features-grid">
            {features.map((item, idx) => (
              <div key={idx} className="feature-item">
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <button className="btn-primary">
              <a href="tel:+919000000000" title="Call Urban Center">📞 Call Us Now</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
