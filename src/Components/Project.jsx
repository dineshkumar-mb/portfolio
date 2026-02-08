



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
  {
    title: "AI Mock-interview app",
    tech: "Node.js, Express js, Tailwind CSS, ReactJS, Google Gemini API, Stripe, Clerk",
    image: "/ai_mock_interview.png",
    link: "https://ai-mock-interview-app-f.vercel.app/",
    description:
      "A comprehensive AI-driven mock interview platform that provides real-time feedback and role-specific questions to help users sharpen their interview skills.",
  },
  {
    title: "HRMS Application",
    tech: "React, Node.js, MongoDB, Face API, Google Auth",
    image: "https://github.com/dineshkumar-mb/portfolio/commit/ebb75e45fa1a4d552ffa590349b8eb05337b159d",
    link: "https://hrms-ecru-three.vercel.app/",
    description:
      "A smart HRMS application featuring face recognition for attendance, secure Google Authentication, and employee management capabilities using Face API.",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 bg-[#050816] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative">
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-[#aaa6c3] uppercase tracking-wider text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My work
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-white via-blue-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Projects.
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
              }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/40 backdrop-blur-md border border-white/10 p-5 rounded-3xl flex flex-col h-full group transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
            >
              {/* Image Container with Floating Link */}
              <div className="relative w-full h-[230px] overflow-hidden rounded-2xl mb-6">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex justify-end m-3">
                  <motion.button
                    onClick={() => window.open(proj.link, "_blank")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/60 backdrop-blur-sm border border-white/20 hover:bg-blue-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-[24px] mb-2 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-[#aaa6c3] text-[15px] leading-relaxed line-clamp-3 mb-4">{proj.description}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {proj.tech.split(",").map((t, i) => (
                  <span
                    key={i}
                    className={`text-[14px] font-medium ${i % 3 === 0 ? "text-blue-400" : i % 3 === 1 ? "text-purple-400" : "text-pink-400"
                      }`}
                  >
                    #{t.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
