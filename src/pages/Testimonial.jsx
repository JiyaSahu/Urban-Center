import React, { useState } from 'react';
import './Testimonial.css';
import bgImg from '../assets/h1.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ritika Sharma',
    role: 'Verified Buyer',
    feedback: 'Urban Center is my one-stop shop for groceries and fashion. The store is well-organized, and the variety of snacks and household items is fantastic. Shopping here saves me both time and money!',
  },
  {
    name: 'Amit Raj',
    role: 'Local Guide on Google',
    feedback: 'A great place in Patna for affordable clothing and food products. The staff is very cooperative and the offers are value for money. Urban Center feels like a mini-mall under one roof.',
  },
  {
    name: 'Nikita Anand',
    role: 'Housewife',
    feedback: 'I love buying groceries and daily essentials from Urban Center. Their fresh produce section is always stocked and prices are reasonable. The in-store deals are always a plus!',
  },
  {
    name: 'Manish Thakur',
    role: 'Food Blogger',
    feedback: 'Urban Center’s snacks and ready-to-eat items are great for quick bites. I often feature their food products in my reviews because of quality and affordability.',
  },
  {
    name: 'Priya Sinha',
    role: 'Student',
    feedback: 'I recently bought trendy tops and casual wear at a great discount from Urban Center. It’s now my go-to destination for fashion and food essentials in one place.',
  },
  {
    name: 'Rahul Verma',
    role: 'Digital Marketer',
    feedback: 'Urban Center combines convenience with variety. From groceries to clothes to food – everything I need is under one roof. Highly recommended for busy professionals.',
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    if (window.innerWidth <= 768) {
      return [testimonials[index]];
    }
    return testimonials.slice(index, index + 3);
  };

  return (
    <div className="testimonial-sectionR">
      <div
        className="bg-overlay"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${bgImg})`,
        }}
      ></div>

      <div className="testimonial-header">
        <p>Trusted by Patna’s Smart Shoppers</p>
        <h2>What Customers Say About Urban Center</h2>
      </div>

      <div className="testimonial-carousel">
        <button className="nav-arrow leftR" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        {getVisibleTestimonials().map((item, i) => (
          <div key={i} className="testimonial-boxR">
            <div className="stars">★★★★★</div>
            <p className="feedback">{item.feedback}</p>
            <p className="name"><strong>{item.name}</strong></p>
            <p className="role">{item.role}</p>
          </div>
        ))}

        <button className="nav-arrow rightR" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
