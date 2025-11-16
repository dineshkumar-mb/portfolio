
// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const VISME_DIV_HTML = `<div class="visme_d" data-title="Event Contact Form" data-url="x9mqw9dy-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="155192"></div>`;
// const VISME_SCRIPT_SRC = "https://static-bundles.visme.co/forms/vismeforms-embed.js";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSent, setIsSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // control whether to show the Visme embed or the local form (change as needed)
//   const [showVismeEmbed] = useState(true);

//   const vismeContainerRef = useRef(null);
//   const vismeScriptRef = useRef(null);

//   useEffect(() => {
//     if (!showVismeEmbed) return;

//     // If we've already injected the script, don't re-inject
//     if (!vismeContainerRef.current) return;

//     // Insert the Visme div (only once)
//     const container = vismeContainerRef.current;
//     container.innerHTML = VISME_DIV_HTML;

//     // If the script already exists globally, Visme might auto-init; try to append anyway
//     if (!document.querySelector(`script[src="${VISME_SCRIPT_SRC}"]`)) {
//       const script = document.createElement("script");
//       script.src = VISME_SCRIPT_SRC;
//       script.async = true;
//       // keep a ref so we can remove it on cleanup if we added it
//       vismeScriptRef.current = script;
//       document.body.appendChild(script);
//     } else {
//       // If script already present, you may want to re-initialize Visme if needed.
//       // Many embeds auto-run on script load; if not, check Visme docs for re-init.
//     }

//     // Cleanup: remove injected HTML & script we added on unmount
//     return () => {
//       if (container) container.innerHTML = "";
//       if (vismeScriptRef.current) {
//         document.body.removeChild(vismeScriptRef.current);
//         vismeScriptRef.current = null;
//       }
//     };
//   }, [showVismeEmbed]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("https://portfolio-backend-n0zk.onrender.com/send", formData);
//       if (response.data?.success) {
//         setIsSent(true);
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setError("Failed to send email. Try again later.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900 text-white">
//       <div className="container mx-auto px-6 md:px-20 flex flex-col items-center">
//         <motion.h2
//           className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Contact Me
//         </motion.h2>

//         {/* VISME EMBED (if enabled) */}
//         {showVismeEmbed && (
//           <div
//             ref={vismeContainerRef}
//             className="w-full mt-8 max-w-3xl"
//             aria-hidden={false}
//           />
//         )}

//         {/* If you want Visme only, you can return early or hide the fallback form */}
//         {/* Fallback / Local Contact Form */}
//         <motion.div
//           className="mt-10 bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           {isSent ? (
//             <p className="text-green-400 text-center">Your message has been sent! 🎉</p>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition"
//                 rows="4"
//               ></textarea>

//               {error && <p className="text-red-400 text-center">{error}</p>}

//               <motion.button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </motion.button>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


 {/* Animated Icon */}
              {/* <motion.div
                className="absolute left-[-30px] top-2 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full"
                whileHover={{ scale: 1.2 }}
                animate={{ y: [0, -5, 0] }} // Bounce Effect
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaBriefcase />
              </motion.div> */}
{/* <motion.div
  className="absolute left-0 top-5 -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full"
  whileHover={{ scale: 1.2 }}
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
>
  <FaBriefcase />
</motion.div> */}

// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Zoomcarclone",
//     tech: "React, Ant, Stripe,express js,node js , mongoDb ,Bootstrap vercel ,postman",
//     image: "https://github.com/user-attachments/assets/dd5c4669-f7dc-483f-8f2a-af8e8d4b5b37",
//     link: "https://capstonezoomcarclone-frnd.vercel.app/",
//     description:
//       "A sleek,responsive Zoomcar clone website showcasing projects,skills,and experience with Rolebased-functionalities.",
//   },
//   {
//     title: "Gemini 2.0 clone",
//     tech: "React.js, Tailwind css",
//     image: "https://github.com/user-attachments/assets/a578e8e6-cbad-4d8b-a0bd-25c0fc36e04c",
//     link: "https://gemini-clone-jet-eight.vercel.app/",
//     description:
//       "A powerful conversational AI web application built with **ReactJS**, **Tailwind CSS**, and **Google Generative AI**. This project aims to replicate the sleek and intuitive experience of Google's Gemini AI, delivering smart, contextual responses in real-time",

//   },
//   {
//     title: "Food ordering App",
//     tech: "Node.js, MongoDB, Express ,stripe ,tailwind css",
//     image: "https://github.com/user-attachments/assets/b36c6549-14ae-4361-96d5-9c96a3839081",
//     link: "https://tomatofooddeleveryapp.netlify.app/",
//     description:
//       "This is a Food Delivery App built using the MERN(MongoDB, Express, React, Node.js)stack.It allows users to browse food-items,add food items to their cart,place orders,and track-orders.",
//   },
//   {
//     title: "shareprice tracker app",
//     tech: "Node.js, MongoDB, Express ,tailwind css,reactjs",
//     image: "https://github.com/user-attachments/assets/fbe0e3ba-1679-4029-93fd-d79c2ca3dd80",
//     image: "https://github.com/user-attachments/assets/553b0eba-0d9c-4540-ae84-4d7657403e22",
//     link: "https://sharepricetracker.netlify.app/",
//     description:
//       "This is a shareprice tracker app built using(Express, Node.js,mongoDB,reactjs).It allows users to browseshare price intraday,daily,weekly,monthly.",
//   },
//   {
//     title: "Code Reviewer app",
//     tech: "Node.js,Express js ,css,reactjs",
//     image: "https://github.com/user-attachments/assets/fc2f026f-deae-45c6-8313-e9671c790168",
//     link: "https://codereviewer2.netlify.app/",
//     description:
//       "This is a code reviewer app built using(Express, Node.js,google gemini-Api,reactjs).It allows users to review their code.",
//   },
// ];

// const Project = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-900 text-white">
//       <div className="container mx-auto px-6 md:px-20">
        
//         {/* Section Title with Animation */}
//         <motion.h2
//           className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         >
//           Projects
//         </motion.h2>

//         {/* Project Grid with Staggered Reveal */}
//         <motion.div
//           className="mt-10 grid md:grid-cols-3 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
//           }}
//         >
//           {projects.map((proj, index) => (
//             <motion.div
//               key={index}
//               className="relative group block overflow-hidden rounded-lg shadow-lg cursor-pointer"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//               }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {/* Project Image */}
//               <motion.img
//                 src={proj.image}
//                 alt={proj.title}
//                 className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-300"
//                 whileHover={{ scale: 1.1 }}
//               />

//               {/* Project Overlay with Description */}
//               <motion.div
//                 className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-6 transition duration-300"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1, transition: { duration: 0.6, delay: index * 0.2 } }}
//               >
//                 <h3 className="text-xl font-bold">{proj.title}</h3>
//                 <p className="text-gray-300 mt-2">{proj.tech}</p>
//                 <p className="text-gray-400 mt-2 text-sm">{proj.description}</p>

//                 {/* Live Demo Button */}
//                 <a
//   href={proj.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="mt-4 px-6 py-3 md:px-4 md:py-2 bg-blue-500 rounded-full text-white text-sm md:text-xs font-semibold shadow-md hover:bg-blue-600 transition duration-300"
// >
//   Live Demo
// </a>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Project;
