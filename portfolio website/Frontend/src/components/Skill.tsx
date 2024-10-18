import { Box, Text } from "@chakra-ui/react"

interface Props {
  title: string
  description: string
}

const Skill = ({title, description}: Props) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default Skill;