import React from 'react';
import Navbar from '../../../constants/navbar/Navbar';
import { images } from '../../../images';
import { HiArrowRight } from "react-icons/hi"; // For the Get Started button arrow
import './Hero.css';

const Hero = () => {
  return (
    <section 
      className="home-hero-container" 
      style={{ backgroundImage: `url(${images.home})` }}
    >
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
          <button className="btn-secondary">Explore Solutions</button>
          <button className="btn-primary">
            Get Started <HiArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;