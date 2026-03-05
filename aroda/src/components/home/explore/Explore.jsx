import React, { useState, useEffect } from 'react';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi";
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState(0);

  // ADDED: A 'link' property to each tab object to handle unique routing
  const tabs = [
    { 
      id: 0, 
      title: "Aroda Marketplace", 
      subtitle: "",
      desc: "Buy and sell with confidence. Trade through excellence verified merchants under clear standards.", 
      image: images.Marketplace,
      link: "/merchants" 
    },
    { 
      id: 1, 
      title: "Aroda Business Pro",
      subtitle: "", 
      desc: "Run your business with full visibility. Track sales, stock, staff, and profit in one simple app.", 
      image: images.BusinessPro,
      link: "/business" 
    },
    { 
      id: 2, 
      title: "Aroda Finance", 
      subtitle: " (Coming Soon)",
      desc: "Access capital with structure. Transparent terms and predictable repayment built for businesses.", 
      image: images.Finance,
      link: "#" // Set to email for now, change to "/finance" when ready
    },
    { 
      id: 3, 
      title: "Aroda Logistics", 
      subtitle: " (Coming Soon)",
      desc: "Move goods with reliability. Delivery designed to keep business operations steady.", 
      image: images.Logistics,
      link: "#" // Set to "#" since it's coming soon
    }
  ];

  // --- START AUTO-SWITCH ANIMATION CODE ---
  useEffect(() => {
    // 10000ms = 10 seconds
    const autoPlayDuration = 10000; 

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, autoPlayDuration);

    return () => clearInterval(interval);
  }, [tabs.length]); 
  // --- END AUTO-SWITCH ANIMATION CODE ---

  return (
    <section 
      id='/explore'
      className="explore-container"
      style={{ backgroundImage: `url(${images.explorebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <h2 className="explore-title">
        Smart Tools for Every Step of Your Business Journey
      </h2>

      <div className="explore-main-grid">
        <div className="explore-card fade-in">
          
          {tabs.map((tab, index) => (
            <div 
              key={tab.id}
              className={`explore-bg-layer ${activeTab === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${tab.image})` }}
            ></div>
          ))}

          {/* OVERLAY CONTENT */}
          <div className="card-overlay-content">
            <h3>{tabs[activeTab].title}<i>{tabs[activeTab].subtitle}</i></h3>
            <p>{tabs[activeTab].desc}</p>
            
            {/* UPDATED: The href now dynamically pulls from the active tab's data */}
            <p className='change'>
              <a href={tabs[activeTab].link}>Get Started</a> <HiArrowRight className="btn-arrows" />
            </p>
            
            <div className="progress-bars">
              {tabs.map((_, index) => (
                <div 
                  key={index} 
                  className={`gap-line ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ cursor: 'pointer' }} 
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
    </section>
  );
};

export default Explore;