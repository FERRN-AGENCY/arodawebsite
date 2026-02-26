// Hero.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
import { images } from '../../images';
import { HiArrowRight } from "react-icons/hi";
import './Hero.css';

const Hero = ({ 
  badgeText, 
  titlePart1,
  titlePart2, 
  titleHighlight, 
  description, 
  secondaryBtnText, 
  primaryBtnText,
  placeholder,
  input,
  className,
  width,
  title
}) => {
  return (
    <section 
      className="hero-container" 
      style={{ backgroundImage: `url(${images.hero})` }}
    >
      <Navbar />
      
      <div className="hero-content">
        {/* Badge / Top Button */}
        <button className={`btn-secondary badge ${className}`}>{badgeText}</button>
        
        {/* Title with dynamic yellow highlight */}
        <h1 className="hero-title">
          {titlePart1} <span className='yellow'>{title}</span><br className={className}/> <span className='yellow'>{titleHighlight}</span>{titlePart2}
        </h1>
        
        {/* Description using the Light font style we set up */}
        <p className={`hero-description ${width}`}>
          {description}
        </p>

        {/* Action Buttons */}
        <div className="home-hero-btn-group">
          <input type="text" name="" id="" className={input} placeholder={placeholder} />
          <button className={`btn-secondary ${className}`}>{secondaryBtnText}</button>
          <button className="btn-primary">
            {primaryBtnText} <HiArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;