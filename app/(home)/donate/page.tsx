import { LockClosedIcon } from '@heroicons/react/20/solid';
// import { LockClosedIcon } from '@heroicons/react/24/outline';

import ScrollUp from '#/components/ScrollUp';
import FAQs from './FAQs';
import Patreon from './Patreon';
import PayPal from './PayPal';

export default function Donate() {
  return (
    <>
      <ScrollUp />
      <section className="bg-oldyellow">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-20">
          <h1 className="font-display text-5xl font-bold uppercase leading-none md:text-5xl">
            Help us do more
          </h1>
          <h4 className="mt-8 max-w-prose text-lg md:text-xl">
            Generation Allergy Free is a health education platform.
          </h4>
          <h4 className="mt-8 max-w-prose text-lg md:text-xl">
            Donations allow us to continue to spread the word, create new courses, and update our
            content.
          </h4>
          <h4 className="mt-8 max-w-prose text-lg md:text-xl">
            This helps people learn more about health, which improves their quality of life.
          </h4>
          <h4 className="mt-8 max-w-prose text-lg font-semibold md:text-xl">
            Confirm a donation of $5 / month:
          </h4>
          <fieldset className="mt-8 max-w-sm rounded-md border-2 border-black/40 p-4">
            <legend className="mb-4 flex items-center px-1">
              <LockClosedIcon className="mr-2 h-6 w-6" />
              <h3 className="text-lg">Secure donation</h3>
            </legend>
            <PayPal />
            <Patreon />
          </fieldset>
          <div className="mt-8">
            <FAQs />
          </div>
        </div>
      </section>
    </>
  );
}
