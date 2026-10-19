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

    if (item === "Blog") {
      if (location.pathname === "/blog") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (location.pathname === "/") {
        const element = document.getElementById("blog");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      navigate("/blog");
      return;
    }

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

        {/* Logo / Brand */}
        <motion.button
          type="button"
          className="text-xl md:text-2xl font-black cursor-pointer text-slate-800 dark:text-white tracking-tight flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl px-1 py-0.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleLogoClick}
          aria-label="Dinesh Kumar M B - Home"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-black shadow-md">
            D
          </span>
          <span>Dinesh Kumar M B</span>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {["Home", "About", "Experience", "Blog", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-semibold transition duration-300 rounded-md px-1.5 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    item === "Blog" && location.pathname.startsWith("/blog")
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume CTA Button */}
          <a
            href="/DineshKumar-FSD-Resume.pdf"
            download="DineshKumar-FSD-Resume.pdf"
            className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md shadow-blue-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <span>Resume</span>
            <span className="text-[10px]" aria-hidden="true">↓</span>
          </a>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/10 shadow-sm transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {theme === "dark" ? <FaSun className="text-base text-yellow-400" /> : <FaMoon className="text-base text-slate-700" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-2xl cursor-pointer text-slate-800 dark:text-white relative z-50 p-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white/95 dark:bg-[#030014]/95 backdrop-blur-xl border-l border-slate-200 dark:border-white/10 shadow-2xl p-8 flex flex-col gap-5 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-40`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
            <span className="font-extrabold text-base text-slate-800 dark:text-white">Navigation</span>
          </div>

          {["Home", "About", "Experience", "Blog", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
              className={`text-base font-semibold ${
                item === "Blog" && location.pathname.startsWith("/blog")
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : "text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item}
            </a>
          ))}

          {/* Mobile Resume CTA */}
          <a
            href="/DineshKumar-FSD-Resume.pdf"
            download="DineshKumar-FSD-Resume.pdf"
            className="w-full mt-2 py-3 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md flex items-center justify-center gap-2"
          >
            <span>Download Resume</span>
            <span>↓</span>
          </a>

          {/* Mobile Theme Toggle */}
          <div className="h-px bg-slate-200 dark:bg-white/10 my-1" />
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

