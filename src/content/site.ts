/**
 * Single source of truth for all site copy and data.
 * Edit content here — never inside components. Recovered from the previous
 * build's content dictionary and corrected to reflect Mahnoor's real profile.
 */

export type NavLink = { label: string; href: string };
export type Service = { title: string; description: string };
export type SkillGroup = { category: string; items: string[] };
export type SocialLink = { label: string; href: string; handle: string };

export const profile = {
  firstName: "Mahnoor",
  lastName: "Zaffar",
  fullName: "Mahnoor Zaffar",
  role: "Full-Stack Web Developer & AI Engineer",
  email: "1999mahnoor+developer@gmail.com",
  location: "Available worldwide · Remote",
} as const;

export const nav: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "Welcome to my website",
  intro: "I'm",
  tagline:
    "Full-Stack & AI Developer crafting production-ready solutions in Python, TypeScript and React.",
  scrollHint: "Scroll",
} as const;

export const about = {
  heading: "About Me",
  lead: "I am a Full-Stack Web Developer with 1+ year of experience in modern web technologies. I specialize in building responsive, scalable, and user-friendly web applications using Python and JavaScript, with a strong focus on clean code, backend development, frontend interfaces, and practical business-focused solutions.",
  paragraphs: [
    "I'm a dedicated Full-Stack & AI Developer with a background in ML Ops, fast application development, and modern web design. I code production-ready solutions in Python, TypeScript, and React, crafting intuitive AI-powered dashboards and digital experiences.",
    "I specialize in transforming complex data and AI-powered features into smooth, intuitive web experiences using GSAP, advanced CSS, and Tailwind CSS. My focus is building production-ready full-stack applications where dashboards, automation workflows, and intelligent systems feel fast, clear, and easy to use.",
  ],
} as const;

export const services = {
  heading: "Services",
  description:
    "I offer expert solutions across full-stack web development and applied AI, focusing on performance, scalability, and seamless user experience — from intelligent dashboards to automation workflows. Let's build something exceptional together!",
  items: [
    {
      title: "Web Application Development",
      description:
        "Designing and developing responsive, modern web applications with cutting-edge technology to enhance your digital presence and captivate your audience.",
    },
    {
      title: "AI & RAG Solutions",
      description:
        "Building retrieval-augmented generation systems, AI-powered dashboards and automation workflows that turn complex data into clear, actionable experiences.",
    },
    {
      title: "MLOps & Optimization",
      description:
        "Productionizing models with reliable MLOps pipelines, plus performance and SEO optimization so your application stays fast, discoverable and maintainable.",
    },
  ] satisfies Service[],
} as const;

export const skills = {
  heading: "My Skills",
  groups: [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "GSAP", "HTML5", "CSS3"] },
    { category: "Backend", items: ["FastAPI", "Node.js", "Django", "REST APIs"] },
    { category: "AI / ML", items: ["RAG", "LangChain", "MLOps", "Prompt Engineering"] },
    { category: "Data & Infra", items: ["PostgreSQL", "MongoDB", "Docker", "Git"] },
  ] satisfies SkillGroup[],
} as const;

export const contact = {
  heading: "Get in Touch",
  message: "Have a project in mind? Let's make it a reality!",
  closing: "Thank you for visiting! Let's stay connected.",
} as const;

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Mahnoor-Zaffar",
    handle: "Mahnoor-Zaffar",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahnoor-zaffar/",
    handle: "mahnoor-zaffar",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
];
