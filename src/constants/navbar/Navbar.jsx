import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../images';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 960);
  
  // States for sticky scroll behavior
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  
  const navRef = useRef(null);

  // Handle clicks outside the dropdowns and window resizing
  useEffect(() => {
    const handleEvents = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu('home');
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      const desktopCheck = window.innerWidth > 960;
      setIsDesktop(desktopCheck); 

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

  // Handle sticky scroll visibility AND hide dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Navbar is visible if scrolling up OR if within 50px of the very top
      setNavbarVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);

      // ADDED: Close any open dropdown menus as soon as the user starts scrolling
      if (currentScrollPos > 10) { 
        setActiveMenu('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`navbar-wrapper ${isMobileMenuOpen ? 'mobile-nav-active' : ''} ${navbarVisible ? 'nav-visible' : 'nav-hidden'}`} 
      ref={navRef}
    >
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/home"><img src={images.Aroda} alt="ARODA" /></a>
        </div>

        <ul className="navbar-links desktop-only">
          <li className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`} onClick={() => setActiveMenu('home')}>Home</li>
          
          {/* SOLUTIONS DROPDOWN (Two Columns) */}
          <li className={`nav-item dropdown ${activeMenu === 'solutions' ? 'active' : ''}`} 
              onClick={() => setActiveMenu(prev => prev === 'solutions' ? 'home' : 'solutions')}
              style={{ position: 'relative' }}>
            Solutions <IoIosArrowDown className="arrow-icon" />
            
            {isDesktop && activeMenu === 'solutions' && (
              <div className="resources-desktop-dropdown solutions-dropdown">
                
                {/* Column 1: Aroda Market Place */}
                <div className="dropdown-column">
                  <span className="dropdown-title"><a href="/merchants">Aroda market place</a></span>
                  <a href="/merchants#section">About</a>
                  <a href="/merchants#setup">Features</a>
                  <a href="/merchants#FAQ">FAQ</a>
                </div>

                {/* Column 2: Aroda Business Pro */}
                <div className="dropdown-column">
                  <span className="dropdown-title"><a href="/business">Aroda business pro</a></span>
                  <a href="/business#section">About</a>
                  <a href="/business#setup">Features</a>
                  <a href="/business#FAQ">FAQ</a>
                </div>

              </div>
            )}
          </li>
          
          {/* RESOURCES DROPDOWN */}
          <li className={`nav-item dropdown ${activeMenu === 'resources' ? 'active' : ''}`} 
              onClick={() => setActiveMenu(prev => prev === 'resources' ? 'home' : 'resources')}
              style={{ position: 'relative' }}>
            Resources <IoIosArrowDown className="arrow-icon" />
            
            {isDesktop && activeMenu === 'resources' && (
              <div className="resources-desktop-dropdown">
                <a href="/blog">Blog</a>
                <a href="/community">Community</a>
                <a href="/faq">FAQ</a>
              </div>
            )}
          </li>

          <li className="nav-item" onClick={() => setActiveMenu('business')}>Business Solutions</li>
        </ul>

        <div className="navbar-cta desktop-only">
          <button className="get-started-btn">Get Started</button>
        </div>
        
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>
      
      {/* MOBILE MENU DRAWER */}
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
                <span className="mobile-sub-title">Aroda market place</span>
                <p><a href="/merchants#section">About</a></p>
                <p><a href="/merchants#setup">Features</a></p>
                <p><a href="/merchants#FAQ">FAQ</a></p>
                
                <span className="mobile-sub-title">Aroda business pro</span>
                <p><a href="/business#section">About</a></p>
                <p><a href="/business#setup">Features</a></p>
                <p><a href="/business#FAQ">FAQ</a></p>
            </div>
          )}

          <li onClick={() => setActiveMenu(activeMenu === 'resources' ? 'home' : 'resources')}>
            Resources <IoIosArrowDown className={activeMenu === 'resources' ? 'rotate' : ''} />
          </li>
          {activeMenu === 'resources' && (
            <div className="mobile-sub-menu">
                <p><a href="/blog">Blog</a></p>
                <p><a href="/community">Community</a></p>
                <p><a href="/faq">FAQ</a></p>
            </div>
          )}

          <li onClick={() => setIsMobileMenuOpen(false)}>Business Solutions</li>
          <li className="mobile-cta-item">
            <button className="get-started-btn mobile-btn">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;