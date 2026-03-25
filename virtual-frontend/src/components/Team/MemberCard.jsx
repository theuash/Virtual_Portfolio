import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '@/hooks/useInView';
import { getInitials } from '@/utils/helpers';
import './MemberCard.css';

const MemberCard = ({ member, index = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const initials = getInitials(member.name);

  return (
    <article
      ref={ref}
      className={`member-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Avatar */}
      <div className="mc-avatar-wrap">
        {member.image ? (
          <img className="mc-avatar" src={member.image} alt={member.name} loading="lazy" />
        ) : (
          <div className="mc-avatar-placeholder">{initials}</div>
        )}
        <div className="mc-avatar-ring" />
      </div>

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
