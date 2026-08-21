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
  image: string;
  repo?: string;
  demo?: string;
};

export type SocialLink = { label: string; href: string; handle: string };

export const profile = {
  firstName: "Mahnoor",
  lastName: "Zaffar",
  fullName: "Mahnoor Zaffar",
  role: "Backend & AI Engineer",
  handle: "~/mahnoor",
  email: "1999mahnoor@gmail.com",
  location: "Remote · Available worldwide",
  status: "Open to opportunities",
  /**
   * Optional résumé download. Drop a PDF in `public/` (e.g. public/resume.pdf)
   * and set this to its path (e.g. "/resume.pdf"). Empty = button hidden.
   */
  resumeUrl: "/resume.pdf",
} as const;

export const nav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Backend & AI Engineer",
  intro: "I'm",
  tagline:
    "I build production AI applications and full-stack platforms — RAG systems, LLM-backed features, and backend infrastructure for FinTech and HealthTech.",
  /** Terminal "whoami" output rendered with a typing animation. */
  terminal: {
    command: "whoami",
    lines: [
      "name        Mahnoor Zaffar",
      "role        Backend & AI Engineer",
      "stack       Python · TypeScript · FastAPI · React · Next.js",
      "focus       RAG · LLM systems · AI infra · Backend architecture",
      "domains     FinTech · HealthTech",
      "status      open to opportunities ✓",
    ],
  },
} as const;

export const stats: Stat[] = [
  { value: "1+", label: "Years shipping production software" },
  { value: "2", label: "Industries — FinTech & HealthTech" },
  { value: "20+", label: "Technologies in active use" },
  { value: "6", label: "Projects built end-to-end" },
];

export const about = {
  heading: "About",
  lead: "I build products end-to-end — from backend architecture and database design to production AI systems and polished frontend interfaces.",
  paragraphs: [
    "I work across the stack in Python, TypeScript, and React, shipping full-stack applications and AI-powered platforms. My focus is backend architecture, API design, and integrating LLMs and RAG pipelines into production systems — building software that's reliable, fast, and solves real problems.",
    "Every project I ship is built with attention to performance, clean architecture, and maintainability. I care about engineering fundamentals: well-designed data models, versioned APIs, automated testing, and infrastructure that doesn't break at 3 AM.",
  ],
} as const;

