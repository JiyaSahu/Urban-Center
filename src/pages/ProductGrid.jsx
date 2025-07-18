import React from "react";
import "./ProductGrid.css";

// Static images
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";

const productItems = [
  { title: "Fresh Biscuits & Cookies", img: p1 },
  { title: "Crunchy Chips & Namkeen", img: p2 },
  { title: "Summer Drinks & Coolers", img: p3 },
  { title: "Tea, Coffee & Beverages", img: p4 },
  { title: "Instant Noodles & Pasta", img: p5 },
  { title: "Breakfast Cereals & Muesli", img: p6 },
  { title: "Cakes, Candies & Chocolates", img: p7 },
  { title: "Cooking Oils & Pure Ghee", img: p8 },
  { title: "Dry Fruits & Superfoods", img: p9 },
  { title: "Sauces, Pickles & Spreads", img: p10 },
  { title: "Atta, Rice & Pulses", img: p11 },
  { title: "Premium Masalas & Spices", img: p12 },
  { title: "Everyday Grocery Essentials", img: p13 },
];

const ProductGrid = () => {
  return (
    <div className="product-section">
      <h2>
        Explore <span className="highlight">Top Grocery Categories</span> at{" "}
        <span className="highlight-alt">Urban Center</span>
      </h2>
      <p className="tagline">
        Shop high-quality groceries, snacks, and kitchen essentials at affordable prices in Patna.
      </p>
      <div className="product-grid">
        {productItems.map((item, idx) => (
          <div className="product-card" key={idx}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
