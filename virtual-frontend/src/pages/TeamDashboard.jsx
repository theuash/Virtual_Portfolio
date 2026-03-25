import React, { useState, useMemo } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import TeamGrid from '@/components/Team/TeamGrid';
import FilterButtons from '@/components/Team/FilterButtons';
import useInView from '@/hooks/useInView';
import { members, roles } from '@/data/members';
import { debounce } from '@/utils/helpers';
import './TeamDashboard.css';

const TeamDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { ref, inView } = useInView();

  const handleSearch = useMemo(() =>
    debounce((q) => setSearchQuery(q), 200)
  , []);

  const filtered = useMemo(() => {
    return members
      .filter(m => activeFilter === 'all' || m.role === activeFilter)
      .filter(m => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
          m.name.toLowerCase().includes(q) ||
          m.title.toLowerCase().includes(q) ||
          (m.skills || []).some(s => s.toLowerCase().includes(q))
        );
      });
  }, [activeFilter, searchQuery]);

  return (
    <>
      <Header />
      <main className="team-dashboard">
        {/* Page Header */}
        <div className="td-header section-container">
          <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
            <p className="section-label">The Collective</p>
            <h1 className="section-heading">Meet <em>VIRTUAL</em></h1>
            <p className="td-intro">
              Twelve creative professionals. One shared obsession with craft, code, and making things that matter.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="td-filters section-container">
          <FilterButtons
            filters={roles}
            activeFilter={activeFilter}
            onFilter={setActiveFilter}
            searchQuery={searchQuery}
            onSearch={handleSearch}
          />
        </div>

        {/* Grid */}
        <div className="section-container td-grid-wrap">
          <div className="td-count">
            {filtered.length} member{filtered.length !== 1 ? 's' : ''}
          </div>
          <TeamGrid members={filtered} loading={false} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TeamDashboard;
