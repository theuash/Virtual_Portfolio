import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const ProjectGrid = ({ projects, showFilter = false, limit = null }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filtered = projects
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .slice(0, limit || undefined);

  return (
    <div className="project-grid-wrap">
      {showFilter && (
        <div className="project-filter-tabs">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-tab ${activeCategory === c ? 'active' : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="project-grid">
        {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </div>
  );
};

export default ProjectGrid;
