import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import {MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      {colorMode !== "dark" && <MdWbSunny />}
      <Switch
        // colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" && <FaMoon size='14px'/>}
    </HStack>
  );
};

export default ColorModeSwitch;
