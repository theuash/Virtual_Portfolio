// ─── Testimonials Data ────────────────────────────────────────────────────

export const testimonials = [
  {
    id: "t-1",
    memberId: "member-1",
    text: "Alex transformed our product in ways we didn't think were possible in the timeline we had. The attention to detail and the empathy they brought to every design decision was remarkable.",
    author: "Sarah J.",
    role: "CEO, FinStart",
    date: "Jan 2026",
    avatar: null
  },
  {
    id: "t-2",
    memberId: "member-1",
    text: "Working with Alex felt like having a full design team packed into one person. They asked the right questions, moved quickly, and delivered work we're still proud of.",
    author: "Tom R.",
    role: "Head of Product, Orbit",
    date: "Nov 2025",
    avatar: null
  },
  {
    id: "t-3",
    memberId: "member-2",
    text: "Jordan built us a backend that hasn't had a single outage in 8 months. Clean code, great documentation, and always available when we had questions.",
    author: "Priya K.",
    role: "CTO, Northstar",
    date: "Feb 2026",
    avatar: null
  },
  {
    id: "t-4",
    memberId: "member-2",
    text: "The API Jordan architected is the cleanest codebase we've inherited. The team was able to onboard in hours, not days.",
    author: "Daniel M.",
    role: "Engineering Lead, ResQScan",
    date: "Dec 2025",
    avatar: null
  },
  {
    id: "t-5",
    memberId: "member-3",
    text: "Sam helped us finally articulate what we stand for. The brand strategy work completely changed how we talk about ourselves — and how prospects respond.",
    author: "Amara N.",
    role: "Founder, Heartline",
    date: "Oct 2025",
    avatar: null
  },
  {
    id: "t-6",
    memberId: "member-4",
    text: "Maya's animations brought our app to life in a way static designs never could. Users tell us the app 'just feels premium' — that's Maya's work.",
    author: "Chris L.",
    role: "Product Designer, Luminary",
    date: "Jan 2026",
    avatar: null
  },
  {
    id: "t-7",
    memberId: "member-12",
    text: "Uash's creative vision pulled the whole VIRTUAL collective together. Every project we've touched has been better because of their direction and taste.",
    author: "VIRTUAL Team",
    role: "Collective Members",
    date: "Mar 2026",
    avatar: null
  },
  {
    id: "t-8",
    memberId: "member-12",
    text: "The rebrand Uash led for VISTA was transformational. We saw results within weeks of the launch — higher conversions, better press coverage, and a team that's proud to share what we've built.",
    author: "Louise T.",
    role: "CMO, VISTA Travel",
    date: "Feb 2026",
    avatar: null
  }
];

export const getTestimonialsForMember = (memberId) =>
  testimonials.filter(t => t.memberId === memberId);

export default testimonials;
