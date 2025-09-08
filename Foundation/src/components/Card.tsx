import { Box, Heading, Text } from "@chakra-ui/react";

interface CardProps {
  title: string;
  text: string;
}

const Card = ({ title, text }: CardProps) => {
  return (
    <Box
      bg="whiteAlpha.500"
      p={8}
      rounded="2xl"
      border="1px rgba(158, 147, 147, 0.2) solid"
      transition="all 0.3s ease-in"
      _hover={{ bg: "white", boxShadow: "sm", transform: "translateY(-10px)" }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="span"
        position="relative"
        fontSize={{md: "2xl"}}
        mb={6}
        color="red.500"
        _after={{
          content: "''",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-2px",
          w: "50%",
          h: "3px",
          bg: "red.500",
        }}
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "xs", md: "md" }}
        color="gray.700"
        lineHeight="1.7"
        textAlign="center"
      >
        {text}
      </Text>
    </Box>
  );
};

export default Card;
