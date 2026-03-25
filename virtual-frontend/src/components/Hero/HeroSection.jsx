import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated blobs */}
      <div className="hero-blob" />
      <div className="hero-blob-2" />
      <div className="hero-blob-3" />

      {/* Floating decoration lines */}
      <div className="hero-deco-line" style={{ left: '8%', top: '25%' }} />
      <div className="hero-deco-line" style={{ right: '10%', top: '55%', height: '80px' }} />

      <div className="hero-inner">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Creative Technology Collective
        </div>

        {/* Wordmark */}
        <h1 className="hero-wordmark" aria-label="VIRTUAL">
          <span className="hw hw1">VIRT</span>
          <span className="hw hw2">U</span>
          <span className="hw hw3">AL</span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">12 minds. &nbsp;One vision.</p>

        <div className="hero-divider" />

        {/* Description */}
        <p className="hero-desc">
          A collective of designers, developers, and digital thinkers building
          at the intersection of craft and code. We make the web feel like it
          was meant to be beautiful.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <Link to="/team" className="hero-btn-primary">
            Meet the team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7.5 1.5L13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button className="hero-btn-ghost" onClick={() => scrollToSection('work')}>
            See our work
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" onClick={() => scrollToSection('about')}>
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
