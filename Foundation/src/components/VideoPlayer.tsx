import { Box } from "@chakra-ui/react";
import { useRef } from "react";

type VideoSectionProps = {
  about: string; // video source
  isFullScreen: boolean;
  setFullScreen: (arg0: boolean) => void;
};

const VideoSection = ({ about, isFullScreen, setFullScreen }: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    videoRef.current?.pause();
    setFullScreen(false);
  };

  return (
    <Box position="relative" flexBasis={{ base: "100%", md: "60%" }} w="full">
      {/* Fullscreen Overlay */}
      {isFullScreen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          zIndex={9999}
          bg="blackAlpha.800"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleClose}
        >
          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "95%", md: "80%" }}
            h={{base: "70vh", md: "100vh"}}
          >
            <video
              ref={videoRef}
              src={about}
              controls
              playsInline
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking video
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VideoSection;
