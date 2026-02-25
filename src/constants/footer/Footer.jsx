import React from 'react';
import { images } from '../../images';
import './Footer.css';

const Footer = () => {
  return (
    <footer 
      className="footer-container" 
      style={{ backgroundImage: `url(${images.footer})` }}
    ><div className="footer-content-wrapper">
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={images.Aroda} alt="ARODA Logo" />
            {/* <span>ARODA</span> */}
          </div>
          <p className="footer-tagline">Redefining how business works.</p>
          <div className="footer-socials">
            <img src={images.facebook} alt="Facebook" className="social-icon" />
            <img src={images.twitter} alt="Twitter" className="social-icon" />
            <img src={images.instagram} alt="Instagram" className="social-icon" />
            <img src={images.linkedin} alt="LinkedIn" className="social-icon" />
          </div>
        </div>

        {/* Links Navigation */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li className="active-link">About Us</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li className="active-link">support@arodafinances</li>
              <li className="active-link">+234908649838</li>
              <li className="active-link">+234908649838</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Support</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Privacy Policy</h4>
            <ul>
              <li>General</li>
              <li>Merchant</li>
              <li>Customer</li>
              <li>Visitor</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="legal-links">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Security</span>
          <span>Sitemaps</span>
        </div>
        <p className="copyright">© 2025 Aroda Finances. All rights reserved.</p>
      </div>
      </div>
      {/* Large Background Text */}
      <div className="footer-bg-text">ARODA</div>
    </footer>
  );
};

export default Footer;