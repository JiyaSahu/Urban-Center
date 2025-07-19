import React, { useState } from "react";
import "./CategoryMenu.css";

import img1 from "../assets/women.jpg";
import img2 from "../assets/kids.jpg";
import img3 from "../assets/men.jpg";
import img4 from "../assets/household.jpeg";
import img5 from "../assets/travel.jpeg";
import img6 from "../assets/snacks.jpg";
import img7 from "../assets/personal.jpeg";

const menuData = [
  {
    title: "CLOTHING",
    bgColorClass: "bg-clothing",
    items: [
      {
        label: "Women",
        img: img1,
        subcategories: [
          {
            title: "WESTERN WEAR",
            links: ["T-Shirts & Tops", "Dresses", "Jeans", "Trousers", "Shorts"],
          },
          {
            title: "ACCESSORIES",
            links: ["Bags", "Jewelry", "Scarves", "Shoes"],
          },
        ],
      },
      {
        label: "Kids & Infants",
        img: img2,
        subcategories: [
          {
            title: "BOYS",
            links: ["T-Shirts", "Shorts", "Shoes"],
          },
          {
            title: "GIRLS",
            links: ["Dresses", "Hair Accessories", "Sandals"],
          },
        ],
      },
      {
        label: "Men's Fashion",
        img: img3,
        subcategories: [
          {
            title: "TOP WEAR",
            links: ["T-Shirts", "Shirts", "Blazers"],
          },
          {
            title: "BOTTOM WEAR",
            links: ["Jeans", "Trousers", "Shorts"],
          },
        ],
      },
    ],
  },
  {
    title: "GENERAL MERCHANDISE",
    bgColorClass: "bg-merchandise",
    items: [
      {
        label: "Home Essentials",
        img: img4,
        subcategories: [
          {
            title: "CLEANING",
            links: ["Mops", "Detergents", "Brooms"],
          },
          {
            title: "KITCHEN",
            links: ["Utensils", "Gas Lighters", "Grinders"],
          },
        ],
      },
      {
        label: "Travel",
        img: img5,
        subcategories: [
          {
            title: "LUGGAGE",
            links: ["Trolley Bags", "Backpacks"],
          },
          {
            title: "ACCESSORIES",
            links: ["Neck Pillows", "Locks", "Tags"],
          },
        ],
      },
    ],
  },
  {
    title: "FOOD GROCERIES",
    bgColorClass: "bg-groceries",
    items: [
      {
        label: "Snacks",
        img: img6,
        subcategories: [
          {
            title: "PACKAGED FOOD",
            links: ["Chips", "Cookies", "Juices"],
          },
          {
            title: "DRY FRUITS",
            links: ["Almonds", "Cashews", "Dates"],
          },
        ],
      },
      {
        label: "Daily Essentials",
        img: img7,
        subcategories: [
          {
            title: "DAIRY",
            links: ["Milk", "Cheese", "Butter"],
          },
          {
            title: "BREAD",
            links: ["Brown", "White", "Multigrain"],
          },
        ],
      },
    ],
  },
];

const CategoryMenu = () => {
  const [activeParentIndex, setActiveParentIndex] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  return (
    <div className="category-menu-row">
      {menuData.map((section, parentIdx) => (
        <div
          key={parentIdx}
          className={`category-section ${section.bgColorClass}`}
        >
          <h3>{section.title}</h3>
          <div className="category-items">
            {section.items.map((item, idx) => (
              <div
                className="item-with-hover"
                key={idx}
                onMouseEnter={() => {
                  setActiveParentIndex(parentIdx);
                  setActiveItemIndex(idx);
                }}
                onMouseLeave={() => {
                  setActiveParentIndex(null);
                  setActiveItemIndex(null);
                }}
              >
                <div className="item">
                  <img src={item.img} alt={item.label} />
                  <span>{item.label}</span>
                </div>

                {activeParentIndex === parentIdx &&
                  activeItemIndex === idx && (
                    <div className="subcategories show">
                      {item.subcategories.map((sub, i) => (
                        <div className="subcategory" key={i}>
                          <h4>{sub.title}</h4>
                          <ul>
                            {sub.links.map((link, l) => (
                              <li key={l}>{link}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
