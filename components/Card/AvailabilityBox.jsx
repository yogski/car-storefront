import * as React from 'react'
import {
  Box,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const AvailabilityBox = (props) => {
  const { status, bgColor, rootProps } = props
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
    position="absolute"
    top="3"
    left="3"
    p={1.5}
    bg={bgColor || "yellow.600"}
    rounded="md"
  >
    <Text fontSize="xs" lineHeight={1}>
      { status }
    </Text>
  </Box>
)
}

export default AvailabilityBox
