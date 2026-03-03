import React from 'react';
import { images } from '../../../images'; // Adjust import path as needed
import { HiArrowRight } from "react-icons/hi";
import { FiTool } from "react-icons/fi"; // Placeholder for the small wrench/tool icon
import './Community.css';

const Community = () => {
  // Data for the feature list to keep the JSX clean
  const features = [
    {
      id: 1,
      title: "Community Forums", // Corrected the spelling from the mockup
      desc: "Discuss business topics, share experiences, and get advice."
    },
    {
      id: 2,
      title: "Learning Hubs",
      desc: "Free business resources, expert blogs, and how-to guides."
    },
    {
      id: 3,
      title: "Community Forums",
      desc: "Discuss business topics, share experiences, and get advice."
    },
    {
      id: 4,
      title: "Learning Hubs",
      desc: "Free business resources, expert blogs, and how-to guides."
    },
    {
      id: 5,
      title: "Learning Hubs",
      desc: "Free business resources, expert blogs, and how-to guides."
    }
  ];

  return (
    <section className="community-section">
      <div className="community-container">
        
        {/* --- LEFT SIDE: Text, List, and Button --- */}
        <div className="community-left">
          <h2 className="community-title">What You'll Find Here</h2>
          
          <div className="community-features-list">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiTool className="feature-icon" />
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="community-btn">
            Be a part of the community <HiArrowRight className="btn-arrow" />
          </button>
        </div>

        {/* --- RIGHT SIDE: Layered Images --- */}
        <div className="community-right">
          <div className="image-composition-wrapper">
            {/* The 3 background shapes positioned absolutely */}
            {/* CHANGE THESE: Replace with your specific geometric exports */}
            <img src={images.Testimonial} alt="Background Arrow" className="layer-bg-arrow" />
            <img src={images.triangle} alt="Background Triangle" className="layer-bg-triangle" />
            <img src={images.triangleTwo} alt="Overlapping Triangle" className="layer-overlapping-triangle" />
            
            {/* The main foreground image */}
            {/* CHANGE THIS: Replace with the image of the man */}
            <img src={images.group} alt="Community Member" className="layer-fg-man" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Community;