import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import './NavPopup.css';

const NavPopup = () => {
  return (
    <div className="nav-popup-overlay">
      <div className="nav-popup-card">
        
        {/* Column 1: Market Place */}
        <div className="popup-left">
          <span className="popup-category">Aroda Market Place</span>
          
          <div className="popup-feature-box" >
            <h4 ><a href="/merchants">What is Aroda Marketplace?</a></h4>
            <p>A trusted marketplace where verified merchants sell under clear standards.</p>
          </div>

          <div className="popup-feature-box active-feature">
            <h4>How Aroda keep things organized?</h4>
            <p>Structured systems ensure transactions stay smooth and predictable.</p>
          </div>

          <div className="popup-feature-box">
            <h4>What protections do buyers have?</h4>
            <p>Support stays involved until problems are resolved.</p>
          </div>

          <div className="popup-footer-link">
            <span>Frequently Asked Questions</span>
          </div>
        </div>

        {/* Column 2: Business Pro */}
        <div className="popup-left">
          <span className="popup-category">Aroda Business Pro</span>
          
          <div className="popup-feature-box">
            <h4>What is Aroda Business Pro?</h4>
            <p>An all-in-one app for tracking sales, stock, staff, and performance.</p>
          </div>

          <div className="popup-feature-box">
            <h4>Can I manage my business remotely?</h4>
            <p>Monitor performance from anywhere, anytime.</p>
          </div>

          <div className="popup-feature-box">
            <h4>How long does setup take?</h4>
            <p>Most businesses can start using it within minutes.</p>
          </div>

          <div className="popup-footer-link">
            <span>Frequently Asked Questions</span>
          </div>
        </div>

        {/* Right Side: Blue CTA Box */}
        <div className="popup-right-cta">
          <div className="cta-content">
            <h3>Systems built for growth</h3>
            <p>Whether you're running a business, starting one, or supporting economic growth, Aroda is built for you.</p>
          </div>
          <button className="cta-button">
            Get Started <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavPopup;