import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaCalendarAlt, FaArrowRight, FaCode } from "react-icons/fa";

const categoryStyles = {
  "AI Engineering": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 shadow-cyan-500/10",
  "Full Stack": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 shadow-purple-500/10",
  "Developer Tools": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 shadow-emerald-500/10",
  "Architecture": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 shadow-amber-500/10",
};

const BlogCard = ({ post }) => {
  const categoryBadgeClass =
    categoryStyles[post.category] ||
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 p-6 rounded-3xl flex flex-col justify-between h-full group transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] relative overflow-hidden"
    >
      {/* Top Subtle Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header Row: Category Badge & Read Info */}
        <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
          <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border shadow-sm ${categoryBadgeClass}`}>
            {post.category}
          </span>

          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-blue-500/80 text-[10px]" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock className="text-purple-500/80 text-[10px]" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Article Title */}
        <Link to={`/blog/${post.slug}`} className="block group/title">
          <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-3 leading-snug group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 transition-colors line-clamp-2 min-h-[3.25rem]">
            {post.title}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-6">
          {post.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags (Max 4 for clean layout) */}
        <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
          {post.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/10"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 4 && (
            <span className="text-[10px] font-semibold text-slate-400 dark:text-gray-500 align-self-center">
              +{post.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Divider & CTA */}
        <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between relative z-10">
          {post.projectTitle ? (
            <span className="text-[11px] font-semibold text-slate-500 dark:text-gray-400 flex items-center gap-1.5 truncate max-w-[55%]" title={post.projectTitle}>
              <FaCode className="text-blue-500 flex-shrink-0 text-xs" />
              <span className="truncate">{post.projectTitle}</span>
            </span>
          ) : (
            <span />
          )}

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/btn ml-auto"
          >
            Read Article
            <FaArrowRight className="text-[10px] transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
