import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogHeader,
  DialogCloseTrigger,
  CloseButton,
  DialogBody,
  SimpleGrid,
  Image
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface EventDialogProps {
  eventOpen: boolean;
  onEventClose: () => void;
  event: { title: string; images: string[] } | null;
  handleImageClick: (img: string) => void;
}

const EventDialog = ({eventOpen, onEventClose, event, handleImageClick}: EventDialogProps) => {
  return (
    <DialogRoot
      size={{ mdDown: "full", md: "cover" }}
      placement="top"
      motionPreset="slide-in-bottom"
      scrollBehavior="outside"
      open={eventOpen}
      onOpenChange={(e) => (e.open ? null: onEventClose())}
    >
      <DialogBackdrop bg="blackAlpha.600" backdropFilter="blur(6px)" />
      <DialogPositioner>
        <DialogContent
          maxW="6xl"
          w={{ base: "vw", md: "95vw" }}
          maxH="90vh"
          overflowY="auto"
          p={{ base: 0, md: 6 }}
          rounded={{ base: "none", md: "lg" }}
        >
          <DialogHeader fontWeight={600}>{event?.title}</DialogHeader>
          <DialogCloseTrigger asChild>
            <CloseButton size="xl" _hover={{ bg: "red.600", color: "white" }} />
          </DialogCloseTrigger>
          <DialogBody>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              {event?.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImageClick(img)}
                >
                  <Image
                    key={idx}
                    src={img}
                    alt={`${event?.title} image ${idx + 1}`}
                    objectFit="cover"
                    rounded="lg"
                    shadow="md"
                    h="60"
                    w="full"
                  />
                </motion.div>
              ))}
            </SimpleGrid>
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

export default EventDialog;
