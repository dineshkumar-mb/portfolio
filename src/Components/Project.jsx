



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Zoomcarclone",
    category: "Full Stack",
    tech: "React, Ant Design, Stripe, Express, Node.js, MongoDB, Bootstrap",
    image: "https://github.com/user-attachments/assets/dd5c4669-f7dc-483f-8f2a-af8e8d4b5b37",
    link: "https://capstonezoomcarclone-frnd.vercel.app/",
    description:
      "A sleek, responsive Zoomcar clone website showcasing projects, skills, and experience with Role-based functionalities.",
  },
  {
    title: "Gemini 2.0 clone",
    category: "Frontend",
    tech: "React.js, Tailwind CSS, Google Gemini API",
    image: "https://github.com/user-attachments/assets/a578e8e6-cbad-4d8b-a0bd-25c0fc36e04c",
    link: "https://gemini-clone-jet-eight.vercel.app/",
    description:
      "A powerful conversational AI web application built with ReactJS, Tailwind CSS, and Google Generative AI, replicating the smart Gemini assistant interface.",
  },
  {
    title: "Food ordering App",
    category: "Full Stack",
    tech: "Node.js, MongoDB, Express, Stripe, Tailwind CSS",
    image: "https://github.com/user-attachments/assets/b36c6549-14ae-4361-96d5-9c96a3839081",
    link: "https://food-del-frontend-bqm2.vercel.app",
    description:
      "This is a Food Delivery App built using the MERN stack. It allows users to browse food items, manage carts, make payments via Stripe, and track orders.",
  },
  {
    title: "Code Reviewer app",
    category: "AI & Tools",
    tech: "Node.js, Express.js, CSS, React.js, Google Gemini API",
    image: "/codereviewer.png",
    link: "https://codereviewer2.netlify.app/",
    description:
      "This is a code reviewer app built using Express, Node.js, google gemini-Api, reactjs. It allows users to review their code.",
  },
  {
    title: "AI Mock-interview app",
    category: "AI & Tools",
    tech: "Node.js, Express, Tailwind CSS, ReactJS, Google Gemini API, Stripe, Clerk",
    image: "/ai_mock_interview.png",
    link: "https://ai-mock-interview-app-f.vercel.app/",
    description:
      "A comprehensive AI-driven mock interview platform that provides real-time feedback and role-specific questions to help users sharpen their interview skills.",
  },
  {
    title: "HRMS Application",
    category: "Full Stack",
    tech: "React, Node.js, MongoDB, Face API, Google Auth",
    image: "/HRMS-App.png",
    link: "https://hrms-ecru-three.vercel.app/",
    description:
      "A smart HRMS application featuring face recognition for attendance, secure Google Authentication, and employee management capabilities using Face API.",
  },
  {
    title: "Inno-ide",
    category: "Full Stack",
    tech: "React, Node.js, MongoDB, Google Auth, Dyte SDK, WebSockets",
    image: "/IDE.png",
    link: "https://ide.innotrat.in/",
    description:
      "A smart IDE application that allows users to write and run code, simulate, construct flowcharts, and collaborate via WebSockets and video calls.",
  },
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Full Stack", "Frontend", "AI & Tools"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="pt-12 pb-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My work
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Projects.
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-650 to-purple-650 dark:from-blue-500 dark:to-purple-600 text-white border-transparent shadow-md dark:shadow-lg dark:shadow-blue-500/25 scale-105"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-905 dark:hover:text-white hover:border-slate-350 dark:hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const mainLink = proj.link.split("||")[0].trim();

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  key={proj.title}
                  className="bg-white/70 dark:bg-gray-900/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 p-5 rounded-3xl flex flex-col h-full group transition-all duration-500 hover:border-blue-500/40 hover:shadow-md dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] relative overflow-hidden"
                >
                  {/* Glowing hover card effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                  {/* Image Container with Floating Link */}
                  <div className="relative w-full h-[230px] overflow-hidden rounded-2xl mb-6">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating category tag */}
                    <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 text-cyan-400">
                      {proj.category}
                    </span>

                    {/* Floating visit demo icon button */}
                    <div className="absolute inset-0 flex justify-end m-3 gap-2">
                      {proj.link.split("||").map((link, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => window.open(link.trim(), "_blank")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title={`Visit ${link.trim()}`}
                          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-blue-600 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 text-left">
                    <h3 className="text-slate-800 dark:text-white font-extrabold text-[24px] mb-2 group-hover:text-blue-650 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-slate-500 dark:text-[#aaa6c3] text-[14px] leading-relaxed line-clamp-3 mb-4">
                      {proj.description}
                    </p>
                  </div>

                  {/* Technologies & Bottom Demo Link */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 flex-1 mr-2 text-left">
                      {proj.tech.split(",").slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs font-semibold text-slate-550 dark:text-gray-405">
                          #{t.trim()}
                        </span>
                      ))}
                    </div>
                    <a
                      href={mainLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-1 transition-colors duration-300 flex-shrink-0"
                    >
                      LIVE DEMO <span className="text-[10px]">→</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
