
  

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "Git & GitHub",
  "Bootstrap",
  "mysql",
  "Redux toolkit",
  "Express.js",
  "HTML5",
  "Framer Motion",
  "Gsap"
];

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const Skills = () => (
  <section id="skills" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-center">
    <motion.h2
      className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Skills
    </motion.h2>
    <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={skillVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: index * 0.05 }}
          className="flex flex-col items-center bg-gray-700 bg-opacity-90 rounded-xl p-4 shadow-lg hover:shadow-blue-600 transition duration-300 group"
        >
          <FaCheckCircle className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-lg font-semibold text-white">{skill}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
