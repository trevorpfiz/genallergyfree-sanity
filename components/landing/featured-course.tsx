import clsx from 'clsx';

import type { Course } from '#/lib/sanity.queries';
import LinkButton, { LinkButtonIntent } from '#/ui/LinkButton';
import FillImage from '../content/fill-image';

interface FeaturedCourseProps {
  course: Course;
  intent: LinkButtonIntent;
}

export function FeaturedCourse({ course, intent = 'primary' }: FeaturedCourseProps) {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:even:flex-row-reverse">
      <div className="flex flex-col gap-2 md:max-w-[400px]">
        <span className="font-display text-sm font-bold uppercase">Featured Course</span>
        <h2
          className={clsx('font-display text-4xl font-bold uppercase leading-none sm:text-5xl', {
            'text-pink-400': intent === 'primary',
            'text-blue-400': intent === 'secondary',
            'text-green-400': intent === 'tertiary',
          })}
        >
          {course.title}
        </h2>
        <h3 className="font-display text-lg font-bold uppercase">{`Perfect For ${course.targetAudience}`}</h3>
        <p className="text-lg">{course.heroDescription}</p>
        <LinkButton
          href={`/learn/${course.slug}`}
          intent={intent}
          className="mt-2 max-w-fit px-10 py-3 text-lg uppercase"
        >
          Get Started
        </LinkButton>
      </div>
      <div className="relative h-[420px] w-full border-8 border-black md:w-[300px] lg:h-[540px] lg:w-[400px]">
        <FillImage image={course.thumbnail} priority width={400} height={540} />
      </div>
    </div>
  );
}
