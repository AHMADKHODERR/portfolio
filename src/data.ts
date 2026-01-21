
import { Linkedin } from 'lucide-react';

export const personalInfo = {
  name: "Ahmad Khoder",
  role: "Senior Software Developer",
  summary: "Senior Software Developer with strong experience delivering enterprise-grade portals and web applications, specializing in Liferay DXP and React.js. Proven track record working on large-scale government and investment platforms, including Public Investment Fund (PIF) and Ministry of Justice. Experienced in owning features end-to-end, contributing to architecture and performance decisions, and collaborating with cross-functional international teams.",
  contact: {
    email: "ahmad.khoder14@outlook.com",
    phone: "+961 76 139 348",
    location: "Lebanon | Remote / On-site",
    linkedin: "https://www.linkedin.com/in/ahmad-khoder-796a09263",
    social: [
      { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ahmad-khoder-796a09263" }
    ]
  }
};

export const skills = {
  core: ["Liferay DXP", "React.js", "TypeScript", "JavaScript (ES6+)", "Node.js"],
  frontend: ["HTML5", "CSS3", "SCSS", "Tailwind CSS", "Framer Motion"],
  backend: ["REST APIs", "OData", "Node.js"],
  tools: ["Git", "Postman", "Figma", "Lighthouse"],
  concepts: ["Core Web Vitals", "Accessibility (WCAG)", "RTL Support", "Performance Optimization"]
};

export const experience = [
  {
    role: "Senior Software Developer – Liferay DXP",
    company: "Netways",
    period: "Mar 2025 – Present",
    description: "Own and deliver enterprise-grade Liferay DXP portals, contributing to architecture decisions, performance strategy, and long-term maintainability.",
    achievements: [
      "Lead front-end implementation across multiple Liferay services including fragments, themes, templates, workflows, roles, and permissions.",
      "Improved Core Web Vitals (LCP, CLS) across key pages, contributing to faster load times and WCAG accessibility compliance.",
      "Act as a technical reference for Liferay front-end architecture, UI standards, and performance best practices.",
      "Support junior developers through code reviews and technical guidance."
    ]
  },
  {
    role: "Software Developer",
    company: "Netways",
    period: "Jan 2024 – Feb 2025",
    description: "Delivered React-based enterprise web applications integrated with REST and OData APIs.",
    achievements: [
      "Customized and managed structured content using Liferay CMS.",
      "Contributed to feature development, production support, and continuous platform improvements.",
      "Worked closely with senior engineers to align implementation with architectural guidelines."
    ]
  }
];

export const projects = [
  {
    title: "Public Investment Fund (PIF)",
    location: "Riyadh, Saudi Arabia",
    role: "Senior Developer | Liferay DXP",
    description: "Owned and delivered multiple enterprise Liferay services for a large-scale PIF platform under NDA.",
    tags: ["Liferay DXP", "Fragments", "Performance", "Security"],
    achievements: [
      "Contributed to portal architecture, performance optimization, and secure role-based access.",
      "Built and standardized reusable fragments and templates across multiple modules.",
      "Collaborated on-site in Riyadh and remotely with international teams."
    ]
  },
  {
    title: "Ministry of Justice (MOJ)",
    location: "Remote",
    role: "Liferay Front-End & React Developer",
    description: "Delivered front-end solutions for a government DXP portal using Liferay.",
    tags: ["React.js", "Liferay", "Accessibility", "Government"],
    achievements: [
      "Built accessible, responsive user interfaces using React.js.",
      "Integrated CMS-driven content and improved usability across government-facing services."
    ]
  },
  {
    title: "Bahri Line",
    location: "Remote",
    role: "React & Node.js Developer",
    description: "Developed enterprise React screens for quotation requests, forms, and dashboards.",
    tags: ["React.js", "Node.js", "Enterprise"],
    achievements: [
      "Built Node.js APIs supporting backend integrations and data processing.",
      "Implemented validation, error handling, and loading states."
    ]
  }
];

export const education = {
  degree: "Bachelor of Computer & Communication Engineering",
  school: "Lebanese International University (LIU)",
  year: "2019 – 2023"
};
