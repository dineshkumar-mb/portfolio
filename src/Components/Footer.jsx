import { FaGithub, FaLinkedin, FaEnvelope, FaRss, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-[#030014]/80 backdrop-blur-sm border-t border-slate-200 dark:border-white/5 py-12 text-slate-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Dinesh Kumar M B
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
              Full-Stack MERN Developer | AI Application Builder specializing in RAG systems, microservices, and interactive web architectures.
            </p>
          </div>

          {/* Developer Blog Topics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-400 flex items-center justify-center md:justify-start gap-1.5">
              <FaBook className="text-blue-500" /> Developer Journal
            </h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-xs font-medium text-slate-600 dark:text-gray-300">
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition">AI Engineering</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition">Full Stack</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition">React</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition">Node.js</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition">Architecture</Link>
              </li>
            </ul>
          </div>

          {/* Social Icons & RSS */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-3">
            <div className="flex items-center space-x-5">
              <a
                href="https://github.com/dineshkumar-mb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:dineshkumarmannibrundha@gmail.com"
                className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition"
                aria-label="Email Contact"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition"
                aria-label="RSS Feed"
                title="RSS Feed"
              >
                <FaRss size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-white/5 text-center">
          <p className="text-slate-500 dark:text-gray-400 text-xs">
            © {new Date().getFullYear()} Dinesh Kumar M B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
