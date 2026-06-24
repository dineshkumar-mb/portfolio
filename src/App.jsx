import { useState, useEffect } from "react";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Experience from "./Components/Experience.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Project from "./Components/Project.jsx";
import SplashCursor from "./Components/SplashCursor.jsx";
import Skills from "./Components/Skills.jsx";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white bg-grid-pattern relative min-h-screen overflow-hidden transition-colors duration-500">
      <SplashCursor />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
