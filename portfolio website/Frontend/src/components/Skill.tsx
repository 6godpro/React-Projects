import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
}

const Skill = ({ title, description }: Props) => {
  return (
    <Box textAlign="center" display="flex" flexDirection="column" gap="8px" width="370px">
      <Text fontSize="20px" fontWeight="600">{title}</Text>
      <Text fontSize="17px">{description}</Text>
    </Box>
  );
};

export default Skill;
