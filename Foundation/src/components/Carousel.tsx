import { Box, Flex, IconButton, Image, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GalleryDialog from "./GalleryDialog";
import EventDialog from "./EventDialog";
import LightboxDialog from "./LightboxDialog";

const MotionImage = motion(Image);

const navIconProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  borderRadius: "20%",
  bg: "rgba(255, 255, 255, 0.9)",
  backdrop: "blur(4px)",
  color: "blackAlpha.600",
  transition: "all 0.3s ease-in-out",
  _hover: {
    bg: "red.500",
    color: "#fff",
    scale: 1.1,
  },
  display: { base: "none", md: "flex" },
  zIndex: 2,
};

interface CarouselProps {
  events: {
    title: string;
    images: string[];
  }[];
}

const Carousel = ({ events }: CarouselProps) => {
  // Flatten all event images for carousel preview
  const allImages = events.flatMap((e) => e.images);
  const previewImages = allImages.slice(0, 4);

  const [direction, setDirection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const autoScrollRef = useRef<any>(null);

  const {
    open: galleryOpen,
    onOpen: onGalleryOpen,
    onClose: onGalleryClose,
  } = useDisclosure(); // gallery modal
  const {
    open: eventOpen,
    onOpen: onEventOpen,
    onClose: onEventClose,
  } = useDisclosure(); // per-event modal
  const {
    open: lightboxOpen,
    onOpen: onLightboxOpen,
    onClose: onLightboxClose,
  } = useDisclosure(); // individual event photo modal
  const [activeEvent, setActiveEvent] = useState<{
    title: string;
    images: string[];
  } | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // carousel variants
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) =>
      newDirection === 1
        ? prevIndex === previewImages.length - 1
          ? 0
          : prevIndex + 1
        : prevIndex === 0
        ? previewImages.length - 1
        : prevIndex - 1
    );
  };

  const stopAutoScroll = () => {
    setClicked(true);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleImageClick = (image: string) => {
    setActiveImage(image);
    onLightboxOpen();
  };

  const handleEventClick = (event: { title: string; images: string[] }) => {
    setActiveEvent(event);
    onEventOpen();
  };

  const handleSwipe = (_: any, { offset, velocity }: PanInfo) => {
    stopAutoScroll();
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) paginate(1);
    else if (swipe > swipeConfidenceThreshold) paginate(-1);
  };

  const handleClick = (direction: number) => {
    stopAutoScroll();
    paginate(direction);
  };

  const goToSlide = (index: number) => {
    stopAutoScroll();
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
    onGalleryClose();
  };

  // auto scroll
  useEffect(() => {
    if (clicked) return;
    autoScrollRef.current = setInterval(() => paginate(1), 5000);
    return () => clearInterval(autoScrollRef.current);
  }, [clicked]);

  return (
    <>
      {/* Carousel */}
      <Flex
        width={{ base: "90%", md: "60%" }}
        height={{ base: "200px", md: "50vh" }}
        position="relative"
        margin="0 auto"
        justifyContent="center"
        borderRadius={10}
      >
        <AnimatePresence initial={false} custom={direction}>
          <MotionImage
            key={currentIndex}
            src={previewImages[currentIndex]}
            custom={direction}
            width="100%"
            height="100%"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleSwipe}
            position="absolute"
            borderRadius={10}
          />
        </AnimatePresence>

        <IconButton
          {...navIconProps}
          left={{ md: "40px" }}
          onClick={() => handleClick(-1)}
        >
          <FaChevronLeft />
        </IconButton>
        <IconButton
          {...navIconProps}
          right={{ md: "40px" }}
          onClick={() => handleClick(1)}
        >
          <FaChevronRight />
        </IconButton>

        {/* Dots */}
        <Box
          pos="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          display={{ base: "none", md: "flex" }}
          gap={3}
          zIndex={10}
          cursor="pointer"
        >
          {previewImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              width={2}
              height={2}
              rounded="full"
              transition="all 0.1s ease-in"
              bg={index === currentIndex ? "red.600" : "whiteAlpha.700"}
              transform={index === currentIndex ? "scale(1.5)" : "scale(1)"}
              _hover={index !== currentIndex ? { bg: "white" } : { bg: "none" }}
            />
          ))}
        </Box>
      </Flex>

      {/* Gallery Dialog (segmented by events) */}
      <GalleryDialog
        galleryOpen={galleryOpen}
        onGalleryOpen={onGalleryOpen}
        onGalleryClose={onGalleryClose}
        handleEventClick={handleEventClick}
      />

      {/* Event-specific Dialog */}
      <EventDialog
        eventOpen={eventOpen}
        onEventClose={onEventClose}
        handleImageClick={handleImageClick}
        event={activeEvent}
      />

      {/* Lightbox Modal */}
      <LightboxDialog
        image={activeImage}
        lightboxOpen={lightboxOpen}
        onLightboxOpen={onLightboxOpen}
        onLightboxClose={onLightboxClose}
      />
    </>
  );
};

export default Carousel;
