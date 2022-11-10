import { CourseSanity } from 'additional';
import { CourseCard } from 'components/landing/course-card';

import { indexQuery } from '../../lib/queries';
import { getClient } from '../../lib/sanity.server';

async function fetchCourses() {
  const res = await getClient(false).fetch(indexQuery);

  return res;
}

export default async function Courses() {
  const data: CourseSanity[] = await fetchCourses();

  return (
    <>
      <section className="bg-oldyellow pt-[88px]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-20 md:pb-32">
          <h1 className="font-display text-5xl font-bold uppercase leading-none md:text-8xl">
            Our Courses
          </h1>
        </div>
      </section>
      <div className="mt-[-5vw] h-0 w-0 max-w-full border-b-[5vw] border-r-[100vw] border-r-transparent border-b-black" />
      <section className="bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 py-20 md:pb-32 lg:flex-row">
          {data.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
