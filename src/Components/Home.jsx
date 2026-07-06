

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLaptopCode,
  FaLightbulb
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
    icon: <FaGithub />,
    url: "https://github.com/dineshkumar-mb",
    hoverClass: "hover:bg-slate-700 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/",
    hoverClass: "hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
  },
  {
    icon: <FaEnvelope />,
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
        className="relative bg-white/70 dark:bg-gray-900/30 hover:bg-white/90 dark:hover:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 w-full max-w-xl px-8 py-10 md:px-12 rounded-3xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(167,139,250,0.2)] hover:border-slate-300 dark:hover:border-purple-400/50 flex flex-col items-center transition-all duration-500 group"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Soft backglow inside the card */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-500 pointer-events-none" />

        {/* Typewriter Name Heading with Animated Underline */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text leading-tight">
          Hi, I'm{" "}
          <span className="block text-slate-800 dark:text-white drop-shadow-sm dark:drop-shadow-md font-black tracking-tight mt-1 h-[2.5rem] md:h-[3.2rem]">
            <Typewriter
              words={[
                "Dinesh Kumar M B",
                "Full-Stack MERN Developer",
                "AI Application Builder"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={105}
              deleteSpeed={70}
              delaySpeed={1200}
            />
          </span>
        </h1>
        <span className="block h-1 w-24 mt-8 mb-5 bg-gradient-to-r from-blue-550 via-purple-550 to-pink-550 dark:from-blue-400 dark:via-purple-500 dark:to-pink-400 rounded-full animate-pulse"></span>

        {/* Subtitle Badges & Metrics */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 relative z-10 w-full max-w-lg">
          {/* Availability Badge */}
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50/80 dark:bg-green-500/15 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/30 text-xs sm:text-sm font-bold tracking-wide shadow-sm w-full sm:w-auto justify-center mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Open to Full-Stack Opportunities
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 relative z-10 w-full">
          {[
            "3+ Years Experience",
            "10+ Projects Built",
            "MERN Stack Developer",
            "AI Application Builder"
          ].map((badge, i) => (
            <span key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 text-[11px] sm:text-xs font-semibold tracking-wide hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-300 cursor-default shadow-sm">
              {badge}
            </span>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 mb-8">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-white/5 rounded-full p-3.5 shadow-sm dark:shadow-md transition-all duration-300 hover:scale-115 hover:-translate-y-1 ${item.hoverClass}`}
              aria-label="social-link"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <motion.a
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-sm sm:text-base shadow-md dark:shadow-lg shadow-blue-500/10 dark:shadow-blue-500/20 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 border border-slate-200/20 dark:border-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="/new_resume.pdf"
            download="Dineshfullstackresume.pdf"
            className="px-6 sm:px-8 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-full font-bold text-slate-800 dark:text-white text-sm sm:text-base shadow-sm border border-slate-200 dark:border-white/15 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 rounded-full font-bold text-blue-600 dark:text-blue-400 text-sm sm:text-base border border-blue-600 dark:border-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Home;
