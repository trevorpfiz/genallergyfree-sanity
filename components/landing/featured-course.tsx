import cn from 'classnames';
import Link from 'next/link';

import { CourseSanity } from 'additional';
import FillImage from '../content/fill-image';

interface CourseProps {
  course: CourseSanity;
  color: string;
}

export function FeaturedCourse({ course, color = 'pink' }: CourseProps) {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:even:flex-row-reverse">
      <div className="flex flex-col gap-2 sm:max-w-[400px]">
        <h5 className="font-display text-sm font-bold uppercase">Featured Course</h5>
        <h2
          className={cn('font-display text-4xl font-bold uppercase leading-none sm:text-5xl', {
            'text-pink-400': color === 'pink',
            'text-blue-400': color === 'blue',
            'text-green-400': color === 'green',
          })}
        >
          {course.title}
        </h2>
        <h3 className="font-display text-lg font-bold uppercase">{`Perfect For ${course.targetAudience}`}</h3>
        <h4 className="text-lg">{course.heroDescription}</h4>
        <Link href={`/learn/${course.slug}`}>
          <button
            type="button"
            className={cn(
              'mt-2 rounded-full px-10 py-3 text-lg font-semibold uppercase text-white',
              {
                'bg-pink-400': color === 'pink',
                'bg-blue-400': color === 'blue',
                'bg-green-400': color === 'green',
                'hover:bg-pink-500': color === 'pink',
                'hover:bg-blue-500': color === 'blue',
                'hover:bg-green-500': color === 'green',
              }
            )}
          >
            Get Started
          </button>
        </Link>
      </div>
      <div className="relative h-[200px] w-full border-8 border-black md:h-[420px] md:w-[300px] lg:h-[540px] lg:w-[400px]">
        <FillImage image={course.thumbnail} priority width={400} height={540} />
      </div>
    </div>
  );
}
