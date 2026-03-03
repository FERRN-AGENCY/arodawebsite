import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../images';
import { HiArrowRight } from "react-icons/hi";
import './Market.css';

const Market = () => {
  const [activeOrderStep, setActiveOrderStep] = useState(0);
  const [activeTab, setActiveTab] = useState('merchants');
  
  // State and Ref for the Scroll Animation
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const introRef = useRef(null);

  const orderSteps = [
    { id: 1, title: "Verified Merchants", desc: "Before every identity and business check before listing. No faceless stores. No disappearing sellers.", image: images.Marketplace1 },
    { id: 2, title: "Secure Payments", desc: "Multi-layered encryption ensures every transaction is protected from end to end.", image: images.Marketplace2 },
    { id: 3, title: "Tracked Logistics", desc: "Real-time updates from warehouse to doorstep so you are never left guessing.", image: images.Marketplace3 },
    { id: 4, title: "Buyer Protection", desc: "Dedicated support and dispute resolution to ensure you get exactly what you paid for.", image: images.Marketplace4 }
  ];

  // --- AUTO-SWITCH LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOrderStep((prev) => (prev + 1) % orderSteps.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, [orderSteps.length]);

  // --- INTERSECTION OBSERVER FOR SCROLL TRIGGER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
        } else {
          setIsIntroVisible(false); 
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) observer.unobserve(introRef.current);
    };
  }, []);

  return (
    <section className="market-container">
      {/* --- Intro Section --- */}
      <div className="market-intro">
        <div className="intro-image-wrapper">
          <img src={images.MarketplaceHeader} alt="Modern Office" className="intro-img" />
        </div>
        
        <div className="intro-text" ref={introRef}>
            <p className={`loading-paragraph ${isIntroVisible ? 'animate-on-scroll' : ''}`}>
                <span className="load-line">Buying online shouldn't require luck.</span>
                <span className="load-line">Selling online shouldn't feel like shouting into noise.</span>
                <span className="load-line">Aroda Marketplace is built for people who are tired of guessing</span>
                <span className="load-line">who to trust and just want things to work.</span>
            </p>
        </div>
      </div>

      {/* --- Steps Section (1-4 Counter) --- */}
      <div className="order-section" >
        <h2 className="section-title" id='section'>How the platform keeps things in order</h2>
        
        <div className="order-grid">
          <div className="order-image-card">
            <img src={orderSteps[activeOrderStep].image} alt={orderSteps[activeOrderStep].title} className="order-img fade-in" />
          </div>

          <div className="order-stat-card">
            <div className="stat-content">
              <div className='number'><span className='empty'></span><span className="order-number">{orderSteps[activeOrderStep].id}</span></div>
              <h3 className="order-step-title">{orderSteps[activeOrderStep].title}</h3>
              <p className="order-step-desc">{orderSteps[activeOrderStep].desc}</p>
            </div>
            
            <div className="order-progress-bars">
              {orderSteps.map((_, index) => (
                <div 
                  key={index} 
                  className={`progress-rect ${activeOrderStep === index ? 'active' : ''}`}
                  onClick={() => setActiveOrderStep(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="order-actions">
           <button className="secondary-btn">Explore Aroda</button>
           <button className="get-started-btnd">
             Get Started <HiArrowRight />
           </button>
        </div>
      </div>

      {/* --- Toggle Section (Merchants vs Buyers) --- */}
      <div className="toggle-section" id='setup'>
        <h2 className="section-titles">Built for Merchants. Designed for Buyers.</h2>
        <p className="section-subtitle">Streamline your business, connect with customers, and grow effortlessly.</p>

        <div className="tab-container">
          <button 
            className={`tab-btns ${activeTab === 'merchants' ? 'active' : ''}`}
            onClick={() => setActiveTab('merchants')}
          >
            FOR MERCHANTS
          </button>
          <button 
            className={`tab-btns ${activeTab === 'buyers' ? 'active' : ''}`}
            onClick={() => setActiveTab('buyers')}
          >
            FOR BUYERS
          </button>
        </div>

        {/* Dynamic Display Card */}
        <div className="toggle-display-card">
          {activeTab === 'merchants' ? (
            <div className="display-content fade-in">
              <img src={images.Merchants} alt="Merchant interface" className="display-img" />
              <div className="display-overlay">
                <h3>Sell where excellent service is rewarded</h3>
                <p>Good sellers often get buried on noisy platforms. On Aroda, showing up well over time actually matters.</p>  
              </div>
            </div>
          ) : (
            <div className="display-content fade-in">
              <img src={images.Buyers} alt="Happy Buyer" className="display-img" />
              <div className="display-overlay">
                <h3>Buy without second-guessing.</h3>
                <p>Shopping should feel simple. With verified merchants, platform-managed transaction and clear standards, you can buy with confidence.</p>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Feature Tags */}
        <div className="feature-tags">
          {activeTab === 'merchants' ? (
            <>
              <span>Buyers who are ready to purchase</span>
              <span>Less pressure to compete only on price</span>
              <span>Credibility that builds with every order</span>
              <span>Faster payouts as performance history grows</span>
              <span>Visibility tied to behaviour, not hype</span>
            </>
          ) : (
            <>
              <span>Sellers are screened before listing</span>
              <span>Listings follow clear standards</span>
              <span>Repeated issues lead to restrictions</span>
              <span>Support stays involved until issues are resolved</span>
            </>
          )}
        </div>

        {/* Dynamic CTA Buttons */}
        <div className="order-actions bottom-cta">
           <button className="secondary-btn">Explore Solutions</button>
           <button className="get-started-btnd">
             {activeTab === 'merchants' ? 'Become a Seller' : 'Shop on Aroda Marketplace'} <HiArrowRight />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Market;