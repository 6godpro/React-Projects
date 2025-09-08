import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogCloseTrigger,
  Image,
} from "@chakra-ui/react";

interface LightboxDialogProps {
  lightboxOpen: boolean;
  onLightboxOpen: () => void;
  onLightboxClose: () => void;
  image: string | null;
}

const LightboxDialog = ({
  lightboxOpen,
  onLightboxOpen,
  onLightboxClose,
  image,
}: LightboxDialogProps) => {
  return (
    <DialogRoot
      size="cover"
      placement={{ base: "center", md: "top" }}
      open={lightboxOpen}
      onOpenChange={(e) => (e.open ? onLightboxOpen() : onLightboxClose())}
    >
      <DialogBackdrop bg="blackAlpha.600" backdropFilter="blur(6px)" />
      <DialogPositioner>
        <DialogContent
          maxW="fit-content"
          maxH={{ base: "50vh" }}
          p={0}
          bg="transparent"
          boxShadow="none"
        >
          <DialogCloseTrigger />
          {image && (
            <Image
              src={image}
              alt="Lightbox"
              maxH="90vh"
              maxW="90vw"
              objectFit="contain"
              borderRadius="md"
            />
          )}
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};

export default LightboxDialog;
