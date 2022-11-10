import Link from 'next/link';

export function CourseUpdates() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-between px-4 pt-20 pb-28 sm:pb-40">
      <h3 className="font-display text-2xl font-bold uppercase text-oldyellow sm:text-5xl">
        Course updates <span className="text-white">included</span>!
      </h3>
      <h4 className="text-md mt-8 text-center text-white sm:text-lg">
        Continue to protect your child knowing you are getting access to the best cutting edge
        research with new course updates over time.
      </h4>
      <Link href="/courses">
        <button
          type="button"
          className="mt-8 rounded-full bg-oldyellow px-10 py-3 font-semibold uppercase text-black hover:bg-[#f1e100]"
        >
          Go to courses
        </button>
      </Link>
    </div>
  );
}
