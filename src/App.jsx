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
  return (
    <div className="bg-gray-900 text-white">
      <SplashCursor />
      <Header />
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
