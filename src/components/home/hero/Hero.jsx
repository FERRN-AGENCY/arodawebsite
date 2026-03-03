import React, { useState, useEffect } from 'react';
import Navbar from '../../../constants/navbar/Navbar';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi";
import './Hero.css';

const Hero = () => {
  // Setup state for the images and the transition trigger
  const [bgIndex, setBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Array of the three header images
  const backgrounds = [images.Header1, images.Header2, images.Header3];

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Trigger the futuristic warp/fade effect
      setIsTransitioning(true);
      
      // 2. Swap the image in the middle of the effect when it's dark/blurred
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      }, 500); 

      // 3. Remove the effect to snap the new image into clear view
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); 

    }, 5000); // Loops every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="home-hero-container">
      
      {/* NEW: Dedicated Background Layer for the Transition */}
      <div 
        className={`futuristic-bg ${isTransitioning ? 'transition-active' : ''}`}
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></div>

      {/* EVERYTHING BELOW REMAINS EXACTLY THE SAME */}
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