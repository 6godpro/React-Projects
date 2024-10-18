import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";
import SkillArea from "./components/Skills";

function App() {
  return (
    <Box overflowX="hidden">
      <Element name="top" />
      <NavBar />
      <Hero />
      <SkillArea />
      <Footer />
    </Box>
  );
}

export default App;
