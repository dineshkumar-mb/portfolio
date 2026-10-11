import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Cloud, 
  Bot, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Gauge
} from 'lucide-react';

const buildCategories = [
  {
    title: "Full Stack Applications",
    subtitle: "React.js • Node.js • MongoDB • REST APIs",
    description: "End-to-end web architectures with modern TypeScript, modular components, responsive state management, and resilient server-side services.",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    badge: "Core Engineering",
    highlights: ["Component Systems", "State Architecture", "RESTful APIs", "JWT / Auth"]
  },
  {
    title: "SaaS Platforms",
    subtitle: "Multi-tenant • RBAC • Subscriptions • Billing",
    description: "Production-grade SaaS architectures supporting multi-tenancy, granular role-based permissions, automated payment webhooks, and tier quotas.",
    icon: Cloud,
    gradient: "from-emerald-400 to-teal-500",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    badge: "Enterprise SaaS",
    highlights: ["Role-Based Access Control", "Cashfree Billing", "Multi-Tenancy", "Optimistic UI"]
  },
  {
    title: "AI Applications",
    subtitle: "RAG • LLM Function Calling • Agents • OCR",
    description: "Grounding LLMs with domain documents, vector databases, semantic search, prompt engineering, and asynchronous worker queues for complex workflows.",
    icon: Bot,
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
    badge: "GenAI & RAG",
    highlights: ["ChromaDB Vector Store", "Document OCR", "Gemini & OpenRouter", "BullMQ Queues"]
  },
  {
    title: "Workflow Systems",
    subtitle: "Visual Builders • Simulations • Automation",
    description: "Interactive canvas builders using React Flow, virtual sensor simulations, node-based architectures, and real-time collaborative synchronization.",
    icon: Workflow,
    gradient: "from-amber-400 to-orange-500",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    badge: "Interactive & Real-Time",
    highlights: ["React Flow Canvas", "Virtual Simulation", "Socket.io Sync", "Dyte Video SDK"]
  }
];

const philosophySteps = [
  { step: "01", name: "Understand", desc: "Clarify user intent, business domain, constraints, and latency targets." },
  { step: "02", name: "Design", desc: "Establish component boundaries, API contracts, data models, and failure modes." },
  { step: "03", name: "Build", desc: "Write clean, type-safe, maintainable code with reusable component patterns." },
  { step: "04", name: "Test", desc: "Validate edge cases, integration contracts, and asynchronous job states." },
  { step: "05", name: "Measure", desc: "Profile render cycles, API latency, memory spikes, and user conversion." },
  { step: "06", name: "Improve", desc: "Refactor bottlenecks, prune tech debt, and optimize developer experience." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyHireMe = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-slate-50/50 dark:bg-[#070514]/60" id="what-i-build">
      {/* Background Decorative Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[130px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-500/20">
            <Sparkles size={14} />
            <span>Capability Summary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Build</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Delivering high-performance, maintainable software across full-stack applications, scalable SaaS systems, AI-powered products, and interactive workflow platforms.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {buildCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/80 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl p-7 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_15px_35px_rgba(59,130,246,0.12)] hover:-translate-y-1 overflow-hidden flex flex-col h-full"
              >
                {/* Gradient Top Border on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center p-3.5 ${item.iconBg} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      <Icon aria-hidden="true" className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/5">
                      {item.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-3 tracking-tight">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                    {item.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="text-[11px] font-semibold text-slate-600 dark:text-gray-400 bg-slate-100/80 dark:bg-white/5 px-2 py-0.5 rounded-md">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Engineering Philosophy / How I Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-lg relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Cpu aria-hidden="true" size={14} />
                <span>Engineering Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                How I Build
              </h3>
            </div>

            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
              "I focus on maintainable components, predictable state management, clear API boundaries, asynchronous processing for heavy workloads, and measurable product outcomes."
            </p>
          </div>

          {/* Philosophy Step Pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
            {philosophySteps.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/70 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black text-blue-600 dark:text-cyan-400 block mb-1">
                    {item.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1.5">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyHireMe;
