import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa"; // Importing an icon

const Experience = () => {
  const experiences = [
    { role: "Frontend Developer", company: "Tech Corp", duration: "2022 - Present" },
    { role: "Web Developer", company: "Creative Agency", duration: "2020 - 2022" },
    { role: "Intern", company: "Startup X", duration: "2019 - 2020" },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-20">

        {/* Section Title with Scale Animation */}
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <motion.div 
          className="mt-10 max-w-3xl mx-auto border-l-4 border-blue-500"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 mb-8"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              {/* Animated Icon */}
              <motion.div
                className="absolute left-[-30px] top-2 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full"
                whileHover={{ scale: 1.2 }}
                animate={{ y: [0, -5, 0] }} // Bounce Effect
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaBriefcase />
              </motion.div>

              {/* Job Details */}
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} | {exp.duration}</p>
              <motion.div
                className="mt-2 w-full h-[2px] bg-gray-700"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
