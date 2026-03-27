import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { members } from './src/data/members.js';
import { projects } from './src/data/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfoliosDir = path.join(__dirname, 'public', 'Portfolios');

const generateStyleCSS = () => {
  return `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

:root {
  --bg: #0f1011;
  --card-bg: rgba(255, 255, 255, 0.03);
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.2);
  --cream: #f4f0ec;
  --muted: #a3a19d;
  --terracotta: #cc705b;
  --teal: #5ba3a3;
  --sans: "Inter", -apple-system, sans-serif;
  --serif: "Playfair Display", serif;
  --transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background-color: var(--bg);
  color: var(--cream);
  font-family: var(--sans);
  line-height: 1.6;
  overflow-x: hidden;
}

.portfolio-header { 
  padding: 2rem 2rem 0;
  max-width: 1000px;
  margin: 0 auto;
}

.section-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blobPulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
}

.member-portfolio {
  padding-bottom: 5rem;
}

.mp-back {
  padding-top: 5rem;
  padding-bottom: 1rem;
}
.mp-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color 0.25s;
  text-decoration: none;
}
.mp-back-link:hover { color: var(--cream); }
.mp-back-link svg { transition: transform 0.25s; }
.mp-back-link:hover svg { transform: translateX(-3px); }

/* Hero */
.mp-hero {
  position: relative;
  padding: 4rem 2rem 5rem;
  text-align: center;
  overflow: hidden;
}
.mp-hero-blob {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(147,95,76,0.12) 0%, transparent 70%);
  pointer-events: none;
  animation: blobPulse 8s ease-in-out infinite;
}
.mp-hero-inner {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
}

.mp-avatar-wrap { margin: 0 auto 2rem; width: 120px; height: 120px; border-radius: 50%; border: 2px solid var(--border); cursor: pointer; position: relative; }
.mp-avatar {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  transition: opacity 0.2s;
}
.mp-avatar-wrap:hover .mp-avatar { opacity: 0.8; }
.mp-avatar-placeholder {
  width: 100%; height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(147,95,76,0.3), rgba(94,158,173,0.2));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif);
  font-size: 2.4rem;
  color: var(--cream);
  transition: opacity 0.2s;
}
.mp-avatar-wrap:hover .mp-avatar-placeholder { opacity: 0.8; }

/* Avatar Modal Overlay */
.mp-avatar-modal {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.mp-avatar-modal.active {
  opacity: 1;
  visibility: visible;
}
.mp-modal-backdrop {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  cursor: pointer;
}
.mp-modal-content {
  position: relative;
  z-index: 10001;
  width: 80vmin;
  height: 80vmin;
  max-width: 450px;
  max-height: 450px;
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mp-avatar-modal.active .mp-modal-content {
  transform: scale(1);
}
.mp-modal-img {
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--border);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}
.mp-modal-placeholder {
  width: 100%; height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(147,95,76,0.3), rgba(94,158,173,0.2));
  border: 4px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif);
  font-size: 6rem;
  color: var(--cream);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.mp-name {
  font-family: var(--serif);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--cream);
  margin-bottom: 0.5rem;
  line-height: 1.05;
  font-weight: 400;
}
.mp-title {
  font-size: 0.9rem;
  color: var(--teal);
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}
.mp-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin-bottom: 1.5rem; }

.tag {
  background: rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.7);
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255,255,255,0.08);
}

.mp-socials { display: flex; justify-content: center; gap: 1rem; }
.mp-socials a {
  color: var(--muted);
  transition: color 0.25s, transform 0.25s;
  display: flex;
}
.mp-socials a:hover { color: var(--terracotta); transform: translateY(-2px); }

/* Sections */
.mp-section { padding: 5rem 0; border-top: 1px solid var(--border); margin-top: 1rem;}
.mp-section-heading {
  font-family: var(--serif);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--cream);
  margin-bottom: 3rem;
  line-height: 1.1;
  font-weight: 400;
}
.mp-section-heading em { font-style: italic; color: var(--terracotta); }

.section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--muted);
  font-weight: 600;
  margin-bottom: 0.8rem;
}

/* About grid */
.mp-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.mp-bio p {
  font-size: 0.98rem;
  color: var(--muted);
  line-height: 1.9;
}
.mp-tools { margin-top: 2rem; }
.mp-tools h4 {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.8rem;
}
.mp-tool-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.mp-what-i-do { display: flex; flex-direction: column; gap: 1rem; }
.mp-wid-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color var(--transition);
}
.mp-wid-card:hover { border-color: var(--border-hover); }
.mp-wid-card h3 {
  font-family: var(--serif);
  font-size: 1.05rem;
  color: var(--cream);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.mp-wid-card p { font-size: 0.85rem; color: var(--muted); line-height: 1.65; }

/* Projects */
.mp-projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.project-card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition);
}
.project-card:hover { border-color: var(--terracotta); transform: translateY(-5px); }
.project-img-placeholder {
  height: 220px;
  background: rgba(255,255,255,0.02);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.3);
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.5rem;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.project-img-placeholder::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(91,163,163,0.1), rgba(204,112,91,0.1));
}
.project-info { padding: 1.8rem; }
.project-info h3 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--cream);
  margin-bottom: 0.5rem;
}
.project-info p { color: var(--muted); font-size: 0.95rem; }

/* Contact */
.mp-email {
  display: inline-block;
  font-family: var(--serif);
  font-size: 1.3rem;
  color: var(--cream);
  border-bottom: 1px solid rgba(255,250,229,0.15);
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
  transition: color 0.25s, border-color 0.25s;
  text-decoration: none;
}
.mp-email:hover { color: var(--terracotta); border-color: var(--terracotta); }

.mp-form { display: flex; flex-direction: column; gap: 1.2rem; max-width: 560px; }
.mp-field { display: flex; flex-direction: column; gap: 0.4rem; }
.mp-field label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.mp-field input,
.mp-field textarea {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  color: var(--cream);
  font-family: var(--sans);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.25s;
  resize: vertical;
}
.mp-field input:focus, .mp-field textarea:focus { border-color: rgba(147,95,76,0.5); }
.mp-field input::placeholder, .mp-field textarea::placeholder { color: var(--muted); }

.mp-submit {
  align-self: flex-start;
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--terracotta);
  color: var(--cream);
  border: none;
  border-radius: 10px;
  padding: 0.8rem 2rem;
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;
}
.mp-submit:hover { background: #a96b54; transform: translateY(-2px); }

.mp-sent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 2rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  max-width: 400px;
  animation: fadeUp 0.5s ease;
}
.mp-sent h3 { font-family: var(--serif); font-size: 1.3rem; color: var(--cream); font-weight: normal; }
.mp-sent p { font-size: 0.88rem; color: var(--muted); }

@media (max-width: 1023px) {
  .mp-about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .mp-projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .mp-projects-grid { grid-template-columns: 1fr; }
  .mp-section { padding: 4rem 2rem; }
}`;
};

