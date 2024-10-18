import {
  Box,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { MdEmail, MdPerson, MdWork } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavButton from "./NavButton";
import { Link } from "react-scroll";

function NavBar() {
  const showButton = useBreakpointValue({ base: true, md: false });
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const scrollDuration = 500;

  return (
    <HStack
      id="page-top"
      width="100%"
      height="80px"
      fontWeight="regular"
      fontSize={{ base: "14px", md: "17px" }}
      justifyContent="flex-end"
      px={{ base: "2", md: "5" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="10"
      bg={bgColor}
    >
      {showButton ? (
        <HStack width="100%" justifyContent="space-between" marginX="10px">
          <Link to="top" smooth={true} duration={scrollDuration}>
            <Icon as={MdPerson} boxSize={10} />
          </Link>
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon boxSize={6} />}
              variant="outline"
              boxSize="50px"
            >
              Menu
            </MenuButton>
            <MenuList fontSize="15px">
              <Link to="about" smooth={true} duration={scrollDuration}>
                <MenuItem marginBottom={2} icon={<Icon as={MdPerson} />}>
                  About
                </MenuItem>
              </Link>
              <Link to="work" smooth={true} duration={scrollDuration}>
                <MenuItem
                  marginBottom={2}
                  icon={<Icon as={MdWork} />}
                  fontWeight="600"
                >
                  Work
                </MenuItem>
              </Link>
              <Link to="contact" smooth={true} duration={scrollDuration}>
                <MenuItem icon={<Icon as={MdEmail} />}>Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      ) : (
        <Box display="flex" justifyContent="space-evenly" width="261px">
          <NavButton to="about" duration={scrollDuration} />
          <NavButton to="work" weight={600} duration={scrollDuration} />
          <NavButton to="contact" duration={scrollDuration} />
        </Box>
      )}
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
