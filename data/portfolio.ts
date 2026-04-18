// ============================================================
//  FARAZ PORTFOLIO DATA — Edit this file to update your site
// ============================================================

export const PROFILE = {
  name: "Muhammad Faraz",
  title: "Full-Stack Engineer",
  tagline: "Next.js · NestJS · Laravel · AI Integrations",
  bio: "5+ years building scalable web applications. From sleek frontends to robust APIs — I deliver production-ready products, on time, every time. Available for freelance.",
  location: "Karachi, Pakistan",
  email: "muhammadfaraz991@gmail.com",
  phone: "+92 312 854 2140",
  linkedin: "https://linkedin.com/in/muhammad-faraz",
  github: "https://github.com/mfarazgt",
  fiverr: "https://www.fiverr.com", // update with your Fiverr profile URL
  upwork: "https://www.upwork.com", // update with your Upwork profile URL
  resumeUrl: "/resume.pdf", // place your PDF in /public folder
  availableForWork: true,
  stats: [
    { value: "5+", label: "Years Exp" },
    { value: "7+", label: "Live Projects" },
    { value: "10+", label: "Technologies" },
    { value: "3x", label: "Promoted" },
  ],
};

// ============================================================
//  SKILLS — Add / remove as needed
// ============================================================
export const SKILLS = [
  {
    category: "Frontend",
    icon: "⚡",
    items: ["Next.js", "React.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    icon: "🔧",
    items: ["NestJS", "Laravel", "Node.js", "Express.js", "CodeIgniter", "PHP", "Python"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "MongoDB", "MS SQL Server", "REST APIs", "JWT Auth"],
  },
  {
    category: "AI & Integrations",
    icon: "🤖",
    items: ["OpenAI / ChatGPT API", "Claude API", "LangChain", "Stripe", "PayPal", "Social APIs"],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    items: ["Docker", "Jenkins CI/CD", "Git", "Vercel", "Agile / Scrum"],
  },
  {
    category: "CMS & E-Commerce",
    icon: "🛒",
    items: ["WordPress", "WooCommerce", "Custom Plugins", "Multivendor", "Dropshipping"],
  },
];

// ============================================================
//  SERVICES — Your freelance offerings
// ============================================================
export const SERVICES = [
  {
    id: "saas-mvp",
    icon: "🏗️",
    title: "Custom SaaS / MVP Development",
    description: "Full-stack web application from scratch. Auth, dashboard, payments, APIs — everything production-ready.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    highlighted: true,
  },
  {
    id: "ai-integration",
    icon: "🤖",
    title: "AI / ChatGPT API Integration",
    description: "Integrate OpenAI, Claude, or any LLM into your existing React, Next.js, or Laravel app. Chatbots, content generators, smart search.",
    tags: ["OpenAI", "ChatGPT", "Claude API", "LangChain"],
    highlighted: true,
  },
  {
    id: "speed-optimization",
    icon: "⚡",
    title: "WordPress / Next.js Speed Optimization",
    description: "Core Web Vitals, Lighthouse score boost, image optimization, caching, CDN setup. Guaranteed improvement.",
    tags: ["Core Web Vitals", "WordPress", "Next.js", "SEO"],
    highlighted: false,
  },
  {
    id: "payment-gateway",
    icon: "💳",
    title: "Payment Gateway Integration",
    description: "Stripe, PayPal, Authorize.net — subscriptions, one-time payments, refunds, webhooks. Fully tested.",
    tags: ["Stripe", "PayPal", "Authorize.net", "Webhooks"],
    highlighted: false,
  },
  {
    id: "figma-to-code",
    icon: "🎨",
    title: "Figma to React / Next.js",
    description: "Pixel-perfect conversion of your Figma designs to clean, responsive React or Next.js components with Tailwind.",
    tags: ["Figma", "React", "Next.js", "Tailwind CSS"],
    highlighted: false,
  },
  {
    id: "bug-fix",
    icon: "🐛",
    title: "Bug Fixing (Laravel / React / WordPress)",
    description: "Fast turnaround on any bug — database errors, API issues, WooCommerce problems, React crashes.",
    tags: ["Laravel", "React", "WordPress", "Database"],
    highlighted: false,
  },
  {
    id: "woocommerce",
    icon: "🛒",
    title: "Multivendor / Dropshipping WooCommerce",
    description: "Build or customize multivendor marketplaces and dropshipping stores with premium plugins and custom features.",
    tags: ["WooCommerce", "WordPress", "Multivendor", "PHP"],
    highlighted: false,
  },
  {
    id: "laravel-php",
    icon: "🔩",
    title: "Laravel / PHP Web Application",
    description: "Custom Laravel apps — REST APIs, admin panels, e-commerce backends, multi-role auth systems.",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    highlighted: false,
  },
];

// ============================================================
//  PROJECTS — Add your projects here
// ============================================================
export const PROJECTS = [
  {
    id: "oneid",
    emoji: "🆔",
    title: "OneID – Community Data Platform",
    description: "Full-stack platform for collecting community demographic, health & socioeconomic data. Dynamic forms, family tree relationships, RBAC, and scalable REST API architecture.",
    url: "https://oneid.world-federation.org",
    tags: ["Next.js", "NestJS", "RBAC", "REST API", "TypeScript"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "nutriwest",
    emoji: "💊",
    title: "Nutriwest – Healthcare E-Commerce",
    description: "E-commerce platform for ordering medicines from distributors to providers and patients. Built RESTful APIs, authentication flows, and server-side logic with Laravel.",
    url: "https://www.nutriwest.com",
    tags: ["Laravel", "PHP", "REST API", "Auth", "E-Commerce"],
    category: "E-Commerce",
    featured: true,
  },
  {
    id: "edex",
    emoji: "🎓",
    title: "Edex Online – UK Education Platform",
    description: "UK-based educational e-commerce with parental oversight, teacher-student management, Stripe payments, and a dynamic super-admin CMS.",
    url: "https://edexonline.co.uk",
    tags: ["Laravel", "React", "Stripe", "CMS", "Admin"],
    category: "E-Commerce",
    featured: true,
  },
  {
    id: "bitereel",
    emoji: "🎬",
    title: "BiteReel – Social Network App",
    description: "Social web app with post creation, likes, comments, sharing, and push notifications. Led Nuxt.js frontend and contributed to Laravel backend API design.",
    url: "https://www.bitereel.com",
    tags: ["Nuxt.js", "Laravel", "Push Notifications", "Social"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "enrichkid",
    emoji: "👶",
    title: "Enrich Kids – Programs Platform",
    description: "Manages kids' programs & activities with user management, program enrollment, payment processing, notifications, and admin dashboard.",
    url: "http://enrichkid.ca/",
    tags: ["Next.js", "NestJS", "Payments", "Admin Dashboard"],
    category: "Full-Stack",
    featured: false,
  },
  {
    id: "legaldirectory",
    emoji: "⚖️",
    title: "Affordable Legal Help",
    description: "Lawyer directory website built independently from scratch — complete PHP backend with custom database design and server-side logic.",
    url: "https://affordablelegalhelp.com",
    tags: ["PHP", "MySQL", "Directory", "Custom Backend"],
    category: "Backend",
    featured: false,
  },
  {
    id: "tomy",
    emoji: "👜",
    title: "Tomy Amuzainc – Accessories Store",
    description: "Online accessories store on WooCommerce with extensive customization and custom plugins to meet client e-commerce requirements.",
    url: "https://tomy.amuzainc.com",
    tags: ["WooCommerce", "WordPress", "Custom Plugins", "PHP"],
    category: "E-Commerce",
    featured: false,
  },
  // ── ADD NEW PROJECTS HERE ──────────────────────────────────
  // {
  //   id: "my-new-project",
  //   emoji: "🚀",
  //   title: "My New Project",
  //   description: "Description of what it does.",
  //   url: "https://example.com",
  //   tags: ["Next.js", "NestJS"],
  //   category: "Full-Stack",
  //   featured: false,
  // },
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
      "Promoted to tier 3 based on consistent high-quality delivery and demonstrated leadership.",
      "Architecting full-stack systems using Next.js and NestJS — frontend to production deployment.",
      "Mentoring junior developers through code reviews and pair programming sessions.",
      "Building CI/CD pipelines with DevOps, significantly reducing deployment failures.",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "React", "CI/CD"],
  },
  {
    role: "Software Developer – II",
    company: "Genetech Solutions",
    period: "Sep 2023 – Sep 2024",
    type: "past",
    points: [
      "Managed client relationships and coordinated task assignments.",
      "Integrated payment gateways and social media APIs.",
      "Conducted regular code reviews, improving overall code quality.",
    ],
    stack: ["Next.js", "NestJS", "Laravel", "Tailwind CSS"],
  },
  {
    role: "Software Developer – I",
    company: "Genetech Solutions",
    period: "Jan 2023 – Sep 2023",
    type: "past",
    points: [
      "Led front-end development of BiteReel social web app using Nuxt.js.",
      "Designed RESTful APIs with authentication and database integration using Laravel.",
      "Handled WooCommerce customization and WordPress integration.",
    ],
    stack: ["Nuxt.js", "Laravel", "WordPress", "WooCommerce"],
  },
  {
    role: "Junior Software Developer",
    company: "Genetech Solutions",
    period: "Apr 2021 – Dec 2022",
    type: "past",
    points: [
      "Built and maintained multiple production websites.",
      "Collaborated with UI/UX designers for polished front-end integrations.",
      "Applied Git version control and Agile practices.",
    ],
    stack: ["Laravel", "PHP", "React", "Node.js"],
  },
  {
    role: "PHP / Laravel Developer",
    company: "MS Global Inc",
    period: "Dec 2020 – Mar 2021",
    type: "past",
    points: [
      "Managed back-end system updates and ensured overall system stability.",
      "Enhanced and maintained web applications using the Laravel PHP framework.",
    ],
    stack: ["Laravel", "PHP", "JavaScript", "jQuery"],
  },
];

// ============================================================
//  TESTIMONIALS — Add client reviews here
// ============================================================
export const TESTIMONIALS = [
  // Add real client testimonials when you get them!
  // {
  //   name: "John Smith",
  //   role: "CEO, TechStartup",
  //   avatar: "JS",
  //   text: "Faraz delivered our MVP in record time. Clean code, great communication.",
  //   platform: "Fiverr",
  //   rating: 5,
  // },
];
