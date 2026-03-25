import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ activeFilter, onFilter, filters, searchQuery, onSearch }) => {
  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
            onClick={() => onFilter(f)}
          >
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {onSearch && (
        <div className="filter-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search members…"
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
            aria-label="Search team members"
          />
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
