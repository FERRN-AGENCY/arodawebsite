import React, { useState, useEffect } from 'react';
import Navbar from '../../../constants/navbar/Navbar';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi";
import './Hero.css';

const Hero = () => {
  const backgrounds = [images.Header1, images.Header2, images.Header3];
  const [currentIdx, setCurrentIdx] = useState(0);

  // Simple interval to just change the active index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="home-hero-container">
      
      {/* Map through all 3 images, but only give the 'active' class to the current one */}
      {backgrounds.map((bg, index) => (
        <div 
          key={index}
          className={`fade-bg ${index === currentIdx ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      ))}

      {/* --- EVERYTHING ELSE REMAINS EXACTLY THE SAME --- */}
      <Navbar />
      
      <div className="home-hero-content">
        <h1 className="home-hero-title">
          Tools and Marketplaces <br />
          for Everyday Transactions
        </h1>
        
        <p className="home-hero-description">
          <strong>Business shouldn’t rely on guesswork. Buying shouldn't feel uncertain.</strong> <br />
          Aroda builds structured digital infrastructure that brings clarity and trust to everyday 
          commerce so businesses run clearly and customers transact with confidence.
        </p>

        <div className="hero-btn-group">
          <button className="btn-secondary actual">Explore Solutions</button>
          <button className="btn-primary">
            Get Started <HiArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;