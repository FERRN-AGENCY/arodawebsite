import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi"; 
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Exactly 23 FAQs to fill out the grid nicely
  const faqData = [
    { question: "What is Aroda finance?", answer: "Aroda finance provides seamless financial management and payment solutions tailored for your business needs." },
    { question: "Can I use Aroda for both online and physical sales?", answer: "Yes, Aroda automatically syncs your inventory and sales across both online storefronts and physical point-of-sale systems." },
    { question: "How can Aroda help my business?", answer: "Aroda streamlines your operations by unifying your sales, inventory, and staff management into one single platform." },
    { question: "Can service businesses use Aroda?", answer: "Absolutely. Aroda is flexible enough to manage bookings, service appointments, and digital invoicing." },
    { question: "Do I need technical skills to use Aroda?", answer: "No technical skills are required. The interface is designed to be intuitive and user-friendly for anyone." },
    { question: "Can I create custom product for my business?", answer: "Yes, you can add custom products, variations, and specific pricing models directly from your dashboard." },
    { question: "What payment options does Aroda support?", answer: "We support major credit cards, bank transfers, mobile money, and local payment gateways." },
    { question: "How do I get started with Aroda?", answer: "Simply sign up on our platform, verify your business details, and you can start operating within minutes." },
    { question: "Is my business data secure on Aroda?", answer: "Yes. We use bank-grade encryption to ensure your data and your customers' data remain completely secure." },
    { question: "How long does it take to verify my merchant account?", answer: "Most accounts are verified within 24-48 hours after all required documentation is submitted." },
    { question: "Can I manage multiple staff accounts?", answer: "Yes, Aroda Business Pro allows you to assign specific roles and permissions to different staff members." },
    { question: "Are there any hidden fees for using the platform?", answer: "No, we believe in complete transparency. All transaction fees and subscription costs are clearly outlined." },
    { question: "What happens if a buyer disputes a transaction?", answer: "Our dedicated dispute resolution team steps in to ensure a fair outcome for both the buyer and the merchant." },
    { question: "Can I track my logistics and deliveries in real-time?", answer: "Yes, Aroda Logistics provides real-time updates from the warehouse directly to the customer's doorstep." },
    { question: "Does Aroda provide analytics and sales reports?", answer: "Absolutely. You get access to detailed, real-time analytics to help you make informed business decisions." },
    { question: "What kind of customer support is available?", answer: "We offer 24/7 support via live chat, email, and a comprehensive help center." },
    { question: "Can I integrate Aroda with my existing software?", answer: "Yes, Aroda offers an API and several pre-built integrations with popular accounting and marketing tools." },
    { question: "How do payouts work for sellers?", answer: "Payouts are automatically routed to your connected bank account on a scheduled basis (daily or weekly)." },
    { question: "Is there a limit to how many products I can list?", answer: "There are no limits on product listings. You can scale your inventory as much as your business needs." },
    { question: "Do you offer offline mode for physical stores?", answer: "Yes, our POS system can operate offline and will automatically sync your data once your connection is restored." },
    { question: "Can buyers leave reviews on my store?", answer: "Yes, verified buyers can leave reviews, helping you build credibility and trust on the marketplace." },
    { question: "What are the requirements for Aroda Business Pro?", answer: "Any registered business can upgrade to Pro. It is specifically designed for growing enterprises that need advanced tools." },
    { question: "How do I handle taxes through Aroda?", answer: "Aroda automatically calculates taxes based on your region and provides simple export tools for tax season." }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-grid">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index; 

            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-row">
                  <h4 className="faq-question">{faq.question}</h4>
                  
                  {/* The icon with your 45-degree rotation logic */}
                  <span 
                    className="faq-icon"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <FiPlus />
                  </span>
                </div>
                
                <div 
                  className="faq-answer-wrapper" 
                  style={{ 
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;