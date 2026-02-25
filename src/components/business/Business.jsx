import React from 'react';
import { images } from '../../images';
import { IoIosArrowRoundForward } from "react-icons/io";
import './Business.css';

const Business = () => {
  const tools = [
    { id: 1, name: "Inventory", img: images.Aroda },
    { id: 2, name: "Analytics", img: images.Aroda },
    { id: 3, name: "Staff", img: images.Aroda },
    { id: 4, name: "Profit", img: images.Aroda },
  ];

  return (
    <section className="business-container">
      <div className="business-header">
        <h2 className="section-title">One App. Total Control.</h2>
        <p className="section-subtitle">
          Stop juggling spreadsheets. Manage your entire operation from a single interface 
          designed for speed and clarity.
        </p>
      </div>

      <div className="business-bento-grid">
        {/* Large Main Feature Card */}
        <div className="main-feature-card">
          <div className="feature-content">
            <span className="feature-tag">Core System</span>
            <h3>Real-time synchronization across all channels.</h3>
            <p>Whether you sell online or in-person, your stock and sales data update instantly.</p>
            <button className="get-started-btnd">
              Get Started <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="feature-image-wrapper">
            <img src={images.businessMain} alt="Business Dashboard" className="main-dashboard-img" />
          </div>
        </div>

        {/* Small Tool Boxes */}
        <div className="tools-sidebar">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-box">
              <div className="tool-image-container">
                <img src={tool.img} alt={tool.name} className="tool-icon-img" />
              </div>
              <div className="tool-text">
                <h4>{tool.name}</h4>
                <p>Manage {tool.name.toLowerCase()} seamlessly.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Floating Stats / Trust Bar */}
      <div className="business-footer-tags">
        <div className="trust-item">
          <span className="bolt-icon">⚡</span>
          <p>Instant deployment in under 5 minutes</p>
        </div>
        <div className="trust-item">
          <span className="bolt-icon">🛡️</span>
          <p>Bank-grade data security protocols</p>
        </div>
      </div>
    </section>
  );
};

export default Business;