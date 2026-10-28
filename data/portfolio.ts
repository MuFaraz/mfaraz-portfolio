import type { IconName } from "@/components/Icon";

// ============================================================
//  FARAZ PORTFOLIO DATA — Edit this file to update your site
// ============================================================

export const PROFILE = {
  name: "Muhammad Faraz",
  title: "Senior Full-Stack & AI Developer",
  // Hero copy — the homepage is read by recruiters and clients; ad traffic goes to /websites
  headline: "I build fast, reliable web apps — from idea to launch.",
  subheadline:
    "6+ years and 20+ live projects for businesses around the world, from startups to established brands. I build fast, reliable websites, web apps and AI tools, with clear communication and on-time delivery.",
  tagline: "Next.js · React · NestJS · Laravel · WordPress · Shopify · AI Integrations",
  location: "Karachi, Pakistan",
  email: "muhammadfaraz991@gmail.com",
  phone: "+92 312 854 2140",
  whatsapp: "923128542140", // digits only, used for wa.me links
  linkedin: "https://www.linkedin.com/in/muhammad-faraz-644135199/",
  githubWork: "https://github.com/mfarazgt",
  githubPersonal: "https://github.com/MuFaraz",
  fiverr: "https://www.fiverr.com/muhammadfaraz99",
  availableForWork: true,
  countries: ["United States", "United Kingdom", "Canada", "Pakistan"],
  guarantees: ["Free consultation", "Reply within 24 hours", "Work directly with the developer"],
  stats: [
    { value: "6+", label: "Years experience" },
    { value: "20+", label: "Live projects" },
    { value: "3", label: "Countries served" },
    { value: "11", label: "AI certifications" },
  ],
};

// Prefilled WhatsApp message used by every "Get a quote" button
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Faraz, I saw your portfolio and I'd like to discuss a project.";

// ============================================================
//  SERVICES — Written as outcomes a client is buying
// ============================================================
export const SERVICES = [
  {
    id: "business-website",
    icon: "globe" as IconName,
    title: "Business Website",
    description:
      "A fast, modern website that explains what you do and turns visitors into calls, WhatsApp messages and bookings.",
    idealFor: "Clinics, agencies, consultants, local businesses",
    tags: ["Next.js", "WordPress", "SEO-ready", "Mobile-first"],
  },
  {
    id: "ecommerce",
    icon: "store" as IconName,
    title: "Online Store / E-Commerce",
    description:
      "Shopify, WooCommerce or fully custom stores with payments, inventory and order management — built to sell.",
    idealFor: "Brands, retailers, product sellers",
    tags: ["Shopify", "WooCommerce", "Laravel", "Stripe / PayPal"],
  },
  {
    id: "web-app",
    icon: "dashboard" as IconName,
    title: "Custom Web App & SaaS",
    description:
      "Portals, dashboards, booking systems and SaaS products with user roles, admin panels and secure APIs.",
    idealFor: "Startups, schools, logistics, service companies",
    tags: ["Next.js", "NestJS", "Laravel", "PostgreSQL"],
  },
  {
    id: "ai-automation",
    icon: "bot" as IconName,
    title: "AI Chatbots & Automation",
    description:
      "AI assistants and automations using Claude & OpenAI that answer customers, qualify leads and save your team hours.",
    idealFor: "Businesses with repetitive support or sales work",
    tags: ["Claude API", "OpenAI", "MCP", "Automation"],
  },
  {
    id: "lead-gen",
    icon: "trending" as IconName,
    title: "Lead Generation Platforms",
    description:
      "Landing pages and lead-capture systems with forms, tracking and routing — like the US legal-lead platforms I've built.",
    idealFor: "Law firms, home services, marketing agencies",
    tags: ["Landing Pages", "Lead Tracking", "PHP", "WordPress"],
  },
  {
    id: "fix-speed",
    icon: "gauge" as IconName,
    title: "Fixes, Speed & SEO",
    description:
      "Slow, broken or outdated site? I fix bugs, speed up load times, clean up legacy code and improve Google rankings.",
    idealFor: "Existing WordPress, Laravel or React sites",
    tags: ["Core Web Vitals", "Bug Fixing", "SEO", "Maintenance"],
  },
];

