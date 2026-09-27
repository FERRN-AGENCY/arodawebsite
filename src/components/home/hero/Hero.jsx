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
          Driving Solutions. <br />
          Delivering Results.
        </h1>
        
        <p className="home-hero-description">
          Aroda is a diversified group providing integrated solutions across Information Technology, Consulting, Procurement, Agriculture and Finance.
          <br /><br />
          We bring together experienced professionals, practical expertise and the right resources to help businesses, government agencies and institutions achieve their objectives.
        </p>

        <div className="hero-btn-group">
          <a className="btn-secondary actual" href="#group">Discover Aroda</a>
          <a className="btn-primary" href="#contact">
            Contact Us <HiArrowRight className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
