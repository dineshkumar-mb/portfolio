import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import SEO from "../Components/SEO";
import ReadingProgress from "../Components/blog/ReadingProgress";
import TableOfContents from "../Components/blog/TableOfContents";
import CodeBlock from "../Components/blog/CodeBlock";
import ProjectReference from "../Components/blog/ProjectReference";
import ShareButtons from "../Components/blog/ShareButtons";
import RelatedArticles from "../Components/blog/RelatedArticles";
import { getBlogPostBySlug, getRelatedPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post.slug, post.category) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-slate-500 dark:text-gray-400 mb-6">
          The requested engineering article does not exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition"
        >
          Return to Developer Journal
        </Link>
      </div>
    );
  }

  const currentUrl = `https://portfolio-five-chi-11.vercel.app/blog/${post.slug}`;

  // Article JSON-LD Structured Data for Google
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "headline": post.title,
    "description": post.description,
    "image": post.author.avatar,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Person",
      "name": post.author.name
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <div className="bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white min-h-screen pt-24 pb-24 relative overflow-x-hidden">
      {/* Top Reading Progress Bar */}
      <ReadingProgress />

      {/* SEO helmet with article metadata */}
      <SEO
        title={`${post.title} | Developer Journal`}
        description={post.description}
        type="article"
        url={currentUrl}
      />

      {/* Structured data injection */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Navigation back button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold mb-8 text-sm transition-colors"
        >
          <FaArrowLeft /> Back to Developer Journal
        </Link>

        {/* Article Header */}
        <header className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
              <FaCalendarAlt className="text-blue-500" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
              <FaClock className="text-purple-500" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed font-normal mb-8">
            {post.description}
          </p>

          {/* Author info card */}
          <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 w-fit backdrop-blur-md">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                <FaUser className="text-xs text-blue-500" />
                {post.author.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                {post.author.role}
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Layout with TOC Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Main Text Column (8 cols ~ 760px max width for superior readability) */}
          <main className="lg:col-span-8 max-w-none">
            {/* Table of Contents for Mobile View */}
            <TableOfContents sections={post.sections} />

            {/* Sections */}
            <div className="space-y-12">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 border-b border-slate-200/70 dark:border-white/10 pb-3">
                    {section.title}
                  </h2>

                  {section.content && (
                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line space-y-4">
                      {section.content}
                    </div>
                  )}

                  {/* Subsections if present */}
                  {section.subsections &&
                    section.subsections.map((sub, idx) => (
                      <div key={idx} className="mt-6 space-y-3">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {sub.title}
                        </h3>
                        <p className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                          {sub.content}
                        </p>
                      </div>
                    ))}

                  {/* Code Block snippet if present */}
                  {section.codeBlock && (
                    <CodeBlock
                      code={section.codeBlock.code}
                      language={section.codeBlock.language}
                      filename={section.codeBlock.filename}
                    />
                  )}
                </section>
              ))}
            </div>

            {/* Project Reference Banner */}
            <ProjectReference
              projectTitle={post.projectTitle}
              projectSlug={post.projectSlug}
              projectLink={post.projectLink}
            />

            {/* Social Share Buttons */}
            <ShareButtons title={post.title} url={currentUrl} />

            {/* Author Bio Box */}
            <div className="p-8 rounded-3xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 flex flex-col md:flex-row items-center gap-6 my-10">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500/20"
              />
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Written by {post.author.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  Full-Stack MERN Developer and AI Application Builder passionate about scalable microservices, vector search RAG systems, dynamic UI engineering, and software architecture.
                </p>
              </div>
            </div>
          </main>

          {/* Table of Contents Desktop Sticky Sidebar (4 cols) */}
          <aside className="hidden lg:block lg:col-span-4">
            <TableOfContents sections={post.sections} />
          </aside>
        </div>

        {/* Related Articles - Full Container Width */}
        <RelatedArticles posts={relatedPosts} />
      </div>
    </div>
  );
};

export default BlogPost;
