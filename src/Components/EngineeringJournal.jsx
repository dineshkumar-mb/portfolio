import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaArrowRight, FaCode, FaRobot, FaServer, FaCubes } from "react-icons/fa";
import { blogPosts } from "../data/blogPosts";

const categoryIcons = {
  "All": <FaBookOpen />,
  "AI Engineering": <FaRobot />,
  "Architecture": <FaServer />,
  "Full Stack": <FaCode />,
  "Developer Tools": <FaCubes />
};

const EngineeringJournal = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Architecture", "AI Engineering", "Full Stack", "Developer Tools"];

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts.slice(0, 4);
    return blogPosts.filter((post) => post.category === activeCategory).slice(0, 4);
  }, [activeCategory]);

  return (
    <section id="blog" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaBookOpen className="text-xs" /> System Design & Architecture
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-300 text-transparent bg-clip-text mb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Engineering Journal
          </motion.h2>

          <motion.p
            className="text-slate-600 dark:text-gray-300 max-w-2xl text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Real-world architecture breakdowns, AI integration pipelines, and engineering trade-offs from production platforms and systems I’ve engineered.
          </motion.p>

          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Category Filter Pills (Item 56: Architecture, AI Engineering, Full Stack, Developer Tools) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                  : "bg-white/60 dark:bg-gray-900/40 text-slate-700 dark:text-gray-300 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40"
              }`}
            >
              <span>{categoryIcons[cat]}</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2.5">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
                    >
                      Read Breakdown <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Articles Action */}
        <div className="flex justify-center">
          <Link
            to="/blog"
            className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-md hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2"
          >
            Explore All Engineering Articles <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EngineeringJournal;
