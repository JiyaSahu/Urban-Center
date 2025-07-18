import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Urban Center" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/products" onClick={closeMenu} className={location.pathname === '/products' ? 'active' : ''}>Shop</Link>
          <Link to="/mergo" onClick={closeMenu} className={location.pathname === '/mergo' ? 'active' : ''}>Contact Us</Link>
          <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/enquiry" onClick={closeMenu} className={location.pathname === '/enquiry' ? 'active' : ''}>Enquiry</Link>
        </nav>

        {/* Social Icons + Button */}
        <div className="social-iconsN">
          <a href="tel:+918092198267" title="Call" className="phone-icon"><FaPhone /></a>
          <a href="mailto:urbancenter59@gmail.com" title="Email"><FaEnvelope /></a>
          <a href="https://www.instagram.com/urbancenter59/?hl=en" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61578091002447" target="_blank" rel="noreferrer" title="Facebook"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noreferrer" title="YouTube"><FaYoutube /></a>

          <div className="contact-btn">
            <button>
              <Link to="/bookAppointment" className="bookAppointment">Book Appointment</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
