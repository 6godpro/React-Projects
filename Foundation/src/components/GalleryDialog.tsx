import { events } from "@/event-data";
import {
  DialogRoot,
  DialogTrigger,
  Button,
  Icon,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogHeader,
  DialogCloseTrigger,
  CloseButton,
  DialogBody,
  VStack,
  Box,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuGrid3X3 } from "react-icons/lu";

interface GalleryDialogProps {
  galleryOpen: boolean;
  onGalleryOpen: () => void;
  onGalleryClose: () => void;
  handleEventClick: (event: { title: string; images: string[] }) => void;
}

const GalleryDialog = ({
  galleryOpen,
  onGalleryOpen,
  onGalleryClose,
  handleEventClick
}: GalleryDialogProps) => {
  return (
    <DialogRoot
      size={{ mdDown: "full", md: "cover" }}
      placement="top"
      motionPreset="slide-in-bottom"
      scrollBehavior="outside"
      open={galleryOpen}
      onOpenChange={(e) => (e.open ? onGalleryOpen() : onGalleryClose())}
    >
      <DialogTrigger asChild>
        <Button
          mt={6}
          bg="red.600"
          color="white"
          rounded="full"
          px={10}
          _hover={{
            bg: "white",
            color: "red.600",
            border: "1px solid",
            borderColor: "red.600",
          }}
          w={{base: "50%", md: "15%"}}
        >
          View All <Icon as={LuGrid3X3} boxSize={4} />
        </Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogPositioner>
        <DialogContent
          maxW="6xl"
          w={{ base: "vw", md: "95vw" }}
          maxH="90vh"
          overflowY="auto"
          p={{ base: 0, md: 6 }}
          rounded={{ base: "none", md: "lg" }}
        >
          <DialogHeader fontWeight={600} fontSize="xl">
            GALLERY
          </DialogHeader>
          <DialogCloseTrigger asChild>
            <CloseButton size="xl" _hover={{ bg: "red.600", color: "white" }} />
          </DialogCloseTrigger>
          <DialogBody>
            <VStack align="stretch" gap={8}>
              {events.map((event, idx) => (
                <Box key={idx}>
                  <Text fontWeight="bold" mb={3} fontSize="sm">
                    {event.title}
                  </Text>
                  <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
                    {event.images.slice(0, 4).map((img, index) => (
                      <motion.div
                        key={index}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEventClick(event)}
                      >
                        <Image
                          src={img}
                          alt={`${event.title} image ${index + 1}`}
                          objectFit="cover"
                          rounded="lg"
                          shadow="md"
                          h={{ base: 32, md: 60 }}
                          w="full"
                        />
                      </motion.div>
                    ))}
                    {event.images.length > 4 && (
                      <Text fontSize="sm" color="gray.500" cursor="pointer">
                        {" "}
                        +{event.images.length - 4} more photos
                      </Text>
                    )}
                  </SimpleGrid>
                </Box>
              ))}
            </VStack>
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

export default GalleryDialog;
