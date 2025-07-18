import React from "react";
import "./Address.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Address = () => {
  return (
    <div className="address-container">
      <h2 className="address-title">Our Urban Center Locations</h2>

      {/* Store Locations */}
      <div className="address-item">
        <FaMapMarkerAlt className="icon" />
        <p>
          <strong>Patna:</strong> Visit Urban Center at 104, Kamalalay Shobha Plaza,
          behind HDFC Bank, Exhibition Road – your one-stop shop for groceries, snacks,
          clothing & household essentials.
        </p>
      </div>

      <div className="address-item">
        <FaMapMarkerAlt className="icon" />
        <p>
          <strong>Delhi:</strong> Shop from a wide variety of daily needs at Urban Center,
          Plot No.-25, Block-B, Pocket-B3, Rohini Sector-29, New Delhi.
        </p>
      </div>

      <div className="address-item">
        <FaMapMarkerAlt className="icon" />
        <p>
          <strong>Mumbai:</strong> Find groceries, snacks, and clothing at unbeatable prices
          at Shop No.-1, Hire House, Gama Gali, Versova, Andheri (W), Mumbai.
        </p>
      </div>

      {/* Contact Details */}
      <div className="address-item">
        <FaPhoneAlt className="icon" />
        <a href="tel:+919031007620" className="contact-link">
          +91 90310 07620 — Call for bulk orders, offers & home delivery
        </a>
      </div>

      <div className="address-item">
        <FaEnvelope className="icon" />
        <a href="mailto:support@urbancenter.in" className="contact-link">
          support@urbancenter.in — Drop your queries, feedback, or business inquiries
        </a>
      </div>
    </div>
  );
};

export default Address;
