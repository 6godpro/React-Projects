import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
