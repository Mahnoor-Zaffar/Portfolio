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
export type Project = {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
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
  /**
   * Optional résumé download. Drop a PDF in `public/` (e.g. public/resume.pdf)
   * and set this to its path (e.g. "/resume.pdf"). Empty = button hidden.
   */
  resumeUrl: "",
} as const;

export const nav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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
  { value: "20+", label: "Tools & technologies in active use" },
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

export const projects: {
  heading: string;
  description: string;
  items: Project[];
  more: { label: string; href: string };
} = {
  heading: "Selected Projects",
  description:
    "A focused selection across the domains I build in — FinTech, HealthTech and applied AI. More on GitHub.",
  items: [
    {
      name: "Nigehbaan Dastak",
      domain: "HealthTech",
      tagline: "Digital health records for small clinics",
      description:
        "A secure platform that replaces paper files — managing patient records, appointments and visit notes so doctors can pull up information instantly and deliver more consistent care.",
      tags: ["Python", "PostgreSQL", "Full-Stack"],
      repo: "https://github.com/Mahnoor-Zaffar/NeighbanDastak",
    },
    {
      name: "FinTrack",
      domain: "FinTech",
      tagline: "Personal finance, built for daily discipline",
      description:
        "Combines transactions, account balances, budgets and analytics into one clean workflow — designed for everyday financial discipline rather than dashboard noise.",
      tags: ["Python", "Analytics", "Budgeting"],
      repo: "https://github.com/Mahnoor-Zaffar/Financial_Tracker",
    },
    {
      name: "VocalFlux",
      domain: "Applied AI",
      tagline: "Real-time speech transcription & coaching",
      description:
        "Streams audio and transcribes with low latency, giving live feedback on phrasing, tone and structure — turning your voice into clearer communication in the moment.",
      tags: ["AI", "Real-time", "Speech-to-Text"],
      repo: "https://github.com/Mahnoor-Zaffar/Vocal-Flux",
    },
    {
      name: "Falling-Sand Simulator",
      domain: "Graphics Engine",
      tagline: "Real-time 2D material physics sandbox",
      description:
        "A cellular-automata sandbox in pure vanilla JS — a double-buffered Uint32Array grid and direct pixel-buffer blitting simulate falling sand, water dispersion and reactive fire at speed.",
      tags: ["Vanilla JS", "Canvas", "Simulation"],
      repo: "https://github.com/Mahnoor-Zaffar/The-2D-Falling-Sand-Physics-Simulator",
      demo: "https://mahnoor-zaffar.github.io/The-2D-Falling-Sand-Physics-Simulator/",
    },
    {
      name: "Tactical Rogue-Lite Engine",
      domain: "Game Engine",
      tagline: "Procedural maps, raycast fog-of-war & A*",
      description:
        "A zero-dependency 2D rogue-lite engine with procedural BSP map generation, real-time 360° raycasted line-of-sight (fog of war) and A* enemy pathfinding on HTML5 Canvas.",
      tags: ["Vanilla JS", "Canvas", "Algorithms"],
      repo: "https://github.com/Mahnoor-Zaffar/The-Tactical-Rogue-Lite-Engine",
      demo: "https://mahnoor-zaffar.github.io/The-Tactical-Rogue-Lite-Engine/",
    },
    {
      name: "PokéDex Card Trading",
      domain: "Frontend",
      tagline: "Animated Pokédex with a card-battle mode",
      description:
        "An interactive Pokémon trading-card Pokédex with a modern animated UI — search, filters, detailed cards and a simple playable card-battle section.",
      tags: ["JavaScript", "UI/UX", "Animation"],
      repo: "https://github.com/Mahnoor-Zaffar/PokeDex_Card_Trading",
      demo: "https://mahnoor-zaffar.github.io/PokeDex_Card_Trading/",
    },
  ],
  more: { label: "View all on GitHub", href: "https://github.com/Mahnoor-Zaffar" },
};

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
      items: [
        "FastAPI",
        "Django",
        "Flask",
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Celery",
      ],
    },
    {
      id: "databases",
      command: "ls ~/databases",
      label: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "SQLAlchemy", "Prisma"],
    },
    {
      id: "devops",
      command: "ls ~/devops",
      label: "DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "AWS",
        "Nginx",
        "Linux",
        "Git",
        "Vercel",
      ],
    },
    {
      id: "ai",
      command: "ls ~/ai",
      label: "AI / ML",
      items: ["RAG", "LangChain", "MLOps", "Prompt Engineering", "Vector DBs", "OpenAI API"],
    },
    {
      id: "design",
      command: "ls ~/design",
      label: "Design",
      items: [
        "Figma",
        "UI/UX Design",
        "Design Systems",
        "Responsive Design",
        "Wireframing",
        "Prototyping",
      ],
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
