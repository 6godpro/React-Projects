import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.to(scrollBtn.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(scrollBtn.current, { opacity: 0, y: 50 });
    }
  }, [isVisible]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    scrollBtn.current?.blur();
  };

  return (
    <IconButton
      aria-label="scroll-to-top"
      ref={scrollBtn}
      color="white"
      bg="red.600"
      size="lg"
      position="fixed"
      bottom={{ base: "2em", md: "4em" }}
      right={{ base: "2em", md: "6em" }}
      opacity={0}
      zIndex={99999}
      rounded="xl"
      onClick={handleClick}
      _hover={{
        bg: "white",
        color: "red.500",
        borderColor: "red.500",
      }}
    >
      <ArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTop;
