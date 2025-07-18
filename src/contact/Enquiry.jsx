import React, { useRef } from 'react';
import './Enquiry.css';

import icon1 from '../assets/food2.png'; // Use different icons for best result
import icon2 from '../assets/food2.png';
import icon3 from '../assets/food2.png';

const floatingIcons = [icon1, icon2, icon3];

const scriptURL = 'https://script.google.com/macros/s/AKfycbwxzRVIvoCroBmUpAdFlxMp6Rkig29MVCxXaUZ94MGVR8DASZq5j_AKhEoxA63EZyHaTg/exec';

const Enquiry = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((response) => {
        alert('Thank you! Your feedback has been submitted.');
        formRef.current.reset();
      })
      .catch((error) => {
        alert('Error submitting the form. Please try again.');
        console.error('Submission error:', error.message);
      });
  };

  return (
    <div className="enquiry-bg">
      <div className="floating-icons">
        {Array.from({ length: 20 }).map((_, index) => {
          const icon = floatingIcons[index % floatingIcons.length];
          const style = {
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${20 + Math.random() * 25}px`,
          };
          return <img key={index} src={icon} className="floating-icon" style={style} alt="floating-icon" />;
        })}
      </div>

      <div className="enquiry-card">
        <h2 className="form-title">Share Your Experience with Urban Center</h2>
        <p className="form-subtitle">We value your opinion! Let us know how we can improve your shopping experience.</p>

        <form ref={formRef} onSubmit={handleSubmit} name="submit-to-google-sheet" className="enquiry-form">
          <input type="text" placeholder="Your Full Name" name="Name" required />
          <input type="tel" placeholder="Phone Number" name="Mobile" required />
          <input type="text" placeholder="Your City or Location" name="Location" required />
          <textarea rows="4" placeholder="Your Message / Suggestions / Feedback" name="Comment" required />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
