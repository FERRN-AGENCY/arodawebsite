import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../images';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import NavPopup from './NavPopup';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  // Track desktop status to prevent NavPopup on mobile
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 960);
  const navRef = useRef(null);

  useEffect(() => {
    const handleEvents = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu('home');
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      const desktopCheck = window.innerWidth > 960;
      setIsDesktop(desktopCheck); // Update desktop status on resize

      if (desktopCheck && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleEvents);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleEvents);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar-wrapper ${isMobileMenuOpen ? 'mobile-nav-active' : ''}`} ref={navRef}>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/home"><img src={images.Aroda} alt="ARODA" /></a>
        </div>

        <ul className="navbar-links desktop-only">
          <li className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`} onClick={() => setActiveMenu('home')}>Home</li>
          <li className={`nav-item dropdown ${activeMenu === 'solutions' ? 'active' : ''}`} 
              onClick={() => setActiveMenu(prev => prev === 'solutions' ? 'home' : 'solutions')}>
            Solutions <IoIosArrowDown className="arrow-icon" />
          </li>
          <li className="nav-item">Resources</li>
          <li className="nav-item" onClick={() => setActiveMenu('business')}>Business Solutions</li>
        </ul>

        <div className="navbar-cta desktop-only">
          <button className="get-started-btn">Get Started</button>
        </div>
        
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>
      
      <div 
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : 'drawer-hidden'}`}
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      >
        <div className="drawer-header">
          <IoMdClose className="drawer-close-icon" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <ul className="mobile-links">
          <li onClick={() => setIsMobileMenuOpen(false)}>Home</li>
          <li onClick={() => setActiveMenu(activeMenu === 'solutions' ? 'home' : 'solutions')}>
            Solutions <IoIosArrowDown className={activeMenu === 'solutions' ? 'rotate' : ''} />
          </li>
          {activeMenu === 'solutions' && (
            <div className="mobile-sub-menu">
                <p><a href="/merchants#FAQ">Market Place</a></p>
                <p><a href="/business">Business Pro</a></p>
            </div>
          )}
          <li onClick={() => setIsMobileMenuOpen(false)}>Resources</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Business Solutions</li>
          <li className="mobile-cta-item">
            <button className="get-started-btn mobile-btn">Get Started</button>
          </li>
        </ul>
      </div>

      {/* Logic Update: Only renders NavPopup if it's Desktop AND Solutions is active */}
      <div className="desktop-only">
        {isDesktop && activeMenu === 'solutions' && <NavPopup />}
      </div>
    </nav>
  );
};

export default Navbar;