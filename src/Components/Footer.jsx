import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-center text-white">
      <div className="container mx-auto px-6">
        
        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
