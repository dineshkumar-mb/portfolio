import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCogs,
  FaCheckCircle,
  FaCompass
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: FaLaptopCode,
    color: "from-blue-500 to-cyan-400",
    themeClass: {
      bg: "bg-blue-500/10",
      text: "text-blue-500 dark:text-blue-400",
      pillBg: "hover:bg-blue-500/10 hover:border-blue-500/30",
    },
    skills: [
      { name: "React.js", note: "Core focus • InnoIDE, TaskFlow & production apps" },
      { name: "TypeScript", note: "Type-safe interfaces, generics & state models" },
      { name: "JavaScript (ES6+)", note: "Async/await, closures, prototypes & DOM" },
      { name: "Redux Toolkit", note: "Complex canvas & workflow state management" },
      { name: "Zustand", note: "Lightweight reactive client-side store" },
      { name: "React Router", note: "Dynamic routes, loaders & protected paths" },
      { name: "Tailwind CSS", note: "Design system tokens & dark mode utility" },
      { name: "Bootstrap", note: "Responsive grid layouts & legacy migration" },
      { name: "Framer Motion", note: "Physics-based fluid micro-interactions" },
      { name: "React Flow", note: "Custom nodes, edge routing & canvas visualization" },
      { name: "React DnD", note: "Drag-and-drop Kanban & ticket management" }
    ],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    color: "from-emerald-500 to-teal-400",
    themeClass: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-500 dark:text-emerald-400",
      pillBg: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
    },
    skills: [
      { name: "Node.js", note: "Event-driven asynchronous server runtime" },
      { name: "Express.js", note: "Modular REST microservices & middlewares" },
      { name: "REST APIs", note: "Stateless API design, OpenAPI & rate limits" },
      { name: "JWT Authentication", note: "Secure refresh tokens & session cookies" },
      { name: "RBAC", note: "Role-based authorization across SaaS tiers" },
      { name: "WebSockets", note: "Bidirectional state synchronization" },
      { name: "Socket.io", note: "Rooms, namespaces & event tracing in Career OS" },
      { name: "API Integration", note: "Payment gateways, Gmail API & social webhooks" }
    ],
  },
  {
    title: "Database & Storage",
    icon: FaDatabase,
    color: "from-amber-500 to-orange-400",
    themeClass: {
      bg: "bg-amber-500/10",
      text: "text-amber-500 dark:text-amber-400",
      pillBg: "hover:bg-amber-500/10 hover:border-amber-500/30",
    },
    skills: [
      { name: "MongoDB", note: "NoSQL document models & aggregation pipelines" },
      { name: "Mongoose", note: "ODM schemas, virtuals, indexes & validation" },
      { name: "MySQL", note: "Relational schema design, normalization & queries" },
      { name: "ChromaDB / Vector DB", note: "Vector embeddings & similarity search" }
    ],
  },
  {
    title: "AI Engineering",
    icon: FaBrain,
    color: "from-purple-500 to-pink-400",
    themeClass: {
      bg: "bg-purple-500/10",
      text: "text-purple-500 dark:text-purple-400",
      pillBg: "hover:bg-purple-500/10 hover:border-purple-500/30",
    },
    skills: [
      { name: "RAG", note: "Document retrieval grounding in AI Financial Assistant" },
      { name: "LangChain", note: "Chains, document splitters & vector retrievers" },
      { name: "Gemini", note: "Google Generative AI SDK, Flash & Pro models" },
      { name: "OpenRouter", note: "Multi-model fallback & cost-optimized routing" },
      { name: "Groq", note: "Ultra-low latency inference for agent evaluation" },
      { name: "Vector Databases", note: "Embeddings indexing & cosine similarity" },
      { name: "Embeddings", note: "Semantic representations of unstructured documents" },
      { name: "Semantic Search", note: "Context-aware search across financial policy PDFs" },
      { name: "OCR", note: "Text extraction from scans & bank loan statements" },
      { name: "LLM Function Calling", note: "Structured tool invocation in TaskFlow" },
      { name: "Multi-Agent Systems", note: "Autonomous 12 & 17 agent swarms in Brand/Career OS" },
      { name: "AI Agents", note: "Autonomous goal loops, memory & tool execution" },
      { name: "Structured Outputs", note: "Guaranteed JSON schema enforcement" }
    ],
  },
  {
    title: "Engineering & Infrastructure",
    icon: FaCogs,
    color: "from-indigo-500 to-purple-400",
    themeClass: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-500 dark:text-indigo-400",
      pillBg: "hover:bg-indigo-500/10 hover:border-indigo-500/30",
    },
    skills: [
      { name: "Redis", note: "In-memory caching, rate limiting & job states" },
      { name: "BullMQ", note: "Asynchronous background queues & worker jobs" },
      { name: "Docker", note: "Containerized developer environments" },
      { name: "Git", note: "Branching workflows, rebase & conflict resolution" },
      { name: "GitHub", note: "Pull requests, code reviews & repository mgmt" },
      { name: "GitHub Actions", note: "Automated linting, testing & deployment pipelines" },
      { name: "CI/CD", note: "Continuous integration & continuous deployment" },
      { name: "AWS", note: "EC2 compute, S3 object storage & deployment" },
      { name: "Jest", note: "Unit testing for utility functions & state stores" },
      { name: "Vitest", note: "Fast test runner for modern Vite applications" },
      { name: "Postman", note: "API contract testing, environment mocks & suites" }
    ],
  },
];

const exploringTopics = [
  "Advanced TypeScript",
  "AI Agents",
  "LLM Evaluation",
  "RAG Optimization",
  "AI System Design",
  "Production AI Architecture"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-xs font-extrabold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Stack
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core Technical Skills
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Demonstrated engineering expertise across frontend architecture, backend systems, data layers, AI engineering, and infrastructure.
          </motion.p>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className={`bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:border-slate-300 dark:hover:border-blue-500/40 group relative overflow-hidden ${
                categoryIndex === 4 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-3.5 rounded-2xl ${category.themeClass.bg} ${category.themeClass.text} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <category.icon aria-hidden="true" className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills List with Evidence Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative z-10 mt-auto">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-0.5 px-3.5 py-2.5 bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 rounded-2xl text-slate-800 dark:text-gray-200 text-sm font-semibold hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 cursor-default`}
                  >
                    <div className="flex items-center gap-2">
                      <FaCheckCircle aria-hidden="true" className={`${category.themeClass.text} text-xs flex-shrink-0`} />
                      <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-gray-400 pl-5 font-normal leading-tight">
                      {skill.note}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Exploring Section (Item 45) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-lg text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FaCompass aria-hidden="true" className="text-xs" />
            <span>Active Growth & Research</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
            Currently Exploring
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm max-w-xl mx-auto mb-6">
            Technologies and engineering domains I am actively studying, evaluating, and applying in experimental projects.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {exploringTopics.map((topic, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-bold shadow-sm hover:scale-105 transition-transform"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span>{topic}</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
