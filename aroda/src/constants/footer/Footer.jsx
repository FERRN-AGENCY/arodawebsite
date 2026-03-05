import React, { useState, useEffect } from 'react';
import { images } from '../../images';
import './Footer.css';

const Footer = () => {
  // State to track the current page URL for active highlighting
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Helper function to easily apply the active class
  const getActive = (path) => (currentPath === path ? 'active-link' : '');

  return (
    <footer 
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
            <p className="footer-tagline">Redefining how business works.</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/16xmrmdeTv/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><img src={images.facebook} alt="Facebook" className="social-icon" /></a>
              <a href="https://x.com/arodafinance?s=21&t=OJFO75xP_pFkZYBKV2hobw" target="_blank" rel="noreferrer"><img src={images.twitter} alt="Twitter" className="social-icon" /></a>
              <a href="https://www.instagram.com/arodafinance?igsh=MXIyODhjN3dmYWZsYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><img src={images.instagram} alt="Instagram" className="social-icon" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src={images.linkedin} alt="LinkedIn" className="social-icon" /></a>
            </div>
          </div>

          {/* Links Navigation */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li className={getActive('/about')}><a href="/about">About Us</a></li>
                <li className={getActive('/pricing')}><a href="/pricing">Pricing</a></li>
                <li className={getActive('/careers')}><a href="/careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact Us</h4>
              <ul>
                {/* respectfully linking emails and phone numbers to trigger device apps */}
                <li><a href="Info@arodagroup.com">Info@arodagroup.com</a></li>
                <li><a href="tel:+2349083067701">+234 908 306 7701</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li className={getActive('/blog')}><a href="/blog">Blog</a></li>
                <li className={getActive('/faq')}><a href="/faq">FAQs</a></li>
                <li className={getActive('/support')}><a href="/support">Support</a></li>
                <li className={getActive('/about')}><a href="/about">About Us</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Privacy Policy</h4>
              <ul>
                <li className={getActive('/privacy/general')}><a href="/privacy/general">General</a></li>
                <li className={getActive('/privacy/merchant')}><a href="/privacy/merchant">Merchant</a></li>
                <li className={getActive('/privacy/customer')}><a href="/privacy/customer">Customer</a></li>
                <li className={getActive('/privacy/visitor')}><a href="/privacy/visitor">Visitor</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="/terms" className={getActive('/terms')}>Terms of Service</a>
            <a href="/privacy/general" className={getActive('/privacy/general')}>Privacy Policy</a>
            <a href="/security" className={getActive('/security')}>Security</a>
            <a href="/sitemap" className={getActive('/sitemap')}>Sitemaps</a>
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