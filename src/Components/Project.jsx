import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaBriefcase,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaRobot
} from "react-icons/fa";
import StreamifyImg from "../assets/Streamify.png";
import TaskflowImg from "../assets/Taskflow.png";
import EmiPlatformImg from "../assets/emi-platform.png";

const allProjects = [
  {
    id: "innoide",
    title: "InnoIDE",
    subtitle: "Industrial Automation Workflow & Simulation Platform",
    isProfessional: true,
    featured: true,
    category: "Professional Experience",
    subCategory: "Full Stack & Real-Time",
    impact: "50+ Internal Engineers • Validation: Hours → Minutes",
    description: "MERN-based low-code platform that enables automation engineers to design, simulate, and validate industrial workflows without physical hardware.",
    contribution: "Owned frontend development and architecture. Engineered virtual sensor simulation, implemented Redux Toolkit state slices, built React Flow canvas diagrams, and integrated Dyte SDK for real-time video collaboration.",
    architecture: "React Flow Canvas → Virtual Sensor Sim → Redux Toolkit → Dyte WebRTC",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Node.js", "React Flow", "Dyte SDK", "WebSockets"],
    image: "/IDE.png",
    link: "https://ide.innotrat.in/",
    caseStudyRoute: "/projects/innoide",
    isPrivate: true,
    github: null
  },
  {
    id: "taskflow-ai",
    title: "TaskFlow",
    subtitle: "Multi-Tenant SaaS Project Management Platform",
    isProfessional: false,
    featured: true,
    category: "Full Stack & SaaS",
    subCategory: "Full Stack SaaS",
    impact: "Multi-Tenancy & RBAC • 40% Sprint Planning Time Saved",
    description: "Jira-inspired sprint management platform supporting multi-tenancy, granular RBAC, subscription tiers, recurring payments, and AI function calling.",
    contribution: "Architected full-stack application from scratch. Designed tenant isolation in MongoDB, integrated Cashfree recurring payment webhooks, and prompt-engineered OpenAI for natural-language-to-JSON ticket extraction.",
    architecture: "React Client → Express API Gateway → RBAC/Cashfree → MongoDB → Redis/BullMQ",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI", "Cashfree", "Redis", "RBAC"],
    image: TaskflowImg,
    link: "https://taskflow-frontend-self.vercel.app/login",
    caseStudyRoute: "/projects/taskflow-ai",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/taskflow-frontend"
  },
  {
    id: "emi-loan-intelligence",
    title: "AI Financial Assistant",
    subtitle: "RAG + OCR + Financial Document Intelligence",
    isProfessional: false,
    featured: true,
    category: "AI & RAG",
    subCategory: "GenAI & RAG",
    impact: "RAG Pipeline • 70% Faster Query Resolution",
    description: "Retrieval-augmented intelligence platform that indexes loan policy documents, extracts policy terms via OCR, and calculates complex interest and EMI variations.",
    contribution: "Engineered document ingestion and chunking pipeline into ChromaDB, coupled deterministic Node.js amortization math with Gemini AI, and constrained LLM output strictly to retrieved context.",
    architecture: "Bank Documents → OCR/Text Extraction → ChromaDB Vector Store → Gemini RAG",
    tech: ["React.js", "Node.js", "Gemini AI", "ChromaDB", "LangChain", "MongoDB"],
    image: EmiPlatformImg,
    link: "https://emi-frontend-platform.vercel.app/",
    caseStudyRoute: "/projects/emi-loan-intelligence",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/emi-frontend-platform"
  },
  {
    id: "carrier-os",
    title: "Career OS",
    subtitle: "Autonomous Career Intelligence Platform",
    isProfessional: false,
    featured: true,
    category: "Autonomous Swarm",
    subCategory: "AI Agents",
    impact: "17-Agent OS Kernel • Real-Time Socket.io Trace",
    description: "Autonomous career execution platform for AI job discovery, multi-dimensional ATS score re-validation, evidence-grounded resume tailoring, and recruiter email sync.",
    contribution: "Architected 17-agent runtime kernel, real-time Socket.io execution trace streaming, RiskGate human-in-the-loop approval center, and strict work history evidence mapping.",
    architecture: "17-Agent Kernel → Socket.io Trace → Human Approval Center → Gmail Sync",
    tech: ["React 19", "TypeScript", "Node.js", "Express", "Socket.io", "TanStack Query"],
    image: "/brand-os.png",
    link: "https://carrier-os-client.vercel.app",
    caseStudyRoute: "/projects/carrier-os",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/carrier-os-client"
  },
  {
    id: "brand-os-multi-agent",
    title: "Brand OS",
    subtitle: "Multi-Agent AI Content Intelligence Platform",
    isProfessional: false,
    featured: true,
    category: "Autonomous Swarm",
    subCategory: "Multi-Agent System",
    impact: "12-Agent Swarm • Zero-Human Automated Publishing",
    description: "Multi-agent system for GitHub & Reddit trend discovery, deep research, fact verification, content generation, and automated scheduled publishing to LinkedIn & Medium.",
    contribution: "Built 12-agent orchestration bus, trend velocity scoring algorithm, multi-provider AI cascade failover (OpenRouter, Gemini, OpenAI), and BullMQ background worker queue dispatch.",
    architecture: "Trend Discovery → Fact Verification → Multi-AI Cascade → BullMQ → Social APIs",
    tech: ["React 19", "TypeScript", "Node.js", "Prisma", "ChromaDB RAG", "BullMQ"],
    image: "/brand-os.png",
    link: "https://brand-os-multi-agent.vercel.app",
    caseStudyRoute: "/projects/brand-os-multi-agent",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/Brand-os-multi-agent"
  },
  {
    id: "code-reviewer",
    title: "AI Code Review",
    subtitle: "Intelligent Automated Code Review Assistant",
    isProfessional: false,
    featured: true,
    category: "AI & RAG",
    subCategory: "Developer Tools",
    impact: "Sub-2.5s AST Analysis • Automated Security & Big-O Audits",
    description: "Automated pair-programming assistant that analyzes source code for security vulnerabilities, memory leaks, algorithmic complexity, and modern refactorings.",
    contribution: "Engineered secure Express backend proxy to protect API keys, designed strict prompt schemas for AST feedback, and built an interactive side-by-side syntax diff viewer in React.",
    architecture: "React UI → Rate-Limited Express Proxy → Gemini Flash → Structured Security Audit",
    tech: ["React.js", "Node.js", "Express.js", "Google Gemini API", "Tailwind CSS"],
    image: "/codereviewer.png",
    link: "https://codereviewer2.netlify.app/",
    caseStudyRoute: "/projects/code-reviewer",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/code-ReviewFrontend"
  },
  // Additional projects (accessible via All Projects)
  {
    id: "streamify",
    title: "Streamify",
    subtitle: "Real-Time Video & Voice Collaboration Platform",
    isProfessional: false,
    featured: false,
    category: "Full Stack & SaaS",
    subCategory: "Real-Time Systems",
    impact: "Peer-to-Peer Mesh • Sub-100ms Media Latency",
    description: "MERN stack application capable of low-latency real-time video, audio, and encrypted messaging using WebRTC and Socket.IO.",
    contribution: "Engineered WebRTC mesh signaling with STUN/TURN fallback, handled dynamic participant room state in Socket.IO, and built responsive video grid layout.",
    architecture: "Browser Mesh ◄── WebRTC Media ──► Socket.IO Signaling Server",
    tech: ["React.js", "Node.js", "MongoDB", "WebRTC", "Socket.IO"],
    image: StreamifyImg,
    link: "https://streamify-inky-one.vercel.app/login",
    caseStudyRoute: "/projects/streamify",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/Streamify-frontend"
  },
  {
    id: "ai-mock-interview",
    title: "AI Mock Interview App",
    subtitle: "Interactive Voice Interview Practice Platform",
    isProfessional: false,
    featured: false,
    category: "AI & RAG",
    subCategory: "GenAI & Voice",
    impact: "Real-Time Web Speech API • Objective Scoring Criteria",
    description: "Voice-driven interview simulator generating role-specific questions and evaluating technical depth, articulation, and clarity.",
    contribution: "Integrated browser Web Speech API for voice transcription, implemented Clerk authentication, and engineered Gemini evaluation prompts.",
    architecture: "Web Speech API → Audio Transcription → Gemini AI Evaluation",
    tech: ["React.js", "Express", "Tailwind CSS", "Gemini API", "Clerk"],
    image: "/ai_mock_interview.png",
    link: "https://ai-mock-interview-app-f.vercel.app/",
    caseStudyRoute: "/projects/ai-mock-interview",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/ai-mock-interview-app-F"
  },
  {
    id: "hrms-application",
    title: "Face Recognition HRMS",
    subtitle: "Biometric Attendance & Workforce Management",
    isProfessional: false,
    featured: false,
    category: "Full Stack & SaaS",
    subCategory: "Computer Vision & HRMS",
    impact: "Face API In-Browser • Zero Hardware Biometric Tracking",
    description: "Smart HRMS application featuring in-browser face recognition attendance, Google OAuth, and employee administration.",
    contribution: "Implemented Face API biometric embedding comparisons in the browser, structured secure attendance logging in MongoDB, and built administrative dashboards.",
    architecture: "Camera Stream → Face API Embeddings → Verification → MongoDB Log",
    tech: ["React.js", "Node.js", "MongoDB", "Face API", "Google Auth"],
    image: "/HRMS-App.png",
    link: "https://hrms-ecru-three.vercel.app/",
    caseStudyRoute: "/projects/hrms-application",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/HRMS"
  },
  {
    id: "food-ordering-app",
    title: "Food Delivery SaaS",
    subtitle: "Full-Stack Ordering & Payment Platform",
    isProfessional: false,
    featured: false,
    category: "Full Stack & SaaS",
    subCategory: "MERN E-Commerce",
    impact: "Stripe Checkout • Cart State Management",
    description: "MERN stack food ordering system with dynamic menu browsing, cart management, and Stripe payments.",
    contribution: "Engineered cart Context API state management, integrated Stripe API checkout sessions, and built order tracking workflows.",
    architecture: "React Client → Express API → Stripe Gateway → MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/food-ordering-app.png",
    link: "https://food-del-frontend-bqm2.vercel.app",
    caseStudyRoute: "/projects/food-ordering-app",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/food-del-frontend"
  },
  {
    id: "zoomcar-clone",
    title: "Car Rental Platform",
    subtitle: "Vehicle Booking & Inventory System",
    isProfessional: false,
    featured: false,
    category: "Full Stack & SaaS",
    subCategory: "Marketplace Architecture",
    impact: "Role-Based Functionalities • Conflict-Free Date Scheduling",
    description: "Full-stack car rental booking system with date-time availability checks and role-based administrative control.",
    contribution: "Developed booking collision avoidance algorithms, RBAC for customers vs administrators, and vehicle catalog management.",
    architecture: "React UI → Availability Engine → Express REST → MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/zoomcar.png",
    link: "https://capstonezoomcarclone-frnd.vercel.app/",
    caseStudyRoute: "/projects/zoomcar-clone",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/Capstonezoomcar-Frnd"
  },
  {
    id: "gemini-clone",
    title: "Gemini 2.0 Assistant Clone",
    subtitle: "Conversational AI Web Interface",
    isProfessional: false,
    featured: false,
    category: "AI & RAG",
    subCategory: "Frontend & AI",
    impact: "Streaming Markdown Rendering • Conversation State",
    description: "Sleek conversational assistant interface replicating Google Gemini with multi-turn prompt history and formatted code streaming.",
    contribution: "Integrated Google Generative AI SDK, implemented Markdown code block syntax styling, and managed conversation state.",
    architecture: "React UI → Google Generative AI SDK → Markdown Parser",
    tech: ["React.js", "Tailwind CSS", "Google Gemini API"],
    image: "/Gemini-2.0.png",
    link: "https://gemini-clone-jet-eight.vercel.app/",
    caseStudyRoute: "/projects/gemini-clone",
    isPrivate: false,
    github: "https://github.com/dineshkumar-mb/gemini-clone"
  }
];

