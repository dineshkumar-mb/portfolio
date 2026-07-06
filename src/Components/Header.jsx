import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = item.toLowerCase();
    
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/#${targetId}`);
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-20 transition duration-300 ${scrolled ? "bg-white/70 dark:bg-[#030014]/60 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 shadow-md dark:shadow-lg dark:shadow-purple-500/5 text-slate-800 dark:text-white" : "bg-transparent text-slate-800 dark:text-white"}`}>
      <nav className="container mx-auto px-6 md:px-20 flex justify-between items-center py-4">
        
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer text-slate-800 dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleLogoClick}
        >
          My Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {["Home", "About","Experience","Skills", "Projects", "Certifications", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-slate-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/10 shadow-sm transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {theme === "dark" ? <FaSun className="text-lg text-yellow-400" /> : <FaMoon className="text-lg text-slate-700" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer text-slate-800 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-lg border-l border-slate-200 dark:border-white/10 shadow-2xl p-8 flex flex-col gap-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
        >
          {["Home", "About","Experience","Skills", "Projects", "Certifications", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-slate-800 dark:text-white text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400"
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </a>
          ))}
          {/* Mobile Theme Toggle */}
          <div className="h-px bg-slate-200 dark:bg-white/10 my-2" />
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-gray-400 text-sm font-medium">Switch Theme</span>
            <motion.button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/10 shadow-sm cursor-pointer"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun className="text-lg text-yellow-400" /> : <FaMoon className="text-lg text-slate-700" />}
            </motion.button>
          </div>
        </motion.div>

      </nav>
    </header>
  );
};

export default Header;