export const experience = {
  heading: "Experience & Focus",
  description:
    "Building and shipping full-stack applications with a focus on AI systems and production backend architecture.",
  entries: [
    {
      period: "2024 — Present",
      role: "Backend & AI Engineer",
      context: "FinTech & HealthTech",
      points: [
        "Architected and shipped production full-stack applications with FastAPI backends, React frontends, and PostgreSQL — from database schema to deployment.",
        "Built AI-powered features: RAG pipelines, LLM-backed dashboards, and automation workflows integrated into client applications.",
        "Owned features end-to-end — API design, data modeling, automated testing, CI/CD, and infrastructure.",
      ],
    },
    {
      period: "Foundation",
      role: "Full-Stack Engineer",
      context: "Backend → Frontend → AI",
      points: [
        "Built server-side applications with Flask, FastAPI, and Django — designing REST APIs, database schemas, and authentication systems from scratch.",
        "Shipped responsive frontend applications with React, Next.js, and TypeScript — focusing on performance, accessibility, and clean component architecture.",
        "Expanded into AI engineering: building RAG systems, integrating LLMs, and deploying AI features into production workflows.",
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
    "Projects across AI engineering, full-stack development, and systems programming — each one built and deployed end-to-end.",
  items: [
    {
      name: "Tayari.ai",
      domain: "Applied AI",
      tagline: "AI-powered interview coach for tech candidates",
      description:
        "An interactive AI interview platform that conducts real-time voice-based mock interviews. Built with a RAG pipeline that grounds responses in the candidate's resume, streaming multi-round conversations with background LLM evaluation and scoring.",
      tags: ["Python", "FastAPI", "RAG", "LangChain", "Docker"],
      image: "/images/projects/tayari-ai.webp",
      repo: "https://github.com/Mahnoor-Zaffar/Tayari.ai",
    },
    {
      name: "Job Hunt AI",
      domain: "Applied AI",
      tagline: "AI job intelligence & application automation",
      description:
        "An AI-powered platform that aggregates, analyzes, and automates job discovery for remote and local opportunities. Uses intelligent job scraping, LLM-based job matching, and automated application workflows to surface relevant positions.",
      tags: ["Python", "AI", "Automation", "Web Scraping"],
      image: "/images/projects/job-hunt-ai.webp",
      repo: "https://github.com/Mahnoor-Zaffar/Job_Hunt_ai",
    },
    {
      name: "Nigehbaan Dastak",
      domain: "HealthTech",
      tagline: "Production-grade clinic management platform",
      description:
        "A full digital clinic system replacing paper records — patient management, appointment scheduling, visit tracking, prescriptions, and real-time queue management. Built with role-based access control, audit trails, API rate limiting, and Docker deployment.",
      tags: ["FastAPI", "React", "PostgreSQL", "Docker", "TypeScript"],
      image: "/images/projects/nigehbaan-dastak.webp",
      repo: "https://github.com/Mahnoor-Zaffar/NeighbanDastak",
    },
    {
      name: "FinTrack",
      domain: "FinTech",
      tagline: "Personal finance with production security",
      description:
        "A full-stack finance tracker with session authentication, transaction management, budget analytics, and transfer integrity checks. Implements login throttling, CSRF protection, CSP headers, and decimal-precise financial calculations for correctness.",
      tags: ["Flask", "PostgreSQL", "SQLAlchemy", "Docker", "Security"],
      image: "/images/projects/fintrack.webp",
      repo: "https://github.com/Mahnoor-Zaffar/Financial_Tracker",
    },
    {
      name: "Falling-Sand Simulator",
      domain: "Systems",
      tagline: "High-performance 2D physics engine",
      description:
        "A cellular-automata physics sandbox with 9 interacting materials running at 60fps. Uses double-buffered Uint32Array grids, direct pixel-buffer blitting, and alternating scan directions to eliminate directional simulation bias.",
      tags: ["Vanilla JS", "Canvas API", "Simulation", "Performance"],
      image: "/images/projects/falling-sand.webp",
      repo: "https://github.com/Mahnoor-Zaffar/The-2D-Falling-Sand-Physics-Simulator",
      demo: "https://mahnoor-zaffar.github.io/The-2D-Falling-Sand-Physics-Simulator/",
    },
    {
      name: "Tactical Rogue-Lite Engine",
      domain: "Systems",
      tagline: "Game engine with algorithms from scratch",
      description:
        "A zero-dependency 2D game engine implementing BSP procedural dungeon generation, 420-ray real-time fog of war, A* pathfinding with diagonal heuristics, and entity state machines with three enemy behaviour tiers.",
      tags: ["Vanilla JS", "Canvas API", "Algorithms", "Game Engine"],
      image: "/images/projects/rogue-lite.webp",
      repo: "https://github.com/Mahnoor-Zaffar/The-Tactical-Rogue-Lite-Engine",
      demo: "https://mahnoor-zaffar.github.io/The-Tactical-Rogue-Lite-Engine/",
    },
  ],
  more: { label: "View all on GitHub", href: "https://github.com/Mahnoor-Zaffar" },
};

export const services = {
  heading: "What I Build",
  description:
    "Production systems I deliver — end-to-end, from architecture to deployment.",
  items: [
    {
      title: "AI-Powered Applications",
      description:
        "Production AI systems with RAG pipelines, LLM integration, and intelligent automation. Built on FastAPI with vector databases, streaming responses, and evaluation frameworks.",
      tags: ["RAG", "LLM Systems", "FastAPI", "Vector DBs"],
    },
    {
      title: "Full-Stack Platforms",
      description:
        "End-to-end web applications with React frontends, Python backends, and PostgreSQL — built with clean architecture, automated testing, and production deployment pipelines.",
      tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
    },
    {
      title: "Backend Infrastructure",
      description:
        "API design, database architecture, authentication systems, background jobs, CI/CD pipelines, and cloud deployment — infrastructure that ships reliably at scale.",
      tags: ["FastAPI", "Docker", "CI/CD", "AWS"],
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
      id: "ai",
      command: "ls ~/ai",
      label: "AI Engineering",
      items: ["RAG", "LangChain", "LLM Systems", "Prompt Engineering", "Vector DBs", "OpenAI API"],
    },
    {
      id: "frontend",
      command: "ls ~/frontend",
      label: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "anime.js", "HTML5", "CSS3"],
    },
    {
      id: "databases",
      command: "ls ~/databases",
      label: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "SQLAlchemy", "Prisma"],
    },
    {
      id: "infra",
      command: "ls ~/infra",
      label: "Infrastructure",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "MLOps",
        "AWS",
        "Nginx",
        "Linux",
        "Git",
        "Vercel",
      ],
    },
  ] satisfies SkillGroup[],
} as const;

export const contact = {
  heading: "Let's build something",
  message: "Looking for an engineer who ships? Let's talk.",
  closing: "Thanks for visiting — let's stay connected.",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mahnoor-Zaffar", handle: "Mahnoor-Zaffar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahnoor-zaffar/", handle: "mahnoor-zaffar" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
];
