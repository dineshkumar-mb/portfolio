import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
          <a href="https://github.com/dineshkumar-mb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dinesh-kumar-mannibrundha13393/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="dineshkumarmannibrundha@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FiMail size={24} />
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-gray-400 text-sm"
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
