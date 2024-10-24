import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import SkillArea from "./components/Skills";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <Box overflowX="hidden">
      <Element name="top" />
      <NavBar />
      <Hero />
      <ImageSlider />
      <SkillArea />
      <Footer />
    </Box>
  );
}

export default App;
