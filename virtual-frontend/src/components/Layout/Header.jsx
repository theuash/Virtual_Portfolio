import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideNav from './SideNav';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <img src="/src/assets/logo.png" alt="" />
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav" aria-label="Main navigation">
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/team" className="nav-link">Team</Link>
            <Link to="/#work" className="nav-link">Work</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="header-actions">
            <Link to="/team" className="header-cta hide-mobile">
              Explore Team
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              className="hamburger hide-desktop"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <SideNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
