import { Box, SimpleGrid, Title } from '@mantine/core';
import { CourseSanity } from 'additional';

import CoursePreview from './course-preview';

export default function MoreCourses({ courses }: { courses: CourseSanity[] }) {
  return (
    <Box component="section">
      <Title
        order={2}
        size="2.75rem"
        weight="bold"
        mb="xl"
        sx={(theme) => ({
          lineHeight: '1.25',
          letterSpacing: '-0.025em',

          [theme.fn.largerThan('sm')]: { fontSize: '4.5rem' },
        })}
      >
        More Courses
      </Title>
      <SimpleGrid mb={112} breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 128 }]}>
        {courses.map((course, index) => (
          <CoursePreview key={index} course={course} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
