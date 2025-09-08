import { useRef } from "react";
import { Box, SimpleGrid, Text, Button, List } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LuHandshake, LuCircleCheck } from "react-icons/lu";
import { FaDonate } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const MotionButton = motion(Button);

const GetInvolved = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const ways = [
    {
      icon: MdOutlineVolunteerActivism,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and make a direct impact in communities. Whether you have a few hours or can commit long-term, we have opportunities that match your schedule and skills.",
      benefits: [
        "Flexible scheduling",
        "Skills development",
        "Global community",
        "Personal fulfillment",
      ],
      cta: "Join Volunteers",
    },
    {
      icon: LuHandshake,
      title: "Partner",
      description:
        "Collaborate with us as a corporate partner or organization. Together, we can amplify our impact and create sustainable solutions that benefit communities worldwide.",
      benefits: [
        "Brand partnership",
        "CSR opportunities",
        "Employee engagement",
        "Measurable impact",
      ],
      cta: "Become Partner",
    },
    {
      icon: FaDonate,
      title: "Donate",
      description:
        "Your financial support directly funds our programs and helps us reach more communities in need. Every contribution, no matter the size, makes a real difference.",
      benefits: [
        "100% transparency",
        "Tax deductible",
        "Regular updates",
        "Direct impact",
      ],
      cta: "Donate Now",
    },
  ];

  return (
    <Box
      id="get involved"
      as="section"
      ref={ref}
      px={{ base: 4, md: 10 }}
      mb={{ base: 5, md: 20 }}
    >
      {/* Section Title */}
      <Box textAlign="center" mb={{ base: 5, md: 10 }} maxW="7xl" mx="auto">
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="700"
          mb={4}
          color="red.600"
        >
          Get Involved
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "xl" }}
          lineHeight="1.7"
          color="gray.700"
        >
          There are many ways to support our mission and make a lasting
          difference in the lives of those who need it most.
        </Text>
      </Box>

      {/* Content Section */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: 8, md: 10 }}
        width="100%"
        maxW="8xl"
        mx="auto"
      >
        <Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 10 }}>
            {ways.map((way, idx) => {
              return (
                <Box
                  key={idx}
                  bg="whiteAlpha.500"
                  p={8}
                  rounded="2xl"
                  border="1px solid rgba(158, 147, 147, 0.2)"
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: "sm",
                    transform: "translateY(-10px)",
                    bg: "white",
                  }}
                >
                  <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                    textAlign="center"
                  >
                    {/* Icon that scales on parent hover */}
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      w={20}
                      h={20}
                      bg="red.600"
                      borderRadius="100%"
                    >
                      <way.icon size={50} color="white" />
                    </Box>

                    <Box
                      as="span"
                      fontSize="xl"
                      fontWeight="600"
                      color="red.600"
                    >
                      {way.title}
                    </Box>

                    <Text
                      as="p"
                      color="gray.600"
                      fontSize={{ base: "xs", md: "md" }}
                    >
                      {way.description}
                    </Text>
                  </Box>

                  {/* Benefits */}
                  <Box
                    my={{ base: 4, md: 10 }}
                    w="full"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={2}
                  >
                    {way.benefits.map((benefit, idx) => {
                      return (
                        <List.Root key={idx} variant="plain">
                          <List.Item
                            as="span"
                            color="gray.700"
                            fontSize={{ base: "xs", md: "md" }}
                          >
                            <List.Indicator asChild color="red.600">
                              <LuCircleCheck />
                            </List.Indicator>
                            {benefit}
                          </List.Item>
                        </List.Root>
                      );
                    })}
                  </Box>

                  {/* CTA */}
                  <MotionButton
                    w="full"
                    bg="rgb(220,38, 38)"
                    rounded="full"
                    color="white"
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 800 }}
                  >
                    {way.cta}
                  </MotionButton>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInvolved;
