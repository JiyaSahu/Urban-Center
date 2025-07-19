import React, { useState, useEffect } from 'react';
import Typewriter from 'react-typewriter-effect';
import './Home.css';
import img1 from '../assets/h1.jpg';
import img2 from '../assets/h2.jpg';
import img3 from '../assets/h3.jpg';
import img4 from '../assets/h4.jpg';
import img5 from '../assets/h5.jpg';

const slides = [
  {
    image: img1,
    title: "Shop Smart at Urban Center",
    subtitle: "Big savings on groceries, clothes, snacks, and essentials – all under one roof!"
  },
  {
    image: img2,
    title: "Fresh Groceries Daily",
    subtitle: "Farm-fresh fruits, vegetables, and pantry items delivered to your neighborhood."
  },
  {
    image: img3,
    title: "Trendy Fashion for All",
    subtitle: "Affordable clothing for men, women, and kids – style meets savings."
  },
  {
    image: img4,
    title: "Snacks & Quick Bites",
    subtitle: "Top brands and local favorites – munch anytime, anywhere!"
  },
  {
    image: img5,
    title: "Urban Food Specials",
    subtitle: "Hot meals, packed with flavor – your one-stop spot for delicious deals."
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="carousel-container">
      <img
        src={currentSlide.image}
        alt={currentSlide.title}
        className="carousel-image"
      />
      <div className="overlay-content">
        <h1 className="carousel-title">
          <Typewriter
            key={currentSlide.title}
            text={currentSlide.title}
            typeSpeed={70}
            cursorColor="#FFC8DD"
          />
        </h1>
        <p className="carousel-subtitle">{currentSlide.subtitle}</p>
      </div>

      <button className="nav-buttonH left" onClick={goToPrev}>
        &#9664;
      </button>
      <button className="nav-buttonH right" onClick={goToNext}>
        &#9654;
      </button>
    </div>
  );
}

export default Home;
