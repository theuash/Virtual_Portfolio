import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/Hero/HeroSection';
import AboutVirtual from '@/components/About/AboutVirtual';
import TeamGrid from '@/components/Team/TeamGrid';
import ProjectGrid from '@/components/Projects/ProjectGrid';
import useInView from '@/hooks/useInView';
import { members } from '@/data/members';
import { projects } from '@/data/projects';
import './Home.css';

const CTASection = () => {
  const { ref, inView } = useInView();
  return (
    <section className="cta-section" id="contact">
      <div className="section-container">
        <div ref={ref} className={`cta-inner reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label">Get in touch</p>
          <h2 className="section-heading">Ready to build<br/><em>something?</em></h2>
          <p className="cta-sub">Whether you have a project in mind or just want to say hello — we'd love to hear from you.</p>
          <div className="cta-actions">
            <a href="mailto:hello@virtual.studio" className="cta-btn-primary">
              Say Hello
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </a>
            <Link to="/team" className="cta-btn-outline">Meet the Team</Link>
          </div>
          <div className="cta-socials">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const featuredMembers = members.filter(m => m.featured);
  const featuredProjects = projects.filter(p => p.featured);
  const { ref: teamRef, inView: teamInView } = useInView();
  const { ref: projRef, inView: projInView } = useInView();

  return (
    <main>
      <HeroSection />

      <AboutVirtual />

      {/* Team Preview */}
      <section className="team-preview-section section-container">
        <div ref={teamRef} className={`section-header reveal ${teamInView ? 'visible' : ''}`}>
          <div>
            <p className="section-label">The Collective</p>
            <h2 className="section-heading">Meet <em>VIRTUAL</em></h2>
          </div>
          <Link to="/team" className="see-all-link">
            View all 12 members
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <TeamGrid members={featuredMembers} loading={false} />
      </section>

      {/* Featured Projects */}
      <section className="projects-section section-container" id="work">
        <div ref={projRef} className={`section-header reveal ${projInView ? 'visible' : ''}`}>
          <div>
            <p className="section-label">Our Work</p>
            <h2 className="section-heading">Selected <em>Projects</em></h2>
          </div>
          <span className="project-count">{featuredProjects.length} featured</span>
        </div>
        <ProjectGrid projects={featuredProjects} showFilter={false} />
      </section>

      <CTASection />
    </main>
  );
};

export default Home;
