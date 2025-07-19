import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Urban Center Logo" />
      </div>

      <div className="social-iconsF">
        <a href="tel:+8092198267" className="call" title="Call Us">
          <FaPhoneAlt />
        </a>
        <a href="mailto:urbancenter59@gmail.com" className="email" title="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/urbancenter59/?hl=en"
          className="ig"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61578091002447"
          className="fb"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="#" className="yt" title="YouTube">
          <FaYoutube />
        </a>
      </div>

      <div className="footer-address">
        Urban Center, Near Digha Main Road, Patna – 800011, Bihar, India
      </div>

      <div className="footer-copy">
        © 2025 by Urban Center | Made By <a href="https://makershouse.in/">Maker House</a>
      </div>

      <a
        href="https://wa.me/9229056460"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
