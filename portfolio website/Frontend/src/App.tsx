import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Element } from "react-scroll";

function App() {
  return (
    <Box overflowX="hidden">
      <Element name="top"></Element>
      <NavBar></NavBar>
      <Hero></Hero>
      <Footer></Footer>
    </Box>
  );
}

export default App;
