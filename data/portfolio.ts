// ============================================================
//  FARAZ PORTFOLIO DATA — Edit this file to update your site
// ============================================================

export const PROFILE = {
  name: "Muhammad Faraz",
  title: "Senior Full-Stack & AI Product Engineer",
   tagline: "NestJS · Next.js · React · TypeScript · Node.js · Laravel · PHP · MySQL · AI Integrations",
    bio: "5+ years Senior Full-Stack Engineer & Certified AI Developer. Expert in building autonomous agent systems, Model Context Protocol (MCP) integrations, robust backends with NestJS & Laravel, and high-performance frontends with Next.js, React, & Vue.",
  location: "Karachi, Pakistan",
  email: "muhammadfaraz991@gmail.com",
  phone: "+92 312 854 2140",
  linkedin: "https://linkedin.com/in/muhammad-faraz",
  githubWork: "https://github.com/mfarazgt",
  githubPersonal: "https://github.com/MuFaraz",
  resumeUrl: "/resume.pdf", // place your PDF in /public folder
  availableForWork: true,
  stats: [
    { value: "5+", label: "Years Exp" },
    { value: "12+", label: "AI & Tech Certs" },
    { value: "20+", label: "Live Projects" },
    { value: "100%", label: "Client Success" },
  ],
};

// ============================================================
//  SKILLS — Add / remove as needed
// ============================================================
export const SKILLS = [
  {
    category: "Agentic AI & MCP",
    icon: "🧠",
    items: ["Claude Code", "Claude API", "Agent Skills", "OpenAI Integrations"],
  },
  {
    category: "Modern Stack",
    icon: "⚡",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend & Systems",
    icon: "🔧",
    items: ["NestJS", "Node.js", "Laravel", "PHP", "RabbitMQ", "Microservices"],
  },
  {
    category: "Databases & Auth",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "JWT / OAuth2"],
  },
  {
    category: "CMS & Platforms",
    icon: "🚀",
    items: ["WordPress Customization", "Shopify", "Headless CMS", "WooCommerce"],
  },
  {
    category: "Tools & DevOps",
    icon: "🤖",
    items: ["Docker", "Git / CI/CD", "Claude Code CLI", "AWS / Vercel"],
  },
];

// ============================================================
//  SERVICES — Highlighting Core Expertise
// ============================================================
export const SERVICES = [
  {
    id: "fullstack-arch",
    icon: "🏗️",
    title: "Enterprise Web Architecture",
    description: "Scalable end-to-end development using NestJS, Laravel, and Python. I build robust backends and reactive frontends with Vue and React.",
    tags: ["NestJS", "Laravel", "Vue", "React", "Python"],
    highlighted: true,
  },
  {
    id: "laravel-expert",
    icon: "💎",
    title: "Enterprise Laravel Development",
    description: "Robust, secure, and high-performance backend solutions using Laravel. Specializing in RESTful APIs, multi-role auth, and complex business logic.",
    tags: ["Laravel", "PHP", "MySQL", "Authentication"],
    highlighted: true,
  },
  {
    id: "wp-custom",
    icon: "🔌",
    title: "Advanced WordPress & CMS",
    description: "Beyond simple sites — I specialize in custom plugin development, theme customization, and specialized e-commerce solutions that scale.",
    tags: ["WordPress", "PHP", "Shopify", "WooCommerce"],
    highlighted: true,
  },
  {
    id: "backend-systems",
    icon: "⚙️",
    title: "Backend & Event-Driven Systems",
    description: "Building resilient backends with NestJS and RabbitMQ. Implementing message queues, microservices, and real-time processing.",
    tags: ["NestJS", "RabbitMQ", "Node.js", "Real-time"],
    highlighted: false,
  },
  {
    id: "ai-solutions",
    icon: "🤖",
    title: "AI & API Integrations",
    description: "Integrating OpenAI, ChatGPT, Claude, and LLM-based tools into web ecosystems to automate workflows and enhance UI/UX.",
    tags: ["OpenAI", "ChatGPT", "LLM Integration", "Python"],
    highlighted: true,
  },
  {
    id: "performance",
    icon: "⚡",
    title: "Performance & SEO Optimization",
    description: "Refactoring legacy code, optimizing database queries, and achieving perfect Lighthouse scores for Next.js or WordPress applications.",
    tags: ["Next.js", "Core Web Vitals", "Speed", "SEO"],
    highlighted: false,
  },
];

