import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
