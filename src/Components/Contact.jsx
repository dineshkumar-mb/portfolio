import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        { timeout: 10000 }
      );

      if (response.data?.success) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send email. Try again later.");
      }
    } catch (err) {
      console.error("Contact form send error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 md:px-20 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-3 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2 text-center">
            Contact Me
          </h2>
          <p className="text-gray-400 text-center max-w-xl">
            Have a question, proposal, or just want to say hello? Fill out the form below and I’ll get back to you soon!
          </p>
        </motion.div>

        <motion.div
          className="mt-4 bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isSent ? (
            <div className="flex flex-col items-center">
              <span className="text-green-400 text-2xl mb-3">✅</span>
              <p className="text-green-400 text-center">Your message has been sent! 🎉</p>
              <button
                className="mt-6 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
                onClick={() => setIsSent(false)}
              >
                Send Another
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
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white transition"
                rows="5"
              ></textarea>
              {error && <p className="text-red-400 text-center">{error}</p>}
              <motion.button
                type="submit"
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-white shadow-xl transition duration-300 flex items-center justify-center gap-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.96 }}
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
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
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
