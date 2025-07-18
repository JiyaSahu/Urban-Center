import React from 'react';
import Address from './Address';
import ContactForm from './ContactForm';
// import MapComponent from './MapComponent';
import './Merge.css';

const Merge = () => {
  return (
    <div className="merge-container">
      <h2 className="merge-title">Get in Touch with Urban Center</h2>
      <p className="merge-subtitle">
        For any inquiries about groceries, fashion wear, snacks or food deals – reach out to your nearest Urban Center outlet.
      </p>

      <div className="contact-box">
        <div className="left">
          <Address />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>

      {/* <div className="map-box">
        <MapComponent />
      </div> */}
    </div>
  );
};

export default Merge;
