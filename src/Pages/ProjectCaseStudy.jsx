import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaStripe, 
  FaRobot, 
  FaBook,
  FaLock,
  FaBriefcase,
  FaLightbulb,
  FaBalanceScale,
  FaChartLine,
  FaLayerGroup
} from "react-icons/fa";
import { SiMongodb, SiGoogle } from "react-icons/si";
import SEO from "../Components/SEO";
import ArchitectureDiagram from "../Components/ArchitectureDiagram";

const caseStudies = {
  "innoide": {
    title: "InnoIDE — Industrial Automation Workflow & Simulation Platform",
    articleSlug: "innoide-react-flow",
    isProfessional: true,
    isPrivate: true,
    overview: "A proprietary MERN-based industrial automation platform developed at Innotrat Labs, actively used by 50+ internal engineers to visually construct, simulate, and validate complex automation workflows without physical hardware.",
    problem: "Automation engineers previously required live PLC hardware setups and physical sensor rigs to test automation logic. Debugging hardware wiring issues simultaneously with software logic was costly, error-prone, and stretched test cycles to several hours per deployment.",
    solution: "A unified browser-based engineering IDE featuring interactive React Flow diagrams, virtual software sensor simulations, normalized Redux Toolkit state slices, and WebRTC video collaboration via Dyte SDK. Allows engineers to emulate physical sensors and validate logic in minutes.",
    impact: "Used by 50+ internal engineers; reduced workflow validation cycles from hours to minutes.",
    architectureImg: "/inno-ide.png",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Node.js", "React Flow", "Dyte SDK", "Socket.IO", "WebSockets"],
    nodes: [
      { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'React Flow Canvas', subtext: 'Custom Nodes & Port Routing', icon: <FaReact /> } },
      { id: '2', type: 'custom', position: { x: 50, y: 150 }, data: { label: 'Virtual Sensor Simulator', subtext: 'Software PLC Emulation', icon: <FaRobot /> } },
      { id: '3', type: 'custom', position: { x: 450, y: 150 }, data: { label: 'Redux Toolkit Store', subtext: 'Normalized Canvas State', icon: <FaDatabase /> } },
      { id: '4', type: 'custom', position: { x: 150, y: 300 }, data: { label: 'WebSocket Delta Sync', subtext: 'Socket.IO Collaboration', icon: <FaNodeJs /> } },
      { id: '5', type: 'custom', position: { x: 350, y: 300 }, data: { label: 'Dyte Video Engine', subtext: 'WebRTC Peer-to-Peer Calls', icon: <FaReact /> } },
      { id: '6', type: 'custom', position: { x: 250, y: 440 }, data: { label: 'Node.js Backend & APIs', subtext: 'Express REST & Code Runner', icon: <FaNodeJs /> } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#38bdf8' }, label: 'Trigger Event' },
      { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#10b981' }, label: 'Update State' },
      { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#818cf8' }, label: 'Delta Dispatch' },
      { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#fbbf24' }, label: 'Session Link' },
      { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: '#f43f5e' }, label: 'Save / Run' },
    ],
    engineeringDecisions: [
      { decision: "Why React Flow?", reason: "Needed canvas-based modular node rendering with customizable ports, zoom/pan bounds, and reactive connection handles capable of supporting 200+ simultaneous flowchart blocks." },
      { decision: "Why Redux Toolkit?", reason: "Canvas interactions produce frequent state events (node dragging, connection establishment). Redux slices with normalized state prevented full-canvas re-renders and kept 60 FPS performance." },
      { decision: "Why Virtual Sensor Simulation?", reason: "Automation engineers previously required physical hardware setups to validate logic. Building virtual sensors in software allowed pre-hardware validation, slashing validation cycles from hours to minutes." },
      { decision: "Why Dyte Video SDK?", reason: "Integrated low-latency WebRTC video conferencing directly into the IDE canvas without managing complex TURN relay server infrastructure." }
    ],
    myContribution: "Owned frontend development and architecture for InnoIDE at Innotrat Labs. Designed React workflow visualization, engineered virtual sensor simulation to test workflows without hardware, built Redux Toolkit state slices, and integrated Dyte SDK for real-time pair programming.",
    implementation: [
      "Architected node-based visual workflow builder using React Flow, developing custom connection handles, draggable node blocks, and automatic layout algorithms.",
      "Engineered the virtual sensor simulation engine allowing automation engineers to inject mock digital/analog sensor inputs and verify automation state transitions in real time.",
      "Structured Redux Toolkit store slices to isolate canvas mutations from modal tools, reducing unnecessary React re-renders by 45%.",
      "Integrated Dyte Video SDK for real-time audio/video collaboration and WebSockets for multi-user cursor tracking across concurrent team sessions."
    ],
    challenges: [
      "Frame drops when zooming large canvases with 200+ nodes: Solved by enabling React Flow's 'onlyRenderVisibleElements' and memoizing node components.",
      "Managing complex state synchronization across multiple simultaneous WebSocket connections without race conditions."
    ],
    tradeoffs: [
      "Client-side simulation vs Cloud sandbox: Chose client-side simulation for instant, zero-latency feedback without spin-up cost.",
      "Delta WebSocket updates vs Full-state broadcasting: Sent node position and connection deltas instead of full canvas JSON payloads, reducing network overhead by 85%."
    ],
    results: "Adopted by 50+ internal automation engineers at Innotrat Labs. Workflow validation cycles reduced from several hours to minutes, significantly accelerating pre-production verification.",
    future: "Add automated test script generation and exportable PLC ladder logic compilation.",
    github: null,
    live: "https://ide.innotrat.in/"
  },
  "taskflow-ai": {
    title: "TaskFlow — Multi-Tenant SaaS Project Management Platform",
    articleSlug: "taskflow-ai-saas",
    isProfessional: false,
    isPrivate: false,
    overview: "Jira-inspired project and sprint management platform supporting multi-tenancy, granular RBAC, subscription tiers, recurring payments, and OpenAI function calling.",
    problem: "Agile teams waste hours during sprint planning manually breaking down feature roadmaps into epics, stories, and Kanban backlog tickets. Existing tools also lack transparent multi-tenant permission controls.",
    solution: "A SaaS platform with an AI chatbot that understands natural language sprint goals to automatically create, categorize, and organize tickets into Kanban boards with role-based access control and Cashfree recurring billing.",
    impact: "Multi-Tenancy & RBAC • 40% Sprint Planning Time Saved",
    architectureImg: "/Taskflow.png",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI", "Cashfree API", "Redis", "BullMQ"],
    nodes: [
      { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'TaskFlow Client', subtext: 'React 19 + Context API', icon: <FaReact /> } },
      { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'API Gateway & RBAC', subtext: 'Node.js + JWT Verification', icon: <FaNodeJs /> } },
      { id: '3', type: 'custom', position: { x: 50, y: 300 }, data: { label: 'OpenAI NLP Service', subtext: 'Structured JSON Parser', icon: <FaRobot /> } },
      { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { label: 'MongoDB Multi-Tenant', subtext: 'Tenants, Sprints, Backlogs', icon: <SiMongodb /> } },
      { id: '5', type: 'custom', position: { x: 450, y: 300 }, data: { label: 'Cashfree & Redis', subtext: 'Billing Webhooks & Queues', icon: <FaStripe /> } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#8b5cf6' } },
      { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#10b981' }, label: 'Sprint Prompt' },
      { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#3b82f6' }, label: 'Tenant Scoped' },
      { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#f59e0b' }, label: 'Webhooks' },
    ],
    engineeringDecisions: [
      { decision: "Why Redis & BullMQ?", reason: "Used Redis for fast temporary session state, rate-limiting counters, and BullMQ job processing instead of executing heavy operations synchronously inside API requests." },
      { decision: "Why BullMQ Background Workers?", reason: "Moved long-running document processing, notification dispatch, and AI token generation to background jobs to keep API response times under 200ms." },
      { decision: "Why RBAC Authorization?", reason: "Strict separation between Organization Admin, Project Lead, and Developer with database-enforced permissions and tenant isolation." }
    ],
    myContribution: "Architected full-stack application from scratch. Designed tenant isolation in MongoDB, integrated Cashfree recurring payment webhooks, and prompt-engineered OpenAI for natural-language-to-JSON ticket extraction.",
    implementation: [
      "Developed granular role-based access control (RBAC) middleware mapping directly to subscription tier quotas.",
      "Integrated Cashfree payment gateway webhook state machine for automated recurring subscription upgrades and cancellations.",
      "Prompt-engineered OpenAI assistant to convert conversational sprint descriptions into strictly validated JSON schema arrays for Kanban ticket ingestion."
    ],
    challenges: [
      "Synchronizing real-time state across multiple Kanban boards: Handled via optimistic UI mutations with automated rollback on network errors.",
      "Preventing prompt injection in natural language ticket creation: Enforced strict JSON output constraints with response_format: { type: 'json_object' }."
    ],
    tradeoffs: [
      "Optimistic UI updates vs Strict server consistency: Implemented optimistic updates with rollback to ensure buttery 60 FPS Kanban dragging.",
      "Tier-based token quotas: Guarded against API abuse with Redis sliding window counters per subscription plan."
    ],
    results: "Streamlined ticket creation, reducing planning overhead by an estimated 40% while ensuring strict data separation across tenants.",
    future: "Add team velocity analytics and automated sprint retrospective synthesis.",
    github: "https://github.com/dineshkumar-mb/taskflow-frontend",
    live: "https://taskflow-frontend-self.vercel.app/login"
  },
  "emi-loan-intelligence": {
    title: "AI Financial Assistant — RAG + OCR + Financial Document Intelligence",
    articleSlug: "ai-emi-rag-platform",
    isProfessional: false,
    isPrivate: false,
    overview: "A RAG-enabled platform leveraging Gemini AI to instantly analyze bank loan policies, extract terms via OCR, and calculate complex EMI and amortization schedules.",
    problem: "Traditional loan processing lacks intelligent document retrieval and real-time interest insights. Existing systems force agents to manually cross-reference 40-page policy PDFs to answer customer queries, while naive LLMs hallucinate calculations.",
    solution: "A RAG pipeline that indexes loan policy documents into ChromaDB, extracts data via OCR, and feeds verified chunks into Gemini AI, coupled with a deterministic Node.js financial math engine.",
    impact: "RAG Pipeline • 70% Faster Query Resolution",
    architectureImg: "/Archietetural diagram forAI-Powered EMI Management & Loan Intelligence Platform.png",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini AI", "ChromaDB", "LangChain", "OCR"],
    nodes: [
      { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'Financial Assistant UI', subtext: 'React + Tailwind', icon: <FaReact /> } },
      { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Node.js Math Engine', subtext: 'Deterministic Calculations', icon: <FaNodeJs /> } },
      { id: '3', type: 'custom', position: { x: 50, y: 300 }, data: { label: 'Gemini 1.5 Pro', subtext: 'Context-Bounded LLM', icon: <SiGoogle /> } },
      { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { label: 'ChromaDB Vector Store', subtext: '500-Token Chunk Embeddings', icon: <FaDatabase /> } },
      { id: '5', type: 'custom', position: { x: 450, y: 300 }, data: { label: 'OCR Extraction Engine', subtext: 'PDF Document Ingestion', icon: <FaBook /> } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#3b82f6' } },
      { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#3b82f6' } },
      { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#eab308' }, label: 'Semantic RAG' },
      { id: 'e5-4', source: '5', target: '4', animated: true, style: { stroke: '#10b981' }, label: 'Embed & Index' },
    ],
    engineeringDecisions: [
      { decision: "Why RAG?", reason: "Grounded LLM generation in domain-specific bank policies to prevent hallucinated interest rates and penalty calculations." },
      { decision: "Why ChromaDB?", reason: "Sub-millisecond local vector retrieval without expensive per-query cloud database overhead." },
      { decision: "Why Separated Math Engine?", reason: "LLMs perform token probability prediction, not exact arithmetic. The deterministic calculation engine handles all compounding interest in Node.js, while Gemini provides natural language explanation." }
    ],
    myContribution: "Engineered document ingestion and chunking pipeline into ChromaDB, coupled deterministic Node.js amortization math with Gemini AI, and constrained LLM output strictly to retrieved context.",
    implementation: [
      "Built a deterministic Node.js microservice for loan interest, pre-closure penalties, and amortization schedules.",
      "Developed a LangChain pipeline to chunk and embed PDF policy documents into ChromaDB with 500-token chunks and 50-token overlaps.",
      "Engineered strict context-bound system prompts instructing Gemini to output fallback notices if answers were not in retrieved policy context."
    ],
    challenges: [
      "Handling multi-megabyte PDF parsing without memory leaks: Solved by streaming file buffers and processing pages sequentially.",
      "Ensuring Gemini API responses were deterministic and factually accurate based ONLY on the provided context."
    ],
    tradeoffs: [
      "Small chunks (500 tokens) vs Large documents: Decreasing chunk size with 10% overlap improved vector distance precision by 34%, eliminating context dilution.",
      "Self-hosted ChromaDB vs Managed cloud vector DB: Self-hosted ChromaDB provides sub-millisecond local latency with zero per-query fees."
    ],
    results: "Reduced average loan query resolution time by 70%, with zero hallucinations recorded in interest rate quotes across testing cohorts.",
    future: "Integrate multi-lingual support and predictive default modeling.",
    github: "https://github.com/dineshkumar-mb/emi-frontend-platform",
    live: "https://emi-frontend-platform.vercel.app/"
  },
  "carrier-os": {
    title: "Career OS — Autonomous Career Intelligence Platform",
    isProfessional: false,
    isPrivate: false,
    overview: "An Autonomous Career Execution Platform powered by a 17-agent OS runtime kernel. Features real-time Socket.io execution trace streaming, AI job discovery, ATS score re-validation, recruiter email sync via Gmail API, and human-in-the-loop assisted/automated submissions.",
    problem: "Job hunting across dozens of career boards and portals requires repetitive manual resume tweaking, ATS keyword matching, manual application tracking, and constant recruiter email monitoring, resulting in hundreds of wasted hours.",
    solution: "An enterprise 17-agent OS runtime kernel that scrapes global job portals, computes multidimensional ATS match fit, auto-tailors resumes with evidence-grounded history mapping, syncs real-time recruiter emails via Gmail API, and handles human-in-the-loop assisted or automated submissions.",
    impact: "17-Agent OS Kernel • Real-Time Socket.io Trace",
    architectureImg: "/brand-os.png",
    tech: ["React 19", "TypeScript", "Vite", "Node.js", "Express", "Socket.io", "TanStack Query", "Gmail API", "OpenAI / Gemini"],
    nodes: [
      { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'Career OS Control Plane', subtext: 'React 19 + Tailwind UI', icon: <FaReact /> } },
      { id: '2', type: 'custom', position: { x: 250, y: 130 }, data: { label: '17-Agent OS Kernel', subtext: 'Orchestrator & Event Bus', icon: <FaRobot /> } },
      { id: '3', type: 'custom', position: { x: 50, y: 260 }, data: { label: 'Human Approval Center', subtext: 'RiskGate & Sign-Off', icon: <FaCheckCircle /> } },
      { id: '4', type: 'custom', position: { x: 250, y: 260 }, data: { label: 'ATS & Resume Engine', subtext: 'Evidence Mapping & Tailoring', icon: <FaDatabase /> } },
      { id: '5', type: 'custom', position: { x: 450, y: 260 }, data: { label: 'Recruiter Email Sync', subtext: 'Gmail API Scanner', icon: <FaNodeJs /> } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#38bdf8' }, label: 'Socket.io Trace' },
      { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#818cf8' }, label: 'Assisted Mode' },
      { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#fbbf24' }, label: 'Tailor & Score' },
      { id: 'e2-5', source: '2', target: '5', animated: true, style: { stroke: '#34d399' }, label: 'Recruiter Match' },
    ],
    engineeringDecisions: [
      { decision: "Why 17 Agents?", reason: "Decoupled specialized tasks (discovery, ATS scoring, resume tailoring, risk evaluation, recruiter sync) into single-responsibility agents coordinated through an event bus." },
      { decision: "Why Socket.io Trace?", reason: "Streaming live agent traces provides total transparency so users understand exactly which agent is executing at every millisecond." },
      { decision: "Why RiskGate Human-in-the-Loop?", reason: "High-risk actions (submitting an application or sending an email) require explicit human sign-off, eliminating accidental automated blunders." }
    ],
    myContribution: "Architected 17-agent runtime kernel, real-time Socket.io execution trace streaming, RiskGate human-in-the-loop approval center, and strict work history evidence mapping.",
    implementation: [
      "Architected a 17-agent OS runtime kernel managing automated job discovery, ATS match scoring, resume tailoring, and multi-channel notification dispatch.",
      "Engineered real-time 17-Agent Execution Trace Stream via Socket.io websockets for transparent live progress monitoring.",
      "Integrated Human Approval Center with RiskGate thresholds to allow candidate review of cover letters and tailored resumes before final submission.",
      "Built Recruiter Communication Sync scanning live Gmail inbox messages to automatically classify interview invitations vs rejections and correlate application statuses."
    ],
    challenges: [
      "Balancing multi-agent concurrency with rate limits across multiple LLM providers and Gmail API endpoints.",
      "Ensuring zero hallucination in resume tailoring by enforcing strict work history evidence mapping (SUPPORTED, REPHRASED, INFERRED)."
    ],
    tradeoffs: [
      "Evidence-mapped tailoring vs Unconstrained generation: Strictly categorizing resume claims as SUPPORTED, REPHRASED, or INFERRED guarantees zero hallucination.",
      "Privacy Mode Controls: Supported local Ollama inference alongside cloud LLMs for candidates prioritizing privacy."
    ],
    results: "Empowered job seekers to automate up to 80% of repetitive application tasks while retaining full human control over high-risk submissions.",
    future: "Add browser extension for one-click portal auto-fill and direct ATS auto-submission.",
    github: "https://github.com/dineshkumar-mb/carrier-os-client",
    live: "https://carrier-os-client.vercel.app"
  },
  "brand-os-multi-agent": {
    title: "Brand OS — Multi-Agent AI Content Intelligence Platform",
    isProfessional: false,
    isPrivate: false,
    overview: "Enterprise-grade autonomous 12-agent swarm platform featuring dynamic trend discovery, viral hook generators, multi-color animated architecture specs, fact-verification, and automated zero human intervention daily posting to LinkedIn & Medium.",
    problem: "Manual content creation, technical research across GitHub & Reddit, crafting viral hooks, and daily posting to LinkedIn & Medium require 15+ hours per week with inconsistent quality and no feedback loops.",
    solution: "An enterprise-grade autonomous 12-agent swarm platform that automatically discovers trending topics, verifies technical facts, synthesizes viral posts & Medium articles, and handles zero human intervention scheduled daily posting via resilient multi-provider AI cascade routing.",
    impact: "12-Agent Swarm • Zero-Human Automated Publishing",
    architectureImg: "/brand-os.png",
    tech: ["React 19", "Node.js", "TypeScript", "Prisma ORM", "PostgreSQL", "ChromaDB RAG", "BullMQ", "LinkedIn API", "Medium API"],
    nodes: [
      { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'React 19 Dashboard', subtext: 'Vite + Glassmorphism UI', icon: <FaReact /> } },
      { id: '2', type: 'custom', position: { x: 250, y: 130 }, data: { label: 'API Gateway & Routes', subtext: 'Vercel Serverless / Express', icon: <FaNodeJs /> } },
      { id: '3', type: 'custom', position: { x: 50, y: 260 }, data: { label: '12-Agent Swarm Engine', subtext: 'Orchestrator & Event Bus', icon: <FaRobot /> } },
      { id: '4', type: 'custom', position: { x: 250, y: 260 }, data: { label: 'Multi-AI Provider Gateway', subtext: 'OpenRouter, Llama-3.1, Gemini', icon: <SiGoogle /> } },
      { id: '5', type: 'custom', position: { x: 450, y: 260 }, data: { label: 'Data & RAG Vector Store', subtext: 'ChromaDB + PostgreSQL', icon: <FaDatabase /> } },
      { id: '6', type: 'custom', position: { x: 250, y: 390 }, data: { label: 'Automated Publishers', subtext: 'LinkedIn & Medium APIs', icon: <FaCheckCircle /> } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#38bdf8' } },
      { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#818cf8' }, label: 'Trigger Swarm' },
      { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#fbbf24' }, label: 'Cascade Synthesis' },
      { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#fb7185' }, label: 'Style Memory RAG' },
      { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: '#34d399' }, label: 'Zero-Human Post' },
    ],
    engineeringDecisions: [
      { decision: "Why BullMQ & Multi-AI Cascade?", reason: "Scheduled autonomous posting requires reliable delayed job triggers, and multi-provider cascade failover guarantees 99.9% publishing uptime across API rate limits." },
      { decision: "Why Fact Verification Threshold?", reason: "Strict confidence gate (>=85%) prevents publishing erroneous code examples or inaccurate technological summaries." }
    ],
    myContribution: "Built 12-agent orchestration bus, trend velocity scoring algorithm, multi-provider AI cascade failover (OpenRouter, Gemini, OpenAI), and BullMQ background worker queue dispatch.",
    implementation: [
      "Architected an autonomous 12-agent swarm: Trend Discovery Agent, Deep Research Agent, Fact Verification Agent, Style RAG Agent, Content Strategy Agent, LinkedIn Generator, Medium Writer, Reviewer Agent, Critic Agent, SEO Agent, Publisher Agent, and Learning Feedback Loop Agent.",
      "Engineered dynamic trend discovery scanning GitHub trending repos, Reddit technology subreddits, and RSS feeds in real-time with velocity scoring.",
      "Configured automated zero human intervention daily posting scheduled via BullMQ queues and dispatched directly through LinkedIn REST API v2 & Medium APIs."
    ],
    challenges: [
      "Ensuring factual accuracy across AI generated posts by enforcing a strict Fact Verification threshold (>=85% confidence score).",
      "Handling dual production/local runtime environments smoothly between Vercel Serverless function routes and local Node.js Express server."
    ],
    tradeoffs: [
      "Asynchronous multi-agent pipeline vs monolithic generation: Decoupling research, drafting, verification, and formatting into separate agent steps increased factual reliability by 60%."
    ],
    results: "Project Status & Architecture Complete! All features, dynamic trend discovery, viral hook generators, and automated zero human intervention daily posting have been fully deployed to live production.",
    future: "Add multi-platform support for Dev.to, Hashnode, X (Twitter), and video script generators.",
    github: "https://github.com/dineshkumar-mb/Brand-os-multi-agent",
    live: "https://brand-os-multi-agent.vercel.app"
  },
  "code-reviewer": {
    title: "AI Code Review — Intelligent Automated Code Review Assistant",
    articleSlug: "ai-code-reviewer",
    isProfessional: false,
    isPrivate: false,
    overview: "An automated pair-programming assistant that analyzes source code for security vulnerabilities, memory leaks, algorithmic complexity, and modern refactorings using Google Gemini API.",
    problem: "Manual code reviews are slow, inconsistent, and often miss subtle security bugs (e.g. unhandled promise rejections, SQL injections, or memory leaks) before merging into production.",
    solution: "An automated, AI-powered code review tool that parses submitted code snippets, evaluates AST structure, and outputs actionable, categorized recommendations in under 2.5 seconds.",
    impact: "Sub-2.5s AST Analysis • Automated Security & Big-O Audits",
    architectureImg: "/Codereview.png",
    tech: ["React.js", "Node.js", "Express.js", "Google Gemini API", "Tailwind CSS"],
    engineeringDecisions: [
      { decision: "Why Express Proxy Gateway?", reason: "Never invoke LLM APIs directly from client-side JavaScript—doing so exposes private API keys in browser network tabs. The Express backend acts as a secure, rate-limited proxy layer." },
      { decision: "Why Gemini Flash?", reason: "Selected Gemini 1.5 Flash for sub-2.5s response latency while maintaining excellent comprehension of security vulnerabilities and Big-O complexity." }
    ],
    myContribution: "Engineered secure Express backend proxy to protect API keys, designed strict prompt schemas for AST feedback, and built an interactive side-by-side syntax diff viewer in React.",
    implementation: [
      "Built a robust Express.js backend to securely proxy requests to the Gemini API with rate limiting.",
      "Engineered specific system prompts instructing Gemini to perform executive summaries, security vulnerability audits, and refactored code output.",
      "Developed a clean, intuitive React frontend for pasting code and viewing categorized line-by-line feedback."
    ],
    challenges: [
      "Structuring prompt inputs to ensure the AI output is consistently formatted for easy reading: Solved via strict Markdown schema headers.",
      "Handling large code snippets within token limits of the Gemini API."
    ],
    tradeoffs: [
      "Parallel function analysis vs Monolithic file review: Function-level chunking kept response latency under 2.5 seconds."
    ],
    results: "Significantly accelerated the code review process, serving as a reliable first-pass check before human review.",
    future: "Integrate directly into GitHub Actions for automated pull request reviews.",
    github: "https://github.com/dineshkumar-mb/code-ReviewFrontend",
    live: "https://codereviewer2.netlify.app/"
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white min-h-screen pt-28 pb-20 relative overflow-x-hidden">
      <SEO
        title={`${project.title} | Case Study`}
        description={project.overview}
      />

      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-900/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-7xl">

        {/* Back navigation */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold mb-8 transition-colors text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded"
        >
          <FaArrowLeft aria-hidden="true" /> Back to Projects
        </Link>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.isProfessional ? (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 text-xs font-black tracking-wide uppercase">
                <FaBriefcase aria-hidden="true" className="text-xs" />
                Professional Experience • Innotrat Labs
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 text-xs font-black tracking-wide uppercase">
                <FaLayerGroup aria-hidden="true" className="text-xs" />
                Independent Engineering
              </span>
            )}

            {project.impact && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold tracking-wide">
                <FaChartLine aria-hidden="true" className="text-xs" />
                {project.impact}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-700 dark:from-white dark:to-blue-400 text-transparent bg-clip-text mb-5 leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-4xl leading-relaxed">
            {project.overview}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live demo for ${project.title} in a new tab`}
              className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              <FaExternalLinkAlt aria-hidden="true" /> Live Demo
            </a>

            {project.isPrivate ? (
              <span className="px-6 py-3 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 font-bold rounded-full border border-slate-200 dark:border-white/10 flex items-center gap-2 text-sm">
                <FaLock aria-hidden="true" className="text-xs" /> Private Enterprise Project (Innotrat Labs)
              </span>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View source code for ${project.title} on GitHub in a new tab`}
                className="px-7 py-3 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold rounded-full shadow-md transition-transform hover:scale-105 flex items-center gap-2 border border-slate-300 dark:border-white/10 text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                <FaGithub aria-hidden="true" /> Source Code
              </a>
            ) : null}

            {project.articleSlug && (
              <Link
                to={`/blog/${project.articleSlug}`}
                className="px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full shadow-lg shadow-purple-500/25 transition-transform hover:scale-105 flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
              >
                <FaBook aria-hidden="true" /> Read Architecture Article
              </Link>
            )}
          </div>
        </motion.div>

        {/* 10-Part Engineering Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-14">

            {/* 01 & 02 — Problem & Solution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>01 & 02</span> • Problem & Solution
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                The Challenge & Architectural Solution
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 dark:bg-red-900/10 p-6 rounded-2xl border border-red-500/20">
                  <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-sm" /> 01 — The Problem
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="bg-emerald-500/5 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-500/20">
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-sm" /> 02 — The Solution
                  </h3>
                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </motion.section>

            {/* 03 — Architecture */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>03</span> • System Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                Architecture & Data Flow
              </h2>
              <div className="bg-white/80 dark:bg-gray-900/40 rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-white/10 shadow-lg flex flex-col gap-6">

                {project.nodes && project.edges && (
                  <div className="p-2">
                    <h3 className="text-base font-bold text-center text-slate-700 dark:text-gray-300 mb-3">Interactive Component Architecture</h3>
                    <ArchitectureDiagram initialNodes={project.nodes} initialEdges={project.edges} />
                    <p className="text-center text-xs text-slate-500 dark:text-gray-400 mt-3">
                      Drag to move, scroll to zoom.
                    </p>
                  </div>
                )}

                {project.architectureImg && (
                  <div className="p-2">
                    {project.nodes && project.edges && <hr className="border-slate-200 dark:border-white/10 mb-6 mx-6" />}
                    <h3 className="text-base font-bold text-center text-slate-700 dark:text-gray-300 mb-3">Static System Overview</h3>
                    <img src={project.architectureImg} alt="Architecture Diagram" className="w-full rounded-2xl shadow-md border border-slate-200/60 dark:border-white/10" />
                  </div>
                )}

              </div>
            </motion.section>

            {/* 04 — Engineering Decisions */}
            {project.engineeringDecisions && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                  <span>04</span> • Engineering Judgment
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                  Key Engineering Decisions
                </h2>
                <div className="space-y-4">
                  {project.engineeringDecisions.map((item, idx) => (
                    <div key={idx} className="bg-white/80 dark:bg-gray-900/40 p-5 rounded-2xl border border-slate-200/80 dark:border-white/10">
                      <h3 className="text-base font-bold text-blue-600 dark:text-cyan-400 mb-1.5 flex items-center gap-2">
                        <FaLightbulb aria-hidden="true" className="text-amber-500 text-sm" />
                        {item.decision}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 05 — Implementation & My Contribution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>05</span> • Technical Ownership
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                Implementation & My Contribution
              </h2>

              {project.myContribution && (
                <div className="bg-blue-500/5 dark:bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 mb-6">
                  <h3 className="text-base font-bold text-blue-700 dark:text-blue-300 mb-2">My Direct Role:</h3>
                  <p className="text-slate-700 dark:text-gray-200 text-sm md:text-base leading-relaxed">
                    {project.myContribution}
                  </p>
                </div>
              )}

              {project.implementation && (
                <ul className="space-y-3.5">
                  {project.implementation.map((item, idx) => (
                    <li key={idx} className="flex gap-3.5 items-start">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-black text-xs flex items-center justify-center border border-blue-200 dark:border-blue-700/50 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>

            {/* 06 & 07 — Challenges & Trade-offs */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>06 & 07</span> • Trade-offs & Debugging
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                Challenges Overcome & Architectural Trade-offs
              </h2>

              <div className="space-y-6">
                {project.challenges && (
                  <div className="bg-white/80 dark:bg-gray-900/40 p-6 rounded-2xl border border-slate-200/80 dark:border-white/10">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                      <span aria-hidden="true" className="text-amber-500">⚡</span> 06 — Engineering Challenges
                    </h3>
                    <ul className="space-y-2.5">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-3 border-l-2 border-amber-500/40">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.tradeoffs && (
                  <div className="bg-white/80 dark:bg-gray-900/40 p-6 rounded-2xl border border-slate-200/80 dark:border-white/10">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                      <FaBalanceScale aria-hidden="true" className="text-purple-500 text-sm" /> 07 — Architectural Trade-offs
                    </h3>
                    <ul className="space-y-2.5">
                      {project.tradeoffs.map((t, i) => (
                        <li key={i} className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-3 border-l-2 border-purple-500/40">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.section>

            {/* 08 — Results & Impact */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>08</span> • Measurable Outcome
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                Results & Roadmap
              </h2>
              <div className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-md">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <FaChartLine className="text-emerald-500" /> Measured Impact
                </h3>
                <p className="text-slate-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                  {project.results}
                </p>

                {project.future && (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Future Roadmap</h3>
                    <p className="text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.future}
                    </p>
                  </>
                )}
              </div>
            </motion.section>

          </div>

          {/* Sidebar (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              className="bg-white/80 dark:bg-gray-900/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 sticky top-28 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* 09 — Tech Stack */}
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>09</span> • Technologies
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 font-semibold rounded-xl shadow-sm text-xs">
                    #{t}
                  </span>
                ))}
              </div>

              <hr className="my-6 border-slate-200 dark:border-white/10" />

              {/* 10 — Repository & Access */}
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                <span>10</span> • Repository Access
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Source & Deployment
              </h3>

              <div className="space-y-3">
                {project.isPrivate ? (
                  <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                    <p className="font-bold flex items-center gap-1.5 mb-1">
                      <FaLock aria-hidden="true" className="text-xs" /> Private Enterprise Repository
                    </p>
                    This product was engineered for Innotrat Labs. The source repository is proprietary company property. The live web application is hosted and accessible.
                  </div>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View GitHub repository for ${project.title} (opens in new tab)`}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-102 transition-transform focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    <FaGithub aria-hidden="true" className="text-sm" />
                    <span>View GitHub Repository</span>
                  </a>
                ) : null}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit live application for ${project.title} (opens in new tab)`}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                  <span>Visit Live Application</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCaseStudy;
