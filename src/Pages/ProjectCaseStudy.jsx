import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import SEO from "../Components/SEO";

const caseStudies = {
  "emi-loan-intelligence": {
    title: "AI-Powered EMI Management & Loan Intelligence Platform",
    overview: "Designed a comprehensive loan management platform featuring a retrieval-augmented generation (RAG) pipeline to analyze complex loan documents and dynamically calculate EMI/interest variations.",
    problem: "Traditional loan processing lacks intelligent document retrieval and real-time interest insights. Existing systems force agents to manually cross-reference policy PDFs to answer customer queries.",
    solution: "A RAG-enabled platform leveraging Gemini AI to instantly analyze loan documents and calculate complex EMIs. It acts as an intelligent assistant for loan agents.",
    architectureImg: "/Archietetural diagram forAI-Powered EMI Management & Loan Intelligence Platform.png",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini AI", "ChromaDB"],
    implementation: [
      "Built a secure Node.js microservice for EMI calculations.",
      "Developed a LangChain pipeline to chunk and embed PDF policy documents into ChromaDB.",
      "Implemented a highly responsive React frontend with Tailwind CSS and Framer Motion for smooth UX."
    ],
    challenges: [
      "Handling large PDF parsing efficiently without memory leaks in Node.js.",
      "Ensuring Gemini API responses were deterministic and factually accurate based ONLY on the provided context."
    ],
    results: "Reduced average query resolution time by 70%. Platform adopted by a test cohort with high praise for accuracy.",
    future: "Integrate multi-lingual support and predictive default modeling.",
    github: "https://github.com/dineshkumar-mb/emi-frontend-platform.git",
    live: "https://emi-frontend-platform.vercel.app/"
  },
  "taskflow-ai": {
    title: "TaskFlow - AI-Powered Sprint Management SaaS",
    overview: "Architected a Jira-inspired sprint management SaaS with role-based access control, subscription tiers, and an OpenAI-driven chatbot.",
    problem: "Existing sprint management tools require heavy manual input for task breakdown and ticketing, slowing down Agile planning.",
    solution: "A SaaS application with an AI chatbot that understands natural language to automatically create and organize tickets into Kanban boards.",
    architectureImg: "/Taskflow.png",
    tech: ["React.js", "Node.js", "OpenAI", "MongoDB", "Cashfree API"],
    implementation: [
      "Developed role-based access control (RBAC) mapping directly to SaaS subscription tiers.",
      "Integrated Cashfree payment gateway for secure recurring billing.",
      "Prompt-engineered an OpenAI assistant to convert conversational text into structured JSON for ticket creation."
    ],
    challenges: [
      "Synchronizing real-time state across multiple Kanban boards.",
      "Designing a robust prompt architecture to prevent prompt injection and guarantee valid JSON responses from OpenAI."
    ],
    results: "Streamlined ticket creation, reducing planning overhead by an estimated 40%.",
    future: "Add team velocity analytics and automated sprint retrospectives.",
    github: "https://github.com/dineshkumar-mb/taskflow-frontend.git",
    live: "https://taskflow-frontend-self.vercel.app/login"
  },
  "innoide": {
    title: "InnoIDE - Collaborative Low-Code Engineering Platform",
    overview: "A robust web-based IDE designed for modern developer teams, featuring real-time collaboration, video streaming, and visual flowchart building.",
    problem: "Developers often juggle multiple tools for diagramming, coding, API testing, and video calls during pair programming sessions.",
    solution: "An all-in-one low-code platform combining React Flow diagrams, WebRTC video via Dyte SDK, and a custom code runner.",
    architectureImg: "/inno-ide.png",
    tech: ["React.js", "Socket.IO", "Node.js", "Dyte SDK", "React Flow", "Google Auth"],
    implementation: [
      "Engineered real-time cursor tracking and code synchronization using WebSockets.",
      "Integrated Dyte Video SDK for low-latency peer-to-peer communication.",
      "Built a custom diagram builder using React Flow for system architecture visualization."
    ],
    challenges: [
      "Managing complex state synchronization across multiple simultaneous WebSocket connections without race conditions.",
      "Optimizing React Flow rendering for large diagrams containing hundreds of nodes."
    ],
    results: "Created a highly praised unified developer workspace currently utilized in internal team workflows.",
    future: "Implement sandboxed code execution environments using Docker containers.",
    github: "https://github.com/Dineshkumar-1393-innotrat/InnoViewIDE_New/tree/InnoIDE_V1.5_09-06-2026",
    live: "https://ide.innotrat.in/"
  },
  "ai-mock-interview": {
    title: "AI Mock Interview Application",
    overview: "A comprehensive AI-driven mock interview platform that provides real-time feedback and role-specific questions to help users sharpen their interview skills.",
    problem: "Candidates struggle to find realistic, role-specific interview practice with instant actionable feedback, often relying on expensive human coaches.",
    solution: "An AI-driven platform that generates dynamic interview questions, records answers via speech-to-text, and evaluates responses using Gemini AI.",
    architectureImg: "/ai-mock-interview.png",
    tech: ["React.js", "Express", "Gemini API", "Clerk", "Stripe", "Tailwind CSS"],
    implementation: [
      "Integrated Clerk for seamless, secure user authentication and profile management.",
      "Utilized Web Speech API for real-time transcription of user answers.",
      "Engineered prompts for Gemini AI to strictly grade answers based on technical accuracy and communication clarity."
    ],
    challenges: [
      "Handling browser inconsistencies with the Web Speech API.",
      "Tuning the AI to provide constructive, nuanced feedback rather than generic responses."
    ],
    results: "Delivered a highly interactive application that significantly boosts candidate confidence.",
    future: "Add video emotion analysis and multi-turn conversational interviews.",
    github: "https://github.com/dineshkumar-mb/ai-mock-interview-app-F.git",
    live: "https://ai-mock-interview-app-f.vercel.app/"
  },
  "hrms-application": {
    title: "HRMS Application",
    overview: "A smart HRMS application featuring face recognition for attendance, secure Google Authentication, and employee management capabilities using Face API.",
    problem: "Traditional attendance systems rely on swipe cards or manual entry, leading to buddy punching and administrative overhead.",
    solution: "A modern HRMS platform utilizing the Face API to enable biometric attendance tracking directly from a web browser, ensuring secure and seamless employee management.",
    architectureImg: "/Hrms.png",
    tech: ["React.js", "Node.js", "MongoDB", "Face API", "Google Auth"],
    implementation: [
      "Integrated Face API for real-time facial recognition and attendance tracking in the browser.",
      "Implemented secure authentication flows using Google OAuth.",
      "Built a comprehensive dashboard for HR administrators to manage employee records and attendance logs."
    ],
    challenges: [
      "Ensuring accurate facial recognition across varying lighting conditions and camera qualities.",
      "Managing privacy and securely storing facial embedding data in compliance with best practices."
    ],
    results: "Modernized attendance tracking, completely eliminating buddy punching and reducing administrative workload.",
    future: "Add geofencing for remote work check-ins and automated payroll integration.",
    github: "https://github.com/dineshkumar-mb/HRMS.git",
    live: "https://hrms-ecru-three.vercel.app/"
  },
  "streamify": {
    title: "Streamify - Real-time Video & Voice Chat",
    overview: "A comprehensive MERN stack application capable of real-time video and voice chat with robust end-to-end encryption for secure communication.",
    problem: "Many video conferencing tools lack simple, secure peer-to-peer communication integrated seamlessly into a web application without requiring heavy downloads.",
    solution: "Developed a WebRTC-based platform that allows users to instantly connect via video and voice directly from their browsers.",
    architectureImg: "/streamify.png",
    tech: ["React.js", "Node.js", "MongoDB", "WebRTC", "Socket.IO"],
    implementation: [
      "Engineered peer-to-peer video streaming using WebRTC for low latency.",
      "Integrated Socket.IO for signaling and real-time chat functionality.",
      "Implemented a secure authentication system using Node.js and MongoDB."
    ],
    challenges: [
      "Handling WebRTC signaling across different network topologies (NAT traversal via STUN/TURN servers).",
      "Managing complex state for multiple concurrent video streams in a single room."
    ],
    results: "Delivered a highly responsive, secure communication tool with near-zero latency for peer-to-peer connections.",
    future: "Add screen sharing capabilities and meeting recording features.",
    github: "https://github.com/dineshkumar-mb/Streamify-frontend.git",
    live: "https://streamify-inky-one.vercel.app/login"
  },
  "code-reviewer": {
    title: "AI Code Reviewer App",
    overview: "An intelligent code review application that leverages the Google Gemini API to analyze, review, and suggest improvements for developers' code.",
    problem: "Manual code reviews are time-consuming and often miss subtle bugs, security vulnerabilities, or performance optimization opportunities.",
    solution: "An automated, AI-powered tool that acts as a pair-programmer, providing instant actionable feedback on code snippets.",
    architectureImg: "/Codereview.png",
    tech: ["React.js", "Node.js", "Express.js", "Google Gemini API", "CSS"],
    implementation: [
      "Built a robust Express.js backend to securely proxy requests to the Gemini API.",
      "Engineered specific prompts to instruct Gemini to look for security flaws and performance bottlenecks.",
      "Developed a clean, intuitive React frontend for pasting code and viewing line-by-line feedback."
    ],
    challenges: [
      "Structuring prompt inputs to ensure the AI output is consistently formatted for easy reading.",
      "Handling large code snippets within token limits of the Gemini API."
    ],
    results: "Significantly accelerated the code review process, serving as a reliable first-pass check before human review.",
    future: "Integrate directly into GitHub Actions for automated PR reviews.",
    github: "https://github.com/dineshkumar-mb/code-ReviewFrontend.git",
    live: "https://codereviewer2.netlify.app/"
  },
  "zoomcar-clone": {
    title: "Zoomcar Clone",
    overview: "A comprehensive clone of the Zoomcar platform, featuring responsive design, car browsing, booking management, and role-based functionalities.",
    problem: "Building a scalable car-rental marketplace requires complex state management, availability checking, and role-based access for admins vs users.",
    solution: "A full-stack MERN application that provides a seamless booking experience and an admin dashboard for inventory management.",
    architectureImg: "/zoomcar.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    implementation: [
      "Developed role-based access control (RBAC) to differentiate between customers and administrators.",
      "Built a robust booking engine with availability checking and conflict prevention.",
      "Implemented a sleek, responsive UI matching modern industry standards."
    ],
    challenges: [
      "Managing complex date-time logic for car availability across different time zones.",
      "Designing a scalable database schema for vehicles, bookings, and users."
    ],
    results: "Successfully replicated the core functionality of a major car rental platform with a highly performant interface.",
    future: "Add a payment gateway and real-time location tracking for vehicles.",
    github: "https://github.com/dineshkumar-mb/Capstonezoomcar-Frnd.git",
    live: "https://capstonezoomcarclone-frnd.vercel.app/"
  },
  "food-ordering-app": {
    title: "Food Delivery App",
    overview: "A complete food ordering platform allowing users to browse menus, manage their carts, process secure payments, and track orders.",
    problem: "Local restaurants need an affordable, customizable, and reliable platform to handle online orders without losing high commissions to third parties.",
    solution: "A custom-built MERN stack application featuring a modern UI, robust cart management, and seamless Stripe payment integration.",
    architectureImg: "/food-ordering-app.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    implementation: [
      "Integrated Stripe API for secure, seamless checkout and payment processing.",
      "Built a dynamic cart system using React Context API for global state management.",
      "Developed a responsive menu browsing experience with category filtering."
    ],
    challenges: [
      "Handling edge cases in payment processing and order status synchronization.",
      "Optimizing image loading for a media-heavy restaurant menu."
    ],
    results: "Delivered a production-ready template for food delivery with a frictionless checkout experience.",
    future: "Implement real-time delivery tracking with map integration.",
    github: "https://github.com/dineshkumar-mb/food-del-frontend.git",
    live: "https://food-del-frontend-bqm2.vercel.app"
  },
  "gemini-clone": {
    title: "Gemini 2.0 Clone",
    overview: "A conversational AI web application that replicates the smart Gemini assistant interface using React, Tailwind CSS, and the Google Generative AI API.",
    problem: "Creating a natural, fluid conversational interface requires complex state management and seamless integration with streaming AI APIs.",
    solution: "A highly responsive frontend application that communicates with Google's Gemini API to provide intelligent responses in a familiar UI.",
    architectureImg: "/Gemini-2.0.png",
    tech: ["React.js", "Tailwind CSS", "Google Gemini API"],
    implementation: [
      "Integrated the Google Generative AI SDK for real-time text generation.",
      "Built a highly polished, responsive user interface closely mimicking the actual Gemini platform using Tailwind CSS.",
      "Implemented conversation history management to maintain context across prompts."
    ],
    challenges: [
      "Parsing and rendering Markdown formatting from the AI responses in real-time.",
      "Managing loading states and providing visual feedback during API latency."
    ],
    results: "Created a visually stunning and highly functional AI assistant clone that serves as a powerful standalone tool.",
    future: "Add multimodal support for image uploads and analysis.",
    github: "https://github.com/dineshkumar-mb/gemini-clone.git",
    live: "https://gemini-clone-jet-eight.vercel.app/"
  }
};

