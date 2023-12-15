import * as React from 'react'
import {
  Box,
  Image,
  Link,
  Icon,
  Flex,
  Stack,
  Text,
  Button,
  HStack,
  Skeleton,
  AspectRatio,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaStar } from 'react-icons/fa'
import { BsClock, BsBarChartLine } from 'react-icons/bs'
import { MdLanguage, MdAirlineSeatLegroomExtra, MdDirectionsCar, MdOutlinePeopleAlt, MdOutlineSpeed, MdCalendarToday } from 'react-icons/md'
import Badge from '../shared/Badge'
import VerticalDivider from '../shared/VerticalDivider'
import AvailabilityBox from './AvailabilityBox'
import { displayAmount } from '../../helpers/formatter'

const CourseCard = (props) => {
  const { course, rootProps } = props
  const { name, imageUrl, currency, price, id, specs } = course
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Stack
      spacing={3}
      {...rootProps}
      w={{ base: 'auto', md: '17rem' }}
      h={{ base: 'auto', md: '26.5rem' }}
    >
      <Box position="relative">
        {/* the ratio below determines the image ratio. configure here for suitable display */}
        <AspectRatio ratio={20 / 17}> 
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl',
            })}
          />
        </AspectRatio>
        { course.flag ? <AvailabilityBox status={course.flag} /> : null}
      </Box>

      {/* Course name and Price  */}
      <Stack spacing={2}>
        <Stack
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Text
            fontWeight="medium"
            fontSize="md"
            color={textColor}
            noOfLines={2}
          >
            {name}
          </Text>
        </Stack>

        {/* Star (total  Reviews) | Total enrollments */}
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          alignItems={{ base: 'flex-start', sm: 'center' }}
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            {currency}{displayAmount(price)}
          </Text>
        </Stack>

        {/*  Badges */}
        <Flex direction="row" mt={0} flexWrap="wrap">
          { specs.capacity ? <Badge icon={MdOutlinePeopleAlt} data={`${specs.capacity} orang`} size="sm" /> : null }
          { specs.kilometers ? <Badge icon={MdOutlineSpeed} data={`${displayAmount(specs.kilometers)} KM`} size="sm" /> : null }
          { specs.transmission ? <Badge icon={MdAirlineSeatLegroomExtra} data={specs.transmission.toUpperCase()} size="sm" /> : null }
          { specs.manufactureYear ? <Badge icon={MdCalendarToday} data={specs.manufactureYear} size="sm" /> : null }
        </Flex>
      </Stack>

      <NextLink
        href={{
          pathname: '/course/[slug]',
          query: {
            slug: id,
          },
        }}
        passHref
      >
        <Button as={Link} size="md" colorScheme="teal" variant="solid">
          Kontak Agen
        </Button>
      </NextLink>
    </Stack>
  )
}

export default CourseCard
