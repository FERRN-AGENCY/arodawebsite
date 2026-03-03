import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import './NavPopup.css';

const NavPopup = () => {
  return (
    <div className="nav-popup-overlay">
      <div className="nav-popup-card">
        
        {/* Changed to a Grid Container for perfect row-by-row alignment */}
        <div className="popup-links-grid">
          
          {/* Row 0: Headers */}
          <h3 className="popup-category">Aroda Market Place</h3>
          <h3 className="popup-category">Aroda Business Pro</h3>

          {/* Row 1 */}
          <div className="popup-feature-box">
            <p><a href="/merchants">What is Aroda Marketplace?</a></p>
            <p>A trusted marketplace where verified merchants sell under clear standards.</p>
          </div>
          <div className="popup-feature-box">
            <p><a href="/business">What is Aroda Business Pro?</a></p>
            <p>An all-in-one app for tracking sales, stock, staff, and performance.</p>
          </div>

          {/* Row 2 */}
          <div className="popup-feature-box active-feature">
            {/* Added "keep-bold" class to this specific p as requested */}
            <p className="keep-bold"><a href="/merchants#section">How does Aroda keep things organized?</a></p>
            <p>Structured systems ensure transactions stay smooth and predictable.</p>
          </div>
          <div className="popup-feature-box">
            <p><a href="/business#section">Can I manage my business remotely?</a></p>
            <p>Monitor performance from anywhere, anytime.</p>
          </div>

          {/* Row 3 */}
          <div className="popup-feature-box">
            <p><a href="/merchants#setup">What protections do buyers have?</a></p>
            <p>Support stays involved until problems are resolved.</p>
          </div>
          <div className="popup-feature-box">
            <p><a href="/business#staff">How are staff activities monitored?</a></p>
            <p>Actions are logged for accountability and oversight.</p>
          </div>

          {/* Row 4 */}
          <div className="popup-feature-box">
            <p><a href="/merchants#verified">How do I become a verified merchant?</a></p>
            <p>Apply, complete checks, and start selling once approved.</p>
          </div>
          <div className="popup-feature-box">
            <p><a href="/business#setup">How long does setup take?</a></p>
            <p>Most businesses can start using it within minutes.</p>
          </div>

          {/* Row 5: Footer Links */}
          <div className="popup-footer-link">
            <p><a href="/merchants#FAQ">Frequently Asked Questions</a></p>
            <p>Clear answers to the questions most businesses ask</p>
          </div>
          <div className="popup-footer-link">
            <p><a href="/business#FAQ">Frequently Asked Questions</a></p>
            <p>Understand the platform before you begin</p>
          </div>

        </div>

        {/* Column 3: Blue CTA Box */}
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