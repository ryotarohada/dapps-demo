import { Box, Heading, HStack, List, ListItem } from '@chakra-ui/react'

export const NavBar: React.FC = () => {
  return (
    <Box mb={50} pb={20} borderBottom='1px solid #707070'>
      <Box>
        <Heading>dApps Demo</Heading>
      </Box>
    </Box>
  )
}
