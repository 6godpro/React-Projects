import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { events } from "@/event-data";
import Carousel from "./Carousel";

const Events = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      as="section"
      id="events"
      ref={ref}
      mb={{ base: "40px" }}
      mt={{ base: "0", md: "10px" }}
      display="flex"
      flexDir="column"
      alignItems="center"
      overflow="hidden"
      zIndex={999}
    >
      {/* Section Title */}
      <Box textAlign="center" mb={{ base: 5, md: 10 }} maxW="8xl" mx="auto">
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="700"
          mb={4}
          color="red.600"
        >
          Events
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "xl" }}
          textAlign="justify"
          lineHeight="1.7"
          color="gray.700"
          px={{ base: 5 }}
        >
          At Radiance Reach Charity, we organize impactful events that bring
          communities together to create lasting change. From educational
          workshops to healthcare drives and community outreach programs, our
          events are designed to empower individuals and uplift underprivileged
          communities. Be a part of our journey and help us make a difference.
        </Text>
      </Box>

      <Carousel events={events} />
    </Box>
  );
};

export default Events;
