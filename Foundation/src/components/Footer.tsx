import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box width="100%" marginTop="auto" bgColor="gray.300">
      <Flex
        width="90%"
        alignItems="center"
        justifyContent="center"
        height="60px"
        margin="0 auto"
      >
        <Text
          as="p"
          fontSize={{ base: "10px", md: "14px" }}
          fontWeight="500"
          color="gray.600"
        >
          Radiance Reach Charity Foundation &copy; 2024 All rights reserved
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
