import React, { useState } from 'react';
import Modal from '@/components/Common/Modal';
import useInView from '@/hooks/useInView';
import './ProjectCard.css';

const ProjectCard = ({ project, index = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);

  const colorMap = {
    '#935F4C': 'rgba(147,95,76,0.12)',
    '#5E9EAD': 'rgba(94,158,173,0.10)',
    '#6882AD': 'rgba(104,130,173,0.10)',
  };
  const accentBg = colorMap[project.color] || 'rgba(255,250,229,0.05)';

  return (
    <>
      <article
        ref={ref}
        className={`project-card ${inView ? 'visible' : ''}`}
        style={{ transitionDelay: `${index * 70}ms` }}
        onClick={() => setModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="pc-thumb" style={{ background: accentBg }}>
          <div className="pc-thumb-inner">
            <span className="pc-thumb-category">{project.category}</span>
          </div>
          <div className="pc-thumb-overlay">
            <span>View Project</span>
          </div>
        </div>

        {/* Card body */}
        <div className="pc-body">
          <div className="pc-meta">
            <span className="pc-category">{project.category}</span>
          </div>
          <h3 className="pc-title">{project.title}</h3>
          <p className="pc-desc">{project.description}</p>
          <div className="pc-tags">
            {(project.tags || []).slice(0, 3).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </article>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={project.title}>
        <div className="project-modal-content">
          <div className="pmc-thumb" style={{ background: accentBg }}>
            <span>{project.category}</span>
          </div>
          <div className="pmc-tags" style={{ marginTop: '1.5rem' }}>
            {(project.tags || []).map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <p className="pmc-desc">{project.longDescription || project.description}</p>
          {project.link && project.link !== '#' && (
            <a className="pmc-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Live Project →
            </a>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