const categories = [
  "Featured (Top 6)",
  "All Projects (12)",
  "Professional Experience",
  "Full Stack & SaaS",
  "AI & RAG",
  "Autonomous Swarm"
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("Featured (Top 6)");

  const filteredProjects = allProjects.filter((p) => {
    if (activeCategory === "Featured (Top 6)") return p.featured;
    if (activeCategory === "All Projects (12)") return true;
    if (activeCategory === "Professional Experience") return p.isProfessional;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaCode className="text-blue-500 text-xs" />
            Engineering Portfolio
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="text-slate-600 dark:text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Production platforms, enterprise workflow systems, and advanced AI architectures with measurable engineering impact.
          </motion.p>

          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md shadow-blue-500/20 scale-105"
                : "bg-white/70 dark:bg-white/5 text-slate-600 dark:text-gray-300 border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  key={proj.id}
                  className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 p-6 rounded-3xl flex flex-col h-full group transition-all duration-500 hover:border-blue-500/40 hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] relative overflow-hidden"
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                  {/* Top Badges: Professional vs Independent */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    {proj.isProfessional ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 text-[11px] font-black tracking-wide uppercase">
                        <FaBriefcase className="text-xs" />
                        Professional • Innotrat Labs
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 text-[11px] font-black tracking-wide uppercase">
                        <FaCode className="text-xs" />
                        Independent Engineering
                      </span>
                    )}

                    <span className="text-[11px] font-bold text-slate-500 dark:text-gray-400">
                      {proj.subCategory}
                    </span>
                  </div>

                  {/* Image Container with Floating Visit Link */}
                  <div className="relative w-full h-[200px] overflow-hidden rounded-2xl mb-5 border border-slate-200/60 dark:border-white/10 bg-slate-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      width="600"
                      height="340"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Impact pill overlay */}
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-bold text-emerald-400 text-center truncate">
                      {proj.impact}
                    </div>

                    {/* Floating Visit Demo Icon Button */}
                    <div className="absolute top-2 right-2 flex gap-1.5">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live demo for ${proj.title} (opens in new tab)`}
                        title="Visit Live Application"
                        className="w-9 h-9 rounded-full flex justify-center items-center bg-black/70 backdrop-blur-md border border-white/20 hover:bg-blue-600 text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                      >
                        <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 text-left flex flex-col justify-between relative z-10">
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-extrabold text-xl mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-3">
                        {proj.subtitle}
                      </p>
                      <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                        {proj.description}
                      </p>
                    </div>

                    {/* My Contribution Highlight Box */}
                    <div className="bg-slate-50/80 dark:bg-white/5 rounded-2xl p-3.5 border border-slate-200/60 dark:border-white/5 mb-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-800 dark:text-white mb-1">
                        <FaCheckCircle aria-hidden="true" className="text-emerald-500 text-xs" />
                        My Contribution
                      </div>
                      <p className="text-[12px] text-slate-600 dark:text-gray-300 leading-snug line-clamp-3">
                        {proj.contribution}
                      </p>
                    </div>

                    {/* Architecture flow snippet */}
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 block mb-1">
                        Architecture Flow
                      </span>
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-gray-300 bg-slate-100/70 dark:bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-slate-200/50 dark:border-white/5 truncate">
                        {proj.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-3 border-t border-slate-200/80 dark:border-white/5 relative z-10">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tech.slice(0, 4).map((t, i) => (
                        <span key={i} className="text-[11px] font-semibold text-slate-600 dark:text-gray-300 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Card Action Buttons */}
                    <div className="flex items-center justify-between w-full pt-1">
                      <Link
                        to={proj.caseStudyRoute}
                        className="px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <span>Case Study</span>
                        <FaArrowRight className="text-[10px]" aria-hidden="true" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {proj.isPrivate ? (
                          <span
                            title="Private Enterprise Repository (Innotrat Labs)"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 text-xs font-semibold border border-slate-200 dark:border-white/5"
                          >
                            <FaLock className="text-[10px]" aria-hidden="true" />
                            <span>Private Code</span>
                          </span>
                        ) : proj.github ? (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${proj.title} source code on GitHub`}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            title="View Source on GitHub"
                          >
                            <FaGithub className="text-base" aria-hidden="true" />
                          </a>
                        ) : null}

                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${proj.title}`}
                          className="px-3.5 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs hover:scale-105 transition-transform flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <span>Live</span>
                          <span className="text-[10px]" aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Switcher Button */}
        {activeCategory === "Featured (Top 6)" && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setActiveCategory("All Projects (12)")}
              className="px-8 py-3.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>View All  Projects</span>
              <span>↓</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Project;
