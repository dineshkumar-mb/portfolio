import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-20 transition duration-300 ${scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 md:px-20 flex justify-between items-center py-4">
        
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-white cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["Home", "About","skills","Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 h-full w-2/3 bg-gray-900 shadow-lg p-8 flex flex-col gap-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
        >
          {["Home", "About","skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-lg hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>

      </nav>
    </header>
  );
};

export default Header;
