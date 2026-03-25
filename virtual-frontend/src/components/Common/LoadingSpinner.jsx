import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = ({ size = 32, color = 'var(--terracotta)' }) => (
  <div className="spinner-wrap" style={{ '--size': `${size}px`, '--color': color }}>
    <div className="spinner" />
  </div>
);

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-avatar skeleton" />
    <div className="skeleton-lines">
      <div className="skeleton skeleton-line w60" />
      <div className="skeleton skeleton-line w40" />
      <div className="skeleton skeleton-line w80" />
    </div>
  </div>
);

export default LoadingSpinner;
