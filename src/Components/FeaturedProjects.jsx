import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import emiPlatformImg from "../assets/emi-platform.png";
import taskflowImg from "../assets/Taskflow.png";

const featured = [
  {
    title: "AI-Powered EMI Management & Loan Intelligence Platform",
    problem: "Traditional loan processing lacks intelligent document retrieval and real-time interest insights.",
    solution: "A RAG-enabled platform leveraging Gemini AI to instantly analyze loan documents and calculate complex EMIs.",
    features: ["RAG Pipeline", "Gemini AI Integration", "Dynamic Interest Calculator", "Document Indexing"],
    tech: ["React.js", "Node.js", "MongoDB", "LangChain"],
    github: "https://github.com/dineshkumar-mb",
    live: "https://emi-frontend-platform.vercel.app/",
    route: "/projects/emi-loan-intelligence",
    image: emiPlatformImg
  },
  {
    title: "TaskFlow - AI-Powered Sprint Management SaaS",
    problem: "Existing sprint management tools require heavy manual input for task breakdown and ticketing.",
    solution: "A Jira-inspired SaaS with an AI chatbot that understands natural language to create and manage tickets.",
    features: ["Role-Based Access", "AI Chatbot", "Cashfree Billing", "Kanban Boards"],
    tech: ["React.js", "Node.js", "OpenAI", "MongoDB"],
    github: "https://github.com/dineshkumar-mb/taskflow-frontend.git",
    live: "https://taskflow-frontend-self.vercel.app/login",
    route: "/projects/taskflow-ai",
    image: taskflowImg
  },
  {
    title: "InnoIDE",
    problem: "Developers lack an all-in-one low-code platform for building architectures, coding, and team collaboration.",
    solution: "A robust web-based IDE featuring real-time WebRTC video calls, interactive flowcharts, and code execution.",
    features: ["React Flow Diagrams", "Dyte Video SDK", "Live Collaboration", "Code Runner"],
    tech: ["React.js", "Socket.IO", "Node.js", "Dyte"],
    github: "https://github.com/dineshkumar-mb",
    live: "https://ide.innotrat.in/",
    route: "/projects/innoide",
    image: "/IDE.png"
  },
  {
    title: "AI Mock-interview app",
    problem: "Candidates struggle to find realistic, role-specific interview practice with instant actionable feedback.",
    solution: "An AI-driven platform that generates dynamic interview questions and evaluates user responses in real-time.",
    features: ["Real-time Feedback", "Role-specific Questions", "Speech-to-Text", "Performance Analytics"],
    tech: ["React.js", "Express", "Gemini API", "Clerk"],
    github: "https://github.com/dineshkumar-mb",
    live: "https://ai-mock-interview-app-f.vercel.app/",
    route: "/projects/ai-mock-interview",
    image: "/ai_mock_interview.png"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2 font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Premium Showcase
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {featured.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-all duration-500" />
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl bg-slate-900 aspect-video">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <Link to={proj.route} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg transition-colors">
                          Read Case Study
                       </Link>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <div className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm text-slate-700 dark:text-slate-300">
                    <p className="mb-4 text-[15px]"><strong className="text-slate-900 dark:text-white">Problem:</strong> {proj.problem}</p>
                    <p className="text-[15px]"><strong className="text-slate-900 dark:text-white">Solution:</strong> {proj.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-2 text-sm uppercase tracking-wide">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.features.map((feature, fIdx) => (
                        <span key={fIdx} className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-800/50">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-2 text-sm uppercase tracking-wide mt-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <Link to={proj.route} className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                      View Case Study
                    </Link>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded-full hover:scale-110 transition-transform">
                      <FaGithub size={20} />
                    </a>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded-full hover:scale-110 transition-transform">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
