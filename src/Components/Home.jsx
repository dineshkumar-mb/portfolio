// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

// const Home = () => {
//   return (
//     <section id="home" className="h-screen flex items-center justify-center text-center bg-gray-900 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="flex flex-col items-center"
//       >
//         {/* Profile Image */}
//         <motion.img
//           src="/profile.jpeg"
//           alt="DineshKumar"
//           className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         />

//         {/* Title with Typewriter Effect */}
//         <h1 className="text-5xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//           Hi, I'm{" "}
//           <span className="text-white">
//             <Typewriter
//               words={["Dinesh Kumar M B", "a Developer", "a Coder", "a Tech Enthusiast"]}
//               loop={0} // Infinite loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={100}
//               deleteSpeed={60}
//               delaySpeed={1200}
//             />
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg text-gray-400 mt-2">
//           Full-Stack Developer | React developer| Tech Enthusiast
//         </p>

//         {/* Contact Button */}
//         <motion.a
//           href="#contact"
//           className="mt-6 px-6 py-2 bg-blue-500 rounded-full text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Contact Me
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;


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
    className="relative h-screen flex items-center justify-center bg-transparent overflow-hidden"
  >
    {/* Background Ambient Glows */}
    <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
    <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[130px] -z-10 pointer-events-none" />

    {/* Floating Tech Badges around the Hero (Watermark style, responsive size, visible on all viewports) */}
    {/* Row 1: React, Redux, JS, Git */}
    <motion.div
      className="absolute top-[15%] left-[6%] md:left-[12%] text-4xl sm:text-5xl lg:text-6xl text-blue-500 dark:text-blue-400 opacity-15 md:opacity-30 pointer-events-none block"
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
      className="absolute top-[8%] left-[45%] md:left-[35%] lg:left-[28%] text-3xl sm:text-4xl lg:text-5xl text-purple-650 dark:text-purple-500 opacity-15 md:opacity-25 pointer-events-none block"
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
      className="absolute top-[8%] right-[45%] md:right-[35%] lg:right-[28%] text-3xl sm:text-4xl lg:text-5xl text-red-500 opacity-15 md:opacity-25 pointer-events-none block"
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
      className="absolute top-[15%] right-[6%] md:right-[12%] text-4xl sm:text-5xl lg:text-6xl text-yellow-600 dark:text-yellow-400 opacity-15 md:opacity-30 pointer-events-none block"
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
        className="relative bg-white/70 dark:bg-gray-900/30 backdrop-blur-md border border-slate-200/50 dark:border-white/10 w-full max-w-xl px-8 py-10 md:px-12 rounded-3xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:border-slate-300 dark:hover:border-purple-500/30 flex flex-col items-center transition-all duration-500 group"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Soft backglow inside the card */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

        {/* Typewriter Name Heading with Animated Underline */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text leading-tight">
          Hi, I'm{" "}
          <span className="block text-slate-800 dark:text-white drop-shadow-sm dark:drop-shadow-md font-black tracking-tight mt-1 h-[2.5rem] md:h-[3.2rem]">
            <Typewriter
              words={[
                "Dinesh Kumar M B",
                "a Developer",
                "a Coder",
                "a Tech Enthusiast"
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
        <span className="block h-1 w-24 mt-4 mb-7 bg-gradient-to-r from-blue-550 via-purple-550 to-pink-550 dark:from-blue-400 dark:via-purple-500 dark:to-pink-400 rounded-full animate-pulse"></span>

        {/* Subtitle Badges */}
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3 mb-8 relative z-10 w-full">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/70 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide hover:bg-blue-100/50 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-400/50 transition-all duration-300 cursor-default shadow-sm group/badge whitespace-nowrap">
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <FaLaptopCode className="text-blue-550 dark:text-blue-400 text-sm group-hover/badge:scale-110 transition-transform duration-300" />
            </motion.span>
            Full-Stack Developer
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50/70 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-500/20 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide hover:bg-cyan-100/50 dark:hover:bg-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-400/50 transition-all duration-300 cursor-default shadow-sm group/badge whitespace-nowrap">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <FaReact className="text-cyan-550 dark:text-cyan-400 text-sm group-hover/badge:scale-110 transition-transform duration-300" />
            </motion.span>
            React Specialist
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50/70 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide hover:bg-purple-100/50 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-400/50 transition-all duration-300 cursor-default shadow-sm group/badge whitespace-nowrap">
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <FaLightbulb className="text-purple-550 dark:text-purple-400 text-sm group-hover/badge:scale-110 transition-transform duration-300" />
            </motion.span>
            UI Innovator
          </span>
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

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="mt-2 px-10 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-lg shadow-md dark:shadow-lg shadow-blue-500/10 dark:shadow-blue-500/20 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 border border-slate-200/20 dark:border-white/10 hover:scale-105 hover:border-slate-300/40 dark:hover:border-white/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Home;
