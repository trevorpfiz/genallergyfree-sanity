import Image from 'next/image';

import couchImage from 'public/couch.jpg';
import danceImage from 'public/dance.jpg';
import glassesImage from 'public/glasses.jpg';

export function FeaturedAbout() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between px-4 pb-20">
      <div className="my-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:even:flex-row-reverse">
        <div className="flex flex-col gap-4 sm:max-w-[400px]">
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-oldpink sm:text-5xl">
            Our Story
          </h2>
          <p className="text-lg">
            It started similar between us; swollen itchy throats and stomach pain after eating
            certain foods.
          </p>
          <p className="text-lg">
            As time went on, however, differences became more apparent. While we both had seasonal
            allergies and Oral Allergy Syndrome, only one of us was developing anaphylactic food
            allergies.
          </p>
          <p className="text-lg">
            Hmm, interesting. Identical twins with near-identical DNA have profound differences in
            their allergies. This prompted us to dive into the details, and Generation Allergy Free
            was born.
          </p>
        </div>
        <div className="relative h-[200px] w-full border-8 border-black md:h-[420px] md:w-[300px] lg:h-[540px] lg:w-[400px]">
          <Image
            fill
            src={glassesImage}
            alt="One short and one tall glass."
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
      <div className="my-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:even:flex-row-reverse">
        <div className="flex flex-col gap-4 sm:max-w-[400px]">
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-cyan-400 sm:text-5xl">
            Why do we teach?
          </h2>
          <p className="text-lg">
            Amid our research, we realized that we had acquired knowledge that had our parents known
            20 years ago, we wouldn&apos;t have the same allergy struggles today.
          </p>
          <p className="text-lg">
            We decided that teaching others through Generation Allergy Free was a great way to touch
            many more lives than just our eventual children.
          </p>
        </div>
        <div className="relative h-[200px] w-full border-8 border-black md:h-[420px] md:w-[300px] lg:h-[540px] lg:w-[400px]">
          <Image
            fill
            src={couchImage}
            alt="Man and woman sitting on couch holding a laptop."
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
      <div className="my-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:even:flex-row-reverse">
        <div className="flex flex-col gap-4 sm:max-w-[400px]">
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-oldyellow sm:text-5xl">
            Our values
          </h2>
          <p className="text-lg">To help people live healthy, happy, and pain-free lives.</p>
          <p className="text-lg">
            This is only the start of our journey. Expanding on the knowledge in these courses can
            help many other diseases; people in pain and suffering today an be joyous tomorrow.
          </p>
          <p className="text-lg">
            We believe we can make the world a better place, and this business is symbolic of us
            putting our beliefs into action.
          </p>
        </div>
        <div className="relative h-[200px] w-full border-8 border-black md:h-[420px] md:w-[300px] lg:h-[540px] lg:w-[400px]">
          <Image
            fill
            src={danceImage}
            alt="Mother teaching daughter how to dance."
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
