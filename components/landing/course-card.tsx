import Link from 'next/link';

import { Course } from '#/lib/sanity.queries';
import FillImage from '../content/fill-image';

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/learn/${course.slug}`}>
      <div className="flex w-[300px] transform-gpu flex-col gap-4 border-8 border-oldpink bg-white transition-transform hover:scale-105">
        <div className="relative h-[169px] w-full max-w-[300px]">
          <FillImage image={course.thumbnail} priority width={300} height={169} />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-2xl font-medium">{course.title}</h4>
            <div className="rounded-full bg-pink-100 py-[2px] text-center text-[11px] font-bold uppercase text-pink-500">
              For: {course.targetAudience}
            </div>
          </div>

          <p className="h-[87] text-sm text-gray-400">{course.heroDescription}</p>

          <button
            type="button"
            className="mt-2 rounded-lg bg-purple-100 px-8 py-2 text-sm font-semibold text-purple-400 hover:bg-purple-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </Link>
  );
}
