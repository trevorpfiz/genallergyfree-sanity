import ScrollUp from '#/components/ScrollUp';
import PayPal from './PayPal';

export default function Donate() {
  return (
    <>
      <ScrollUp />
      <section className="bg-oldyellow">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-20">
          <h1 className="font-display text-5xl font-bold uppercase leading-none md:text-8xl">
            Donate
          </h1>
          <h4 className="mt-8 max-w-prose text-lg md:text-xl">
            Donations allow us to continue to spread the word, create new courses, and update our
            content.
          </h4>
          <div className="mt-8 lg:col-span-3">
            <PayPal />
            <h2>Patreon</h2>
          </div>
        </div>
      </section>
    </>
  );
}
