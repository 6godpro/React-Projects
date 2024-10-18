import { FaInstagram, FaFacebook, FaDiscord, FaDribbble, FaBehance } from "react-icons/fa";
import { HStack, Icon, useColorMode } from "@chakra-ui/react";

const SocialIconList = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "white" : "black";
  return (
    <HStack marginTop="60px" spacing="3">
      <Icon as={FaDiscord} color={color} />
      <Icon as={FaFacebook} color={color} />
      <Icon as={FaDribbble} color={color} />
      <Icon as={FaInstagram} color={color} />
      <Icon as={FaBehance} color={color} />
    </HStack>
  );
};

export default SocialIconList;
