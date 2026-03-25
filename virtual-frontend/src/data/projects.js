// ─── VIRTUAL Projects Data ──────────────────────────────────────────────────

export const projects = [
  {
    id: "project-1",
    title: "Luminary Design System",
    category: "Design System",
    memberId: ["member-1", "member-6"],
    description: "A comprehensive, accessible design system powering 3 product lines.",
    longDescription: "Luminary is a full-scale design system built to unify product experiences across web, mobile, and marketing. It includes 140+ components, a tokenized color system, and detailed documentation that empowers engineering teams to ship consistently.\n\nBuilt with Figma for design and Storybook for engineering, the system features live usage examples, accessibility annotations, and a contribution workflow for distributed teams.",
    image: null,
    tags: ["Figma", "Storybook", "React", "a11y"],
    link: "#",
    featured: true,
    color: "#935F4C"
  },
  {
    id: "project-2",
    title: "VISTA Brand Refresh",
    category: "Branding",
    memberId: ["member-1", "member-12"],
    description: "Complete brand identity redesign for a luxury travel startup.",
    longDescription: "VISTA came to VIRTUAL needing a brand that felt as aspirational as the destinations they offered. We developed a full identity system — logo, typography, color, photography guidelines, and motion principles — that positioned them in the upper tier of the travel market.\n\nThe result was a 45% lift in brand recall scores and a website conversion rate increase of 28% following the rebrand launch.",
    image: null,
    tags: ["Branding", "Identity", "Typography"],
    link: "#",
    featured: true,
    color: "#5E9EAD"
  },
  {
    id: "project-3",
    title: "Orbit — SaaS Dashboard",
    category: "Web Development",
    memberId: ["member-2", "member-5"],
    description: "A real-time analytics dashboard for B2B SaaS teams.",
    longDescription: "Orbit is a real-time business intelligence dashboard built for fast-growing SaaS companies. It surfaces key metrics, cohort analyses, and revenue forecasts in a clean, customizable interface.\n\nBuilt on React 18 + TypeScript with a Node.js/PostgreSQL backend. Features live data streaming via WebSockets, role-based permissions, and a drag-and-drop dashboard builder.",
    image: null,
    tags: ["React", "TypeScript", "Node.js", "WebSockets"],
    link: "#",
    featured: true,
    color: "#6882AD"
  },
  {
    id: "project-4",
    title: "Deploy Pipeline Toolkit",
    category: "DevOps",
    memberId: ["member-2", "member-11"],
    description: "An open-source CI/CD toolkit that reduces deployment time by 60%.",
    longDescription: "A modular CI/CD toolkit for Node.js and Python projects that standardizes testing, building, and deployment across environments. It includes pre-built GitHub Actions workflows, Docker templates, and a CLI for one-command environment provisioning.\n\nPublished on npm with 2,000+ weekly downloads and an active open-source community.",
    image: null,
    tags: ["GitHub Actions", "Docker", "CLI", "Open Source"],
    link: "#",
    featured: false,
    color: "#935F4C"
  },
  {
    id: "project-5",
    title: "Heartline Campaign",
    category: "Strategy",
    memberId: ["member-3", "member-8"],
    description: "A digital brand campaign that raised £200k for mental health NGOs.",
    longDescription: "Heartline was a collaborative content campaign designed to raise awareness and donations for a coalition of mental health non-profits. VIRTUAL contributed brand strategy, campaign copywriting, and digital content production.\n\nThe campaign ran across social, email, and paid channels, generating 1.2M impressions, 48k campaign page visits, and £200k in donations over 6 weeks.",
    image: null,
    tags: ["Brand Strategy", "Copywriting", "Campaign"],
    link: "#",
    featured: false,
    color: "#5E9EAD"
  },
  {
    id: "project-6",
    title: "Flux Motion Library",
    category: "Motion Design",
    memberId: "member-4",
    description: "A reusable Lottie animation library for product UI micro-interactions.",
    longDescription: "Flux is a curated library of 60+ Lottie animations designed specifically for product UIs — loaders, success states, error states, onboarding illustrations, and decorative elements. Each animation is optimized for performance (<50kb) and exports cleanly to iOS, Android, and web.\n\nUsed by 3 client products and available for licensing.",
    image: null,
    tags: ["Lottie", "After Effects", "Motion", "UI"],
    link: "#",
    featured: true,
    color: "#6882AD"
  },
  {
    id: "project-7",
    title: "ResQScan",
    category: "Web Development",
    memberId: ["member-5", "member-2"],
    description: "A QR-based emergency medical information platform for first responders.",
    longDescription: "ResQScan allows individuals to create a secure, QR-code linked medical profile accessible by first responders in an emergency. Built with Next.js, Supabase, and Twilio for SMS alerts.\n\nFeatured in two regional health technology conferences and piloted by a local ambulance service.",
    image: null,
    tags: ["Next.js", "Supabase", "QR", "Healthcare"],
    link: "#",
    featured: true,
    color: "#935F4C"
  },
  {
    id: "project-8",
    title: "Prism Component Kit",
    category: "Frontend",
    memberId: ["member-6", "member-11"],
    description: "A themeable React component kit with dark/light mode and WCAG AA compliance.",
    longDescription: "Prism is an open-source React component library built for speed and accessibility. It includes 80+ fully tested components, CSS variable-based theming, and first-class TypeScript support.\n\nEach component ships with Storybook stories, accessibility annotations, and keyboard navigation out of the box.",
    image: null,
    tags: ["React", "TypeScript", "Storybook", "a11y"],
    link: "#",
    featured: false,
    color: "#5E9EAD"
  },
  {
    id: "project-9",
    title: "Void — Generative Exhibition",
    category: "Generative Art",
    memberId: "member-7",
    description: "An interactive WebGL generative art installation exhibited at Slade London.",
    longDescription: "Void is an interactive generative art piece built entirely in WebGL using Three.js and custom GLSL shaders. Visitors control the piece through gesture and voice, watching particles respond to presence and sound in real time.\n\nExhibited as part of a digital arts programme in London and subsequently toured to two other European venues.",
    image: null,
    tags: ["Three.js", "WebGL", "GLSL", "Interactive"],
    link: "#",
    featured: false,
    color: "#6882AD"
  },
  {
    id: "project-10",
    title: "Northstar Brand Voice Guide",
    category: "Content Strategy",
    memberId: "member-8",
    description: "A comprehensive brand voice and tone guide for a Series B fintech startup.",
    longDescription: "Northstar is a fintech platform targeting first-time investors. Their communications felt cold and jargon-heavy — exactly the opposite of who they were trying to reach. VIRTUAL developed a full brand voice guide covering tone spectrum, vocabulary choices, error messaging, and onboarding copy.\n\nPost-implementation, app store ratings improved from 3.2 to 4.6 stars, with 'easy to understand' appearing in 68% of positive reviews.",
    image: null,
    tags: ["Content Strategy", "Brand Voice", "Fintech", "UX Writing"],
    link: "#",
    featured: false,
    color: "#935F4C"
  },
  {
    id: "project-11",
    title: "Sentimant — NLP Dashboard",
    category: "Data Science",
    memberId: "member-9",
    description: "A real-time sentiment analysis tool for brand monitoring.",
    longDescription: "Sentimant ingests Twitter, Reddit, and review data and applies transformer-based NLP models to surface sentiment trends, topic clusters, and emerging narratives around any brand or keyword.\n\nBuilt with Python (FastAPI), HuggingFace Transformers, and a D3.js frontend. Processes up to 10,000 mentions per minute.",
    image: null,
    tags: ["Python", "NLP", "D3.js", "FastAPI"],
    link: "#",
    featured: false,
    color: "#5E9EAD"
  },
  {
    id: "project-12",
    title: "Fauna — Editorial Illustration Series",
    category: "Illustration",
    memberId: ["member-10", "member-12"],
    description: "A 24-piece editorial illustration series for a nature & science magazine.",
    longDescription: "Fauna is a year-long editorial illustration commission for a science and nature quarterly publication. The series covers biodiversity, ecology, and climate — bringing complex scientific research to life through warm, detailed illustration.\n\nPieces have been shortlisted for two illustration awards and featured in an online exhibition.",
    image: null,
    tags: ["Illustration", "Editorial", "Print", "Science"],
    link: "#",
    featured: false,
    color: "#6882AD"
  }
];

export const categories = ['All', 'Design System', 'Branding', 'Web Development', 'DevOps', 'Strategy', 'Motion Design', 'Frontend', 'Generative Art', 'Content Strategy', 'Data Science', 'Illustration'];

export default projects;
