import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, Tailwind CSS",
    image: "https://source.unsplash.com/400x300/?technology,laptop",
    link: "https://yourportfolio.com",
    description:
      "A sleek, responsive portfolio website showcasing projects, skills, and experience with interactive animations.",
  },
  {
    title: "E-commerce App",
    tech: "Next.js, Firebase",
    image: "https://source.unsplash.com/400x300/?shopping,ecommerce",
    link: "https://yourstore.com",
    description:
      "A modern e-commerce platform with real-time database, authentication, and secure checkout system.",
  },
  {
    title: "Blog Platform",
    tech: "Node.js, MongoDB, Express",
    image: "https://source.unsplash.com/400x300/?blog,writing",
    link: "https://yourblog.com",
    description:
      "A full-stack blog platform allowing users to write, edit, and share articles with rich text support.",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-20">
        
        {/* Section Title with Animation */}
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Projects
        </motion.h2>

        {/* Project Grid with Staggered Reveal */}
        <motion.div
          className="mt-10 grid md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="relative group block overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Project Image */}
              <motion.img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.1 }}
              />

              {/* Project Overlay with Description */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-6 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6, delay: index * 0.2 } }}
              >
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="text-gray-300 mt-2">{proj.tech}</p>
                <p className="text-gray-400 mt-2 text-sm">{proj.description}</p>

                {/* Live Demo Button */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-blue-500 rounded-full text-white text-sm font-semibold shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Live Demo
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Project;
