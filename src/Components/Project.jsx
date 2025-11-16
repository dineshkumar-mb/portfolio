



import { motion } from "framer-motion";

const projects = [
  {
    title: "Zoomcarclone",
    tech: "React, Ant, Stripe,express js,node js , mongoDb ,Bootstrap vercel ,postman",
    image: "https://github.com/user-attachments/assets/dd5c4669-f7dc-483f-8f2a-af8e8d4b5b37",
    link: "https://capstonezoomcarclone-frnd.vercel.app/",
    description:
      "A sleek, responsive Zoomcar clone website showcasing projects, skills, and experience with Role-based functionalities.",
  },
  {
    title: "Gemini 2.0 clone",
    tech: "React.js, Tailwind css",
    image: "https://github.com/user-attachments/assets/a578e8e6-cbad-4d8b-a0bd-25c0fc36e04c",
    link: "https://gemini-clone-jet-eight.vercel.app/",
    description:
      "A powerful conversational AI web application built with ReactJS, Tailwind CSS, and Google Generative AI. This project aims to replicate the sleek and intuitive experience of Google's Gemini AI, delivering smart, contextual responses in real-time.",
  },
  {
    title: "Food ordering App",
    tech: "Node.js, MongoDB, Express ,stripe ,tailwind css",
    image: "https://github.com/user-attachments/assets/b36c6549-14ae-4361-96d5-9c96a3839081",
    link: "https://tomatofooddeleveryapp.netlify.app/",
    description:
      "This is a Food Delivery App built using the MERN(MongoDB, Express, React, Node.js)stack. It allows users to browse food items, add food items to their cart, place orders, and track orders.",
  },
  {
    title: "shareprice tracker app",
    tech: "Node.js, MongoDB, Express ,tailwind css,reactjs",
    image: "https://github.com/user-attachments/assets/553b0eba-0d9c-4540-ae84-4d7657403e22",
    link: "https://sharepricetracker.netlify.app/",
    description:
      "This is a shareprice tracker app built using Express, Node.js, mongoDB, reactjs. It allows users to browse share price intraday, daily, weekly, monthly.",
  },
  {
    title: "Code Reviewer app",
    tech: "Node.js,Express js ,css,reactjs",
    image: "https://github.com/user-attachments/assets/fc2f026f-deae-45c6-8313-e9671c790168",
    link: "https://codereviewer2.netlify.app/",
    description:
      "This is a code reviewer app built using Express, Node.js, google gemini-Api, reactjs. It allows users to review their code.",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-20">
        <motion.h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl shadow-2xl backdrop-blur-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:shadow-blue-600 overflow-hidden transition-all duration-700"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 40px -8px #3b82f6" }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <motion.img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-cover transition group-hover:scale-105 duration-500"
                whileHover={{ scale: 1.08 }}
              />
              {/* Overlay: Only visible on hover, Button centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center
                bg-black bg-opacity-85 text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg mb-2">{proj.title}</h3>
                <p className="text-blue-300 font-medium mb-4">{proj.tech}</p>
                {/* Live Demo Button Centered Vertically */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-full font-bold text-white shadow-xl transition-all duration-300"
                >
                  Live Demo
                </a>
                <p className="text-gray-200 font-light text-base">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
