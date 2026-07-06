// ============================================================
// portfolioData.js — Centralized configuration for Rupesh Surve's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Rupesh Surve",
  firstName: "Rupesh",
  brandName: "Rupesh Surve",
  title: "Full Stack Developer",
  location: "Satara, India",
  phone: "+91 9689302058",
  emails: {
    primary: "surverupesh150@gmail.com",
    secondary: "rupeshsurve302@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Voc Software Development student with solid skills in JavaScript, PHP, React.js, Node.js, Express.js, and Laravel. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Rupesh_Surve_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/rupeshsurve01",
  linkedin: "https://linkedin.com/in/rupeshsurve",
  instagram: "", // Removed per user request
};

export const heroContent = {
  greeting: "Hi, I'm Rupesh Surve",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build fast, scalable applications using React.js, Node.js, Express.js, and Laravel.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:surverupesh150@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Rupesh,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Rupesh_Surve_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Rupesh Surve</span>, an aspiring software engineer based in Satara, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["React.js", "Node.js", "Laravel"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "PHP", level: 88 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 75 },
        { name: "Python", level: 70 }
      ]
    },
    {
      title: "Frontend Stack",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 86 },
        { name: "Laravel", level: 88 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Postman", level: 88 },
        { name: "Redis", level: 78 },
        { name: "Figma", level: 80 },
        { name: "Vercel / Render / Netlify", level: 85 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "DBMS", level: 84 },
        { name: "Object-Oriented Programming", level: 88 }
      ]
    }
  ]
};

// Content Creation Data (Unused in UI, kept to avoid compile issues)
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: []
};

// Repurposed to Achievements Timeline
export const leadershipList = [
  {
    title: "RIT Hackathon (Top 5 Position)",
    description: "Secured a Top 5 position among 20+ teams for developing Yojnasetu.ai, a government scheme recommendation platform.",
    role: "Team Developer",
    badge: "Hackathon"
  },
  {
    title: "HackerRank Software Engineer Certification",
    description: "Earned the HackerRank Software Engineer Certification, validating software engineering fundamentals and problem-solving skills.",
    role: "Certified Developer",
    badge: "Credential"
  },
  {
    title: "200+ DSA Problems Solved",
    description: "Solved over 200 coding problems on LeetCode and HackerRank, strengthening algorithms and data structures knowledge.",
    role: "Competitive Programmer",
    badge: "DSA"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Webotix Technology",
    role: "Full Stack Developer Intern",
    duration: "June 2026 - Present",
    skills: ["RESTful API Development", "Dashboard Automation", "Query Optimization", "Schema Normalization"],
    tech: ["Laravel", "MySQL", "PHP", "MVC Architecture"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks, libraries, databases, and deployment methods." },
  { name: "Creativity", icon: "🎨", desc: "Blending clean layouts with robust database logic to build premium digital experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Voc studies, internship tasks, and personal software projects effectively." }
];

export const projects = [
  {
    id: "careerpilot-ai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "CareerPilot-AI",
    description:
      "A full-stack AI platform that evaluates resumes against job descriptions and generates personalized interview questions, skill-gap analysis, and preparation plans using Google Gemini. Implemented an AI-powered resume parsing pipeline using Multer and pdf-parse, achieving 91% parsing accuracy across 20+ test resumes for ATS-style candidate analysis.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "SCSS",
      "Gemini AI",
      "Railway",
      "Netlify"
    ],
    links: {
      github: "https://github.com/rupeshsurve01/CareerPilot-AI",
      demo: "https://careerpilot-ai.netlify.app", // Placeholder link
    },
    isFlagship: true,
  },
  {
    id: "examnova",
    number: "02",
    badge: "SaaS Platform",
    title: "ExamNova",
    description:
      "A multi-tenant SaaS examination platform with isolated teacher workspaces, role-based access control (RBAC), and asynchronous result processing using BullMQ and Redis. Implemented real-time exam monitoring using Socket.IO, achieving average student-to-teacher event latency of 68ms for live activity tracking.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Socket.IO",
      "Redis",
      "BullMQ",
      "Vercel",
      "Render"
    ],
    links: {
      github: "https://github.com/rupeshsurve01/ExamNova",
      demo: "https://examnova-saas.vercel.app", // Placeholder link
    },
    isFlagship: false,
  },
  {
    id: "skillmart",
    number: "03",
    badge: "E-Learning",
    title: "SkillMart",
    description:
      "An online learning marketplace with role-based access control for Admin, Instructor, and User, developing 20+ REST APIs for course discovery, enrollment, and approval workflows. Integrated Cloudinary for media storage, and optimized backend response times to maintain average API response times of 221ms.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary",
      "Render"
    ],
    links: {
      github: "https://github.com/rupeshsurve01/SkillMart",
      demo: "https://skillmart-marketplace.onrender.com", // Placeholder link
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "HackerRank Software Engineer Certification",
      issuer: "HackerRank",
      icon: "💻",
      link: "/certificates/software_engineer_certificate.pdf"
    },
    {
      name: "RIT Hackathon Certificate",
      issuer: "RIT",
      icon: "🏆",
      link: "/certificates/RIT_Hackethon_Certificate.pdf"
    },
    {
      name: "Quantium Software Engineering Job Simulation",
      issuer: "Quantium / Forage",
      icon: "📊",
      link: "/certificates/Quanitium_Virtual_Internship_completion_certificate.pdf"
    }
  ],
  viewAllUrl: "#certificates",
};

export const education = {
  degree: "B.Voc – Software Development",
  institution: "Yashavantrao Chavan Institute of Science, Satara",
  cgpa: "9.28",
  graduation: "2027"
};

export const footerContent = {
  taglines: [
    "Full Stack & Software Engineering",
    "React · Node.js · Laravel",
    "Scalable SaaS Applications",
  ],
  credential: "B.Voc Software Development · CGPA 9.28",
  copyright: `© ${new Date().getFullYear()} Rupesh Surve | Built with React`,
};

// EmailJS Configuration (Service/Template IDs)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
