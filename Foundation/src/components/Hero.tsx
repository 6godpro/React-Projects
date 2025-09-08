import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { useScroll, motion, useTransform } from "framer-motion";
import hero from "../assets/hero.jpg";

const ButtonProps = {
  fontSize: { base: "xs", md: "md" },
  fontWeight: "600",
  py: 6,
  rounded: "full",
  color: "white",
  transition: "all 0.3s ease",
};

const MotionImage = motion.create(Image);

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <Box
      position="relative"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      px={4}
      mb={10}
      overflow="hidden"
    >
      <MotionImage
        src={hero}
        alt="Hero background"
        style={{ scale }}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={0}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.700"
      />
      <Flex flexDir="column" gap="2" width={{ md: "80%" }}>
        <Box
          as="h1"
          fontSize={{ base: "2xl", md: "7xl" }}
          textAlign="center"
          zIndex={2}
          fontWeight="600"
        >
          Empowering Communities, Changing Lives
        </Box>
        <Box
          as="h4"
          fontSize={{ base: "xs", md: "lg" }}
          textAlign="center"
          zIndex={2}
          fontWeight={500}
        >
          Join us in making a difference. Together, we can create a brighter
          future for underprivileged communities in Nigeria.
        </Box>
        <Flex
          gap="4"
          justifyContent="center"
          marginTop={{ md: "10", base: "5" }}
          flexDir={{ base: "column", md: "row" }}
          paddingX={{ base: "10" }}
        >
          <Button
            {...ButtonProps}
            _hover={{ transform: "scale(1.05)" }}
            bg="red.600"
            px={{ md: "30px" }}
          >
            Lend a hand
          </Button>
          <Button
            {...ButtonProps}
            variant="outline"
            _hover={{
              bg: "white",
              color: "red.500",
              transform: "scale(1.05)",
            }}
            borderColor="white"
            paddingLeft={{ md: "30px" }}
          >
            Learn More <RiArrowRightLine />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
