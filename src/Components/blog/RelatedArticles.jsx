import BlogCard from "./BlogCard";
import { FaBookReader } from "react-icons/fa";

const RelatedArticles = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-20 pt-14 border-t border-slate-200/70 dark:border-white/10 w-full relative z-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-1">
            <FaBookReader /> Further Engineering Notes
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            You May Also Like
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
