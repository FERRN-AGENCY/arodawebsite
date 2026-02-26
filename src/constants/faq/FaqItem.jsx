import React from 'react';
import { images } from '../../images';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item-card ${isOpen ? 'is-open' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <div className="text-block-14">{question}</div>
        <img
          loading="lazy"
          /* Use your own source here as requested */
          src={images.vector}
          alt="toggle"
          className="arrrow-xando"
          style={{
            /* 45 degrees turns a + into an X */
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      
      {isOpen && (
        <div className="faq-answer-row">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;