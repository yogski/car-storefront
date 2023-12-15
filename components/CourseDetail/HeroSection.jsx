import React, { Fragment } from 'react'
import {
  chakra,
  Text,
  Image,
  Stack,
  Flex,
  Icon,
  Skeleton,
  Divider,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'
import Badge from '../shared/Badge'
import { BsClock, BsBarChartLine } from 'react-icons/bs'
import { MdOutlinePeopleAlt, MdOutlineSpeed, MdAirlineSeatLegroomExtra, MdCalendarToday } from 'react-icons/md'
import { FaPlay, FaStar } from 'react-icons/fa'
import FormModal from './FormModal'
import VerticalDivider from '../shared/VerticalDivider'
import { displayAmount } from '../../helpers/formatter'

const HeroSection = ({ productData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const textColor = useColorModeValue('gray.600', 'gray.400')
  console.log('check productData in HeroSection', productData)
  return (
    <Fragment>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        justifyContent="space-between"
        mb={10}
        w="100%"
      >
        {/* Left Panel */}
        <Stack spacing={5} mt={5} w={{ base: '100%', md: '60%' }}>
          <Image
              src={productData.imageUrl}
              alt={productData.name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            />

          <chakra.h1 fontSize="3xl" fontWeight="bold">
            {productData.name}
          </chakra.h1>
          <Text fontWeight="medium" color={textColor} noOfLines={2}>
            {productData.description}
          </Text>
          <Divider />
          <Flex direction="row" mt={2} flexWrap="wrap">
            { productData.specs.capacity ? <Badge icon={MdOutlinePeopleAlt} data={`${productData.specs.capacity} orang`} size="md" /> : null }
            { productData.specs.kilometers ? <Badge icon={MdOutlineSpeed} data={`${displayAmount(productData.specs.kilometers)} KM`} size="md" /> : null }
            { productData.specs.transmission ? <Badge icon={MdAirlineSeatLegroomExtra} data={productData.specs.transmission.toUpperCase()} size="md" /> : null }
            { productData.specs.manufactureYear ? <Badge icon={MdCalendarToday} data={productData.specs.manufactureYear} size="md" /> : null }
          </Flex>
        </Stack>
      </Stack>
      {isOpen && (
        <FormModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
    </Fragment>
  )
}

export default HeroSection
