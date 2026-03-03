import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../images';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  // 1. DEDICATED DROPDOWN STATE: Only tracks which menu is currently toggled open
  const [openDropdown, setOpenDropdown] = useState('');
  
  // 2. DEDICATED ROUTE STATE: Tracks the actual page URL
  const [currentPath, setCurrentPath] = useState('');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 960);
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  
  const navRef = useRef(null);

  // Set the current path once the component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Checkers to see if a specific nav item should be highlighted based on the URL
  const isHomeActive = currentPath === '/home' || currentPath === '/';
  const isSolutionsActive = currentPath.includes('/business') || currentPath.includes('/merchants');
  const isResourcesActive = currentPath.includes('/blog') || currentPath.includes('/community') || currentPath.includes('/faq');

  // Handle clicks outside the dropdowns and window resizing
  useEffect(() => {
    const handleEvents = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(''); // Close dropdowns when clicking outside
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
      
      setNavbarVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);

      // Close open dropdown menus as soon as the user starts scrolling
      if (currentScrollPos > 10) { 
        setOpenDropdown('');
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
          {/* HOME: Now acts as a real link, redirects to /home, and highlights if on home */}
          <li 
            className={`nav-item ${isHomeActive ? 'active' : ''}`} 
            onClick={() => window.location.href = '/home'}
          >
            Home
          </li>
          
          {/* SOLUTIONS DROPDOWN */}
          <li 
            /* Highlighted if the URL is /business or /merchants, OR if the dropdown is manually opened */
            className={`nav-item dropdown ${(isSolutionsActive || openDropdown === 'solutions') ? 'active' : ''}`} 
            onClick={() => setOpenDropdown(prev => prev === 'solutions' ? '' : 'solutions')}
            style={{ position: 'relative' }}
          >
            Solutions <IoIosArrowDown className="arrow-icon" />
            
            {isDesktop && openDropdown === 'solutions' && (
              <div className="resources-desktop-dropdown solutions-dropdown">
                <div className="dropdown-column">
                  <span className="dropdown-title"><a href="/merchants">Aroda market place</a></span>
                  <a href="/merchants#section">About</a>
                  <a href="/merchants#setup">Features</a>
                  <a href="/merchants#FAQ">FAQ</a>
                </div>
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
          <li 
            /* Highlighted if the URL is a resource page, OR if the dropdown is manually opened */
            className={`nav-item dropdown ${(isResourcesActive || openDropdown === 'resources') ? 'active' : ''}`} 
            onClick={() => setOpenDropdown(prev => prev === 'resources' ? '' : 'resources')}
            style={{ position: 'relative' }}
          >
            Resources <IoIosArrowDown className="arrow-icon" />
            
            {isDesktop && openDropdown === 'resources' && (
              <div className="resources-desktop-dropdown">
                <a href="/blog">Blog</a>
                <a href="/community">Community</a>
                <a href="/faq">FAQ</a>
              </div>
            )}
          </li>

          <li className="nav-item" onClick={() => window.location.href = '/business'}>Business Solutions</li>
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
          {/* Mobile Home Redirect */}
          <li className={isHomeActive ? 'active' : ''} onClick={() => window.location.href = '/home'}>Home</li>
          
          <li className={(isSolutionsActive || openDropdown === 'solutions') ? 'active' : ''} onClick={() => setOpenDropdown(prev => prev === 'solutions' ? '' : 'solutions')}>
            Solutions <IoIosArrowDown className={openDropdown === 'solutions' ? 'rotate' : ''} />
          </li>
          {openDropdown === 'solutions' && (
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

          <li className={(isResourcesActive || openDropdown === 'resources') ? 'active' : ''} onClick={() => setOpenDropdown(prev => prev === 'resources' ? '' : 'resources')}>
            Resources <IoIosArrowDown className={openDropdown === 'resources' ? 'rotate' : ''} />
          </li>
          {openDropdown === 'resources' && (
            <div className="mobile-sub-menu">
                <p><a href="/blog">Blog</a></p>
                <p><a href="/community">Community</a></p>
                <p><a href="/faq">FAQ</a></p>
            </div>
          )}

          <li onClick={() => window.location.href = '/business'}>Business Solutions</li>
          <li className="mobile-cta-item">
            <button className="get-started-btn mobile-btn">Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;