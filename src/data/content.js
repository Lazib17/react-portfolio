/** Single source of truth — all portfolio content. Do not invent fields. */
export const content = {
  site: {
    title: "Lazib Hossain | Full-Stack Developer",
    description:
      "Lazib Hossain — Full-Stack Developer & AI Engineer building scalable digital products for modern businesses.",
    themeColor: "#050505",
    year: new Date().getFullYear(),
  },

  profile: {
    name: "Lazib Hossain",
    firstName: "Lazib",
    initials: "LH",
    title: "Full-Stack Developer",
    titles: ["Full-Stack Developer", "AI Engineer"],
    location: "Japan",
    tagline: "Building scalable digital products for modern businesses",
    bio: "I'm a full-stack developer with 3 years of experience turning ideas into reliable web applications. I specialize in React, Node.js, and Python — building everything from polished frontends to robust APIs and backend systems. I care about clean architecture, performance, and shipping products that actually solve business problems.",
    email: "hossain.g5a@gmail.com",
    github: "https://github.com/Lazib17",
    linkedin: "https://www.linkedin.com/in/lazib-hossain-05438b30a/",
    roles: ["Full-Stack Developer", "AI Engineer", "Problem Solver"],
    cvUrl: "/Lazib-Hossain-CV.pdf",
    photo: "/assets/about/my-pic.jpg",
    availability: "Available for freelance & full-time opportunities",
    degree: "Bachelors in Digital Business and Innovation",
  },

  nav: [
    { href: "index.html", label: "Home", id: "home" },
    { href: "projects.html", label: "Projects", id: "projects" },
    { href: "contact.html", label: "Contact", id: "contact" },
  ],

  hero: {
    badge: "Available for freelance & full-time opportunities",
    nameLines: ["Lazib", "Hossain", "— Dev"],
    rolesPrefix: "I work on",
    typingWords: [
      "Full-Stack Apps",
      "AI Products",
      "APIs & Backends",
      "Mobile Experiences",
    ],
    ctaPrimary: { label: "Explore my work ↓", scroll: "#about" },
    ctaProjects: { label: "See projects →", href: "projects.html" },
    ctaResume: { label: "View resume", href: "/Lazib-Hossain-CV.pdf", download: true },
    rotatingBadge: "Full-Stack · AI · React · Python · ",
  },

  about: {
    eyebrow: "About",
    lead:
      "A developer who bridges <em>business goals</em> with <em>clean, scalable code</em> — shipping products that actually solve real problems.",
    highlights: [
      {
        title: "Frontend Development",
        description:
          "I craft responsive, accessible interfaces with React — optimized for performance and built to scale.",
      },
      {
        title: "Backend Engineering",
        description:
          "I build fast APIs and server-side systems with Node.js and Python, designed for reliability and clarity.",
      },
      {
        title: "Full-Stack Delivery",
        description:
          "From database to deployment, I connect every layer into cohesive products that ship on time.",
      },
    ],
  },

  services: [
    {
      id: "web",
      title: "Web Application Development",
      description:
        "Responsive, performant frontends with React — from landing pages to complex dashboards that users love.",
    },
    {
      id: "backend",
      title: "API & Backend Engineering",
      description:
        "RESTful APIs and server-side logic with Node.js and Python/Flask — built for scale, security, and maintainability.",
    },
    {
      id: "fullstack",
      title: "Full-Stack Solutions",
      description:
        "End-to-end product development — connecting frontend, backend, and databases into cohesive digital experiences.",
    },
    {
      id: "critical-thinking",
      title: "Critical Thinking",
      description:
        "Finding solutions to real world problems using my tech and business knowledge.",
    },
  ],

  skills: {
    eyebrow: "Tech Stack",
    title: "My Tech Arsenal",
    description:
      "The tools and technologies I use to build reliable, modern software.",
    marquee: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Flask",
      "Hono",
      "Cloudflare Workers",
      "Supabase",
      "SQLite",
      "Playwright",
      "Figma",
      "Git",
      "AI & Machine Learning",
    ],
    // TODO: skill proficiency levels not in original content — rows show names only
    groups: [
      {
        title: "Languages & Frontend",
        subtitle: "Interfaces people enjoy using",
        icon: "fa-code",
        items: [
          "Python",
          "JavaScript",
          "TypeScript",
          "Java",
          "React",
          "Next.js",
          "HTML5",
          "CSS",
          "TailwindCSS",
        ],
      },
      {
        title: "Backend & Data",
        subtitle: "APIs, workers, and storage",
        icon: "fa-server",
        items: [
          "Flask",
          "Hono",
          "Cloudflare Workers",
          "REST API Development",
          "SQLite",
          "Supabase",
          "JSON",
        ],
      },
      {
        title: "Mobile & Tools",
        subtitle: "Ship, test, and collaborate",
        icon: "fa-mobile-screen",
        items: [
          "React Native",
          "Expo",
          "Git",
          "GitHub",
          "Figma",
          "Playwright",
          "Responsive Design",
          "API Integration",
          "AI & Machine Learning",
        ],
      },
    ],
  },

  experience: {
    eyebrow: "Career",
    title: "Experience & Education",
    description:
      "A timeline of the roles and learning that shaped how I build software today.",
    entries: [
      {
        type: "work",
        year: "2025",
        role: "Founder",
        organisation: "Bsc Rovierr",
        startDate: "Jan, 2025",
        endDate: "Present",
        location: "",
        experiences: [
          "Helping Bangladeshi Students with Study Abroad related problems",
          "We provide Consultancy and step by step application guide",
          "A fast and student friendly place for solving study abroad problems",
        ],
        tags: ["Founder", "Consulting"],
        website: "https://unihelp.rovierr.com/",
      },
      {
        type: "work",
        year: "2023",
        role: "Full-Stack Developer",
        organisation: "Freelance & Independent Projects",
        startDate: "Jan, 2023",
        endDate: "Present",
        location: "",
        experiences: [
          "Built full-stack web applications using React, Node.js, and Python",
          "Delivered client-facing products with responsive UI and RESTful APIs",
          "Optimized application performance and maintained clean, scalable codebases",
        ],
        tags: ["React", "Node.js", "Python"],
      },
      {
        type: "work",
        year: "—",
        role: "English Educator",
        organisation: "A side quest",
        startDate: "",
        endDate: "",
        location: "Japan",
        experiences: [
          "Worked in English schools in Japan",
          "Taught online",
          "Team Leader at English Adventure Camp Japan",
        ],
        tags: ["Education", "Leadership"],
      },
      {
        type: "education",
        year: "2023",
        role: "Bachelors in Digital Business and Innovation",
        organisation: "Tokyo International University",
        startDate: "2023",
        endDate: "2027",
        location: "Japan",
        experiences: [
          "Focused in Web development, Data structure, AI and machine learning and Problem Solving",
          "Built projects based on business problems using actual data and found accurate solutions",
          "A strong understanding of both tech and IT world",
        ],
        tags: ["DBI", "AI", "Web"],
      },
    ],
  },

  projects: {
    eyebrow: "Portfolio",
    title: "Things I've Built",
    description:
      "Selected projects showcasing full-stack development, clean architecture, and real-world problem solving.",
    items: [
      {
        title: "Job Analyzer",
        imageSrc: "/assets/projects/jobanalyzer.png",
        description:
          "A full-stack AI job matching app for Japan tech roles — scrapes Mynavi, CareerCross, Wantedly, and GaijinPot, ranks listings against an uploaded resume with Google Gemini, and surfaces skills gaps on a ranked dashboard.",
        skills: [
          "Python",
          "JavaScript",
          "React",
          "FastAPI",
          "Google Gemini",
          "Supabase",
          "Playwright",
          "Vercel",
        ],
        category: "fullstack",
        demo: "https://job-analyzer-eight.vercel.app/",
        source: "https://github.com/Lazib17/Job-Analyzer",
      },
      {
        title: "Expense Tracker",
        imageSrc: "/assets/projects/etracker.jpg",
        description:
          "A full-featured expense management app to track spending, categorize transactions, and visualize budgets — built for clarity and daily use.",
        skills: ["Python", "Flask", "HTML", "CSS"],
        category: "backend",
        demo: "https://expensetracker-theta-cyan.vercel.app/",
        source: "https://github.com/Lazib17",
      },
      {
        title: "Hadith One",
        imageSrc: "/assets/projects/hadithssss.jpeg",
        description:
          "A cross-platform hadith reading app with home, library, and favorites, plus English and Bangla support — built with local notifications, offline-first encrypted SQLite caching, and a Hono REST API on Cloudflare Workers serving about 15,000 sahih hadiths.",
        skills: [
          "TypeScript",
          "React Native",
          "Expo",
          "Hono",
          "Cloudflare Workers",
          "SQLite",
          "i18n",
        ],
        category: "fullstack",
        demo: "https://github.com/rejoanahmed/daily-hadith/tree/main",
        source: "https://github.com/Lazib17",
      },
      {
        title: "Portfolio Website",
        imageSrc: "/assets/projects/portfolio.png",
        description:
          "This portfolio — a React-powered showcase with component-driven architecture, smooth animations, and a premium dark-mode design system.",
        skills: ["React", "CSS", "JSON"],
        category: "fullstack",
        demo: "#",
        source: "https://github.com/Lazib17",
      },
      {
        title: "Beauty Scanner Model",
        imageSrc: "/assets/projects/scanner.png",
        description:
          "An AI-powered beauty analysis model that scans facial features and skin conditions to deliver personalized insights and recommendations.",
        skills: ["Python", "Node.js", "MediaPipe", "TypeScript"],
        category: "backend",
        demo: "https://beauty-scanner-model.vercel.app/",
        source: "https://github.com/Lazib17",
      },
    ],
  },

  cta: {
    title: "Let's build something that scales",
    primary: { label: "See projects →", href: "projects.html" },
    secondary: { label: "Get in touch →", href: "contact.html" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's Build Something",
    subtitle:
      "Have a project in mind or want to discuss an opportunity? I'd love to hear from you.",
  },

  footer: {
    copyrightSuffix: "All rights reserved.",
  },
};

export default content;
