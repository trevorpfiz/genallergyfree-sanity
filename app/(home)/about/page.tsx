import ScrollUp from '#/components/ScrollUp';
import { FeaturedAbout } from 'components/landing/featured-about';
import { FeaturedTwins } from 'components/landing/featured-twins';
import Quotes from 'components/landing/quotes';

export default function About() {
  return (
    <>
      <ScrollUp />
      <section className="bg-oldyellow">
        <div className="mx-auto flex max-w-6xl flex-col justify-between px-4 py-20 md:pb-40">
          <h1 className="font-display text-5xl font-bold uppercase leading-none md:text-8xl">
            We&apos;re glad you&apos;re here
          </h1>
          <h2 className="my-4 max-w-prose text-lg font-normal md:my-10 md:text-xl">
            Knowing us on a deeper level will help you understand our passion to help people and
            curb this allergy epidemic.
          </h2>
          <h3 className="font-display text-2xl font-bold uppercase text-oldpink">
            We can fight this together!
          </h3>
        </div>
      </section>
      <div className="mt-[-5vw] h-0 w-0 max-w-full border-b-[5vw] border-r-[100vw] border-r-transparent border-b-black" />
      <section className="bg-black">
        <FeaturedTwins />
      </section>
      <div className="mt-[-5vw] h-0 w-0 max-w-full border-l-[100vw] border-b-[5vw] border-l-transparent border-b-white" />
      <section className="bg-white">
        <FeaturedAbout />
      </section>
      <div className="mt-[-5vw] h-0 w-0 max-w-full border-r-[100vw] border-b-[5vw] border-r-transparent border-b-oldpink" />
      <section className="bg-oldpink">
        <Quotes color="oldyellow" />
      </section>
    </>
  );
}
