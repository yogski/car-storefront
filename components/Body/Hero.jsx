import { Box, Text, Center } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box mb={{ base: 5, md: 10 }}>
      <Center>
        <Text fontSize="4xl" >CARRPLACE</Text>
      </Center>
      <Center>
        <Text fontSize="2xl">Jual Beli Mobil di Sini</Text>
      </Center>
    </Box>
  )
}

export default Hero
