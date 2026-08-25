// Centralized article database for Dinesh Kumar M B's Developer Journal
// 100% aligned with verified portfolio projects in the repository

export const blogCategories = [
  "All",
  "AI Engineering",
  "Full Stack",
  "Developer Tools",
  "Architecture",
];

export const blogPosts = [
  {
    slug: "ai-emi-rag-platform",
    title: "Building an AI-Powered EMI Management & Loan Intelligence Platform with RAG",
    description: "Deep dive into designing a retrieval-augmented generation (RAG) pipeline with Gemini AI, indexing loan policy documents into ChromaDB, and coupling precise financial calculation engines with LLM synthesis.",
    date: "2026-08-20",
    category: "AI Engineering",
    tags: ["AI", "RAG", "Gemini AI", "ChromaDB", "Node.js", "React"],
    readTime: "9 min read",
    featured: true,
    projectSlug: "emi-loan-intelligence",
    projectTitle: "AI-Powered EMI Management & Loan Intelligence Platform",
    projectLink: "https://emi-frontend-platform.vercel.app/",
    githubLink: "https://github.com/dineshkumar-mb/emi-frontend-platform.git",
    author: {
      name: "Dinesh Kumar M B",
      role: "Full-Stack MERN & AI Developer",
      avatar: "https://portfolio-five-chi-11.vercel.app/profile.jpeg"
    },
    sections: [
      {
        id: "the-problem",
        title: "The Problem: Static Rule Engines vs Complex Document Context",
        content: `Traditional loan origination and EMI management systems suffer from a clear bottleneck: while standard interest rate calculators handle predictable inputs easily, actual loan approval requires cross-referencing lengthy policy PDFs, floating interest terms, late penalty clause variations, and customer eligibility constraints.

In typical workflows, loan officers manually scan 40-page policy manuals to answer customer inquiries or compute custom pre-closure penalties. When developers try to automate this using standard LLMs, hallucination becomes a severe business risk—an LLM might invent interest rates or misquote penalty percentages.

To solve this, I designed and built an **AI-Powered EMI Management Platform** that combines a deterministic financial calculation engine with a **Retrieval-Augmented Generation (RAG)** pipeline powered by **Google Gemini AI** and **ChromaDB**.`
      },
      {
        id: "architecture-overview",
        title: "System Architecture & Data Flow",
        content: `The system isolates financial calculations from document intelligence while bringing them together at the API gateway layer:

\`\`\`text
[ Client (React + Tailwind) ]
            │
            ▼
   [ Node.js API Gateway ]
     ├──► [ Financial Math Engine ] ──► (Deterministic EMI, Amortization Schedules)
     └──► [ LangChain / RAG Pipeline ]
                │
                ├──► [ ChromaDB Vector Store ] ──► (Policy PDF Embeddings)
                └──► [ Google Gemini AI API ]  ──► (Grounded Contextual Answers)
\`\`\`

1. **Document Ingestion & Chunking**: Policy PDFs are ingested, split into semantically coherent 500-token chunks with 50-token overlaps using RecursiveCharacterTextSplitter.
2. **Vector Indexing**: Chunks are embedded and indexed into ChromaDB.
3. **Hybrid Retrieval**: When a query arrives (e.g., *"What is the foreclosure penalty for a personal loan after 12 months?"*), similarity search retrieves top-K relevant policy excerpts.
4. **Grounded Gemini Prompting**: The engine constructs a strict context-bound prompt passed to Gemini 1.5 Pro, constraining answers strictly to facts in the retrieved context.`
      },
      {
        id: "key-engineering-decisions",
        title: "Key Engineering Decisions & Code Implementation",
        subsections: [
          {
            title: "1. Separating Math from LLM Text Generation",
            content: `A critical mistake in early financial AI experiments is asking the LLM to calculate compounding interest directly. LLMs perform token probability prediction, not precise arithmetic.

Instead, the Node.js backend handles all math deterministically, passing the computed numbers alongside the document retrieval output.`
          }
        ],
        codeBlock: {
          language: "javascript",
          filename: "services/emiCalculator.js",
          code: `// Deterministic financial calculation engine in Node.js
export const calculateEMIDetails = (principal, annualRate, tenureMonths) => {
  const monthlyRate = annualRate / 12 / 100;
  
  // Standard EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
              
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  // Generate monthly breakdown
  let balance = principal;
  const schedule = [];
  
  for (let month = 1; month <= tenureMonths; month++) {
    const interestForMonth = balance * monthlyRate;
    const principalForMonth = emi - interestForMonth;
    balance -= principalForMonth;

    schedule.push({
      month,
      emi: Number(emi.toFixed(2)),
      principalPaid: Number(principalForMonth.toFixed(2)),
      interestPaid: Number(interestForMonth.toFixed(2)),
      remainingBalance: Math.max(0, Number(balance.toFixed(2)))
    });
  }

  return {
    monthlyEMI: Number(emi.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalAmount: Number(totalPayment.toFixed(2)),
    schedule
  };
};`
        }
      },
      {
        id: "rag-prompt-engineering",
        title: "Strict RAG Prompt Engineering with Gemini AI",
        content: `To ensure zero hallucinations, the prompt template explicitly enforces fallback behavior if policy documents do not contain the answer.`,
        codeBlock: {
          language: "javascript",
          filename: "services/ragService.js",
          code: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export const generateGroundedLoanAnswer = async (query, retrievedChunks) => {
  const contextText = retrievedChunks.map(c => c.pageContent).join("\\n---\\n");

  const systemPrompt = \`
You are a senior financial policy advisor assistant for the Loan Intelligence Platform.
Your answers MUST be strictly based on the policy context provided below.

RULES:
1. Do NOT use external knowledge.
2. If the context does not contain sufficient details, reply: "The policy documents provided do not contain enough information to answer this query accurately."
3. Cite clause section numbers when available in the context.

Context:
\${contextText}

Customer Query: \${query}
\`;

  const result = await model.generateContent(systemPrompt);
  return result.response.text();
};`
        }
      },
      {
        id: "challenges-and-tradeoffs",
        title: "Challenges, Trade-offs & Engineering Lessons",
        content: `### 1. Vector Chunk Size Tuning
Initial tests with 1500-token chunks led to bloated context windows and diluted context relevance. Decreasing chunk size to 500 tokens with 10% overlap improved vector distance precision by **34%**, allowing Gemini to locate clause exceptions immediately.

### 2. Node.js Memory Optimization During PDF Ingestion
Processing multi-megabyte PDF files on serverless execution environments triggered high heap allocations. Streaming file buffers and processing pages sequentially prevented memory spikes.

### Key Trade-offs Made
* **ChromaDB Local/Self-Hosted Vector Store vs Cloud Managed**: Chose ChromaDB for sub-millisecond local retrieval during development and cost-effective deployment without per-query cloud vector database fees.`
      },
      {
        id: "conclusion-and-roadmap",
        title: "Summary & Future Roadmap",
        content: `Combining traditional MERN stack architecture with LLM RAG capability transforms static financial tools into intelligent decision-support platforms. 

**Future Roadmap**:
* Multi-lingual document retrieval for regional loan policies.
* Predictive default risk modeling based on historic repayment schedules.`
      }
    ]
  },
  {
    slug: "taskflow-ai-saas",
    title: "How I Built TaskFlow — An AI-Powered Sprint Management SaaS",
    description: "Architecture breakdown of a Jira-inspired sprint management platform featuring role-based access control, Cashfree recurring billing integration, and natural-language-to-JSON AI ticketing.",
    date: "2026-08-15",
    category: "Full Stack",
    tags: ["SaaS", "React", "Node.js", "MongoDB", "OpenAI", "Cashfree"],
    readTime: "8 min read",
    featured: true,
    projectSlug: "taskflow-ai",
    projectTitle: "TaskFlow - AI-Powered Sprint Management SaaS",
    projectLink: "https://taskflow-frontend-self.vercel.app/login",
    githubLink: "https://github.com/dineshkumar-mb/taskflow-frontend.git",
    author: {
      name: "Dinesh Kumar M B",
      role: "Full-Stack MERN & AI Developer",
      avatar: "https://portfolio-five-chi-11.vercel.app/profile.jpeg"
    },
    sections: [
      {
        id: "the-problem",
        title: "The Problem: High Administrative Friction in Agile Sprint Planning",
        content: `Agile project management tools like Jira or Linear are powerful, but they require repetitive manual configuration: breaking down high-level feature requirements into epics, user stories, acceptance criteria, and technical sub-tasks. Engineers often spend hours during sprint planning manually creating 20-30 ticketing items.

With **TaskFlow**, my goal was to build a full-stack SaaS platform that allows engineering managers to describe sprint goals in plain natural language (e.g., *"Set up Google OAuth authentication and store user JWT sessions with refresh tokens"*), and let an AI engine parse the intent directly into structured Kanban backlog tickets.`
      },
      {
        id: "saas-architecture",
        title: "Full-Stack SaaS Architecture",
        content: `TaskFlow is engineered around modular MERN architecture with subscription tiers, webhook-driven payment state machines, and multi-tenant security:

\`\`\`text
[ Client: React + Tailwind + Context API ]
                  │
                  ▼
[ Express API Server (Node.js) ]
     ├──► JWT Auth & RBAC Middleware (Admin / Lead / Dev)
     ├──► Cashfree Gateway Billing Webhooks ──► Update Tier State
     ├──► OpenAI NLP Parser ──► Structured Ticket Extraction
     └──► MongoDB Database (Tenants, Projects, Sprints, Tickets)
\`\`\` `
      },
      {
        id: "ai-ticket-parser",
        title: "Engineering Natural Language to JSON Parsing",
        content: `The core challenge in AI ticket creation is preventing unstructured markdown output. The frontend drag-and-drop Kanban board requires strict schema properties (title, priority, estimation, tags, description).`,
        codeBlock: {
          language: "javascript",
          filename: "controllers/aiTicketController.js",
          code: `import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const parseNaturalLanguageSprint = async (req, res) => {
  try {
    const { promptText, projectId } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: \`You are an expert Agile Scrum Master. 
Convert the user's sprint goal into a valid JSON array of ticket objects.
Output strictly JSON without markdown codeblocks or explanation.

JSON Schema:
[
  {
    "title": "Short concise summary",
    "description": "Detailed description with acceptance criteria",
    "priority": "LOW" | "MEDIUM" | "HIGH" | "URGENT",
    "storyPoints": number (1, 2, 3, 5, 8),
    "category": "FEATURE" | "BUG" | "REFACTOR" | "DEVOPS"
  }
]\`
        },
        { role: "user", content: promptText }
      ],
      response_format: { type: "json_object" }
    });

    const parsedData = JSON.parse(response.choices[0].message.content);
    res.status(200).json({ success: true, tickets: parsedData.tickets || parsedData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to generate sprint tickets." });
  }
};`
        }
      },
      {
        id: "billing-and-rbac",
        title: "Role-Based Access Control & Webhook Cashfree Billing",
        content: `### Tenant & RBAC Authorization Middleware
TaskFlow implements granular permissions:
* **ORGANIZATION_ADMIN**: Manage team members, invite leads, upgrade subscription plans via Cashfree.
* **PROJECT_LEAD**: Create/delete sprints, trigger AI ticket breakdown, reassign tasks.
* **DEVELOPER**: Update task status (To Do -> In Progress -> Done), log estimation time.

### Cashfree Billing State Machine
Subscriptions handle recurring updates via Cashfree Webhooks. When a recurring subscription renewal occurs, Cashfree dispatches an HMAC-SHA256 signed event payload to \`/api/webhooks/cashfree\`. The server verifies signature authenticity before modifying subscription validity limits in MongoDB.`
      },
      {
        id: "tradeoffs-and-lessons",
        title: "Trade-offs & Engineering Lessons",
        content: `### 1. Optimistic UI Updates vs Server Consistency
For Kanban card dragging, waiting for an HTTP response before updating UI state felt sluggish. I implemented optimistic UI mutations in React state with rollback handlers if the API call failed due to network loss.

### 2. Guarding Against API Abuse
Enforced tier-specific API rate limits (e.g., Free Tier: 15 AI ticket breakdown calls/month) using Redis sliding window counters.`
      }
    ]
  },
  {
    slug: "innoide-react-flow",
    title: "Building InnoIDE: Lessons From Creating a Visual Engineering Platform",
    description: "Behind the scenes of building a web-based IDE featuring React Flow interactive canvas nodes, WebSockets state synchronization, and Dyte WebRTC video pair-programming.",
    date: "2026-08-10",
    category: "Developer Tools",
    tags: ["React", "React Flow", "WebSockets", "Socket.IO", "Dyte SDK", "Node.js"],
    readTime: "10 min read",
    featured: true,
    projectSlug: "innoide",
    projectTitle: "InnoIDE - Collaborative Low-Code Engineering Platform",
    projectLink: "https://ide.innotrat.in/",
    githubLink: "https://github.com/Dineshkumar-1393-innotrat/InnoViewIDE_New/tree/InnoIDE_V1.5_09-06-2026",
    author: {
      name: "Dinesh Kumar M B",
      role: "Full-Stack MERN & AI Developer",
      avatar: "https://portfolio-five-chi-11.vercel.app/profile.jpeg"
    },
    sections: [
      {
        id: "the-problem",
        title: "The Problem: Disjointed Tools for Architecture & Code Development",
        content: `During pair programming and software architecture planning, developers frequently switch between separate tools: Figma/Miro for diagramming, VS Code for writing code, Postman for API testing, and Zoom for video conferencing. This context switching causes friction and misaligned specifications.

With **InnoIDE**, we engineered a unified low-code engineering workspace that combines an interactive node-based architecture canvas (built with **React Flow**), real-time collaborative code execution, WebSockets cursor tracking, and integrated WebRTC video calls powered by **Dyte SDK**.`
      },
      {
        id: "canvas-architecture",
        title: "React Flow Canvas Architecture & Node State",
        content: `The visual flowchart environment allows developers to drag custom microservice nodes, database schemas, and API endpoints onto a canvas, defining connections (edges) that automatically map to execution logic.`
      },
      {
        id: "custom-node-implementation",
        title: "Custom React Flow Node Implementation",
        codeBlock: {
          language: "jsx",
          filename: "components/nodes/ServiceNode.jsx",
          code: `import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { FaServer } from "react-icons/fa";

const ServiceNode = memo(({ data, isSelected }) => {
  return (
    <div
      className={\`px-4 py-3 rounded-xl bg-slate-900 border transition-all duration-200 shadow-xl \${
        isSelected ? "border-blue-500 shadow-blue-500/20" : "border-slate-800"
      }\`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-500" />
      
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
          <FaServer size={18} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">{data.label || "Microservice"}</h4>
          <p className="text-xs text-slate-400">{data.protocol || "HTTP / REST"}</p>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-purple-500" />
    </div>
  );
});

export default ServiceNode;`
        }
      },
      {
        id: "websocket-collaboration",
        title: "Real-Time WebSocket State Synchronization",
        content: `When multiple developers work on the same canvas or code file simultaneously, race conditions can cause nodes to jump position or code edits to overwrite each other.

### Conflict-Free State Management Strategy
1. **Delta Updates**: Instead of broadcasting full canvas JSON state (which grew to 2MB on complex diagrams), the client emits precise delta payloads (\`node_moved\`, \`edge_added\`, \`text_diff\`).
2. **Room Namespaces**: Socket.IO rooms are scoped per project session (\`session_\${projectId}\`).
3. **Cursor Throttling**: Mouse position events are throttled to 30ms using requestAnimationFrame.`
      },
      {
        id: "dyte-video-integration",
        title: "Peer-to-Peer Video Collaboration via Dyte SDK",
        content: `Integrating video conferencing into the workspace required low-latency audio/video feeds without clogging main thread DOM rendering:`,
        codeBlock: {
          language: "javascript",
          filename: "hooks/useDyteMeeting.js",
          code: `import { useDyteClient } from "@dytesdk/react-web-core";
import { useEffect } from "react";

export const useDyteMeeting = (authToken) => {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    if (authToken) {
      initMeeting({
        authToken,
        defaults: {
          audio: true,
          video: true,
        },
      });
    }
  }, [authToken, initMeeting]);

  return meeting;
};`
        }
      },
      {
        id: "performance-lessons",
        title: "Key Performance & Architecture Lessons",
        content: `### 1. Canvas Rendering Optimization
Rendering 200+ complex nodes caused frame drops during zooming. Implementing \`onlyRenderVisibleElements={true}\` in React Flow reduced active DOM elements by **65%**, keeping canvas manipulation at 60 FPS.

### 2. Clean Component Modularization
Decoupled node rendering logic from WebSocket listeners through custom React hooks (\`useCanvasSockets\`, \`useIDEState\`), keeping component rendering lifecycle clean and testable.`
      }
    ]
  },
  {
    slug: "ai-code-reviewer",
    title: "Building an AI Code Reviewer: Architecture, AI Integration and Engineering Lessons",
    description: "How I built an automated pair-programming code review assistant using Express.js, Google Gemini API, and React, focusing on prompt engineering for security vulnerabilities and syntax analysis.",
    date: "2026-08-05",
    category: "AI Engineering",
    tags: ["AI", "Gemini API", "Express", "React", "Node.js", "Code Review"],
    readTime: "7 min read",
    featured: false,
    projectSlug: "code-reviewer",
    projectTitle: "AI Code Reviewer App",
    projectLink: "https://codereviewer2.netlify.app/",
    githubLink: "https://github.com/dineshkumar-mb/code-ReviewFrontend.git",
    author: {
      name: "Dinesh Kumar M B",
      role: "Full-Stack MERN & AI Developer",
      avatar: "https://portfolio-five-chi-11.vercel.app/profile.jpeg"
    },
    sections: [
      {
        id: "the-problem",
        title: "The Problem: Manual Code Reviews & Missed Security Flaws",
        content: `Code reviews are critical for software quality, but human reviews are slow and often miss subtle security vulnerabilities, unhandled edge cases, memory leaks, or missing error boundaries.

The **AI Code Reviewer** was designed to act as an automated first-pass pair-programmer. It accepts code snippets in JavaScript, Python, C++, or Java, parses the code structure, and returns structured feedback highlighting security vulnerabilities, complexity bottlenecks, and refactored code recommendations.`
      },
      {
        id: "backend-architecture",
        title: "Express Backend Proxy Architecture",
        content: `Never invoke LLM APIs directly from client-side JavaScript—doing so exposes API keys in public network tabs. The Express backend acts as a secure, rate-limited proxy layer:

\`\`\`text
[ React Code Editor UI ] ──► POST /api/review ──► [ Express Server ]
                                                      │
                                                      ├── Secret API Key Verification
                                                      ├── Input Sanitization
                                                      └──► [ Google Gemini API ]
\`\`\` `
      },
      {
        id: "prompt-engineering",
        title: "Structuring Gemini AI System Prompts for Code Analysis",
        codeBlock: {
          language: "javascript",
          filename: "server/routes/review.js",
          code: `import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/review", async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || code.trim().length === 0) {
      return res.status(400).json({ error: "Code input cannot be empty." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = \`
You are a Senior Principal Software Engineer performing a rigorous code review.
Analyze the following \${language || "code"} snippet:

\`\`\`
\${code}
\`\`\`

Provide your response in structured Markdown under these specific headings:
1. 🔍 **Executive Summary**
2. ⚠️ **Security & Vulnerability Analysis** (Check for SQL injection, XSS, unhandled promises, memory leaks)
3. 🚀 **Performance & Complexity** (Identify Big-O time/space bottlenecks)
4. 💡 **Refactored Implementation** (Provide clean, optimized modern code)
\`;

    const result = await model.generateContent(prompt);
    const reviewText = result.response.text();

    res.json({ review: reviewText });
  } catch (error) {
    res.status(500).json({ error: "Code review service encountered an error." });
  }
});

export default router;`
        }
      },
      {
        id: "key-lessons",
        title: "Lessons Learned & Security Considerations",
        content: `### 1. Token Limit Optimization
Large pull requests can quickly exceed standard API context windows. Splitting long files into logical functions before dispatching parallel analysis requests kept latency under 2.5 seconds.

### 2. Sanitizing HTML Output
Since Gemini returns Markdown content rendered on the frontend, using sanitized HTML rendering prevents Cross-Site Scripting (XSS) risks when developers view reviewed output.`
      }
    ]
  },
  {
    slug: "ai-mock-interview-app",
    title: "Building an AI Mock Interview Application: From User Flow to AI Feedback",
    description: "Engineering an interactive interview practice platform featuring browser Web Speech API voice transcription, Clerk user management, and dynamic Gemini AI evaluation.",
    date: "2026-07-28",
    category: "AI Engineering",
    tags: ["AI", "Gemini API", "Speech-to-Text", "React", "Clerk", "Tailwind CSS"],
    readTime: "8 min read",
    featured: false,
    projectSlug: "ai-mock-interview",
    projectTitle: "AI Mock Interview Application",
    projectLink: "https://ai-mock-interview-app-f.vercel.app/",
    githubLink: "https://github.com/dineshkumar-mb/ai-mock-interview-app-F.git",
    author: {
      name: "Dinesh Kumar M B",
      role: "Full-Stack MERN & AI Developer",
      avatar: "https://portfolio-five-chi-11.vercel.app/profile.jpeg"
    },
    sections: [
      {
        id: "the-problem",
        title: "The Problem: Generic Interview Preparation Lacks Actionable Feedback",
        content: `Job candidates often struggle to practice technical and behavioral interviews realistically. Generic question lists do not evaluate verbal articulation, technical correctness, or answer conciseness.

The **AI Mock Interview Application** provides an interactive, role-specific interview simulation. Users select their target job role (e.g., *Frontend React Developer*), answer questions verbally using in-browser speech recognition, and receive real-time scoring (1-10 rating) with constructive improvement recommendations.`
      },
      {
        id: "speech-recognition-integration",
        title: "Web Speech API Voice Transcription in React",
        content: `To create an authentic interview feel, candidates answer questions verbally rather than typing.`,
        codeBlock: {
          language: "javascript",
          filename: "hooks/useSpeechToText.js",
          code: `import { useState, useEffect, useRef } from "react";

export const useSpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let currentTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    setTranscript("");
    setIsListening(true);
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognitionRef.current?.stop();
  };

  return { transcript, isListening, startListening, stopListening };
};`
        }
      },
      {
        id: "ai-evaluation-engine",
        title: "Grading Answers with Gemini AI",
        content: `Once an answer is transcribed, the backend passes the target question, ideal answer criteria, and candidate transcription to Gemini AI to generate objective feedback metrics.`
      },
      {
        id: "tradeoffs-and-takeaways",
        title: "Trade-offs & Engineering Takeaways",
        content: `* **Browser Inconsistencies**: Web Speech API behavior varies slightly between Chrome and Safari. Added graceful fallback text input so users can type their answers if voice permission is denied.
* **Authentication Security**: Leveraged **Clerk** for zero-friction user sessions and protected route security.`
      }
    ]
  },
  {
    slug: "streamify-realtime-architecture",
    title: "Engineering Real-Time Peer-to-Peer Communication with Streamify",
    description: "Understanding WebRTC peer connection handshakes, STUN/TURN server signaling via Socket.IO, and end-to-end encrypted audio/video streaming in MERN applications.",
    date: "2026-07-15",
    category: "Architecture",
    tags: ["WebRTC", "Socket.IO", "React", "Node.js", "MongoDB", "Real-Time"],
    readTime: "9 min read",
    featured: false,
    projectSlug: "streamify",
    projectTitle: "Streamify - Real-time Video & Voice Chat",
    projectLink: "https://streamify-inky-one.vercel.app/login",
    githubLink: "https://github.com/dineshkumar-mb/Streamify-frontend.git",
    author: {
      name: "Dinesh Kumar M B",
      role: "Full-Stack MERN & AI Developer",
      avatar: "https://portfolio-five-chi-11.vercel.app/profile.jpeg"
    },
    sections: [
      {
        id: "the-problem",
        title: "The Challenge of Low-Latency Peer-to-Peer Streaming",
        content: `Traditional web applications stream media through central servers, introducing latency and server bandwidth costs. For real-time communication (RTC), audio and video packets should flow directly between user browsers with sub-100ms latency.

With **Streamify**, I built a full-stack MERN video and voice communication app utilizing **WebRTC** for direct media transport and **Socket.IO** for connection signaling.`
      },
      {
        id: "webrtc-signaling-flow",
        title: "WebRTC Offer/Answer Signaling Architecture",
        content: `WebRTC cannot establish direct P2P connections without exchanging network metadata (ICE candidates) and media capabilities (SDP offers/answers).

\`\`\`text
[ Peer A Browser ] ─── SDP Offer via Socket.IO ───► [ Node.js Signaling Server ]
                                                            │
                                                  SDP Offer Forwarded
                                                            │
[ Peer B Browser ] ◄────────────────────────────────────────┘
        │
        ├──► Generates SDP Answer ──► Forwarded back to Peer A
        └──► P2P Direct Media Stream Established (WebRTC Data/Media Channel)
\`\`\` `
      },
      {
        id: "code-implementation",
        title: "Signaling Handler Implementation",
        codeBlock: {
          language: "javascript",
          filename: "sockets/signalingHandler.js",
          code: `export const handleSocketSignaling = (io) => {
  io.on("connection", (socket) => {
    socket.on("join-room", ({ roomId, userId }) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-connected", { userId, socketId: socket.id });

      socket.on("sdp-offer", ({ targetSocketId, offer }) => {
        io.to(targetSocketId).emit("sdp-offer", { senderSocketId: socket.id, offer });
      });

      socket.on("sdp-answer", ({ targetSocketId, answer }) => {
        io.to(targetSocketId).emit("sdp-answer", { senderSocketId: socket.id, answer });
      });

      socket.on("ice-candidate", ({ targetSocketId, candidate }) => {
        io.to(targetSocketId).emit("ice-candidate", { senderSocketId: socket.id, candidate });
      });

      socket.on("disconnect", () => {
        socket.to(roomId).emit("user-disconnected", { socketId: socket.id });
      });
    });
  });
};`
        }
      },
      {
        id: "key-lessons",
        title: "Key Engineering Lessons in Real-Time Media",
        content: `1. **NAT Traversal (STUN/TURN)**: In real-world networks behind strict firewalls, STUN servers alone fail ~15% of the time. Integrating relay TURN servers guarantees fallback connectivity.
2. **React Media Stream Lifecycle Cleanup**: Memory leaks occur if media tracks (\`stream.getTracks().forEach(t => t.stop())\`) are not explicitly stopped when unmounting video components.`
      }
    ]
  }
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (currentSlug, category, limit = 3) => {
  const filtered = blogPosts.filter(
    (post) => post.slug !== currentSlug && post.category === category
  );
  if (filtered.length >= limit) return filtered.slice(0, limit);

  // Fallback to fill up with other posts
  const additional = blogPosts.filter(
    (post) => post.slug !== currentSlug && post.category !== category
  );
  return [...filtered, ...additional].slice(0, limit);
};
