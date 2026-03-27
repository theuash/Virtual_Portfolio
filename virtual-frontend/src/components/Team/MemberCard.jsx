import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import useInView from '@/hooks/useInView';
import { getInitials } from '@/utils/helpers';
import './MemberCard.css';

const MemberCard = ({ member, index = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initials = getInitials(member.name);

  return (
    <article
      ref={ref}
      className={`member-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Avatar */}
      <div
        className="mc-avatar-wrap"
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        {member.image ? (
          <img className="mc-avatar" src={member.image} alt={member.name} loading="lazy" style={{ pointerEvents: 'none' }} />
        ) : (
          <div className="mc-avatar-placeholder" style={{ pointerEvents: 'none' }}>{initials}</div>
        )}
        <div className="mc-avatar-ring" style={{ pointerEvents: 'none' }} />
      </div>

      {/* Avatar Modal */}
      {isModalOpen && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <style>
            {`
              @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
              @keyframes modalScaleUp { from { transform: scale(0.8); } to { transform: scale(1); } }
            `}
          </style>
          <div
            className="mc-modal-backdrop"
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); setIsModalOpen(false); }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', cursor: 'pointer', animation: 'modalFadeIn 0.3s ease forwards' }}
          />
          <div className="mc-modal-content" style={{ position: 'relative', zIndex: 10001, width: '80vmin', height: '80vmin', maxWidth: '450px', maxHeight: '450px', animation: 'modalScaleUp 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards' }}>
            {member.image ? (
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(147,95,76,0.3), rgba(94,158,173,0.2))', border: '4px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '6rem', color: 'var(--cream)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                {initials}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Info */}
      <div className="mc-info">
        <div className="mc-name">{member.name}</div>
        <div className="mc-id">{member.id}</div>
        <div className="mc-role">{member.title}</div>
        {member.bio && <p className="mc-bio">{member.bio}</p>}
      </div>

      {/* Skills */}
      <div className="mc-tags">
        {(member.skills || []).slice(0, 3).map(s => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>

      {/* CTA */}
      <Link
        className="mc-btn"
        to={`/member/${member.id}`}
        aria-label={`View ${member.name}'s portfolio`}
      >
        View Portfolio
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </article>
  );
};

export default MemberCard;
