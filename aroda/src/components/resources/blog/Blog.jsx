import React from 'react';
import { images } from '../../../images'; // Adjust path if needed
import { FiSearch } from "react-icons/fi"; // Make sure to install react-icons if you haven't: npm install react-icons
import './Blog.css';

const Blog = () => {
  // Dummy data for the main blog grid
  const blogPosts = [
    {
      id: 1,
      tag: "Tips",
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      date: "August 20, 2022",
      image: images.businessMain // PLACEHOLDER: Change to your blog image (e.g., images.blog1)
    },
    {
      id: 2,
      tag: "Tips",
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      date: "August 20, 2022",
      image: images.businessMain // PLACEHOLDER
    },
    {
      id: 3,
      tag: "Tips",
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      date: "August 20, 2022",
      image: images.businessMain // PLACEHOLDER
    },
    {
      id: 4,
      tag: "Tips",
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      date: "August 20, 2022",
      image: images.businessMain // PLACEHOLDER
    }
  ];

  // Dummy data for the popular posts widget
  const popularPosts = [
    {
      id: 1,
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      image: images.businessMan // PLACEHOLDER
    },
    {
      id: 2,
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      image: images.businessMan // PLACEHOLDER
    },
    {
      id: 3,
      title: "These 7 Business Finance Mistakes May Cost You Millions!",
      image: images.businessMan // PLACEHOLDER
    }
  ];

  const tags = ["Living", "Property", "Real Estate", "Investment"];

  return (
    <section className="blog-section">
      <div className="blog-container">
        
        {/* --- LEFT SIDE: Main Blog Grid --- */}
        <div className="blog-main-content">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-img" />
                </div>
                <div className="blog-content">
                  <span className="blog-tag">{post.tag}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-date">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: Sidebar --- */}
        <aside className="blog-sidebar">
          
          {/* Search Widget */}
          <div className="sidebar-widget search-widget">
            <div className="search-bar">
              <input type="text" placeholder="Search Here" className="search-input" />
              <button className="search-btn">
                <FiSearch />
              </button>
            </div>
          </div>

          {/* Popular Posts Widget */}
          <div className="sidebar-widget">
            <h4 className="widget-title">Popular Posts</h4>
            <div className="popular-posts-list">
              {popularPosts.map((post) => (
                <div key={post.id} className="popular-post-item">
                  <div className="popular-img-wrapper">
                    <img src={post.image} alt="Thumbnail" className="popular-img" />
                  </div>
                  <h5 className="popular-title">{post.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Widget */}
          <div className="sidebar-widget">
            <h4 className="widget-title">Tags</h4>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </aside>

      </div>
    </section>
  );
};

export default Blog;