const generateIndexHTML = (member) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${member.name} | VIRTUAL Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header class="portfolio-header section-container">
        <a href="/team" class="mp-back-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M6.5 1.5L1 7l5.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to Team
        </a>
    </header>
    <main class="member-portfolio" id="portfolio-main">
        <!-- Rendered by script.js -->
    </main>
</body>
</html>`;
};

const generateScriptJS = (member) => {
  const memberProjects = projects.filter(p => member.projects && member.projects.includes(p.id)).map(p => ({
    title: p.title,
    description: p.description,
    color: p.color || '#6882AD'
  }));

  const data = {
    name: member.name,
    title: member.title,
    tags: member.skills || [],
    bio: member.bio || "",
    email: member.email || "hello@example.com",
    image: `images/${member.image ? member.image.split('/').pop() : 'placeholder.png'}`,
    initials: member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
    socials: member.socialLinks || {},
    tools: member.tools || [],
    whatIDo: member.about && member.about.whatIDo ? member.about.whatIDo : [],
    projects: memberProjects,
    testimonials: []
  };

  return `const memberData = ${JSON.stringify(data, null, 2)};

function renderPortfolio() {
    const main = document.getElementById('portfolio-main');
    if (!main) return;

    const heroHTML = \`
      <div class="mp-hero">
        <div class="mp-hero-blob"></div>
        <div class="mp-hero-inner">
          <div class="mp-avatar-wrap">
            <img class="mp-avatar" src="\${memberData.image}" alt="\${memberData.name}" onerror="this.outerHTML='<div class=\\'mp-avatar-placeholder\\'>\${memberData.initials}</div>'">
          </div>
          <h1 class="mp-name">\${memberData.name}</h1>
          <p class="mp-title">\${memberData.title}</p>
          <div class="mp-tags">
            \${memberData.tags.map(t => \`<span class="tag">\${t}</span>\`).join('')}
          </div>
        </div>
      </div>
    \`;

    const toolsHTML = memberData.tools.length ? \`
        <div class="mp-tools">
            <h4>Tools & Technologies</h4>
            <div class="mp-tool-tags">
            \${memberData.tools.map(t => \`<span class="tag">\${t}</span>\`).join('')}
            </div>
        </div>
    \` : '';

    const aboutHTML = \`
      <section class="mp-section section-container">
        <div class="reveal">
          <p class="section-label">About</p>
          <h2 class="mp-section-heading">Who I <em>am</em></h2>
        </div>
        <div class="mp-about-grid">
          <div class="mp-bio reveal" style="transition-delay: 80ms;">
            <p>\${memberData.bio}</p>
            \${toolsHTML}
          </div>
          <div class="mp-what-i-do">
            \${memberData.whatIDo.map((w, i) => \`
              <div class="mp-wid-card reveal" style="transition-delay: \${(i + 1) * 80}ms;">
                <h3>\${w.title}</h3>
                <p>\${w.description}</p>
              </div>
            \`).join('')}
          </div>
        </div>
      </section>
    \`;

    const projectsHTML = memberData.projects.length ? \`
      <section class="mp-section section-container">
        <div class="reveal">
          <p class="section-label">Work</p>
          <h2 class="mp-section-heading">Selected <em>Projects</em></h2>
        </div>
        <div class="mp-projects-grid">
          \${memberData.projects.map((p, i) => \`
            <a href="#" class="project-card reveal" style="transition-delay: \${i * 80}ms;">
              <div class="project-img-placeholder" style="background: \${p.color}22;">
                 \${p.title.split(' ')[0]}
              </div>
              <div class="project-info">
                <h3>\${p.title}</h3>
                <p>\${p.description}</p>
              </div>
            </a>
          \`).join('')}
        </div>
      </section>
    \` : '';

    const contactHTML = \`
      <section class="mp-section section-container mp-contact">
        <div class="reveal">
          <p class="section-label">Contact</p>
          <h2 class="mp-section-heading">Get in <em>touch</em></h2>
          <a href="mailto:\${memberData.email}" class="mp-email">\${memberData.email}</a>
        </div>
        <div class="mp-contact-grid reveal" style="transition-delay: 80ms;">
          <form class="mp-form" id="contact-form">
            <div class="mp-field">
              <label for="mp-name">Name</label>
              <input id="mp-name" type="text" placeholder="Your name" required>
            </div>
            <div class="mp-field">
              <label for="mp-email">Email</label>
              <input id="mp-email" type="email" placeholder="your@email.com" required>
            </div>
            <div class="mp-field">
              <label for="mp-message">Message</label>
              <textarea id="mp-message" rows="5" placeholder="Tell me about your project…" required></textarea>
            </div>
            <button type="submit" class="mp-submit">Send Message</button>
          </form>
          <div class="mp-sent" id="contact-success" style="display:none;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3>Message sent!</h3>
            <p>Thank you — \${memberData.name} will be in touch shortly.</p>
          </div>
        </div>
      </section>
    \`;

    const modalHTML = \`
      <div class="mp-avatar-modal" id="avatar-modal">
        <div class="mp-modal-backdrop" id="avatar-backdrop"></div>
        <div class="mp-modal-content">
          <img class="mp-modal-img" src="\${memberData.image}" alt="\${memberData.name}" onerror="this.outerHTML='<div class=\\'mp-modal-placeholder\\'>\${memberData.initials}</div>'">
        </div>
      </div>
    \`;

    main.innerHTML = heroHTML + aboutHTML + projectsHTML + contactHTML + modalHTML;

    const avatarWrap = document.querySelector('.mp-avatar-wrap');
    const avatarModal = document.getElementById('avatar-modal');
    const avatarBackdrop = document.getElementById('avatar-backdrop');
    
    if (avatarWrap && avatarModal) {
        avatarWrap.addEventListener('click', () => {
            avatarModal.classList.add('active');
        });
        avatarBackdrop.addEventListener('click', () => {
            avatarModal.classList.remove('active');
        });
    }

    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            success.style.display = 'flex';
        });
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', renderPortfolio);
`;
};

members.forEach(member => {
  const memberDir = path.join(portfoliosDir, member.id);
  // Optional: create directory if it doesn't exist, though user says they created them
  if (!fs.existsSync(memberDir)) {
      fs.mkdirSync(memberDir, { recursive: true });
  }

  // Generate files
  fs.writeFileSync(path.join(memberDir, 'index.html'), generateIndexHTML(member));
  fs.writeFileSync(path.join(memberDir, 'style.css'), generateStyleCSS());
  fs.writeFileSync(path.join(memberDir, 'script.js'), generateScriptJS(member));
  
  console.log(`Generated portfolio for ${member.id} (${member.name})`);
});
