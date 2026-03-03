import React, { useState } from 'react';
import { useEffect } from "react";
import { faqData } from './FaqData';
import FaqItem from './FaqItem';
import Block from './Block';
import './Faq.css';

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };
useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, []);
  return (
    <div className='faq-container section' id="FAQ">
      <h2 className="faq-main-title">Frequently Asked Questions</h2>

      <div className="faq-grid-wrapper">
        {faqData.map((item) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            onClick={() => toggleFaq(item.id)}
          />
        ))}
      </div>

      <Block 
        title="Systems built for growth"
        description="Whether you’re running a business, starting one, or supporting economic growth, Aroda is built for you."
        cta="Get Started"
      />
    </div>
  );
};

export default Faq;