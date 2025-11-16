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
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/dineshkumar-mb" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/" },
  { icon: <FaEnvelope />, url: "dineshkumarmannibrundha@gmail.com" }
];

const Home = () => (
  <section
    id="home"
    className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#292752] via-gray-900 to-[#292752] overflow-hidden"
  >
    <motion.div
      className="pointer-events-none absolute -top-[12vw] -left-[8vw] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 opacity-30 blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
    <motion.div
      className="pointer-events-none absolute bottom-[-10vw] right-[-8vw] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-indigo-300 via-blue-400 to-purple-500 opacity-20 blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.4 }}
    />

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="z-10 flex flex-col items-center"
    >
      {/* Floating Profile Image */}
      <motion.div
        className="p-[7px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 rounded-full shadow-2xl mb-7"
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 70 }}
        whileHover={{ scale: 1.06, rotate: [0, 3, -3, 0] }}
      >
        <motion.img
          src="/profile.jpeg"
          alt="DineshKumar"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-900 shadow-2xl"
        />
      </motion.div>

      {/* Glassmorphic Card */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-md w-full max-w-xl px-10 py-10 rounded-3xl border border-blue-400/20 shadow-2xl flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* Typewriter Name Heading with Animated Underline */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Hi, I'm{" "}
          <span className="block text-white drop-shadow-md">
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
        <span className="block h-1 w-24 mt-2 mb-7 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full animate-pulse"></span>

        {/* Subtitle */}
        <p className="text-lg text-blue-200 font-medium mb-4">
          Full-Stack Developer &bull; React Specialist &bull; UI Innovator
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-5 mb-7">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-400 hover:text-pink-400 bg-gray-800 rounded-full p-3 shadow hover:scale-110 transition-all"
              aria-label="social-link"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-lg shadow-lg ring-2 ring-blue-300/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Home;

