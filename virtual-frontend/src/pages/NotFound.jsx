import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import './NotFound.css';

const NotFound = () => (
  <>
    <Header />
    <main className="notfound">
      <div className="notfound-blob" />
      <div className="notfound-inner">
        <p className="section-label">Error 404</p>
        <h1 className="notfound-title">Page not<br/><em>found.</em></h1>
        <p className="notfound-sub">The page you're looking for doesn't exist or was moved.</p>
        <Link to="/" className="notfound-home">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13 7H1M6.5 1.5L1 7l5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
    <Footer />
  </>
);

export default NotFound;
