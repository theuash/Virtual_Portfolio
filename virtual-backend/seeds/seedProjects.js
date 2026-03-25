const projects = [
  {
    projectId: "resqscan",
    title: "ResQScan",
    category: "Web Development",
    description: "Real-time emergency tracking dashboard",
    longDescription: "A comprehensive platform built for disaster response teams.",
    tags: ["React", "Node.js", "WebSockets"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    lead: "ali",
    memberIds: ["ali", "uash"],
    featured: true,
    publishedAt: new Date('2024-01-10')
  },
  {
    projectId: "lumin-ai",
    title: "Lumin AI",
    category: "Design",
    description: "Brand identity for an AI startup",
    longDescription: "Complete brand overhaul and ui system for Lumin AI.",
    tags: ["Branding", "UI Design"],
    technologies: ["Figma", "Illustrator"],
    lead: "uash",
    memberIds: ["uash", "alex"],
    featured: true,
    publishedAt: new Date('2024-02-15')
  },
  // Placeholders for 10 more to match the 12
  ...Array.from({ length: 10 }).map((_, i) => ({
    projectId: `project-${i+3}`,
    title: `Project ${i+3}`,
    category: i % 2 === 0 ? "Web Development" : "Strategy",
    description: "VIRTUAL Collective Project",
    tags: ["Tag 1", "Tag 2"],
    memberIds: [`member-${(i%5)+1}`],
    featured: i < 2,
    publishedAt: new Date(Date.now() - i * 100000000)
  }))
];

module.exports = projects;
