

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiVite
} from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub Profile",
    icon: <FaGithub aria-hidden="true" />,
    url: "https://github.com/dineshkumar-mb",
    hoverClass: "hover:bg-slate-700 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
  },
  {
    name: "LinkedIn Profile",
    icon: <FaLinkedin aria-hidden="true" />,
    url: "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/",
    hoverClass: "hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
  },
  {
    name: "Email Dinesh Kumar",
    icon: <FaEnvelope aria-hidden="true" />,
    url: "mailto:dineshkumarmannibrundha@gmail.com",
    hoverClass: "hover:bg-rose-600 hover:text-white hover:shadow-[0_0_20px_rgba(225,29,72,0.6)]"
  }
];

const Home = () => (
  <section
    id="home"
    className="relative min-h-screen pt-24 pb-12 flex items-center justify-center bg-transparent overflow-hidden"
  >
    {/* Background Ambient Glows */}
    <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
    <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[130px] -z-10 pointer-events-none" />

    {/* Floating Tech Badges around the Hero (Watermark style, responsive size, visible on all viewports) */}
    {/* Row 1: React, Redux, JS, Git */}
    <motion.div
      className="absolute top-[22%] left-[6%] md:left-[12%] text-4xl sm:text-5xl lg:text-6xl text-blue-500 dark:text-blue-400 opacity-15 md:opacity-30 pointer-events-none block"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 360],
      }}
      transition={{
        y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        rotate: { duration: 25, repeat: Infinity, ease: "linear" }
      }}
    >
      <FaReact />
    </motion.div>

    <motion.div
      className="absolute top-[15%] left-[45%] md:left-[35%] lg:left-[28%] text-3xl sm:text-4xl lg:text-5xl text-purple-650 dark:text-purple-500 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        y: [0, 10, 0],
        rotate: [0, 360],
      }}
      transition={{
        y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
      }}
    >
      <SiRedux />
    </motion.div>

    <motion.div
      className="absolute top-[15%] right-[45%] md:right-[35%] lg:right-[28%] text-3xl sm:text-4xl lg:text-5xl text-red-500 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        y: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        scale: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
    >
      <FaGitAlt />
    </motion.div>

    <motion.div
      className="absolute top-[22%] right-[6%] md:right-[12%] text-4xl sm:text-5xl lg:text-6xl text-yellow-600 dark:text-yellow-400 opacity-15 md:opacity-30 pointer-events-none block"
      animate={{
        y: [0, 15, 0],
        rotate: [0, -360],
      }}
      transition={{
        y: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        rotate: { duration: 22, repeat: Infinity, ease: "linear" }
      }}
    >
      <FaJsSquare />
    </motion.div>

    {/* Row 2: HTML5, CSS3 */}
    <motion.div
      className="absolute top-[42%] left-[4%] md:left-[8%] text-3xl sm:text-4xl lg:text-5xl text-orange-500 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        x: [0, 10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <FaHtml5 />
    </motion.div>

    <motion.div
      className="absolute top-[42%] right-[4%] md:right-[8%] text-3xl sm:text-4xl lg:text-5xl text-blue-500 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        x: [0, -10, 0],
        y: [0, 10, 0],
      }}
      transition={{
        duration: 5.2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <FaCss3Alt />
    </motion.div>

    {/* Row 3: Express, Vite */}
    <motion.div
      className="absolute top-[65%] left-[4%] md:left-[8%] text-3xl sm:text-4xl lg:text-5xl text-slate-500 dark:text-gray-400 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        y: [0, 12, 0],
        rotate: [0, -360],
      }}
      transition={{
        y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        rotate: { duration: 24, repeat: Infinity, ease: "linear" }
      }}
    >
      <SiExpress />
    </motion.div>

    <motion.div
      className="absolute top-[65%] right-[4%] md:right-[8%] text-3xl sm:text-4xl lg:text-5xl text-purple-650 dark:text-purple-400 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        y: [0, -12, 0],
        rotate: [0, 360],
      }}
      transition={{
        y: { duration: 5.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        rotate: { duration: 23, repeat: Infinity, ease: "linear" }
      }}
    >
      <SiVite />
    </motion.div>

    {/* Row 4: Node.js, MongoDB, Tailwind */}
    <motion.div
      className="absolute bottom-[15%] left-[6%] md:left-[12%] text-4xl sm:text-5xl lg:text-6xl text-green-600 dark:text-green-500 opacity-15 md:opacity-30 pointer-events-none block"
      animate={{
        y: [0, -12, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        scale: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
    >
      <FaNodeJs />
    </motion.div>

    <motion.div
      className="absolute bottom-[8%] left-[45%] md:left-[35%] lg:left-[28%] text-3xl sm:text-4xl lg:text-5xl text-emerald-600 dark:text-emerald-500 opacity-15 md:opacity-25 pointer-events-none block"
      animate={{
        y: [0, 15, 0],
        scale: [1, 0.95, 1],
      }}
      transition={{
        y: { duration: 5.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        scale: { duration: 5.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
    >
      <SiMongodb />
    </motion.div>

    <motion.div
      className="absolute bottom-[15%] right-[6%] md:right-[12%] text-4xl sm:text-5xl lg:text-6xl text-sky-500 dark:text-sky-400 opacity-15 md:opacity-30 pointer-events-none block"
      animate={{
        y: [0, 12, 0],
        scale: [1, 0.9, 1],
      }}
      transition={{
        y: { duration: 5.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        scale: { duration: 5.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
    >
      <SiTailwindcss />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-10 flex flex-col items-center px-4"
    >


      {/* Glassmorphic Card */}
      <motion.div
        className="relative bg-white/75 dark:bg-gray-900/40 hover:bg-white/90 dark:hover:bg-gray-900/50 backdrop-blur-xl border border-slate-200/70 dark:border-white/10 w-full max-w-3xl px-6 py-10 sm:px-10 md:py-12 rounded-3xl shadow-xl dark:shadow-2xl hover:border-slate-300 dark:hover:border-purple-400/40 flex flex-col items-center transition-all duration-500 group"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Soft backglow inside the card */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />

        {/* Availability Badge */}
        <div className="mb-6 relative z-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Open to Full Stack & AI Engineering Opportunities
          </span>
        </div>

        {/* Line 1: Name */}
        <motion.p
          className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest text-slate-500 dark:text-gray-400 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          DINESH KUMAR M B
        </motion.p>

        {/* Main Title: Full Stack Developer */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-center tracking-tight bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text leading-tight">
          Full Stack Developer
        </h1>

        {/* Technology line */}
        <p className="text-sm sm:text-base font-bold text-blue-600 dark:text-cyan-400 tracking-wide mb-4 text-center">
          React.js • TypeScript • Node.js • MERN • GenAI • RAG
        </p>

        {/* Value Proposition Description */}
        <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base md:text-lg text-center max-w-2xl leading-relaxed mb-8">
          Building scalable web applications, workflow automation platforms, SaaS products, and AI-powered systems with modern JavaScript technologies.
        </p>

        {/* Measurable Engineering Signals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mb-8 relative z-10">
          <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 sm:p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">
              4+
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-gray-400 tracking-tight">
              Years Experience
            </span>
          </div>

          <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 sm:p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
              15+
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-gray-400 tracking-tight">
              Projects Built
            </span>
          </div>

          <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 sm:p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 text-transparent bg-clip-text">
              50+
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-gray-400 tracking-tight">
              Internal Engineers
            </span>
          </div>

          <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 sm:p-4 text-center">
            <span className="block text-base sm:text-lg font-black bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 text-transparent bg-clip-text pt-1.5">
              React+Node+AI
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-gray-400 tracking-tight block mt-0.5">
              Core Focus
            </span>
          </div>
        </div>

        {/* CTA Buttons Hierarchy */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full mb-6">
          <motion.a
            href="#projects"
            className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-bold text-white text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-purple-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="/Dinesh-Resume-fsd.pdf"
            download="Dinesh-Resume-fsd.pdf"
            className="px-7 py-3.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-full font-bold text-sm sm:text-base shadow-md transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Download Resume</span>
            <span className="text-xs" aria-hidden="true">↓</span>
          </motion.a>

          <motion.a
            href="https://github.com/dineshkumar-mb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full font-bold text-slate-800 dark:text-white text-sm sm:text-base border border-slate-200 dark:border-white/10 transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="text-lg" aria-hidden="true" />
            <span>GitHub</span>
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 pt-2">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl text-slate-600 dark:text-gray-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full p-2.5 shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${item.hoverClass}`}
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Home;
