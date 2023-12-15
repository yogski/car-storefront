import * as React from 'react'
import { cars } from '../../data/cars'
import CourseCard from './CourseCard'
import CourseGrid from './CourseGrid'

const CardLayout = () => (
  <CourseGrid>
    {cars.map((car) => (
      <CourseCard key={car.id} course={car} />
    ))}
  </CourseGrid>
)

export default CardLayout
