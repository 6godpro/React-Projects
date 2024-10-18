import { Box, Heading, Text } from "@chakra-ui/react";
import SocialIconList from "./SocialIconList";
import ContactPage from "./ContactPage";

const Footer = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems={{ base: "center", md: "normal" }}
        gap={{ base: "0px", md: "190px" }}
      >
        <Box
          width={{ base: "100%", md: "410px" }}
          height={{ base: "100%", md: "313px" }}
          paddingX={{ base: "20px", md: "0" }}
          marginBottom={{ base: "30px", md: "0px" }}
        >
          <Heading as="h2" fontSize="40px" marginBottom="20px">
            Let's work together
          </Heading>
          <Text fontSize="15px">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </Text>
          <SocialIconList />
        </Box>
        <ContactPage />
      </Box>
    </Box>
  );
};

export default Footer;
