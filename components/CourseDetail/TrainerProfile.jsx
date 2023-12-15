import {
  chakra,
  Box,
  Text,
  Stack,
  Flex,
  Link,
  Badge,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiMessenger } from 'react-icons/si'
import WhatsAppButton from '../Button/WhatsAppButton'

export default function TrainerProfile({sellerData}) {
  const fullPath = window.location.href;

  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Hubungi Agen Kami
      </chakra.h1>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="lg"
        rounded="lg"
        p={{ base: 4, md: 6 }}
        textAlign="center"
      >
        <Stack direction="column" alignItems="center" flex={1}>
          <Avatar
            size="xl"
            src={ sellerData.photoUrl || 
              'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&w=200&h=200&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
            }
            alt="Avatar Alt"
            mb={2}
            pos="relative"
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize="2xl" fontFamily="body">
            {sellerData.sellerName}
          </Heading>
          <Text fontWeight={600} color="gray.500" mb={4}>
            {`+${sellerData.contact}`}
          </Text>
        </Stack>
        <Stack direction="column" flex={2} justifyContent="center" spacing={3}>
          <Text
            textAlign="center"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            noOfLines={4}
          >
            {sellerData.sellerDescription}
          </Text>

          <WhatsAppButton phoneNumber={sellerData.contact} message={`Halo ${sellerData.sellerName}, saya tertarik dengan mobil ini: ${fullPath}`} />
        </Stack>
      </Stack>
    </Box>
  )
}
