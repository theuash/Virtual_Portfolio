// Match exact frontend data
const members = [
  {
    memberId: "uash",
    name: "Uash",
    title: "Creative Director",
    role: "designer",
    email: "theuash@gmail.com",
    bio: "Uash is the creative force anchoring VIRTUAL's visual identity. As Creative Director, they set the aesthetic direction for the collective — ensuring every project, product, and pixel feels cohesive, intentional, and unmistakably VIRTUAL.",
    skills: ["Creative Direction", "Art Direction", "Visual Systems"],
    tools: ["Figma", "Illustrator", "After Effects"],
    socialLinks: { github: "https://github.com/theuash", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
    orderInGrid: 1,
    featured: true
  },
  {
    memberId: "ali",
    name: "Ali Raza",
    title: "Lead Engineer",
    role: "developer",
    email: "ali@virtual.studio",
    bio: "Ali builds the engines that power VIRTUAL's most complex applications. Specializing in high-performance backends and cloud infrastructure, he brings deep technical rigor to the collective.",
    skills: ["Node.js", "System Architecture", "Cloud Dev"],
    tools: ["Docker", "AWS", "Go"],
    socialLinks: { github: "https://github.com", linkedin: "https://linkedin.com" },
    orderInGrid: 2,
    featured: true
  },
  {
    memberId: "alex",
    name: "Alex M",
    title: "UI/UX Designer",
    role: "designer",
    email: "alex@virtual.studio",
    bio: "Alex crafts intuitive digital experiences with a deep focus on user psychology.",
    skills: ["UI Design", "UX Research", "Prototyping"],
    tools: ["Figma", "Framer", "Spline"],
    socialLinks: { github: "https://github.com", linkedin: "https://linkedin.com" },
    orderInGrid: 3,
    featured: true
  },
  // Placeholders for remaining 9 to match the 12
  ...Array.from({ length: 9 }).map((_, i) => ({
    memberId: `member-${i+4}`,
    name: `Member ${i+4}`,
    title: i % 2 === 0 ? "Developer" : "Product Manager",
    role: i % 2 === 0 ? "developer" : "pm",
    email: `member${i+4}@virtual.studio`,
    bio: "Crafting digital experiences at VIRTUAL.",
    skills: ["Skill A", "Skill B"],
    socialLinks: {},
    orderInGrid: i + 4,
    featured: false
  }))
];

module.exports = members;
