import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // Ping the backend to wake it up if it's sleeping (useful for Render free tier)
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://portfolio-backend-n0zk.onrender.com";
    axios.get(backendUrl).catch(() => {});
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Use the environment variable for the backend URL
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://portfolio-backend-n0zk.onrender.com";
      const response = await axios.post(
        `${backendUrl}/send`,
        formData,
        { timeout: 90000 }
      );

      if (response.data?.success) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send email. Try again later.");
      }
    } catch (err) {
      console.error("Contact form send error:", err);
      let errorMessage = "Something went wrong. Please try again.";
      if (err.code === "ECONNABORTED" || err.message?.includes("timeout")) {
        errorMessage = "Request timed out. The server may be waking up. Please try sending again in a few seconds.";
      } else if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-1/3 w-[350px] h-[350px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-pink-500/3 dark:bg-pink-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-650 dark:from-blue-400 dark:to-purple-400 rounded-full p-3 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-650 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text mb-2 text-center">
            Contact Me
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-center max-w-xl">
            Have a question, proposal, or just want to say hello? Fill out the form below and I’ll get back to you soon!
          </p>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row gap-12 mt-8 max-w-6xl">
          {/* Left Column: Availability & Links */}
          <motion.div 
            className="flex-1 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Availability Block */}
            <div className="bg-white/70 dark:bg-gray-900/30 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-2xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Available For
              </h3>
              <ul className="space-y-3 text-slate-650 dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Full-Stack Developer Roles</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">✔</span> MERN Stack Roles</li>
                <li className="flex items-center gap-2"><span className="text-cyan-500">✔</span> React Developer Roles</li>
                <li className="flex items-center gap-2"><span className="text-pink-500">✔</span> AI Application Development Roles</li>
              </ul>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/", color: "text-blue-600" },
                { icon: <FaGithub />, label: "GitHub", url: "https://github.com/dineshkumar-mb", color: "text-slate-800 dark:text-white" },
                { icon: <FaEnvelope />, label: "Email", url: "mailto:dineshkumarmannibrundha@gmail.com", color: "text-rose-500" },
                { icon: <FaFileAlt />, label: "Resume", url: "/new_resume.pdf", color: "text-amber-500" },
                { icon: <FaGlobe />, label: "Portfolio", url: "https://portfolio-five-chi-11.vercel.app/", color: "text-indigo-500" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${
                    idx === 4 ? "col-span-2" : ""
                  }`}
                >
                  <span className={`text-3xl mb-2 group-hover:scale-110 transition-transform ${link.color}`}>{link.icon}</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="flex-1 bg-white/70 dark:bg-gray-900/30 backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-2xl relative overflow-hidden group hover:border-purple-600/30 dark:hover:border-purple-500/30 transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                <span className="text-green-550 dark:text-green-400 text-3xl mb-4">✅</span>
                <p className="text-green-650 dark:text-green-400 text-center font-bold text-xl">Your message has been sent! 🎉</p>
                <p className="text-slate-500 dark:text-gray-400 mt-2 text-center">I will get back to you as soon as possible.</p>
                <button
                  className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition font-bold text-white shadow-lg"
                  onClick={() => setIsSent(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 text-slate-800 dark:text-white transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 placeholder:text-slate-400 dark:placeholder:text-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 text-slate-800 dark:text-white transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 placeholder:text-slate-400 dark:placeholder:text-gray-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 text-slate-800 dark:text-white transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20 placeholder:text-slate-400 dark:placeholder:text-gray-500 min-h-[160px]"
                  rows="5"
                ></textarea>
                {error && <p className="text-red-500 dark:text-red-400 text-center font-medium">{error}</p>}
                <motion.button
                  type="submit"
                  className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-white shadow-md dark:shadow-xl transition duration-300 flex items-center justify-center gap-2 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  disabled={loading}
                >
                  {loading && (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                  )}
                  {loading ? "Sending Message..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// import { motion } from "framer-motion";
// import { useState } from "react";
// import axios from "axios"; // Use Axios to send requests to the backend

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSent, setIsSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("https://portfolio-backend-n0zk.onrender.com/send", formData);
//       if (response.data.success) {
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
        
//         {/* Title */}
//         <motion.h2
//           className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Contact Me
//         </motion.h2>

//         {/* Contact Form */}
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
//               {/* Name */}
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition"
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition"
//               />

//               {/* Message */}
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 transition"
//                 rows="4"
//               ></textarea>

//               {/* Error Message */}
//               {error && <p className="text-red-400 text-center">{error}</p>}

//               {/* Submit Button */}
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
