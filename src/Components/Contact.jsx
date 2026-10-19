import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ping the backend to wake it up if it's sleeping (useful for Render free tier)
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://portfolio-backend-n0zk.onrender.com";
    axios.get(backendUrl).catch(() => {});
  }, []);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please provide your name";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please provide your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
    }
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check - bot trapped
    if (formData.honeypot) {
      setIsSent(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://portfolio-backend-n0zk.onrender.com";
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };

      const response = await axios.post(
        `${backendUrl}/send`,
        payload,
        { timeout: 90000 }
      );

      if (response.data?.success) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "", honeypot: "" });
        setFieldErrors({});
      } else {
        setError(response.data?.message || "Failed to send message. Please try sending a direct email.");
      }
    } catch (err) {
      console.error("Contact form send error:", err);
      let errorMessage = "Something went wrong sending your message. Please reach out directly via email.";
      if (err.code === "ECONNABORTED" || err.message?.includes("timeout")) {
        errorMessage = "Server wakeup timed out. Please click 'Email Me' above or try again in a few seconds.";
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
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 flex flex-col items-center relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <FaPaperPlane className="text-xs" /> Recruiter & Engineering Inquiries
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 text-transparent bg-clip-text mb-3">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Interested in discussing full-stack engineering, system architecture, or full-time opportunities? I’d love to connect.
          </p>
        </motion.div>

        {/* Priority Direct Email CTA Bar (Item 34) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-500/15 dark:via-purple-500/15 dark:to-indigo-500/15 border border-blue-500/20 dark:border-blue-400/30 rounded-2xl p-6 md:p-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md backdrop-blur-md"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Have a role that matches my background? Let's connect.
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm mt-1">
              Direct inbox response within 24 hours &bull; Chennai, India (Open to Remote & Relocation)
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href="mailto:dineshkumarmannibrundha@gmail.com"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <FaEnvelope /> Email Me Directly
            </a>
            <a
              href="/DineshKumar-FSD-Resume.pdf"
              download="DineshKumar-FSD-Resume.pdf"
              className="px-6 py-3 rounded-full bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold text-sm border border-slate-300 dark:border-white/20 transition-all flex items-center gap-2"
            >
              <FaFileAlt className="text-blue-500 dark:text-blue-400" /> Resume
            </a>
          </div>
        </motion.div>

        {/* Content Columns: Availability & Form */}
        <div className="w-full flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Open to Opportunities & Quick Socials (Item 33 & 37) */}
          <motion.div 
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Open To Block - Matches LinkedIn Positioning */}
            <div className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  Open To
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                  Full-Time & Contract
                </span>
              </div>
              
              <ul className="space-y-3 text-slate-700 dark:text-gray-200 text-sm font-medium">
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5">
                  <span className="text-blue-500 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">Full Stack Developer</span>
                    <p className="text-xs text-slate-500 dark:text-gray-400">React.js, Node.js, TypeScript, REST API, System Architecture</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5">
                  <span className="text-purple-500 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">React + Node.js</span>
                    <p className="text-xs text-slate-500 dark:text-gray-400">Complex State, Redux Toolkit, Express.js, Microservices</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5">
                  <span className="text-indigo-500 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">MERN Developer</span>
                    <p className="text-xs text-slate-500 dark:text-gray-400">MongoDB, Redis, BullMQ, Authentication & RBAC</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5">
                  <span className="text-cyan-500 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">AI Full Stack Engineer</span>
                    <p className="text-xs text-slate-500 dark:text-gray-400">RAG, Gemini, LangChain, Vector Databases, Multi-Agent Systems</p>
                  </div>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <FaMapMarkerAlt className="text-rose-500" /> Chennai, India
                </span>
                <span>Notice: Available Immediately</span>
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { 
                  icon: <FaLinkedin />, 
                  label: "LinkedIn Profile", 
                  detail: "dinesh-kumar-mannibrundha", 
                  url: "https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/", 
                  color: "text-blue-600 dark:text-blue-400" 
                },
                { 
                  icon: <FaGithub />, 
                  label: "GitHub Repositories", 
                  detail: "dineshkumar-mb", 
                  url: "https://github.com/dineshkumar-mb", 
                  color: "text-slate-900 dark:text-white" 
                },
                { 
                  icon: <FaEnvelope />, 
                  label: "Primary Email", 
                  detail: "dineshkumarmannibrundha@gmail.com", 
                  url: "mailto:dineshkumarmannibrundha@gmail.com", 
                  color: "text-rose-500" 
                },
                { 
                  icon: <FaFileAlt />, 
                  label: "Resume (PDF)", 
                  detail: "Latest 2026 Edition", 
                  url: "/DineshKumar-FSD-Resume.pdf", 
                  download: "DineshKumar-FSD-Resume.pdf",
                  color: "text-amber-500" 
                }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  download={link.download}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col p-4 bg-white/60 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl border border-slate-200/70 dark:border-white/10 shadow-sm hover:shadow-md hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={`text-xl ${link.color} group-hover:scale-110 transition-transform`}>{link.icon}</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-white">{link.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-gray-400 truncate">{link.detail}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form (Item 35) */}
          <motion.div
            className="flex-1 bg-white/70 dark:bg-gray-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center p-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center text-3xl mb-4 shadow-inner">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm max-w-sm mb-6 leading-relaxed">
                  Message sent successfully. I'll get back to you soon.
                </p>
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-md hover:opacity-90 transition"
                  onClick={() => setIsSent(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                    Feel free to reach out regarding interviews, opportunities, or technical inquiries.
                  </p>
                </div>

                {/* Honeypot field (hidden from real users, traps automated bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border ${
                      fieldErrors.name ? "border-rose-500 focus-visible:ring-rose-500/40" : "border-slate-200 dark:border-white/10 focus-visible:ring-blue-500/40"
                    } focus-visible:outline-none focus-visible:ring-2 text-slate-900 dark:text-white transition placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm`}
                  />
                  {fieldErrors.name && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border ${
                      fieldErrors.email ? "border-rose-500 focus-visible:ring-rose-500/40" : "border-slate-200 dark:border-white/10 focus-visible:ring-blue-500/40"
                    } focus-visible:outline-none focus-visible:ring-2 text-slate-900 dark:text-white transition placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm`}
                  />
                  {fieldErrors.email && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    placeholder="Tell me about the role, technical requirements, or project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border ${
                      fieldErrors.message ? "border-rose-500 focus-visible:ring-rose-500/40" : "border-slate-200 dark:border-white/10 focus-visible:ring-blue-500/40"
                    } focus-visible:outline-none focus-visible:ring-2 text-slate-900 dark:text-white transition placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm resize-none`}
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">{fieldErrors.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium text-center" role="alert">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm text-white shadow-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                    loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  }`}
                >
                  {loading && (
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {loading ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
