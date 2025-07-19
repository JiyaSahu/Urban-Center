import React from "react";
import "./ProductGrid.css";

import p1 from "../assets/p01.png";
import p2 from "../assets/p02.png";
import p3 from "../assets/p03.png";
import p4 from "../assets/p04.png";
import p5 from "../assets/p01.png";
import p6 from "../assets/p02.png";
import p7 from "../assets/p03.png";
import p8 from "../assets/p04.png";
import p9 from "../assets/p01.png";
import p10 from "../assets/p02.png";
import p11 from "../assets/p03.png";


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
  { title: "Atta, Rice & Pulses", img: p1 },
  
  
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
            {/* <p>{item.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
