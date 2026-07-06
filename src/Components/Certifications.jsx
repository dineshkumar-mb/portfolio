import { motion } from "framer-motion";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Anthropic Academy Certifications",
      year: "2026",
      issuer: "Anthropic",
      link: "#",
      topics: [
        { name: "Model Context Protocol: Advanced Topics", link: "https://verify.skilljar.com/c/gumbuyac4j6k" },
        { name: "Introduction to Model Context Protocol", link: "https://verify.skilljar.com/c/pti3qzqdh5ro" },
        { name: "Introduction to Agent Skills", link: "https://verify.skilljar.com/c/kxz8ub5fjiqp" },
        { name: "AI Fluency Framework & Foundations", link: "https://verify.skilljar.com/c/gxmwzaofbhk9" },
        { name: "Claude Platform 101", link: "https://verify.skilljar.com/c/wa6r26veeq8h" },
        { name: "Claude Code in Action", link: "https://verify.skilljar.com/c/kei5y6m8xuws" },
        { name: "Claude Code 101", link: "https://verify.skilljar.com/c/mqngonj3o3fi" }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Achievements
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-slate-900 via-amber-600 to-orange-600 dark:from-white dark:via-amber-400 dark:to-orange-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Certifications
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-gray-900/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-amber-500/40 hover:shadow-md dark:hover:shadow-[0_15px_30px_rgba(245,158,11,0.12)] group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center border-b border-slate-200 dark:border-white/5 pb-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0">
                  <FaCertificate />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-amber-600 dark:text-amber-300 font-semibold text-sm">
                      {cert.issuer} &bull; {cert.year}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-gray-400 font-medium italic">
                      (Click a topic below to verify)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {cert.topics.map((topic, i) => (
                  <a 
                    key={i} 
                    href={topic.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-650 dark:text-gray-300 font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 group/link"
                  >
                    <FaCheckCircle className="text-amber-500 flex-shrink-0 text-sm group-hover/link:scale-110 transition-transform" />
                    <span>{topic.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="flex flex-col items-center mt-24 mb-10">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-slate-900 via-amber-600 to-orange-600 dark:from-white dark:via-amber-400 dark:to-orange-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Currently Learning
          </motion.h2>
          <motion.div
            className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-4 mb-10"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {["TypeScript", "System Design", "Docker", "CI/CD", "Advanced AI Engineering"].map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 text-amber-700 dark:text-amber-300 font-bold shadow-sm hover:scale-105 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-all duration-300 cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
