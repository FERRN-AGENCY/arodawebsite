import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../images'; // Ensure this path is correct for your project
import { IoIosArrowRoundForward } from "react-icons/io";
import './Business.css';

const Business = () => {
  // State for the interactive feature pills in the "One App" section
  const [activeFeature, setActiveFeature] = useState(0);

  // NEW: State and Ref for the Scroll Animation
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const introRef = useRef(null);

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
      img: images.tracking 
    },
    { 
      id: 2, 
      title: "Inventory Control", 
      desc: "Real-time stock updates across all locations.", 
      img: images.inventory 
    },
    { 
      id: 3, 
      title: "Staff Access Control", 
      desc: "Set permissions and track activity.", 
      img: images.access 
    },
    { 
      id: 4, 
      title: "Automated Records", 
      desc: "Keep accurate financial records automatically.", 
      img: images.record 
    },
    { 
      id: 5, 
      title: "Business Analytics", 
      desc: "Gain insights to make smarter decisions.", 
      img: images.pie 
    },
    { 
      id: 6, 
      title: "Offline Mode", 
      desc: "Keep working even without internet.", 
      img: images.offline 
    },
    { 
      id: 7, 
      title: "Tax Management", 
      desc: "Simplify tax preparation and compliance.", 
      img: images.tax 
    },
  ];

  // --- NEW: INTERSECTION OBSERVER FOR SCROLL TRIGGER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the screen, trigger the animation state
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
        } else {
          // Optional: Reset it when it leaves the screen so it animates again next time they scroll down
          setIsIntroVisible(false); 
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Triggers when 30% of the text is visible
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
    <section className="business-container">
      
      {/* --- SECTION 1: Most losses don't look dramatic --- */}
      <div className="losses-section" id='section'>
        <h2 className="losses-title">
          Most losses don't look dramatic.<br/>
          They happen quietly.
        </h2>
        
        <div className="losses-image-wrapper">
          <img src={images.BizPro1} alt="Quiet losses in business" className="losses-img" />
        </div>
        
        {/* We attach the ref here, and conditionally add the 'animate-on-scroll' class */}
        <div className="intro-text" ref={introRef}>
            <p className={`loading-paragraph ${isIntroVisible ? 'animate-on-scroll' : ''}`}>
                <span className="load-line">Sales go unrecorded.</span>
                <span className="load-line">Stock reduces without explanation.</span>
                <span className="load-line">Numbers don't match reality.</span>
                <span className="load-line">Without visibility, you're reacting instead of managing.</span>
            </p>
        </div>
      </div>

      {/* --- SECTION 2: One App. Total Control. --- */}
      <div className="total-control-section" >
        <h2 className="section-title">One App. Total Control.</h2>
        
        <div className="hero-card-wrapper">
          <img src={images.BizPro2} alt="Delivery Rider" className="hero-card-img" />
          
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
          {controlTools.map((tool) => (
            <div key={tool.id} className="control-card">
              <div className="icon-wrapper">
                <img src={tool.img} alt={tool.title} className="control-icon" />
              </div>
              <h3 className="control-title">{tool.title}</h3>
              <p className="control-desc">{tool.desc}</p>
            </div>
          ))}

          <div className="control-card large-card">
            <div className="large-card-content">
              <h3 className="control-title large-title">Run your business with clarity</h3>
              <p className="control-desc large-desc">
                Aroda Business Pro gives business owners clear visibility and control over their operations. No noise. No guesswork. Just organised systems that work.
              </p>
            </div>
            <button className="get-started-btns">
              Get Started <IoIosArrowRoundForward className="btn-arrow" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Business;