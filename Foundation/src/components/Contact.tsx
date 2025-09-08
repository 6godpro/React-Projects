import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import SocialButton from "./SocialButton";
import { LuMail, LuPhone } from "react-icons/lu";
import { motion } from "framer-motion";

// form fields
interface FormValues {
  name: string;
  email: string;
  message: string;
}

const MotionButton = motion.create(Button);

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(!loading);
    setButtonText("");

    await emailjs
      .send(
        "service_ichkf3d",
        "template_9mv0bjq",
        { from_email: data.email, message: data.message },
        "8fyGZVkg62uXJ5QNP"
      )
      .then(() => {
        alert("Message sent");
        setLoading(false);
        setButtonText("Sent");
        reset();
      })
      .catch(() => {
        alert("Message sending failed");
      });

    setTimeout(() => {
      setButtonText("Send Message");
    }, 1000);
    console.log(data);
  };

  return (
    <Flex
      id="contact us"
      width={{base: "90vw", md: "80vw"}}
      justifyContent="center"
      margin="0 auto"
      flexDir={{ base: "column", md: "row" }}
      marginBottom={{ base: "20px", md: "100px" }}
    >
      {/* Contact Us text */}
      <Flex flexBasis="50%" flexDir="column">
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="700"
          marginBottom="2"
          textAlign="center"
          color="red.600"
        >
          Get in touch
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "xl" }}
          textAlign="justify"
          marginBottom="4"
          width={{ base: "100%", md: "90%" }}
          color="gray.700"
          lineHeight="1.7"
        >
          Ready to get involved or have questions? We'd love to hear from you.
          Reach out and let's start making a difference together.
        </Text>

        {/* Social media handles */}
        <Flex
          alignItems={{ md: "center" }}
          gap={{ base: 0, md: 5 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Text as="p" fontSize={{ base: "sm", md: "xl" }} color="gray.700">
            Check us out on our socials
          </Text>
          <Box display="flex" gap={2} mt={{ base: 2 }}>
            <SocialButton
              icon={<FaInstagram />}
              bg="red.100"
              color="red.600"
              href="https://www.instagram.com"
              shadow="0 0 20px rgba(220, 38, 38, 0.7)"
            />
            <SocialButton
              icon={<FaFacebook />}
              bg="blue.100"
              color="blue.700"
              href="https://www.facebook.com"
              shadow="0 0 20px rgba(23, 61, 166, 0.7)"
            />
            <SocialButton
              icon={<FaTwitter />}
              bg="blue.100"
              color="blue.400"
              href="https://www.twitter.com"
              shadow="0 0 20px rgba(96, 165, 250, 0.7)"
            />
          </Box>
        </Flex>
        <Flex mt={6} flexDir={{ base: "column", md: "row" }} gap={4}>
          <Flex w={{ md: "35%" }} alignItems="center" gap={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={10}
              h={10}
              bg="red.600"
              borderRadius="100%"
              p={2}
            >
              <LuMail size={20} color="white" />
            </Box>
            <Text color="blackAlpha.700" fontSize={{ base: "sm", md: "md" }}>
              info@radiancereach.org
            </Text>
          </Flex>
          <Flex w={{ md: "35%" }} alignItems="center" gap={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={10}
              h={10}
              bg="red.600"
              borderRadius="100%"
              p={2}
            >
              <LuPhone size={20} color="white" />
            </Box>
            <Text color="blackAlpha.700" fontSize={{ base: "sm", md: "md" }}>
              +2347012345678
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Message area */}
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexBasis="50%"
        bg="whiteAlpha.500"
        border="1px rgba(158, 147, 147, 0.2) solid"
        borderRadius="10px"
        p={2}
        mt={{ base: 4 }}
      >
        <Stack gap="4" mt={{ base: "10px", md: "0" }}>
          <Box
            as="span"
            fontSize={{ base: "sm", md: "xl" }}
            color="red.600"
            fontWeight={600}
          >
            LEAVE A MESSAGE
          </Box>
          <Input
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: { value: 3, message: "Please enter a valid name" },
            })}
            variant="outline"
            placeholder="Name"
            size="sm"
            maxW={{ base: "", md: "80%" }}
            border={
              errors.email
                ? "1px solid red"
                : "1px rgba(158, 147, 147, 0.2) solid"
            }
            _focus={{ border: "none" }}
            color="black"
          />
          {errors.name && (
            <Text fontSize="12px" color="red.500">
              {errors.name.message}
            </Text>
          )}
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            })}
            variant="outline"
            placeholder="Email"
            size="sm"
            maxW={{ base: "", md: "80%" }}
            border={
              errors.email
                ? "1px solid red"
                : "1px rgba(158, 147, 147, 0.2) solid"
            }
            _focus={{ border: "none" }}
            color="black"
          />
          {errors.email && (
            <Text fontSize="12px" color="red.500">
              {errors.email.message}
            </Text>
          )}
          <Textarea
            {...register("message", { required: "Please enter a message" })}
            variant="outline"
            placeholder="Enter your message here"
            size="sm"
            minH={{ base: "120px", md: "120px" }}
            maxW={{ base: "", md: "80%" }}
            border={
              errors.email
                ? "1px solid red"
                : "1px rgba(158, 147, 147, 0.2) solid"
            }
            _focus={{ border: "none" }}
            resize="none"
            color="black"
          />
          {errors.message && (
            <Text fontSize="12px" color="red.500">
              {errors.message.message}
            </Text>
          )}

          <MotionButton
            type="submit"
            bgColor="red.600"
            width={{ base: "100%", md: "40%" }}
            rounded="full"
            loading={loading}
            spinner={<BeatLoader size={8} color="#fff" />}
            loadingText={buttonText}
            disabled={false}
            color="white"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 800 }}
            _hover={{ transform: "scale(1.05)" }}
          >
            {buttonText}
          </MotionButton>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Contact;
