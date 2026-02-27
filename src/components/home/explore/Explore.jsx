import React, { useState, useEffect } from 'react';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi";
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Aroda Marketplace", desc: "Run your business with full visibility. Track sales, stock, staff, and profit in one simple app.", image: images.explore },
    { id: 1, title: "Aroda Business Pro", desc: "Advanced tools for growing enterprises.", image: images.explore },
    { id: 2, title: "Aroda Finance", desc: "Seamless financial management and payments.", image: images.explore },
    { id: 3, title: "Aroda Logistics", desc: "Smart delivery and supply chain tracking.", image: images.explore }
  ];

  // --- START AUTO-SWITCH ANIMATION CODE ---
  useEffect(() => {
    // 10000ms = 10 seconds. Change this number to speed up or slow down.
    const autoPlayDuration = 10000; 

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, autoPlayDuration);

    // This clears the timer if the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [tabs.length]); 
  // --- END AUTO-SWITCH ANIMATION CODE ---

  return (
    <section className="explore-container"
      style={{ backgroundImage: `url(${images.explorebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
      <h2 className="explore-title">
        Smart Tools for Every Step of Your Business Journey
      </h2>

      <div className="explore-main-grid">
        <div 
          className="explore-card fade-in"
          style={{
            // Updated to pull the image from the active tab dynamically
            backgroundImage: `url(${tabs[activeTab].image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            transition: 'background-image 0.5s ease-in-out' // Added a smooth fade transition between background changes
          }}
        >
          <div className="card-overlay-content" style={{  }}>
            <h3>{tabs[activeTab].title}</h3>
            <p>{tabs[activeTab].desc}</p>
            
            <div className="progress-bars">
              {tabs.map((_, index) => (
                <div 
                  key={index} 
                  className={`gap-line ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)} /* <-- ADDED THIS LINE */
                  style={{ cursor: 'pointer' }} /* Optional: makes it clear it's clickable */
                />
              ))}
            </div>
          </div>
        </div>

        <div className="explore-tabs">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className="explore-actions">
        <button className="btn-secondary actual">Explore Solutions</button>
        <button className="btn-primary">
          Get Started <HiArrowRight className="btn-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Explore;