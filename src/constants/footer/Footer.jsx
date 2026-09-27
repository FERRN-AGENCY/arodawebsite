import React from 'react';
import { images } from '../../images';
import './Footer.css';

const Footer = () => {
  // State to track the current page URL for active highlighting
  const currentPath = window.location.pathname;

  // Helper function to easily apply the active class
  const getActive = (path) => (currentPath === path ? 'active-link' : '');

  return (
    <footer id="contact"
      className="footer-container"
      style={{ backgroundImage: `url(${images.footer})` }}
    >
      <div className="footer-content-wrapper">
        <div className="footer-top">

          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <a href="/home"><img src={images.Aroda} alt="ARODA Logo" /></a>
            </div>
            <p className="footer-tagline">Experience. Expertise. Execution.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/16xmrmdeTv/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><img src={images.facebook} alt="Facebook" className="social-icon" /></a>
              <a href="https://x.com/arodafinance?s=21&t=OJFO75xP_pFkZYBKV2hobw" target="_blank" rel="noreferrer"><img src={images.twitter} alt="Twitter" className="social-icon" /></a>
              <a href="https://www.instagram.com/arodafinance?igsh=MXIyODhjN3dmYWZsYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><img src={images.instagram} alt="Instagram" className="social-icon" /></a>
              <img src={images.linkedin} alt="LinkedIn" className="social-icon" />
            </div>
          </div>

          {/* Links Navigation */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/#group">About Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Us</h4>
              <ul>
                {/* respectfully linking emails and phone numbers to trigger device apps */}
                <li><a href="mailto:Info@arodagroup.com">Info@arodagroup.com</a></li>
                <li><a href="tel:+2349083067701">+234 908 306 7701</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li className={getActive('/blog')}><a href="/blog">Blog</a></li>
                <li className={getActive('/faq')}><a href="/faq">FAQs</a></li>
                <li><a href="/#group">About Us</a></li>
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
          </div>
          {/* Dynamically grabs the current year so you never have to update it manually! */}
          <p className="copyright">© {new Date().getFullYear()} Aroda Finances. All rights reserved.</p>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="footer-bg-text">ARODA</div>
    </footer>
  );
};

export default Footer;
