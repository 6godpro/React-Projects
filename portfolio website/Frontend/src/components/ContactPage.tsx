import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Textarea,
  Button,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-scroll";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const props = {
    bg: "blackAlpha.200",
    color: "gray.500",
    height: "69px",
    size: "xs",
    variant: "filled",
    _hover: { bg: "blackAlpha.100" },
  };

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsLoading(false);
      const message: string = `Name: ${name}\nEmail: ${email}\nMessage: ${userMessage}`;
      console.log(message);
      // Add any additional logic after the loading state
    }, 2000);
  };

  return (
    <Box
      width={{ base: "100%", md: "1030px" }}
      height={{ base: "100%", md: "auto" }}
      paddingX={{ base: "20px", md: "0px" }}
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      <Input
        {...props}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Input
        {...props}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Textarea
        {...props}
        id="contact"
        placeholder="Type your message here"
        minHeight="231px"
        maxHeight="231px"
        value={userMessage}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ButtonGroup justifyContent="space-between">
        <Button
          bgColor="black"
          color="white"
          fontSize="20px"
          height="80px"
          isLoading={isLoading}
          loadingText="Submitting"
          marginBottom="20px"
          onClick={handleClick}
          spinnerPlacement="end"
          width="235px"
          _hover={{
            colorScheme: "blackAlpha",
          }}
        >
          Submit
        </Button>
        <Link to="top" smooth={true} duration={500}>
          <IconButton
            aria-label="Options"
            colorScheme="teal"
            icon={<ArrowUpIcon boxSize={6} />}
          ></IconButton>
        </Link>
      </ButtonGroup>
    </Box>
  );
};

export default ContactPage;
