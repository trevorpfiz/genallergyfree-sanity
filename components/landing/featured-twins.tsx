import Image from 'next/image';

import twinsImage from 'public/twins.jpg';

export function FeaturedTwins() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 md:pb-40">
      <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="relative h-[200px] w-full border-8 border-oldyellow md:h-[420px] md:w-[300px] lg:h-[540px] lg:w-[400px]">
          <Image
            fill
            src={twinsImage}
            alt="Zachary and Trevor"
            sizes="(max-width: 768px) 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 sm:max-w-[400px]">
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-white sm:text-5xl">
            Hi, we&apos;re Zachary and Trevor
          </h2>
          <p className="text-lg text-white">
            We are identical twins who have been struggling with allergies from a young age.
          </p>
          <p className="text-lg text-white">
            Starting at the age of 3 and into our early 20s, there have been many hurdles that
            we&apos;ve had to jump.
          </p>
        </div>
      </div>
    </div>
  );
}
