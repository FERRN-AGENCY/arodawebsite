import React, { useState, useEffect } from 'react';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi";
import './Ecosystem.css';

const Ecosystem = () => {
  const [activeStat, setActiveStat] = useState(0);

  // Data for the statistical card cycle with dynamic image mapping
  const stats = [
    { id: 0, value: 2, label: "Companies within the group", image: images.Ecosystem1},
    { id: 1, value: 5, label: "Areas of expertise", image: images.Ecosystem2 },
    { id: 2, value: 1, label: "Shared commitment to results", image: images.Ecosystem3 }
  ];

  // --- AUTO-SWITCH ANIMATION (Same as Explore) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, [stats.length]);

  const groupCompanies = ["Aroda Finance Limited", "O & K Global Resources Limited"];
  return (
    <section className="ecosystem-container" id="group">
      {/* Top Logo Grid Section */}
      <div className="ecosystem-header">
        <h2 className="header-title">Two Companies. One Shared Commitment.</h2>
        <div className="logo-grid">
          {groupCompanies.map((company) => (
            <div key={company} className="logo-item company-name">
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ecosystem-content">
        <h2 className="main-title">
          The expertise to solve.<br />The experience to deliver.
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
                <h3 className="stat-value">{stats[activeStat].value}</h3>
                <p className="stat-label">{stats[activeStat].label}</p>
              </div>
              
              <div className="progress-bars">
                {stats.map((_, index) => (
                  <div 
                    key={index} 
                    className={`gap-line ${activeStat === index ? 'active' : ''}`}
                    onClick={() => setActiveStat(index)} /* <-- ADDED THIS LINE */
                    style={{ cursor: 'pointer' }} /* Optional: makes it clear it's clickable */
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
                <h3>Experience That Delivers</h3>
                <p>
                  Our team brings hands-on experience in designing, managing and delivering projects for corporations, government agencies and private organisations. We combine an understanding of each client’s needs with disciplined execution to turn objectives into practical outcomes.
                </p>
              </div>
              <a className="get-started-btns" href="/#group">
                About Aroda <HiArrowRight className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
