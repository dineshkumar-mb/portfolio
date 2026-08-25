import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket } from "react-icons/fa";
import SEO from "../Components/SEO";
import BlogHeader from "../Components/blog/BlogHeader";
import BlogCard from "../Components/blog/BlogCard";
import { blogPosts, blogCategories } from "../data/blogPosts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter posts based on search query & selected category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white min-h-screen pt-28 pb-24 relative overflow-x-hidden">
      <SEO
        title="Developer Blog | Dinesh Kumar M B"
        description="Engineering notes, architecture decisions, and lessons learned while building Full-Stack MERN and AI-powered applications."
        url="https://portfolio-five-chi-11.vercel.app/blog"
      />

      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-7xl">
        {/* Blog Header & Controls */}
        <BlogHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={blogCategories}
        />

        {/* Featured Article Section (Only show on 'All' category and when not searching) */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <section className="mb-20">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              <FaRocket /> Featured Engineering Article
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

              <div className="max-w-3xl space-y-5 relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                    {featuredPost.readTime}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                    • {new Date(featuredPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  {featuredPost.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center gap-2"
                  >
                    Read Full Article <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Latest Articles Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-white/10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            {searchQuery
              ? `Search Results (${filteredPosts.length})`
              : selectedCategory === "All"
              ? "All Technical Articles"
              : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white/40 dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 mb-20">
            <p className="text-xl font-bold text-slate-700 dark:text-gray-300 mb-2">
              No articles match your query.
            </p>
            <p className="text-sm text-slate-500 dark:text-gray-400 mb-6">
              Try adjusting your search keyword or selected category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Explore My Projects CTA Banner */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <FaCode /> Hands-On Engineering
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Built Something Interesting?
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Explore the full portfolio projects, live demos, and interactive architecture diagrams behind these technical articles.
            </p>
          </div>

          <Link
            to="/#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-sm md:text-base shadow-lg hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            Explore Projects <FaArrowRight />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Blog;
