import React from 'react'
import { Text, Box, Link, Stack, Icon, HStack } from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import HeroSection from './HeroSection'
import SpecificationSection from './SpecificationSection'
import FeaturesSection from './FeaturesSection'
import SkillsSection from './SkillsSection'
import OverviewSection from './OverviewSection'
import ReviewsSection from './ReviewSection'
import NextLink from 'next/link'
import {
  courses,
  lessons,
  features,
  skills,
  reviewData,
  ratingSummary,
  overviewDescription,
} from '../../data/courses'
import TrainerProfile from './TrainerProfile'

const Main = (props) => {
  const { id, productData, rootProps } = props

  return (
    <Box>
      <BreadcrumbSection name={id} />
      <HeroSection productData={productData} />
      <Stack spacing={10} maxW="3xl">
        <SpecificationSection lessons={lessons} />
        {/* <FeaturesSection features={features} />
        <SkillsSection skills={skills} />
        <OverviewSection description={overviewDescription} /> */}
        <TrainerProfile sellerData={productData.seller} />
        {/* <ReviewsSection reviewData={reviewData} ratingSummary={ratingSummary} /> */}
      </Stack>
    </Box>
  )
}

const BreadcrumbSection = ({name}) => {
  return (
    <HStack alignItems="center">
      <NextLink
        href={{
          pathname: '/',
        }}
        passHref
      >
        <Link>Home</Link>
      </NextLink>
      <Icon as={BiChevronRight} mt="2px !important" />
      <Text>{name || 'breadcrumb-placeholder'}</Text>
    </HStack>
  )
}

export default Main
