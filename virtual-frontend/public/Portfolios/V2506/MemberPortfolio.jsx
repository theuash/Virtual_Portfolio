import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ProjectCard from '@/components/Projects/ProjectCard';
import useInView from '@/hooks/useInView';
import { members } from '@/data/members';
import { projects } from '@/data/projects';
import { getTestimonialsForMember } from '@/data/testimonials';
import { getInitials } from '@/utils/helpers';
import './MemberPortfolio.css';

/* ── Section: Hero ── */
const MemberHero = ({ member }) => {
  const initials = getInitials(member.name);
  return (
    <div className="mp-hero">
      <div className="mp-hero-blob" />
      <div className="mp-hero-inner">
        <div className="mp-avatar-wrap">
          {member.image ? (
            <img className="mp-avatar" src={member.image} alt={member.name} />
          ) : (
            <div className="mp-avatar-placeholder">{initials}</div>
          )}
        </div>
        <h1 className="mp-name">{member.name}</h1>
        <p className="mp-title">{member.title}</p>
        <div className="mp-tags">
          {(member.skills || []).map(s => <span key={s} className="tag">{s}</span>)}
        </div>
        {member.socialLinks && (
          <div className="mp-socials">
            {member.socialLinks.linkedin && member.socialLinks.linkedin !== '#' && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            )}
            {member.socialLinks.github && member.socialLinks.github !== '#' && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 -3 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            )}
            {member.socialLinks.instagram && member.socialLinks.instagram !== '#' && (
              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="12" r="4" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 6L18 6.01" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Section: About ── */
const MemberAbout = ({ member }) => {
  const { ref, inView } = useInView();
  return (
    <section className="mp-section section-container">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
        <p className="section-label">About</p>
        <h2 className="mp-section-heading">Who I <em>am</em></h2>
      </div>
      <div className="mp-about-grid">
        <div className={`mp-bio reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
          <p>{member.bio || '[Bio coming soon]'}</p>
          {member.tools && (
            <div className="mp-tools">
              <h4>Tools & Technologies</h4>
              <div className="mp-tool-tags">
                {member.tools.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          )}
        </div>
        {member.about?.whatIDo && (
          <div className="mp-what-i-do">
            {member.about.whatIDo.map((item, i) => (
              <div key={i} className={`mp-wid-card reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ── Section: Projects ── */
const MemberProjects = ({ member }) => {
  const memberProjects = projects.filter(p => {
    const mid = p.memberId;
    return mid === member.id || (Array.isArray(mid) && mid.includes(member.id));
  });
  const { ref, inView } = useInView();
  if (!memberProjects.length) return null;
  return (
    <section className="mp-section section-container">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
        <p className="section-label">Work</p>
        <h2 className="mp-section-heading">Selected <em>Projects</em></h2>
      </div>
      <div className="mp-projects-grid">
        {memberProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  );
};

/* ── Section: Testimonials ── */
const MemberTestimonials = ({ member }) => {
  const testimonials = getTestimonialsForMember(member.id);
  const { ref, inView } = useInView();
  if (!testimonials.length) return null;
  return (
    <section className="mp-section section-container mp-testimonials">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
        <p className="section-label">Testimonials</p>
        <h2 className="mp-section-heading">What people <em>say</em></h2>
      </div>
      <div className="mp-testi-grid">
        {testimonials.map((t, i) => (
          <div key={t.id} className={`mp-testi-card reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="mp-quote">"{t.text}"</p>
            <div className="mp-testi-author">
              <div className="mp-testi-avatar">{(t.author[0] || 'A').toUpperCase()}</div>
              <div>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── Section: Contact ── */
const MemberContact = ({ member }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const { ref, inView } = useInView();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to POST /api/members/:id/contact
    setSent(true);
  };

  return (
    <section className="mp-section section-container mp-contact">
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
        <p className="section-label">Contact</p>
        <h2 className="mp-section-heading">Get in <em>touch</em></h2>
        <a href={`mailto:${member.email}`} className="mp-email">{member.email}</a>
      </div>
      <div className={`mp-contact-grid reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '80ms' }}>
        {sent ? (
          <div className="mp-sent">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3>Message sent!</h3>
            <p>Thank you — {member.name} will be in touch shortly.</p>
          </div>
        ) : (
          <form className="mp-form" onSubmit={handleSubmit}>
            <div className="mp-field">
              <label htmlFor="mp-name">Name</label>
              <input id="mp-name" type="text" placeholder="Your name" required
                value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
            </div>
            <div className="mp-field">
              <label htmlFor="mp-email">Email</label>
              <input id="mp-email" type="email" placeholder="your@email.com" required
                value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
            </div>
            <div className="mp-field">
              <label htmlFor="mp-message">Message</label>
              <textarea id="mp-message" rows={5} placeholder="Tell me about your project…" required
                value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
            </div>
            <button type="submit" className="mp-submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

/* ── Main Page ── */
const MemberPortfolio = () => {
  const { memberId } = useParams();
  const member = members.find(m => m.id === memberId);

  if (!member) return <Navigate to="/404" replace />;

  return (
    <>
      <Header />
      <main className="member-portfolio">
        {/* Back nav */}
        <div className="mp-back section-container">
          <Link to="/team" className="mp-back-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 7H1M6.5 1.5L1 7l5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Team
          </Link>
        </div>

        <MemberHero member={member} />
        <MemberAbout member={member} />
        <MemberProjects member={member} />
        <MemberTestimonials member={member} />
        <MemberContact member={member} />
      </main>
      <Footer />
    </>
  );
};

export default MemberPortfolio;
