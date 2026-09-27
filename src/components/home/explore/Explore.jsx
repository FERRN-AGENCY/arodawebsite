import React, { useState, useEffect } from 'react';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi";
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "IT & Consulting", heading: "Practical Expertise. Clear Direction.", desc: "We help organisations address business challenges, modernise operations and implement technology through practical advice, systems deployment and project support.", image: images.Marketplace },
    { id: 1, title: "Procurement", heading: "The Right Resources. Reliably Delivered.", desc: "We coordinate the sourcing and delivery of goods, equipment and services, with a focus on quality, value and dependable project execution.", image: images.BusinessPro },
    { id: 2, title: "Agriculture", heading: "Developing Agricultural Opportunities.", desc: "We support agricultural initiatives and value-chain opportunities through effective partnerships, practical project support and a focus on sustainable commercial outcomes.", image: images.Finance },
    { id: 3, title: "Finance", heading: "Financial Solutions That Fit.", desc: "Through Aroda Finance Limited, we provide financial solutions tailored to the objectives of individuals, businesses and organisations, guided by responsible practices and client needs.", image: images.Logistics }
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
    <section className="explore-container" id="expertise"
      style={{ backgroundImage: `url(${images.explorebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
      <h2 className="explore-title">
        Expertise Across Sectors.<br />Focused on Results.
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
            <h3>{tabs[activeTab].heading}</h3>
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
        <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
          Discuss Your Needs <HiArrowRight className="btn-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Explore;
