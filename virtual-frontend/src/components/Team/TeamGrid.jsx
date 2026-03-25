import React from 'react';
import MemberCard from './MemberCard';
import { SkeletonCard } from '@/components/Common/LoadingSpinner';
import './TeamGrid.css';

const EmptyState = ({ query }) => (
  <div className="team-empty">
    <div className="team-empty-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </div>
    <h3>No members found</h3>
    <p>{query ? `No results for "${query}"` : 'No members match this filter.'}</p>
  </div>
);

const TeamGrid = ({ members, loading }) => {
  if (loading) {
    return (
      <div className="team-grid">
        {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (!members || members.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="team-grid">
      {members.map((member, i) => (
        <MemberCard key={member.id} member={member} index={i} />
      ))}
    </div>
  );
};

export default TeamGrid;
