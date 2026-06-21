/**
 * Single source of truth for all site copy and data.
 * Edit content here — never inside components.
 */

export type NavLink = { label: string; href: string };
export type Stat = { value: string; label: string };
export type Service = { title: string; description: string; tags: string[] };
export type SkillGroup = { id: string; command: string; label: string; items: string[] };
export type ExperienceEntry = {
  period: string;
  role: string;
  context: string;
  points: string[];
};
export type SocialLink = { label: string; href: string; handle: string };

export const profile = {
  firstName: "Mahnoor",
  lastName: "Zaffar",
  fullName: "Mahnoor Zaffar",
  role: "Full-Stack Web Developer & AI Engineer",
  handle: "~/mahnoor",
  email: "1999mahnoor+developer@gmail.com",
  location: "Remote · Available worldwide",
  status: "Open to opportunities",
} as const;

export const nav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Full-Stack & AI Engineer",
  intro: "I'm",
  tagline:
    "I build production-ready full-stack and AI-powered applications — turning complex data and intelligent systems into fast, intuitive products.",
  /** Terminal "whoami" output rendered with a typing animation. */
  terminal: {
    command: "whoami",
    lines: [
      "name        Mahnoor Zaffar",
      "role        Full-Stack Web Developer & AI Engineer",
      "stack       Python · TypeScript · React · FastAPI",
      "focus       RAG · MLOps · AI-powered dashboards",
      "domains     FinTech · HealthTech",
      "status      open to opportunities ✓",
    ],
  },
} as const;

export const stats: Stat[] = [
  { value: "1+", label: "Years building for production" },
  { value: "2", label: "Industries — FinTech & HealthTech" },
  { value: "15+", label: "Tools & technologies in active use" },
  { value: "100%", label: "Focus on clean, maintainable code" },
];

export const about = {
  heading: "About",
  lead: "I'm a dedicated Full-Stack & AI Developer with a background in MLOps, rapid application development, and modern web design.",
  paragraphs: [
    "I code production-ready solutions in Python, TypeScript, and React, crafting intuitive AI-powered dashboards and digital experiences. My foundation is full-stack web development with a strong focus on clean code, solid backend architecture, and polished frontend interfaces.",
    "I specialize in transforming complex data and AI-powered features into smooth, intuitive web experiences using GSAP-grade motion, advanced CSS, and Tailwind. My focus is building applications where dashboards, automation workflows, and intelligent systems feel fast, clear, and genuinely easy to use.",
  ],
} as const;

export const experience = {
  heading: "Experience & Focus",
  description:
    "1+ year shipping responsive, scalable, business-focused software across FinTech and HealthTech.",
  entries: [
    {
      period: "2024 — Present",
      role: "Full-Stack & AI Engineer",
      context: "FinTech & HealthTech",
      points: [
        "Built production-ready full-stack applications with Python, TypeScript and React.",
        "Designed AI-powered dashboards and automation workflows around RAG pipelines.",
        "Owned features end to end — from API design to responsive, accessible UI.",
      ],
    },
    {
      period: "Foundation",
      role: "Full-Stack Web Developer",
      context: "Backend → Frontend → AI",
      points: [
        "Mastered server-side development before moving deep into applied AI.",
        "Shipped responsive, user-friendly web apps with a clean-code discipline.",
        "Now extending the stack with MLOps and intelligent, data-driven systems.",
      ],
    },
  ] satisfies ExperienceEntry[],
} as const;

export const services = {
  heading: "Services",
  description:
    "Expert solutions across full-stack web development and applied AI — focused on performance, scalability, and seamless user experience.",
  items: [
    {
      title: "Full-Stack Web Applications",
      description:
        "Responsive, modern web apps built with React, TypeScript and Python backends — clean architecture, fast, and built to scale.",
      tags: ["React", "FastAPI", "TypeScript"],
    },
    {
      title: "AI & RAG Solutions",
      description:
        "Retrieval-augmented generation systems, AI-powered dashboards and automation workflows that turn complex data into clear, actionable products.",
      tags: ["RAG", "LangChain", "LLMs"],
    },
    {
      title: "MLOps & Optimization",
      description:
        "Reliable MLOps pipelines plus performance and SEO optimization, so applications stay fast, discoverable and maintainable.",
      tags: ["MLOps", "Docker", "CI/CD"],
    },
  ] satisfies Service[],
} as const;

export const skills = {
  heading: "Skills",
  description: "Run a category to list the tools I reach for.",
  groups: [
    {
      id: "languages",
      command: "ls ~/languages",
      label: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      id: "frontend",
      command: "ls ~/frontend",
      label: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "anime.js", "HTML5", "CSS3"],
    },
    {
      id: "backend",
      command: "ls ~/backend",
      label: "Backend",
      items: ["FastAPI", "Node.js", "Django", "REST APIs"],
    },
    {
      id: "ai",
      command: "ls ~/ai",
      label: "AI / ML",
      items: ["RAG", "LangChain", "MLOps", "Prompt Engineering"],
    },
    {
      id: "infra",
      command: "ls ~/infra",
      label: "Data & Infra",
      items: ["PostgreSQL", "MongoDB", "Docker", "Git"],
    },
  ] satisfies SkillGroup[],
} as const;

export const contact = {
  heading: "Let's build something",
  message: "Have a project in mind? Let's make it a reality.",
  closing: "Thanks for visiting — let's stay connected.",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mahnoor-Zaffar", handle: "Mahnoor-Zaffar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahnoor-zaffar/", handle: "mahnoor-zaffar" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
];
