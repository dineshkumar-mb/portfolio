import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import SplashCursor from "./Components/SplashCursor.jsx";

// Lazy load components for performance optimization
const SEO = lazy(() => import("./Components/SEO.jsx"));
const Home = lazy(() => import("./Components/Home.jsx"));
const WhyHireMe = lazy(() => import("./Components/WhyHireMe.jsx"));
const FeaturedProjects = lazy(() => import("./Components/FeaturedProjects.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Expertise = lazy(() => import("./Components/Expertise.jsx"));
const Skills = lazy(() => import("./Components/Skills.jsx"));
const Experience = lazy(() => import("./Components/Experience.jsx"));
const Project = lazy(() => import("./Components/Project.jsx"));
const Certifications = lazy(() => import("./Components/Certifications.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));
const GithubSection = lazy(() => import("./Components/GithubSection.jsx"));
const ProjectCaseStudy = lazy(() => import("./Pages/ProjectCaseStudy.jsx"));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#030014]">
    <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

const MainLanding = () => (
  <>
    <Home />
    <WhyHireMe />
    <FeaturedProjects />
    <Expertise />
    <About />
    <Skills />
    <Experience />
    <Project />
    <Certifications />
    <GithubSection />
    <Contact />
  </>
);

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <HelmetProvider>
      <Router>
        <div className="bg-slate-50 dark:bg-[#030014] text-slate-800 dark:text-white bg-grid-pattern relative min-h-screen overflow-x-hidden transition-colors duration-500">
          {!isMobile && <SplashCursor />}
          <Header theme={theme} toggleTheme={toggleTheme} />
          
          <Suspense fallback={<Loader />}>
            <SEO 
              title="Dinesh Kumar M B - Full-Stack MERN & AI Developer"
              description="Portfolio of Dinesh Kumar M B, a Full-Stack MERN Developer & AI Application Builder."
            />
            <Routes>
              <Route path="/" element={<MainLanding />} />
              <Route path="/projects/:id" element={<ProjectCaseStudy />} />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
