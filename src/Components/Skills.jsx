
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "API Integration",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "Mongoose",
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "NPM",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "AI Integrations",
      "Workflow Automation",
      "WhatsApp API",
      "Prompt Engineering",
    ],
  },
  {
    title: "Specialized Development",
    skills: [
      "React Flow",
      "Diagram Builders",
      "HRMS Applications",
      "Face API Integration",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-5">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";

// const skills = [
//   "JavaScript",
//   "React.js",
//   "Node.js",
//   "CSS",
//   "Tailwind CSS",
//   "MongoDB",
//   "Git & GitHub",
//   "Bootstrap",
//   "mysql",
//   "Redux toolkit",
//   "Express.js",
//   "HTML5",
//   "Framer Motion",
//   "Gsap"
// ];

// const skillVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 20 },
//   visible: { opacity: 1, scale: 1, y: 0 }
// };

// const Skills = () => (
//   <section id="skills" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-center">
//     <motion.h2
//       className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       Skills
//     </motion.h2>
//     <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//       {skills.map((skill, index) => (
//         <motion.div
//           key={index}
//           variants={skillVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7, delay: index * 0.05 }}
//           className="flex flex-col items-center bg-gray-700 bg-opacity-90 rounded-xl p-4 shadow-lg hover:shadow-blue-600 transition duration-300 group"
//         >
//           <FaCheckCircle className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300" />
//           <span className="text-lg font-semibold text-white">{skill}</span>
//         </motion.div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;
