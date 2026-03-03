import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import images from "../../images/Images";
import './Faq.css';
// import './Block.css';

const Block = ({ title, description, cta }) => {
  return (
    <div className="cta-block-container"
    style={{ backgroundImage: `url(${images.footer})` }}
    >
      <div className="cta-block-content">
        <h2 className="cta-block-title">{title}</h2>
        <p className="cta-block-description">{description}</p>
        <button className="cta-block-btn">
          {cta} <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Block;