import React, { useState } from 'react';
import { images } from '../../images'; // Ensure this path is correct for your project
import { IoIosArrowRoundForward } from "react-icons/io";
import './Business.css';

const Business = () => {
  // State for the interactive feature pills in the "One App" section
  const [activeFeature, setActiveFeature] = useState(0);

  // Features list for the pills below the delivery rider image
  const features = [
    "Track stock movement automatically",
    "View daily sales and margins",
    "Assign staff roles and monitor activity",
    "Review performance without manual records",
    "Accept directly on website and phone",
    "Manage Tax"
  ];

  // Data for the 8-card grid at the bottom
  const controlTools = [
    { 
      id: 1, 
      title: "Sales Tracking", 
      desc: "Track every sale, store and channel.", 
      img: images.tracking// CHANGE THIS: Replace with your sales icon (e.g., images.iconSales)
    },
    { 
      id: 2, 
      title: "Inventory Control", 
      desc: "Real-time stock updates across all locations.", 
      img: images.inventory // CHANGE THIS: Replace with your inventory icon
    },
    { 
      id: 3, 
      title: "Staff Access Control", 
      desc: "Set permissions and track activity.", 
      img: images.access // CHANGE THIS: Replace with your staff icon
    },
    { 
      id: 4, 
      title: "Automated Records", 
      desc: "Keep accurate financial records automatically.", 
      img: images.record // CHANGE THIS: Replace with your records icon
    },
    { 
      id: 5, 
      title: "Business Analytics", 
      desc: "Gain insights to make smarter decisions.", 
      img: images.pie // CHANGE THIS: Replace with your analytics icon
    },
    { 
      id: 6, 
      title: "Offline Mode", 
      desc: "Keep working even without internet.", 
      img: images.offline // CHANGE THIS: Replace with your offline icon
    },
    { 
      id: 7, 
      title: "Tax Management", 
      desc: "Simplify tax preparation and compliance.", 
      img: images.tax // CHANGE THIS: Replace with your tax icon
    },
  ];

  return (
    <section className="business-container">
      
      {/* --- SECTION 1: Most losses don't look dramatic --- */}
      <div className="losses-section" id='section'>
        <h2 className="losses-title">
          Most losses don't look dramatic.<br/>
          They happen quietly.
        </h2>
        
        <div className="losses-image-wrapper">
          {/* CHANGE THIS: Replace with the image of the dark room/packages */}
          <img src={images.darkroom} alt="Quiet losses in business" className="losses-img" />
        </div>
        
        <div className="losses-text-content">
          <p className="dark-text">
            Sales go unrecorded.<br/>
            Stock reduces without explanation.<br/>
            Numbers don't match reality.
          </p>
          <p className="light-blue-text">
            Without visibility, you're reacting instead of managing.
          </p>
        </div>
      </div>


      {/* --- SECTION 2: One App. Total Control. --- */}
      <div className="total-control-section" >
        <h2 className="section-title">One App. Total Control.</h2>
        
        <div className="hero-card-wrapper">
          {/* CHANGE THIS: Replace with the image of the delivery rider */}
          <img src={images.rider} alt="Delivery Rider" className="hero-card-img" />
          
          <div className="hero-card-overlay">
            <h3>{features[activeFeature]}</h3>
            <p>
              Every sale, return, and restock is recorded instantly — giving you a clear, real-time 
              view of what is moving and what needs attention.
            </p>
          </div>
        </div>

        {/* Feature Pills / Toggles */}
        <div className="feature-pills-container">
          {features.map((feature, index) => (
            <button 
              key={index} 
              className={`feature-pill ${activeFeature === index ? 'active' : ''}`}
              onClick={() => setActiveFeature(index)}
            >
              <span className="pill-dot"></span>
              {feature}
            </button>
          ))}
        </div>
      </div>


      {/* --- SECTION 3: What You Can Control (Grid) --- */}
      <div className="what-you-control-section" id='setup'>
        <h2 className="section-title">What You Can Control</h2>
        
        <div className="control-grid">
          {/* Map through the first 7 tools */}
          {controlTools.map((tool) => (
            <div key={tool.id} className="control-card">
              <div className="icon-wrapper">
                <img src={tool.img} alt={tool.title} className="control-icon" />
              </div>
              <h3 className="control-title">{tool.title}</h3>
              <p className="control-desc">{tool.desc}</p>
            </div>
          ))}

          {/* The 8th, larger card that spans two columns */}
          <div className="control-card large-card">
            <div className="large-card-content">
              <h3 className="control-title large-title">Run your business with clarity</h3>
              <p className="control-desc large-desc">
                Get the visibility and control you need to make the right decisions. 
                No noise. Just clear, actionable insights.
              </p>
            </div>
            <button className="get-started-btn">
              Get Started <IoIosArrowRoundForward className="btn-arrow" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Business;