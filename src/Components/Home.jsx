import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.img
          src="/profile.jpeg"
          alt="DineshKumar"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Title with Typewriter Effect */}
        <h1 className="text-5xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Hi, I'm{" "}
          <span className="text-white">
            <Typewriter
              words={["Dinesh Kumar M B", "a Developer", "a Coder", "a Tech Enthusiast"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 mt-2">
          Full-Stack Developer | React developer| Tech Enthusiast
        </p>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="mt-6 px-6 py-2 bg-blue-500 rounded-full text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;