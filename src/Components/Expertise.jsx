import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaBrain, FaRocket, FaGitAlt } from "react-icons/fa";

const expertiseAreas = [
  {
    title: "Frontend Engineering",
    icon: <FaLaptopCode />,
    description: "Building responsive, highly-interactive, and performant web applications using modern component-based architectures.",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Zustand", "Tailwind CSS", "Framer Motion"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    description: "Designing and developing robust, scalable, and secure RESTful APIs and server-side logic.",
    tech: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    title: "Database Architecture",
    icon: <FaDatabase />,
    description: "Structuring scalable NoSQL databases and performing complex aggregations and data modeling.",
    tech: ["MongoDB", "Mongoose", "Data Modeling", "Aggregation Pipelines"],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    title: "AI Engineering & Integration",
    icon: <FaBrain />,
    description: "Integrating Large Language Models and building Retrieval-Augmented Generation (RAG) pipelines for intelligent applications.",
    tech: ["LangChain", "Gemini", "RAG", "ChromaDB", "Prompt Engineering"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20"
  },
  {
    title: "Real-Time Systems",
    icon: <FaRocket />,
    description: "Implementing real-time communication protocols for live chat, collaboration, and video streaming applications.",
    tech: ["Socket.IO", "Stream SDK", "WebRTC", "WebSockets"],
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20"
  },
  {
    title: "DevOps & Deployment",
    icon: <FaGitAlt />,
    description: "Automating workflows, containerizing applications, and deploying scalable web services to cloud infrastructure.",
    tech: ["GitHub Actions", "Docker", "Vercel", "CI/CD"],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-4xl bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2 font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Proficiency
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Engineering Expertise
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-md border ${area.border} dark:border-white/5 shadow-lg hover:-translate-y-2 transition-transform duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-2xl ${area.bg} flex items-center justify-center text-2xl ${area.color} mb-6 group-hover:scale-110 transition-transform`}>
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                {area.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tech.map((t, tIdx) => (
                  <span key={tIdx} className={`px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/20 transition-colors`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
