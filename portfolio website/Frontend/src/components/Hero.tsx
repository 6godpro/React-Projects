import { Box, Image, Text } from "@chakra-ui/react";
import pc from "../assets/image.png";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      paddingX={{ base: "10px", md: "100px" }}
      paddingY={{ base: "10px", md: "40px" }}
      width="100%"
      height="auto"
      justifyContent="space-between"
      marginTop={{ base: "80px", md: "40px" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="20px"
        width={{ base: "100%", md: "557px" }}
        height="auto"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box width="auto">
          <Text fontWeight="600" fontSize="20px" lineHeight="30px">
            Mayne Imadojiemu | Product Design
          </Text>
          <Text fontWeight="900" fontSize={{ base: "65px", md: "80px" }}>
            UI/UX Designer
          </Text>
        </Box>
        <Box>
          <Text fontSize="17px" fontWeight="400">
            I am experienced in crafting intuitive interfaces and user-centered
            designs to enhance digital experiences.
          </Text>
        </Box>
      </Box>
      <Box
        width={{ base: "415px", md: "456px" }}
        height={{ base: "415px", md: "456px" }}
        marginY={{ base: "10px", md: "0px" }}
      >
        <Image boxSize="100%" objectFit="contain" src={pc} />
      </Box>
    </Box>
  );
};

export default Hero;