// ============================================================
//  PROJECTS — Featured ones are shown first
// ============================================================
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: "Web Apps" | "E-Commerce" | "Websites & Lead Gen";
  industry: string;
  market?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "oneid",
    title: "Community Data Platform",
    description: "Full-stack demographic data platform with family-tree relationships and role-based access control. Built with Next.js and NestJS for performance and security.",
    url: "https://oneid.world-federation.org",
    tags: ["Next.js", "NestJS", "TypeScript", "RBAC"],
    category: "Web Apps",
    industry: "Non-profit",
    featured: true,
  },
  {
    id: "edex",
    title: "EdEx Online – Education Platform",
    description: "Education ecosystem with parent portals and student management. Re-architected with a NestJS backend using RabbitMQ for distributed tasks.",
    url: "https://edexonline.co.uk",
    tags: ["NestJS", "RabbitMQ", "Node.js", "React"],
    category: "Web Apps",
    industry: "Education",
    market: "UK",
    featured: true,
  },
  {
    id: "nutriwest",
    title: "Nutriwest – Healthcare E-Commerce",
    description: "Healthcare platform managing product distribution and online orders. Built with Laravel for reliability and secure API handling.",
    url: "https://www.nutriwest.com",
    tags: ["Laravel", "PHP", "E-Commerce", "MySQL"],
    category: "E-Commerce",
    industry: "Healthcare",
    featured: true,
  },
  {
    id: "eventfouryou",
    title: "EventFourYou – Event Ticketing",
    description: "Event management and ticketing platform with booking logic, payment integration and a dedicated admin dashboard.",
    url: "https://eventfouryou.com/",
    tags: ["Laravel", "PHP", "MySQL", "Payments"],
    category: "Web Apps",
    industry: "Events",
    featured: true,
  },
  {
    id: "tradefindry",
    title: "TradeConnect – Logistics Portal",
    description: "Portal for trade and logistics management. Built with React and Node.js to handle complex data flows and user permissions.",
    url: "https://portal.tradefindry.com/",
    tags: ["React", "Node.js", "Tailwind", "Logistics"],
    category: "Web Apps",
    industry: "Logistics",
    featured: true,
  },
  {
    id: "legal-help",
    title: "Affordable Legal Help – Family Law Leads",
    description: "Lead generation platform connecting US clients with local family-law professionals. Built for speed and quick enquiries.",
    url: "https://affordablelegalhelp.com/",
    tags: ["Core PHP", "Bootstrap", "Lead Gen", "DataTables"],
    category: "Websites & Lead Gen",
    industry: "Legal",
    market: "US",
    featured: true,
  },
  {
    id: "legal-leads",
    title: "LegalLead Engine",
    description: "Lead generation platform for law firms, built on a Core PHP / WordPress hybrid for speed and flexibility.",
    url: "https://affordableattorneyleads.com/",
    tags: ["Core PHP", "WordPress", "Lead Gen"],
    category: "Websites & Lead Gen",
    industry: "Legal",
    market: "US",
    featured: true,
  },
  {
    id: "dibbly",
    title: "Dibbly – Collaborative Creative App",
    description: "High-performance creative workflow application built with Next.js. Worked directly with the client to ship real-time collaboration features.",
    url: "https://app.dibbly.com/sign-in",
    tags: ["Next.js", "React", "Collaboration"],
    category: "Web Apps",
    industry: "SaaS",
    featured: true,
  },
  {
    id: "organicformula",
    title: "Pure Organic E-Shop",
    description: "Shopify store for organic formula products with custom theme work and specialised app integrations.",
    url: "https://organicformulashop.com/",
    tags: ["Shopify", "Liquid", "E-Commerce"],
    category: "E-Commerce",
    industry: "Retail",
    featured: false,
  },
  {
    id: "platemaster",
    title: "PlateMaster Customizer",
    description: "Custom licence-plate store with a product customiser. Extensive WordPress backend work to handle unique user input.",
    url: "https://www.licenseplates.tv/",
    tags: ["WordPress", "WooCommerce", "PHP"],
    category: "E-Commerce",
    industry: "Automotive",
    featured: false,
  },
  {
    id: "shaykis",
    title: "Shaykis Lifestyle Retail",
    description: "Lifestyle and retail store with custom e-commerce features tailored to the British market.",
    url: "https://shaykis.co.uk/",
    tags: ["E-Commerce", "WordPress"],
    category: "E-Commerce",
    industry: "Retail",
    market: "UK",
    featured: false,
  },
  {
    id: "brand-launch",
    title: "BrandLaunch Business Portal",
    description: "Business portal with custom CMS features on WordPress, scaled to handle high traffic and multiple modules.",
    url: "https://www.brandnewbusinesses.com/",
    tags: ["WordPress", "CMS", "PHP"],
    category: "Websites & Lead Gen",
    industry: "Lead Gen",
    featured: false,
  },
  {
    id: "mover-analytics",
    title: "ServiceMover Gateway",
    description: "Portal for moving services with custom lead tracking and booking features.",
    url: "https://www.brandnewmovers.com/",
    tags: ["WordPress", "Lead Tracking", "Booking"],
    category: "Websites & Lead Gen",
    industry: "Home Services",
    featured: false,
  },
  {
    id: "insight-home",
    title: "Homeowner Service Portal",
    description: "Information and service platform for homeowners with custom outreach functionality.",
    url: "https://www.brandnewhomeowners.com/",
    tags: ["WordPress", "PHP", "UI/UX"],
    category: "Websites & Lead Gen",
    industry: "Home Services",
    featured: false,
  },
  {
    id: "hydraway",
    title: "HydraWay Website",
    description: "Modernised company website with a focus on load times and custom service layouts.",
    url: "https://hydraway.net/",
    tags: ["WordPress", "SEO", "Custom Theme"],
    category: "Websites & Lead Gen",
    industry: "Technology",
    featured: false,
  },
];

