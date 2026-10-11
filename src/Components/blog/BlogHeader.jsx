import { motion } from "framer-motion";
import { FaSearch, FaTimes, FaLayerGroup, FaBookOpen } from "react-icons/fa";

const BlogHeader = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex flex-col items-center text-center mb-16 relative z-10">
      {/* Top Floating Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaBookOpen className="text-blue-500 text-xs" />
        Engineering Journal & Architecture Notes
      </motion.div>

      {/* Main Hero Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text pb-4 tracking-tight"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Developer Journal.
      </motion.h1>

      <motion.p
        className="text-slate-600 dark:text-gray-300 max-w-2xl text-base md:text-lg mb-10 leading-relaxed font-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Real-world architecture breakdowns, AI integration pipelines, and engineering trade-offs from projects I've built.
      </motion.p>

      {/* Search Input Bar */}
      <motion.div
        className="w-full max-w-2xl relative mb-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative flex items-center group">
          <FaSearch aria-hidden="true" className="absolute left-5 text-slate-400 dark:text-gray-400 text-lg pointer-events-none group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search articles by topic, tech stack, or title"
            placeholder="Search by topic, tech stack (#RAG, #React, #Node.js), or title..."
            className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/80 dark:bg-gray-900/60 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-lg backdrop-blur-xl text-sm md:text-base font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Clear search input"
            >
              <FaTimes aria-hidden="true" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Category Pills Bar */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-3"
        role="group"
        aria-label="Filter blog posts by category"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 flex items-center gap-1 mr-1 hidden sm:flex">
          <FaLayerGroup aria-hidden="true" /> Filter:
        </span>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={isSelected}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold tracking-wide transition-all duration-300 border cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white/70 dark:bg-white/5 text-slate-700 dark:text-gray-300 border-slate-200/80 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BlogHeader;
