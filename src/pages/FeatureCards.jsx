import React from "react";
import "./FeatureCards.css";
import { FaTruck, FaTshirt, FaAppleAlt, FaTags } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Free Home Delivery",
    desc: "Urban Center offers free delivery on groceries, snacks & clothing across Patna.",
    bgColor: "#C9ADA7",
  },
  {
    icon: <FaTshirt />,
    title: "Latest Fashion Trends",
    desc: "Shop affordable and trendy clothes for men, women & kids—only at Urban Center.",
    bgColor: "#4A4E69",
  },
  {
    icon: <FaAppleAlt />,
    title: "Fresh Groceries",
    desc: "Get farm-fresh fruits, vegetables, and kitchen essentials delivered fast.",
    bgColor: "#9A8C98",
  },
  {
    icon: <FaTags />,
    title: "Best Deals Daily",
    desc: "Flat 50% OFF on snacks, meals & household items. Offers updated daily!",
    bgColor: "#22223B",
  },
];

const emojis = [
  "🛍️", "🥦", "🍎", "👕", "🧴", "🥫", "📦", "🧺",
  "🍇", "👗", "👖", "🛒", "🧃", "🧼", "🍪"
];

export default function FeatureCards() {
  return (
    <section className="feature-section">
      <div className="floating-bgF">
        {emojis.map((emoji, index) => (
          <span
            className="pet-emojiF"
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
              fontSize: `${20 + Math.random() * 20}px`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="features-wrapper">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <div
              className="icon-circle"
              style={{ backgroundColor: feature.bgColor }}
            >
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