// ============================================================
//  PROCESS — How working together looks
// ============================================================
export const PROCESS = [
  {
    step: "01",
    title: "Free call or chat",
    description: "Tell me about your business and goals on WhatsApp, a call or email. No cost, no commitment.",
  },
  {
    step: "02",
    title: "Clear plan & quote",
    description: "You get a written scope, timeline and price — so you know exactly what you're getting before we start.",
  },
  {
    step: "03",
    title: "Build with updates",
    description: "I build in stages and share progress regularly, so you can review and give feedback along the way.",
  },
  {
    step: "04",
    title: "Launch & support",
    description: "I deploy your project, walk you through it, and stay available for fixes and improvements after launch.",
  },
];

// ============================================================
//  WHY ME — Reasons to choose me over an agency / random freelancer
// ============================================================
export const WHY_ME = [
  {
    icon: "user-check" as IconName,
    title: "Senior-level, not a beginner",
    description: "6+ years building production systems for businesses worldwide. I currently lead projects end-to-end, from planning and architecture to launch.",
  },
  {
    icon: "message" as IconName,
    title: "Clear, fast communication",
    description: "You talk directly to the person writing your code. Regular updates in plain language — no tech jargon.",
  },
  {
    icon: "layers" as IconName,
    title: "One developer, full stack",
    description: "Frontend, backend, database, payments, hosting and AI — no need to hire and coordinate multiple people.",
  },
  {
    icon: "sparkles" as IconName,
    title: "AI-ready from day one",
    description: "Anthropic-certified in Claude, MCP and AI agents, so your product can use AI where it actually saves time and money.",
  },
];

