import { Box, Heading, Text } from "@chakra-ui/react";
import SocialIconList from "./SocialIconList";
import ContactPage from "./ContactPage";

const Footer = () => {
  return (
    <Box paddingX={{ base: "0", md: "100px" }}>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems={{ base: "center", md: "normal" }}
        gap={{ base: "0", md: "190px" }}
      >
        <Box
          height={{ base: "100%", md: "313px" }}
          paddingX={{ base: "20px", md: "0" }}
          marginBottom={{ base: "30px", md: "0" }}
        >
          <Heading as="h2" fontSize="40px" marginBottom="20px">
            Let's work together
          </Heading>
          <Text fontSize="15px">
            I appreciate you thinking about me as your success partner. I'm
            excited to have the chance to work with you!
          </Text>
          <SocialIconList />
        </Box>
        <ContactPage />
      </Box>
    </Box>
  );
};

export default Footer;
