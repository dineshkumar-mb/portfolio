import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaGitAlt,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: FaLaptopCode,
    color: "from-blue-400 to-sky-400",
    themeClass: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      pillBg: "hover:bg-blue-500/10 hover:border-blue-500/30",
    },
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
    icon: FaServer,
    color: "from-emerald-400 to-teal-400",
    themeClass: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      pillBg: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
    },
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
    icon: FaDatabase,
    color: "from-amber-400 to-orange-400",
    themeClass: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      pillBg: "hover:bg-amber-500/10 hover:border-amber-500/30",
    },
    skills: [
      "MongoDB",
      "MySQL",
      "Mongoose",
    ],
  },
  {
    title: "AI & Automation",
    icon: FaBrain,
    color: "from-pink-400 to-rose-400",
    themeClass: {
      bg: "bg-pink-500/10",
      text: "text-pink-400",
      pillBg: "hover:bg-pink-500/10 hover:border-pink-500/30",
    },
    skills: [
      "AI Integrations",
      "Workflow Automation",
      "WhatsApp API",
      "Face API Integration",
    ],
  },
  {
    title: "Tools & Version Control",
    icon: FaGitAlt,
    color: "from-indigo-400 to-purple-400",
    themeClass: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      pillBg: "hover:bg-indigo-500/10 hover:border-indigo-500/30",
    },
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
    icon: FaRocket,
    color: "from-violet-400 to-fuchsia-400",
    themeClass: {
      bg: "bg-violet-500/10",
      text: "text-violet-400",
      pillBg: "hover:bg-violet-500/10 hover:border-violet-500/30",
    },
    skills: [
      "React Flow",
      "Diagram Builder",
      "HRMS Development",
      "Performance Optimization",
      "Responsive Design",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#080b11] text-white relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-[#aaa6c3] uppercase tracking-wider text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Abilities
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-white via-blue-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Core Expertise & Technologies
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        <motion.p
          className="text-[#aaa6c3] max-w-3xl mx-auto mb-12 text-center text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Building scalable web applications, workflow automation systems,
          AI-powered solutions, and modern user experiences.
        </motion.p>

        {/* Expertise Pills */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-16">
          {[
            "Full Stack Development",
            "AI Integrations",
            "Workflow Automation",
            "HRMS Solutions",
            "React Flow",
            "Fintech Applications",
          ].map((item, idx) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
              className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold cursor-default transition-all duration-300 shadow-sm"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: "rgba(59,130,246,0.4)" }}
              className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] group relative overflow-hidden"
            >
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-3 rounded-2xl ${category.themeClass.bg} ${category.themeClass.text} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm font-medium hover:text-white ${category.themeClass.pillBg} transition-all duration-300 cursor-default`}
                  >
                    <FaCheckCircle className={`${category.themeClass.text} text-xs flex-shrink-0`} />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
