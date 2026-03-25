import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidenav-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidenav ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <button className="sidenav-close" onClick={onClose} aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="sidenav-logo">
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <nav className="sidenav-links">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/#about" onClick={onClose}>About</Link>
          <Link to="/team" onClick={onClose}>Team</Link>
          <Link to="/#work" onClick={onClose}>Work</Link>
          <Link to="/#contact" onClick={onClose}>Contact</Link>
        </nav>
        <div className="sidenav-footer">
          <a href="mailto:hello@virtual.studio" className="sidenav-email">hello@virtual.studio</a>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
