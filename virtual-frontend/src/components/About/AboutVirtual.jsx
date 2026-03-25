import React from 'react';
import useInView from '@/hooks/useInView';
import './AboutVirtual.css';

const ValueCard = ({ icon, title, description, delay = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  return (
    <div ref={ref} className={`value-card reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="value-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const StatItem = ({ num, label, delay = 0 }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`stat-item reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <span className="stat-num">{num}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const AboutVirtual = () => {
  const { ref: headRef, inView: headInView } = useInView();
  const { ref: textRef, inView: textInView } = useInView();

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        {/* Header */}
        <div className="about-header">
          <div ref={headRef} className={`reveal ${headInView ? 'visible' : ''}`}>
            <p className="section-label">About</p>
            <h2 className="section-heading">We build things that <em>matter.</em></h2>
          </div>
          <div ref={textRef} className={`about-text reveal ${textInView ? 'visible' : ''}`}>
            <p>VIRTUAL is a creative technology collective born from a shared obsession with making the digital world more intentional, more human, and more alive. We are twelve individuals who bring radically different skill sets to the same table.</p>
            <p>From generative interfaces to full-stack products, from motion systems to developer tooling — we believe that how something is built is just as important as what it does.</p>
            <p>We operate at the edges: between art and engineering, between tool and expression. Every project we take on carries the weight of that duality.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <StatItem num="12" label="Core Members" delay={0} />
          <StatItem num="40+" label="Projects Shipped" delay={80} />
          <StatItem num="2022" label="Collective Founded" delay={160} />
          <StatItem num="8" label="Industries Covered" delay={240} />
        </div>

        {/* Values */}
        <div className="values-grid">
          <ValueCard
            delay={0}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            }
            title="Engineering"
            description="Scalable systems, clean APIs, and performant frontends built with modern tooling and best practices."
          />
          <ValueCard
            delay={80}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            }
            title="Design"
            description="Thoughtful visual systems, intuitive UX, and motion that makes every interaction feel natural."
          />
          <ValueCard
            delay={160}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            }
            title="Collaboration"
            description="Twelve unique minds working in genuine sync. Diverse perspectives, one shared commitment to quality."
          />
        </div>

        <hr className="divider" />
      </div>
    </section>
  );
};

export default AboutVirtual;