const ProjectCaseStudy = () => {
  const { id } = useParams();
  const project = caseStudies[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white min-h-screen pt-24 pb-20 relative overflow-hidden">
      <SEO
        title={`${project.title} | Case Study`}
        description={project.overview}
      />

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-900/20 to-transparent -z-10" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold mb-10 transition-colors">
          <FaArrowLeft /> Back to Portfolio
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-700 dark:from-white dark:to-blue-400 text-transparent bg-clip-text mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl leading-relaxed">
            {project.overview}
          </p>

          <div className="flex gap-4 mt-8">
            <a href={project.live} target="_blank" rel="noreferrer" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 flex items-center gap-2">
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="px-8 py-3 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold rounded-full shadow-md transition-transform hover:scale-105 flex items-center gap-2 border border-slate-300 dark:border-white/10">
              <FaGithub /> Source Code
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-16">

            {/* Problem & Solution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-white/10 pb-2">Problem & Solution</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2"><FaExclamationTriangle /> The Problem</h3>
                  <p className="text-slate-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2"><FaCheckCircle /> The Solution</h3>
                  <p className="text-slate-700 dark:text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </motion.section>

            {/* Architecture Diagram */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-white/10 pb-2">Architecture</h2>
              <div className="bg-slate-100 dark:bg-white/5 rounded-3xl p-2 border border-slate-200 dark:border-white/10 shadow-lg">
                <img src={project.architectureImg} alt="Architecture Diagram" className="w-full rounded-2xl opacity-90" />
                <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-3 mb-1">High-level system architecture overview.</p>
              </div>
            </motion.section>

            {/* Implementation Details */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-white/10 pb-2">Implementation Details</h2>
              <ul className="space-y-4">
                {project.implementation.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center border border-blue-200 dark:border-blue-700/50">
                      {idx + 1}
                    </span>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed pt-1">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Results & Future */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-white/10 pb-2">Results & Roadmap</h2>
              <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-md">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Impact</h3>
                <p className="text-slate-700 dark:text-gray-300 mb-6">{project.results}</p>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Future Improvements</h3>
                <p className="text-slate-700 dark:text-gray-300">{project.future}</p>
              </div>
            </motion.section>

          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8">
            <motion.div
              className="bg-slate-100 dark:bg-gray-900/60 rounded-3xl p-8 border border-slate-200 dark:border-white/10 sticky top-28"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 uppercase tracking-wider text-sm">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 font-semibold rounded-lg shadow-sm text-sm">
                    {t}
                  </span>
                ))}
              </div>

              <hr className="my-8 border-slate-300 dark:border-white/10" />

              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 uppercase tracking-wider text-sm">Engineering Challenges</h3>
              <ul className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-500 mt-1">⚡</span>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{challenge}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
