import React from 'react'
import {
  chakra,
  Box,
  Icon,
  Text,
  Button,
  Flex,
  Stack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { MdArrowForwardIos } from "react-icons/md";
import VerticalDivider from '../shared/VerticalDivider'
import NextLink from 'next/link'

const SpecificationSection = ({ lessons }) => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Spesifikasi
      </chakra.h1>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        borderWidth="0 1px 0 1px"
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.600')}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left" fontWeight="bold">
                Detail Spesifikasi Mobil
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack direction="column" spacing={4}>
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <HStack>
                  <Icon
                    as={MdArrowForwardIos}
                    w={5}
                    h={5}
                    color="teal"
                  />
                  <chakra.h6 fontSize="lg" fontWeight="500">
                    Pajak sampai 2025
                  </chakra.h6>
                </HStack>
              </Flex>
            </Stack>
            <Stack direction="column" spacing={4}>
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <HStack>
                  <Icon
                    as={MdArrowForwardIos}
                    w={5}
                    h={5}
                    color="teal"
                  />
                  <chakra.h6 fontSize="lg" fontWeight="500">
                    Warna sky grey shimmer
                  </chakra.h6>
                </HStack>
              </Flex>
            </Stack>
            <Stack direction="column" spacing={4}>
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <HStack>
                  <Icon
                    as={MdArrowForwardIos}
                    w={5}
                    h={5}
                    color="teal"
                  />
                  <chakra.h6 fontSize="lg" fontWeight="500">
                    Kondisi aman dengan segala kemungkinan.
                  </chakra.h6>
                </HStack>
              </Flex>
            </Stack>
            <Stack direction="column" spacing={4}>
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <HStack>
                  <Icon
                    as={MdArrowForwardIos}
                    w={5}
                    h={5}
                    color="teal"
                  />
                  <chakra.h6 fontSize="lg" fontWeight="500">
                    Bahan bakar bensin
                  </chakra.h6>
                </HStack>
              </Flex>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default SpecificationSection
