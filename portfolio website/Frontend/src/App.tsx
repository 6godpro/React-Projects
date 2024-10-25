import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import SkillArea from "./components/Skills";
import ImageSlider from "./components/ImageSlider";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader progress={progress} />
      ) : (
        <Box overflowX="hidden">
          <Element name="top" />
          <NavBar />
          <Hero />
          <ImageSlider />
          <SkillArea />
          <Footer />
        </Box>
      )}
    </div>
  );
}

export default App;
