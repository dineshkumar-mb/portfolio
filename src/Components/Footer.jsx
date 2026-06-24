import { FaGithub, FaLinkedin,FaEnvelope  } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-[#030014]/80 backdrop-blur-sm border-t border-slate-200 dark:border-white/5 py-8 text-center text-slate-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Social Icons */}
        <motion.div
          className="flex justify-center items-center space-x-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="https://github.com/dineshkumar-mb" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:dineshkumarmannibrundha@gmail.com"
            className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition"
            aria-label="email"
          >
            <FaEnvelope size={24} />
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-slate-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          © {new Date().getFullYear()} Dinesh kumar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
