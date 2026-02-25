import React, { useState, useEffect } from 'react';
import { images } from '../../images';
import { IoIosArrowRoundForward } from "react-icons/io";
import './Market.css';

const Market = () => {
  // State for the "How the platform keeps things in order" section (1-4)
  const [activeOrderStep, setActiveOrderStep] = useState(0);
  
  // State for the "Built for Merchants / Designed for Buyers" toggle
  const [activeTab, setActiveTab] = useState('merchants');

  const orderSteps = [
    { id: 1, title: "Verified Merchants", desc: "Before every identity and business check before listing. No faceless stores. No disappearing sellers.", image: images.deliveryTruck },
    { id: 2, title: "Secure Payments", desc: "Multi-layered encryption ensures every transaction is protected from end to end.", image: images.deliveryTruck },
    { id: 3, title: "Tracked Logistics", desc: "Real-time updates from warehouse to doorstep so you are never left guessing.", image: images.deliveryTruck },
    { id: 4, title: "Buyer Protection", desc: "Dedicated support and dispute resolution to ensure you get exactly what you paid for.", image: images.deliveryTruck }
  ];

  // --- AUTO-SWITCH LOGIC for Order Section (Steps 1-4) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOrderStep((prev) => (prev + 1) % orderSteps.length);
    }, 8000); // 8 seconds per step
    return () => clearInterval(timer);
  }, [orderSteps.length]);

  return (
    <section className="market-container">
      {/* --- Intro Section --- */}
      <div className="market-intro">
        <div className="intro-image-wrapper">
          <img src={images.officeDesk} alt="Modern Office" className="intro-img" />
        </div>
        <div className="intro-text">
          <p>Buying online shouldn't require luck.</p>
          <p>Selling online shouldn't feel like shouting into noise.</p>
          <p className="highlight-text">
            Aroda Marketplace is built for people who are tired of guessing who to trust and just want things to work.
          </p>
        </div>
      </div>

      {/* --- Steps Section (1-4 Counter) --- */}
      <div className="order-section" >
        <h2 className="section-title" id='section'>How the platform keeps things in order</h2>
        
        <div className="order-grid">
          <div className="order-image-card">
            {/* Updated to show dynamic image tied to the current step */}
            <img src={orderSteps[activeOrderStep].image} alt={orderSteps[activeOrderStep].title} className="order-img fade-in" />
          </div>

          <div className="order-stat-card">
            <div className="stat-content">
              {/* Large counting number */}
              <div className='number'><span className='empty'></span><span className="order-number">{orderSteps[activeOrderStep].id}</span></div>
              <h3 className="order-step-title">{orderSteps[activeOrderStep].title}</h3>
              <p className="order-step-desc">{orderSteps[activeOrderStep].desc}</p>
            </div>
            
            {/* The 4 Rectangles tracking progress with the "active" loader logic */}
            <div className="order-progress-bars">
              {orderSteps.map((_, index) => (
                <div 
                  key={index} 
                  className={`progress-rect ${activeOrderStep === index ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="order-actions">
           <button className="secondary-btn">Explore Aroda</button>
           <button className="get-started-btnd">
             Get Started <IoIosArrowRoundForward />
           </button>
        </div>
      </div>

      {/* --- Toggle Section (Merchants vs Buyers) --- */}
      <div className="toggle-section" id='setup'>
        <h2 className="section-title">Built for Merchants. Designed for Buyers.</h2>
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

        <div className="toggle-display-card">
          {activeTab === 'merchants' ? (
            <div className="display-content fade-in">
              <img src={images.happyBuyer} alt="Merchant interface" className="display-img" />
              <div className="display-overlay">
                <h3>Buy without second-guessing.</h3>
                <p>Good sellers often get buried on noisy platforms. On Aroda, showing up well over time actually matters.</p>  
              </div>
            </div>
          ) : (
            <div className="display-content fade-in">
              <img src={images.happyBuyer} alt="Happy Buyer" className="display-img" />
              <div className="display-overlay">
                <h3>Scale without the stress.</h3>
                <p>Advanced tools for inventory, payments, and customer reach.</p>
              </div>
            </div>
          )}
        </div>

        {/* Tag Cloud / Features Area */}
        <div className="feature-tags">
          <span>Buyers who actully buy products</span>
          <span>Less pressure to promote only on certain</span>
          <span>Credibility that stays with every order</span>
          <span>Faster buying system that improves factory growth</span>
          <span>Visibility that is hard earned, not paid</span>
        </div>

        <div className="order-actions bottom-cta">
           <button className="secondary-btn">Explore Solutions</button>
           <button className="get-started-btnd">
             Get Started <IoIosArrowRoundForward />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Market;