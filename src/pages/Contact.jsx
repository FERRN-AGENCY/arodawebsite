import React from 'react';
import { HiArrowRight, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { Navbar, Footer } from '../constants';
import './Contact.css';

const Contact = () => (
  <div className="contact-page">
    <section className="contact-hero">
      <Navbar />
      <div className="contact-hero-content">
        <p className="contact-eyebrow">CONTACT ARODA</p>
        <h1>Let’s discuss your next project.</h1>
        <p>
          Tell us what you need to achieve. We’ll connect you with the right
          expertise and resources across the Aroda group.
        </p>
      </div>
    </section>

    <main className="contact-main">
      <div className="contact-intro">
        <p className="contact-eyebrow">START A CONVERSATION</p>
        <h2>How can we help?</h2>
        <p>
          Whether you have a project to deliver, a business challenge to solve,
          or a question about our services, our team is ready to talk.
        </p>
      </div>

      <div className="contact-options">
        <a className="contact-option" href="mailto:Info@arodagroup.com?subject=Aroda%20project%20enquiry">
          <span className="contact-option-icon"><HiOutlineMail aria-hidden="true" /></span>
          <span className="contact-option-label">EMAIL US</span>
          <strong>Info@arodagroup.com</strong>
          <span className="contact-option-action">Write to our team <HiArrowRight aria-hidden="true" /></span>
        </a>
        <a className="contact-option" href="tel:+2349083067701">
          <span className="contact-option-icon"><HiOutlinePhone aria-hidden="true" /></span>
          <span className="contact-option-label">CALL US</span>
          <strong>+234 908 306 7701</strong>
          <span className="contact-option-action">Speak with us <HiArrowRight aria-hidden="true" /></span>
        </a>
      </div>

      <p className="contact-context">
        Aroda brings together <strong>Aroda Finance Limited</strong> and
        <strong> O &amp; K Global Resources Limited</strong> across Information
        Technology, Consulting, Procurement, Agriculture and Finance.
      </p>
    </main>

    <Footer />
  </div>
);

export default Contact;
