import React, { useState, useEffect } from 'react';
import { images } from '../../../images';
import { IoIosArrowRoundForward } from "react-icons/io";
import './Ecosystem.css';

const Ecosystem = () => {
  const [activeStat, setActiveStat] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  // Data for the statistical card cycle with dynamic image mapping
  const stats = [
    { id: 0, value: 80, label: "Reduction in transaction disputes", image: images.ecosystem },
    { id: 1, value: 95, label: "Faster inventory turnaround", image: images.ecosystem },
    { id: 2, value: 50, label: "Increase in staff productivity", image: images.ecosystem }
  ];

  // --- AUTO-SWITCH ANIMATION (Same as Explore) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, [stats.length]);

  // --- NUMBER COUNTING LOGIC ---
  useEffect(() => {
    let start = 0;
    const end = stats[activeStat].value;
    const duration = 5500; 
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(counter);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [activeStat]);

  return (
    <section className="ecosystem-container">
      {/* Top Logo Grid Section */}
      <div className="ecosystem-header">
        <h2 className="header-title">One Ecosystem. Multiple Pathways.</h2>
        <div className="logo-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="logo-item">
              <img src={images.bigAroda} alt="Aroda Logo" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ecosystem-content">
        <h2 className="main-title">
          Everything you need to sell, manage, and grow in one ecosystem.
        </h2>

        <div className="ecosystem-grid">
          {/* Top Row: Main Image and Stat Card */}
          <div className="grid-top">
            <div className="image-card">
              {/* Dynamic image switcher based on activeStat */}
              <img 
                src={stats[activeStat].image} 
                alt={stats[activeStat].label} 
                className="big-aroda-img fade-in" 
              />
            </div>

            {/* The Stat Card (Animated) */}
            <div className="stat-card">
              <div className="stat-content">
                <h3 className="stat-value">{displayValue}%</h3>
                <p className="stat-label">{stats[activeStat].label}</p>
              </div>
              
              <div className="progress-bars">
                {stats.map((_, index) => (
                  <div 
                    key={index} 
                    className={`gap-line ${activeStat === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Logo Card and Simplified Card */}
          <div className="grid-bottom">
            <div className="logo-card" style={{ backgroundImage: `url(${images.wizly})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
              <img src={images.blueAroda} alt="Aroda Blue" className="blue-aroda-img" />
            </div>

            <div className="simplified-card">
              <div className="simplified-text">
                <h3>Business, Simplified</h3>
                <p>
                  Aroda connects the tools businesses need to operate efficiently 
                  with a marketplace where buyers can transact safely. 
                  No noise. No shortcuts. Just systems that work.
                </p>
              </div>
              <button className="get-started-btns">
                Get Started <IoIosArrowRoundForward className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;