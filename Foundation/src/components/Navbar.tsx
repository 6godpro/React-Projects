import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import logo from "../assets/LOGO.png";

const Links: string[] = ["About Us", "Events", "Get Involved", "Contact Us"];

interface NavLinkProps {
  children: React.ReactNode;
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: () => void;
  fontSize: string;
  isLast: boolean;
}

const Navbar = () => {
  const { open, onOpen, onClose, setOpen } = useDisclosure();
  const [tabStyle, setTabStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = document.getElementById(
      e.currentTarget.innerText.toLowerCase()
    );
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  // Navigation Link component
  const NavLink = ({
    children,
    onMouseEnter,
    onMouseLeave,
    fontSize,
    isLast,
  }: NavLinkProps) => (
    <Button
      variant="ghost"
      fontSize={fontSize}
      width="fit-content"
      onMouseEnter={!isLast ? onMouseEnter : undefined}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      fontWeight="600"
      transition="all 0.3s ease"
      _hover={{
        color: "white",
        md: { transform: "scale(1.05)" },
      }}
      color={{ base: "#3e6389", md: isLast ? "white" : "#3e6389" }}
      bg={isLast ? "red.600" : "none"}
      rounded={isLast ? "full" : "none"}
    >
      {children}
    </Button>
  );

  // Function to handle mouse enter
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setTabStyle({
      width: rect.width,
      left: e.currentTarget.offsetLeft,
      opacity: 1,
    });
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setTabStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <Box
      id="navbar"
      px={3}
      position="fixed"
      zIndex={3}
      width="100%"
      top={0}
      bg="inherit"
      borderBottom="2px #3e6389 solid"
    >
      <Box
        cursor="pointer"
        fontWeight="bold"
        fontSize={{ base: "xs", md: "lg" }}
        flex={{ md: 0.5 }}
        color="#3e6389"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left={{ md: 10 }}
      >
        <img src={logo} alt="radiance-reach-logo" width="50px" />
        <p>RADIANCE REACH CHARITY FOUNDATION</p>
      </Box>
      <Flex
        h={16}
        alignItems="center"
        justifyContent={{ base: "flex-end", md: "center" }}
      >
        {/* Desktop Menu */}
        <HStack alignItems="center">
          <HStack
            as="nav"
            gap={10}
            justifyContent="center"
            display={{ base: "none", md: "flex" }}
            position="relative"
            paddingX={2}
          >
            {/* Animated Tab */}
            <motion.div
              style={{
                position: "absolute",
                height: "40px",
                backgroundColor: "rgb(220, 38, 38)",
                borderRadius: "32px",
              }}
              animate={tabStyle}
            />
            {Links.map((link, index) => {
              const lastLink = index === Links.length - 1;
              return (
                <NavLink
                  key={link.toLowerCase()}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  fontSize="md"
                  isLast={lastLink}
                >
                  {link}
                </NavLink>
              );
            })}
          </HStack>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
          color="#3e6389"
          bg="none"
        >
          {open ? <CloseIcon boxSize="16" /> : <HamburgerIcon boxSize="24" />}
        </IconButton>
      </Flex>

      {/* Mobile Menu */}
      {open && (
        <Box
          pb="4px"
          display={{ md: "none" }}
          mb={2}
          position="absolute"
          top="16"
          left="0"
          right="0"
          bg="inherit"
          onClick={() => setOpen(false)}
          borderTop="2px solid #3e6389"
        >
          <Stack
            as="nav"
            mt={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {Links.map((link) => (
              <NavLink
                key={link.toLowerCase()}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                fontSize="xs"
                isLast={false}
              >
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
