

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Full Stack Development",
    size: "large",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "AI & Automation",
    size: "medium",
    skills: [
      "AI Integrations",
      "Workflow Automation",
      "WhatsApp API",
      "Prompt Engineering",
    ],
  },
  {
    title: "Frontend Development",
    size: "medium",
    skills: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Router",
    ],
  },
  {
    title: "Database",
    size: "small",
    skills: [
      "MongoDB",
      "MySQL",
      "Mongoose",
    ],
  },
  {
    title: "Tools & DevOps",
    size: "small",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "NPM",
    ],
  },
  {
    title: "Specialized Development",
    size: "large",
    skills: [
      "React Flow",
      "Diagram Builder",
      "HRMS",
      "Face API",
      "Performance Optimization",
      "Responsive Design",
    ],
  },
];

const getCardSize = (size) => {
  switch (size) {
    case "large":
      return "col-span-12 md:col-span-8";
    case "medium":
      return "col-span-12 md:col-span-6";
    case "small":
      return "col-span-12 md:col-span-4";
    default:
      return "col-span-12 md:col-span-6";
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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
      className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core Expertise & Technologies
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Building scalable web applications, workflow automation
            platforms, AI-powered solutions, and modern user experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`
                ${getCardSize(category.size)}
                group
                rounded-3xl
                border
                border-slate-700
                bg-slate-900/70
                backdrop-blur-md
                p-6
                hover:border-blue-500/60
                hover:-translate-y-1
                transition-all
                duration-300
              `}
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold mb-5 text-blue-400">
                {category.title}
              </h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-blue-300
                      cursor-default
                      transition-all
                      duration-300
                      hover:bg-blue-500/20
                      hover:border-blue-400
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            "MERN Stack",
            "AI Solutions",
            "Workflow Automation",
            "HRMS Development",
            "React Flow",
            "Fintech Applications",
          ].map((item) => (
            <span
              key={item}
              className="
                px-5
                py-2
                rounded-full
                bg-gradient-to-r
                from-blue-500/20
                to-purple-500/20
                border
                border-blue-500/30
                text-sm
                text-gray-200
              "
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";

// const skillCategories = [
//   {
//     title: "Frontend Development",
//     skills: [
//       "React.js",
//       "JavaScript",
//       "Redux Toolkit",
//       "React Router",
//       "Tailwind CSS",
//       "Framer Motion",
//       "GSAP",
//       "HTML5",
//       "CSS3",
//     ],
//   },
//   {
//     title: "Backend Development",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Authentication",
//       "Role-Based Access Control",
//       "API Integration",
//     ],
//   },
//   {
//     title: "Database",
//     skills: [
//       "MongoDB",
//       "MySQL",
//       "Mongoose",
//     ],
//   },
//   {
//     title: "Tools & Version Control",
//     skills: [
//       "Git",
//       "GitHub",
//       "Postman",
//       "Vite",
//       "NPM",
//     ],
//   },
//   {
//     title: "AI & Automation",
//     skills: [
//       "AI Integrations",
//       "Workflow Automation",
//       "WhatsApp API",
//       "Prompt Engineering",
//     ],
//   },
//   {
//     title: "Specialized Development",
//     skills: [
//       "React Flow",
//       "Diagram Builders",
//       "HRMS Applications",
//       "Face API Integration",
//       "Responsive Design",
//       "Performance Optimization",
//     ],
//   },
// ];

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
//         >
//           Technical Skills
//         </motion.h2>

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//               }}
//               className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
//             >
//               <h3 className="text-xl font-bold text-blue-400 mb-5">
//                 {category.title}
//               </h3>

//               <div className="space-y-3">
//                 {category.skills.map((skill, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-3 text-gray-200"
//                   >
//                     <FaCheckCircle className="text-green-400 flex-shrink-0" />
//                     <span>{skill}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

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