// ============================================================
//  FAQ — Answer objections before they become reasons not to message
// ============================================================
export const FAQS = [
  {
    q: "How much does a website or web app cost?",
    a: "It depends on what you need — a business website and a custom web app are very different projects. Message me with a short description and I'll send you a clear quote for free.",
  },
  {
    q: "How long will my project take?",
    a: "Smaller websites usually take 1–3 weeks, while custom web apps and stores take longer depending on features. You'll get a timeline with the quote before we start.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Most of my work has been for businesses in the United States, United Kingdom and Canada. I'm comfortable working across time zones.",
  },
  {
    q: "Can you fix or improve my existing website?",
    a: "Yes. I regularly fix bugs, speed up slow sites, add new features and modernise older WordPress, Laravel, PHP and React projects.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes. If you want to manage content yourself, I'll set up an easy admin panel or CMS and show you how to use it.",
  },
  {
    q: "What happens after the project is launched?",
    a: "I stay available for fixes, updates and new features. Ongoing maintenance can also be arranged if you'd like me to look after the site.",
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
  badge?: string;
  skills: string[];
  featured?: boolean; // shown before "Show all"
}

export const COURSES: Course[] = [
  {
    id: "mcp-advanced",
    featured: true,
    title: "Model Context Protocol: Advanced Topics",
    provider: "Anthropic Claude Academy",
    category: "Agentic AI & MCP",
    status: "Completed",
    completedDate: "2026-Aug-31",
    enrolledDate: "2026-Jul-12",
    badge: "Verified Certificate",
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
    skills: ["Multi-Agent Systems", "Subagent Delegation", "Autonomous Workflows"],
  },
  {
    id: "claude-code-action",
    featured: true,
    title: "Claude Code in Action",
    provider: "Anthropic Claude Academy",
    category: "Claude Engineering",
    status: "Completed",
    completedDate: "2026-Jul-12",
    enrolledDate: "2026-Jul-11",
    badge: "Verified Certificate",
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
    skills: ["LLM Guardrails", "Evaluation Frameworks", "Capabilities Mapping"],
  },
  {
    id: "ai-fluency",
    featured: true,
    title: "AI Fluency: Framework & Foundations",
    provider: "Anthropic Claude Academy",
    category: "AI Foundations",
    status: "Completed",
    completedDate: "2026-Jul-02",
    enrolledDate: "2026-Jul-02",
    score: "10 / 10",
    badge: "Perfect score",
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
    skills: ["Anthropic Ecosystem", "Model Architectures", "Prompting Fundamentals"],
  },
];

// ============================================================
//  TESTIMONIALS — Real Fiverr reviews only. Card quotes are trimmed with "…";
//  the full original text lives in `fullReviews`.
// ============================================================
export const FIVERR = {
  url: PROFILE.fiverr,
  rating: "5.0",
  // maya_hannah8 (1) + hamisi_shongodo (3) + hureax (3 short reviews, not shown as cards)
  reviewCount: 7,
  clientCountries: ["UK", "Kenya", "Italy"],
};

export interface Testimonial {
  id: string;
  name: string; // Fiverr username
  country: string;
  source: "Fiverr";
  project: string;
  quote: string; // short version for the card (2–4 lines)
  highlight?: string; // one-liner used in the hero
  isRepeatClient?: boolean;
  projectsCount?: number;
  fullReviews: string[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "maya_hannah8",
    name: "maya_hannah8",
    country: "United Kingdom",
    source: "Fiverr",
    project: "Stripe + Laravel integration · delivered in 1 day",
    quote:
      "He doesn't just do what you ask — he thinks ahead, solves problems, and delivers a complete solution. … Code was clean, ready-to-use, and well documented. … I'll 100% be working with him again.",
    highlight: "He doesn't just do what you ask — he thinks ahead, solves problems, and delivers a complete solution.",
    fullReviews: [
      "I'm honestly blown away by the quality of work and professionalism. I shared a simple requirement — Stripe integration with Laravel — and he not only understood it immediately but also delivered the complete working project faster than expected. He doesn't just do what you ask — he thinks ahead, solves problems, and delivers a complete solution. From the payment button, test product setup, to confirmation email — everything was done perfectly, cleanly coded, and well organized. Understood my needs without endless explanations. Delivered super fast. Code was clean, ready-to-use, and well documented. Excellent communication and attitude. Price was super reasonable for the quality delivered. If you're looking for someone who is honest, skilled, fast, and truly cares about your project, don't waste your time elsewhere. This is the developer you need. I'll 100% be working with him again. Highly, highly recommended!",
    ],
  },
  {
    id: "hamisi_shongodo",
    name: "hamisi_shongodo",
    country: "Kenya",
    source: "Fiverr",
    project: "New features, bug fixing & system maintenance",
    quote:
      "…he is one of the most skilled and dependable programmers I've ever hired. … He's proactive, often identifying and fixing issues before I even notice them. Deadlines are always met (often ahead of time).",
    isRepeatClient: true,
    projectsCount: 3,
    fullReviews: [
      "I have been working with Muhammad Faraz for several projects over the past months, and I can confidently say he is one of the most skilled and dependable programmers I've ever hired. From writing clean, efficient code to fixing complex errors across various projects, he consistently delivers beyond expectations. He has a deep understanding of backend and frontend technologies, and he approaches every task—big or small—with professionalism and attention to detail. What truly sets him apart is his communication. He listens carefully to requirements, asks the right questions, and provides regular updates, which makes collaboration smooth and stress-free. He's proactive, often identifying and fixing issues before I even notice them. Deadlines are always met (often ahead of time), and his feedback turnaround is impressively fast. Whether it's building new features, optimizing performance, or debugging existing issues, he handles everything with expertise and a calm, solution-oriented attitude. If you're looking for a trustworthy programmer who values quality and reliability, I highly recommend Muhammad Faraz. I'm grateful for his contributions and look forward to working with him again!",
      "Muhammad Faraz is an exceptional software developer with a rare combination of technical expertise and excellent interpersonal skills. This is my second time working with him. His coding proficiency is evident in the clean, well-structured, and maintainable source code he has consistently delivered to me. Faraz demonstrates a deep understanding of tasks, often grasping requirements quickly and suggesting improvements where necessary. One of his standout qualities is his reliability—he not only meets deadlines but often delivers well ahead of schedule, without compromising quality. His communication skills are top-notch; he keeps me updated with clear, concise progress reports and provides prompt feedback when questions arise. Beyond his technical and professional strengths, Faraz is polite, collaborative, and a pleasure to work with. Order from him and see what he is capable of. He will never disappoint.",
      "Muhammad Faraz truly impressed me with his remarkable professionalism and code expertise in system maintenance. His delivery exceeded expectations while showcasing deep understanding and a cooperative spirit. He also breaks down all your problems into brief and deep points more than what you thought. He delivers even before the deadline. I appreciate his swift efficiency and excellent collaboration! Looking forward to working with him in the next work. I really recommend everyone to hire him.",
    ],
  },
];

// ============================================================
//  /websites LANDING PAGE — for ad traffic (Pakistani small businesses)
//  Change prices here; the page and its share image update automatically.
// ============================================================
export interface WebsitePackage {
  id: string;
  name: string;
  priceFromPKR: number;
  delivery: string;
  bestFor: string;
  features: string[];
}

export const PACKAGES: WebsitePackage[] = [
  {
    id: "business-website",
    name: "Business Website",
    priceFromPKR: 30000,
    delivery: "7 days",
    bestFor: "Clinics, salons, restaurants, real estate",
    features: ["5 pages", "Mobile friendly", "WhatsApp chat button", "Google Maps location"],
  },
  {
    id: "online-store",
    name: "Online Store",
    priceFromPKR: 70000,
    delivery: "10–14 days",
    bestFor: "Shops and brands selling products",
    features: ["Shopify or WooCommerce", "Cash on Delivery (COD) setup", "Up to 50 products uploaded"],
  },
  {
    id: "website-ai-chatbot",
    name: "Website + AI Chatbot",
    priceFromPKR: 120000,
    delivery: "14–21 days",
    bestFor: "Businesses that get many customer questions",
    features: ["Complete business website", "AI assistant that answers customers 24/7"],
  },
];

export const formatPKR = (amount: number) => `PKR ${amount.toLocaleString("en-US")}`;

// Shown under the packages — prices are a guide, not a fixed limit
export const PACKAGES_PRICE_NOTE =
  "Prices are a starting point, not a fixed limit. Depending on your requirements, it can cost even less.";

export const LANDING_WHATSAPP_MESSAGE = "Hi Faraz, I saw your ad and I'd like a website for my business.";
export const packageWhatsAppMessage = (pkg: WebsitePackage) =>
  `Hi Faraz, I saw your ad and I'm interested in the ${pkg.name} package.`;

// Best proof for local business owners (ids from PROJECTS)
export const LANDING_PROJECT_IDS = ["nutriwest", "organicformula", "legal-help"];

export const LANDING_FAQS = [
  {
    q: "How much does a website cost?",
    a: `A business website starts from ${formatPKR(PACKAGES[0].priceFromPKR)}. The final price depends on your requirements — it can even be less for a simple site. You get a clear, fixed quote on WhatsApp before any work starts.`,
  },
  {
    q: "How long will it take?",
    a: "Business website: 7 days. Online store: 10–14 days. Website + AI chatbot: 14–21 days. Time starts once you share your logo, photos and business details.",
  },
  {
    q: "Can I edit the website myself?",
    a: "Yes. I set up an easy admin panel and show you how to change text, photos, prices and products yourself. No coding needed.",
  },
  {
    q: "What happens after launch?",
    a: "I stay available for fixes and small changes. If you want, monthly maintenance can also be arranged so I look after the site for you.",
  },
];

