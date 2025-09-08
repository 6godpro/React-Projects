import { IconButton } from "@chakra-ui/react";
import React from "react";

interface SocialBtnProps {
  bg: string;
  color: string;
  shadow: string;
  href: string;
  icon: React.ReactNode;
}

const SocialButton = ({ bg, color, shadow, href, icon }: SocialBtnProps) => {
  return (
    <a href={href} target="_blank">
      <IconButton
        bg={bg}
        color={color}
        rounded="full"
        size="md"
        transition="all 0.3s ease-in"
        _hover={{
          boxShadow: shadow,
          transform: "scale(1.1)",
        }}
      >
        {icon}
      </IconButton>
    </a>
  );
};

export default SocialButton;
