import React from 'react'
import Main from '../../../components/CourseDetail/Main'
import PageLayout from '../../../components/layouts/PageLayout'
import { useRouter } from 'next/router'
import { cars } from '../../../data/cars'
import {
  Text
} from '@chakra-ui/react'


const CoursePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const selectedCar = cars.filter((car) => car.id === slug);
  console.log(selectedCar)
  return (
    <PageLayout>
      { selectedCar.length === 1 ? 
        <Main id={slug} productData={selectedCar[0]}/> :
        <Text>Product data not found</Text>
      }
    </PageLayout>
  )
}

export default CoursePage;