// ============================================================
//  PROJECTS — Overhauled & Expanded
// ============================================================
export const PROJECTS = [
  {
    id: "nutriwest",
    emoji: "",
    title: "Nutriwest – Healthcare E-Commerce",
    description: "Scalable healthcare platform managing medicine distribution. Built with Laravel for reliability and secure API handling.",
    url: "https://www.nutriwest.com",
    tags: ["Laravel", "PHP", "E-Commerce", "MySQL"],
    category: "E-Commerce",
    featured: true,
  },
  {
    id: "edex",
    emoji: "",
    title: "EdEx Online – Scalable Education",
    description: "UK-based education ecosystem featuring parental portals and student management. Re-architected with a NestJS backend utilizing RabbitMQ for distributed tasks.",
    url: "https://edexonline.co.uk",
    tags: ["NestJS", "RabbitMQ", "Node.js", "Service Worker", "React"],
    category: "Backend",
    featured: true,
  },


  {
    id: "legal-leads",
    emoji: "",
    title: "LegalLead Engine",
    description: "A lead generation platform for legal entities. Built with a core PHP/WordPress hybrid for speed and flexibility.",
    url: "https://affordableattorneyleads.com/",
    tags: ["Core PHP", "WordPress", "Lead Gen"],
    category: "Backend",
    featured: true,
  },
  {
    id: "legal-help",
    emoji: "",
    title: "Affordable Legal Help – Family Law Portal",
    description: "A lead generation and connection platform for family law services in the US. Built with Core PHP and Bootstrap to facilitate quick connections between clients and local legal professionals.",
    url: "https://affordablelegalhelp.com/",
    tags: ["Core PHP", "Bootstrap", "Lead Gen", "DataTables"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "organicformula",
    emoji: "",
    title: "Pure Organic E-Shop",
    description: "A high-conversion Shopify store for organic formula products. Includes custom theme adjustments and specialized app integrations.",
    url: "https://organicformulashop.com/",
    tags: ["Shopify", "E-Commerce", "Liquid", "UI/UX"],
    category: "E-Commerce",
    featured: false,
  },
  {
    id: "oneid",
    emoji: "",
    title: "Community Data Platform",
    description: "Full-stack demographic data platform with family tree relationships and RBAC. Built with Next.js and NestJS for high performance and security.",
    url: "https://oneid.world-federation.org",
    tags: ["Next.js", "NestJS", "TypeScript", "RBAC"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "eventfouryou",
    emoji: "",
    title: "EventFourYou – Event Management",
    description: "A comprehensive event management and ticketing platform built with Laravel. Features advanced booking logic, payment integration, and a dedicated admin dashboard.",
    url: "https://eventfouryou.com/",
    tags: ["Laravel", "PHP", "MySQL", "Payments"],
    category: "Full-Stack",
    featured: true,
  },


  {
    id: "tradefindry",
    emoji: "",
    title: "TradeConnect – Logistics Portal",
    description: "A specialized portal for trade and logistics management. Built with React and Node.js to handle complex data flows and user permissions.",
    url: "https://portal.tradefindry.com/",
    tags: ["React", "Node.js", "Tailwind", "Logistics"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "dibbly",
    emoji: "",
    title: "Collaborative Creative Flow",
    description: "A high-performance creative workflow application built with Next.js. Worked closely with the client to implement real-time collaborative features.",
    url: "https://app.dibbly.com/sign-in",
    tags: ["Next.js", "React", "Collaboration", "Client Facing"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "khojabusiness",
    emoji: "",
    title: "Elite Business Directory",
    description: "A robust B2B directory and networking platform. Developed as a clean decoupled system using the MERN stack (MongoDB, Express, React, Node).",
    url: "https://khojabusiness.genetechz.com/",
    tags: ["MERN Stack", "React", "Node.js", "B2B"],
    category: "Full-Stack",
    featured: false,
  },

  {
    id: "hydraway",
    emoji: "",
    title: "HydraWay Portal",
    description: "Modernized digital presence for hydraway tech solutions. Built on WordPress with a focus on load times and custom service layouts.",
    url: "https://hydraway.net/",
    tags: ["WordPress", "SEO", "Custom Theme"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "platemaster",
    emoji: "",
    title: "PlateMaster Customizer",
    description: "Automotive customization platform for custom license plates. Extensive WordPress backend customization to handle unique user input.",
    url: "https://www.licenseplates.tv/",
    tags: ["WordPress", "Customization", "PHP", "E-Commerce"],
    category: "E-Commerce",
    featured: false,
  },
  {
    id: "brand-launch",
    emoji: "",
    title: "BrandLaunch CMS",
    description: "Business management portal with custom CMS features built on WordPress. Scaled to handle high traffic and multiple business modules.",
    url: "https://www.brandnewbusinesses.com/",
    tags: ["WordPress", "CMS", "PHP"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "mover-analytics",
    emoji: "",
    title: "ServiceMover Gateway",
    description: "Portal for logistics and moving services. Custom WordPress implementation with specialized lead tracking and booking features.",
    url: "https://www.brandnewmovers.com/",
    tags: ["WordPress", "Customization", "Logistics"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "insight-home",
    emoji: "",
    title: "Homeowner Service Portal",
    description: "Information and service platform for homeowners. WordPress-based system with extensive custom functionality for user outreach.",
    url: "https://www.brandnewhomeowners.com/",
    tags: ["WordPress", "PHP", "UI/UX"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "shaykis",
    emoji: "",
    title: "Shayks Lifestyle Retail",
    description: "UK-based lifestyle and retail platform. Integrated custom e-commerce features with a focus on British market nuances.",
    url: "https://shaykis.co.uk/",
    tags: ["E-Commerce", "WordPress", "UK Market"],
    category: "E-Commerce",
    featured: false,
  },
];

// ============================================================
//  EXPERIENCE TIMELINE
// ============================================================
export const EXPERIENCE = [
  {
    role: "Software Developer – III",
    company: "Genetech Solutions",
    period: "Nov 2024 – Present",
    type: "current",
    points: [
      "Promoted to tier 3 for leadership and consistent delivery of complex full-stack architectures.",
      "Leading projects using Next.js and NestJS, implementing RabbitMQ for event-driven processing.",
      "Mentoring junior talent and managing direct client communication for large-scale migrations.",
      "Architecting microservices for UK and Canadian enterprise clients.",
    ],
    stack: ["Next.js", "NestJS", "RabbitMQ", "TypeScript", "Microservices"],
  },
  {
    role: "Software Developer – II",
    company: "Genetech Solutions",
    period: "Sep 2023 – Sep 2024",
    type: "past",
    points: [
      "Managed project lifecycles for high-value E-commerce and B2B directory portals.",
      "Integrated complex payment flows (Stripe, PayPal) and social-graph APIs.",
      "Refactored legacy Laravel and PHP code to meet modern security standards.",
    ],
    stack: ["Laravel", "NestJS", "React", "Node.js", "Redis"],
  },
  {
    role: "Software Developer – I",
    company: "Genetech Solutions",
    period: "Jan 2023 – Sep 2023",
    type: "past",
    points: [
      "Developed high-performance frontends for social networks using Nuxt.js/React.",
      "Built dozens of custom WordPress plugins and specialized Shopify themes.",
      "Designed and documented RESTful APIs with complex database schemas in Laravel.",
    ],
    stack: ["React", "Laravel", "WordPress", "Shopify", "Node.js"],
  },
  {
    role: "Junior Software Developer",
    company: "Genetech Solutions",
    period: "Apr 2021 – Dec 2022",
    type: "past",
    points: [
      "Collaborated with design teams to build pixel-perfect interactive web apps.",
      "Maintained production environments for lead generation and logistics platforms.",
      "Strict adherence to Agile methodologies and Git versioning workflows.",
    ],
    stack: ["PHP", "JavaScript", "Laravel", "jQuery", "MySQL"],
  },
];

// ============================================================
//  CERTIFICATIONS & COURSES — Anthropic AI & Claude Ecosystem
// ============================================================
export interface Course {
  id: string;
  title: string;
  provider: string;
  category: "Agentic AI & MCP" | "Claude Engineering" | "AI Foundations";
  status: "Completed" | "In Progress";
  completedDate?: string;
  enrolledDate: string;
  score?: string;
  lessonsProgress?: string;
  icon: string;
  badge?: string;
  skills: string[];
}

export const COURSES: Course[] = [
  {
    id: "mcp-advanced",
    title: "Model Context Protocol: Advanced Topics",
    provider: "Anthropic Claude Academy",
    category: "Agentic AI & MCP",
    status: "Completed",
    completedDate: "2026-Aug-31",
    enrolledDate: "2026-Jul-12",
    badge: "Verified Certificate",
    icon: "⚡",
    skills: ["MCP Server Specs", "Custom Transports", "Advanced Tooling", "Resource Templates"],
  },
  {
    id: "mcp-intro",
    title: "Introduction to Model Context Protocol",
    provider: "Anthropic Claude Academy",
    category: "Agentic AI & MCP",
    status: "Completed",
    completedDate: "2026-Aug-31",
    enrolledDate: "2026-Jul-12",
    badge: "Verified Certificate",
    icon: "🔌",
    skills: ["MCP Architecture", "Server/Client Protocol", "Context Integration"],
  },
  {
    id: "agent-skills-intro",
    title: "Introduction to Agent Skills",
    provider: "Anthropic Claude Academy",
    category: "Agentic AI & MCP",
    status: "Completed",
    completedDate: "2026-Aug-30",
    enrolledDate: "2026-Jul-12",
    badge: "Verified Certificate",
    icon: "🛠️",
    skills: ["Agent Workflows", "Tool Definition", "Custom Capabilities"],
  },
  {
    id: "subagents-intro",
    title: "Introduction to Subagents",
    provider: "Anthropic Claude Academy",
    category: "Agentic AI & MCP",
    status: "Completed",
    completedDate: "2026-Aug-30",
    enrolledDate: "2026-Jul-12",
    badge: "Verified Certificate",
    icon: "🤖",
    skills: ["Multi-Agent Systems", "Subagent Delegation", "Autonomous Workflows"],
  },
  {
    id: "claude-code-action",
    title: "Claude Code in Action",
    provider: "Anthropic Claude Academy",
    category: "Claude Engineering",
    status: "Completed",
    completedDate: "2026-Jul-12",
    enrolledDate: "2026-Jul-11",
    badge: "Verified Certificate",
    icon: "🚀",
    skills: ["Automated Engineering", "Terminal Workflows", "Codebase Analysis"],
  },
  {
    id: "claude-platform-101",
    title: "Claude Platform 101",
    provider: "Anthropic Claude Academy",
    category: "Claude Engineering",
    status: "Completed",
    completedDate: "2026-Jul-11",
    enrolledDate: "2026-Jul-05",
    badge: "Verified Certificate",
    icon: "🏗️",
    skills: ["Console Management", "API Administration", "Usage & Billing Optimization"],
  },
  {
    id: "claude-cowork",
    title: "Introduction to Claude Cowork",
    provider: "Anthropic Claude Academy",
    category: "Claude Engineering",
    status: "Completed",
    completedDate: "2026-Jul-11",
    enrolledDate: "2026-Jul-11",
    badge: "Verified Certificate",
    icon: "🤝",
    skills: ["AI-Human Collaboration", "Workspace Automation", "Team Productivity"],
  },
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    provider: "Anthropic Claude Academy",
    category: "Claude Engineering",
    status: "Completed",
    completedDate: "2026-Jul-04",
    enrolledDate: "2026-Jul-02",
    badge: "Verified Certificate",
    icon: "💻",
    skills: ["Claude CLI", "AI Pair Programming", "Agent Setup"],
  },
  {
    id: "ai-capabilities",
    title: "AI Capabilities and Limitations",
    provider: "Anthropic Claude Academy",
    category: "AI Foundations",
    status: "Completed",
    completedDate: "2026-Jul-04",
    enrolledDate: "2026-Jul-01",
    badge: "Verified Certificate",
    icon: "🧠",
    skills: ["LLM Guardrails", "Evaluation Frameworks", "Capabilities Mapping"],
  },
  {
    id: "ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    provider: "Anthropic Claude Academy",
    category: "AI Foundations",
    status: "Completed",
    completedDate: "2026-Jul-02",
    enrolledDate: "2026-Jul-02",
    score: "10 / 10",
    badge: "Perfect Score ⭐",
    icon: "🎯",
    skills: ["AI Frameworks", "Prompt Engineering", "Foundational Concepts"],
  },
  {
    id: "claude-101",
    title: "Claude 101",
    provider: "Anthropic Claude Academy",
    category: "AI Foundations",
    status: "Completed",
    completedDate: "2026-Jul-02",
    enrolledDate: "2026-Jun-23",
    badge: "Verified Certificate",
    icon: "✨",
    skills: ["Anthropic Ecosystem", "Model Architectures", "Prompting Fundamentals"],
  },
];

// ============================================================
//  TESTIMONIALS
// ============================================================
export const TESTIMONIALS = [
  // Placeholder for professional references
];

