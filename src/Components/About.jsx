import { motion } from "framer-motion";
import Image from "../assets/image.jpg"; // Ensure the path is correct

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-20">
        
        {/* Left - Avatar Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Image}
            alt="Developer Working on Laptop"
            width={320}
            height={320}
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="mt-4 text-gray-300 max-w-lg">
            I'm a passionate developer specializing in front-end technologies. I love creating modern and responsive websites with sleek designs and interactive experiences.
          </p>

          {/* Resume Download Button */}
          <motion.a
            href="/resumeone.pdf" // Public folder path
            download="Dineshfullstackresume.pdf"
            className="mt-6 inline-block px-6 py-2 bg-blue-500 rounded-full text-white text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
