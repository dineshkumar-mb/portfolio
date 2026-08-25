import { motion } from "framer-motion";
import Image from "../assets/image.jpg";
import { FaEye, FaDownload, FaCode, FaRobot, FaRocket, FaUserCheck } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+", color: "from-blue-500 to-cyan-400" },
    { label: "Production Projects", value: "15+", color: "from-purple-500 to-pink-500" },
    { label: "Core Technologies", value: "12+", color: "from-amber-400 to-orange-500" }
  ];

  return (
    <section id="about" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaUserCheck className="text-blue-500 text-xs" />
            Engineering Profile
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me.
          </motion.h2>

          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Badges */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md group">
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 opacity-30 blur-xl group-hover:opacity-60 transition duration-700 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src={Image}
                  alt="Dinesh Kumar M B - Full-Stack & AI Engineer"
                  className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle dark gradient overlay for text readability over image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/15 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                  <FaCode size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase text-slate-400 dark:text-gray-400 tracking-wider">Focus</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">Full-Stack MERN</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Right) */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/15 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                  <FaRobot size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase text-slate-400 dark:text-gray-400 tracking-wider">AI Systems</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">Gemini & RAG</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details, Stats & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Lead Bio Paragraph */}
            <p className="text-slate-700 dark:text-gray-200 text-base md:text-lg leading-relaxed font-normal">
              I am a <strong className="text-slate-900 dark:text-white font-extrabold">Full-Stack MERN Developer</strong> and <strong className="text-slate-900 dark:text-white font-extrabold">AI Application Builder</strong> with 3+ years of specialized experience in React.js and Node.js. My engineering focus lies in architecting scalable SaaS platforms, real-time microservices, and workflow automation tools that deliver measurable business impact.
            </p>

            <p className="text-slate-650 dark:text-gray-300 text-base md:text-lg leading-relaxed font-normal">
              Recently, I have been deeply focused on building AI-powered products—integrating Large Language Models (<strong className="text-blue-600 dark:text-blue-400 font-bold">LLMs</strong>) via <strong className="text-purple-600 dark:text-purple-400 font-bold">LangChain</strong> and engineering <strong className="text-cyan-600 dark:text-cyan-400 font-bold">Retrieval-Augmented Generation (RAG)</strong> pipelines with ChromaDB to combine deterministic financial math engines with intelligent semantic search.
            </p>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-3 gap-4 w-full pt-3 pb-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all duration-300 group"
                >
                  <span className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                    {stat.value}
                  </span>
                  <span className="text-slate-500 dark:text-gray-400 text-xs font-bold mt-1 tracking-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* View Resume Button */}
              <motion.a
                href="/new_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white dark:bg-white/5 text-slate-800 dark:text-white text-sm font-bold border border-slate-300 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEye className="text-blue-500 text-sm" />
                View Resume
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/new_resume.pdf"
                download="Dinesh_Kumar_MB_Resume.pdf"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload className="text-xs text-white" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
