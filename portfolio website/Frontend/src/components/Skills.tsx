import { Box, Text } from "@chakra-ui/react";
import Skill from "./Skill";

const SkillArea = () => {
  return (
    <Box marginBottom="60px" paddingX={{ base: "0px", md: "100px" }}>
      <Box marginBottom="32px" position="relative" width="100%">
        <Text textAlign="center" fontWeight="600" fontSize="32px">
          My Design Skills
        </Text>
      </Box>
      <Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap="20px"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={{ base: "20px", md: "32px" }}
        >
          <Skill
            description="I make research based on user experience for proper functionality of the product."
            title="User Experience Design"
          />
          <Skill
            description="I design responsive websites making sure the products are tailored properly to the users."
            title="Web Design"
          />
          <Skill
            description="I prototype design screens for accurate flow reviews."
            title="Prototyping"
          />
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap="20px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skill
            description="I create responsive designs for multiple use on the different available scree sizes."
            title="Responsive Design"
          />
          <Skill
            description="I create aesthetically pleasing and seamless designs."
            title="User Interface Design"
          />
          <Skill
            description="I design apps tailored to keep the product useful to users continuously."
            title="Mobile Application Design"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillArea;
