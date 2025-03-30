import { motion } from "framer-motion";

const projects = [
  {
    title: "Zoomcar clone",
    tech: "React, Ant, Stripe,express js,node js , mongoDb ,Bootstrap vercel ,postman",
    image: "https://github.com/user-attachments/assets/dd5c4669-f7dc-483f-8f2a-af8e8d4b5b37",
    link: "https://capstonezoomcarclone-frnd.vercel.app/",
    description:
      "A sleek, responsive Zoomcar clone website showcasing projects, skills, and experience with Role based functionalities.",
  },
  {
    title: "Gemini 2.0 clone",
    tech: "React.js, Tailwind css",
    image: "https://github.com/user-attachments/assets/a578e8e6-cbad-4d8b-a0bd-25c0fc36e04c",
    link: "https://gemini-clone-jet-eight.vercel.app/",
    description:
      "A powerful conversational AI web application built with **ReactJS**, **Tailwind CSS**, and **Google Generative AI**. This project aims to replicate the sleek and intuitive experience of Google's Gemini AI, delivering smart, contextual responses in real-time",

  },
  {
    title: "Food ordering App",
    tech: "Node.js, MongoDB, Express ,stripe ,tailwind css",
    image: "https://github.com/user-attachments/assets/b36c6549-14ae-4361-96d5-9c96a3839081",
    link: "https://tomatofooddeleveryapp.netlify.app/",
    description:
      "This is a Food Delivery App built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to browse food-items, add food items to their cart, place orders, and track deliveries.",
  },
  {
    title: "shareprice tracker app",
    tech: "Node.js, MongoDB, Express ,tailwind css,reactjs",
    image: "https://github.com/user-attachments/assets/fbe0e3ba-1679-4029-93fd-d79c2ca3dd80",
    image: "https://github.com/user-attachments/assets/553b0eba-0d9c-4540-ae84-4d7657403e22",
    link: "https://sharepricetracker.netlify.app/",
    description:
      "This is a shareprice tracker app built using(Express, Node.js,mongoDB,reactjs) . It allows users to browseshare price accordingly.",
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
  className="mt-4 px-6 py-3 md:px-4 md:py-2 bg-blue-500 rounded-full text-white text-sm md:text-xs font-semibold shadow-md hover:bg-blue-600 transition duration-300"
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
