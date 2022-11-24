import Image from 'next/image';

import type { Course } from '#/lib/sanity.queries';
import heroImage from '#/public/strawberry-kid.jpg';
import { LinkButtonIntent } from '#/ui/LinkButton';
import PreviewLayout from '../preview/PreviewLayout';
import { CourseUpdates } from './course-updates';
import { FeaturedCourse } from './featured-course';
import Quotes from './quotes';

export default function IndexPage(props: {
  preview?: boolean;
  loading?: boolean;
  courses: Course[];
}) {
  const { preview, loading, courses } = props;

  const courseIntents: LinkButtonIntent[] = ['primary', 'secondary', 'tertiary'];

  return (
    <>
      <PreviewLayout preview={preview} loading={loading}>
        <section className="bg-oldyellow">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 pt-20 pb-40">
            <h1 className="text-center font-display text-5xl font-bold uppercase leading-none md:text-8xl">
              Let&apos;s stop{' '}
              <span className="uppercase text-oldpink underline decoration-black">allergy</span>!
            </h1>
            <h2 className="my-10 max-w-prose text-center text-lg font-normal md:text-2xl">
              We believe that everyone should be allergy free. Our free research-focused courses
              make this a reality for the generations to come.
            </h2>
            <Image
              src={heroImage}
              alt="Young boy reaching for strawberry on countertop."
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              placeholder="blur"
              priority
              style={{ width: '100%', height: 'auto', border: '8px solid black' }}
            />
          </div>
        </section>
        <div className="mt-[-5vw] h-0 w-0 max-w-full border-b-[5vw] border-r-[100vw] border-r-transparent border-b-black" />
        <section className="bg-black">
          <div className="mx-auto flex max-w-6xl flex-col px-4 pb-32 pt-20 sm:pt-40 sm:pb-60">
            <h3 className="font-display text-base font-bold uppercase text-white sm:text-2xl">
              Pave the way for the next generation
            </h3>
            <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-none sm:text-6xl">
              <span className="text-oldyellow">Know the struggles of allergies?</span>{' '}
              <span className="text-white">Looking to avoid them with your child?</span>{' '}
              <span className="text-oldpink">We&apos;ve got the courses for you.</span>
            </h2>
          </div>
        </section>
        <div className="mt-[-5vw] h-0 w-0 max-w-full border-l-[100vw] border-b-[5vw] border-l-transparent border-b-white" />
        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 pb-20">
            {courses.map((course, index) => (
              <FeaturedCourse course={course} key={course._id} intent={courseIntents[index]} />
            ))}
          </div>
        </section>
        <div className="mt-[-5vw] h-0 w-0 max-w-full border-r-[100vw] border-b-[5vw] border-r-transparent border-b-black" />
        <section className="bg-black">
          <CourseUpdates />
        </section>
        <div className="mt-[-5vw] h-0 w-0 max-w-full border-l-[100vw] border-b-[5vw] border-l-transparent border-b-oldyellow" />
        <section className="bg-oldyellow">
          <Quotes color="oldpink" />
        </section>
      </PreviewLayout>
    </>
  );
}
