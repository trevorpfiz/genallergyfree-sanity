'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

const faqs = [
  {
    question: 'How can I get help with my donations?',
    answer: (
      <p className="break-words text-gray-600">
        Contact us at{' '}
        <Link href="/contact" className="text-oldpink hover:underline">
          generationallergyfree.com/contact
        </Link>{' '}
        or directly send us an email at{' '}
        <a href="mailto:generationallergyfree@gmail.com" className="text-oldpink hover:underline">
          generationallergyfree@gmail.com
        </a>{' '}
        and let us know how we can help.
      </p>
    ),
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: (
      <p className="break-words text-gray-600">
        Currently, no. In order for a donation to be tax-deductible, the organization must be a
        registered 501(c)(3) nonprofit organization. We are currently an LLC named TwinZ LLC.
        Through your support, we will eventually be able to go through this process.
      </p>
    ),
  },
  {
    question: 'How can I make a one-time donation?',
    answer: (
      <p className="break-words text-gray-600">
        If you&apos;d prefer to make one-time donations, you can support
        GenerationAllergyFree&apos;s mission whenever you have cash to spare. You can use{' '}
        <a
          href="https://paypal.me/genallergyfree"
          target="_blank"
          rel="noopener noreferrer"
          className="text-oldpink hover:underline"
        >
          paypal.me/genallergyfree
        </a>{' '}
        to donate whatever amount feels right through PayPal.
      </p>
    ),
  },
  {
    question: 'Can I donate goods or services instead of money?',
    answer: (
      <p className="break-words text-gray-600">
        Contact us at{' '}
        <Link href="/contact" className="text-oldpink hover:underline">
          generationallergyfree.com/contact
        </Link>{' '}
        or directly send us an email at{' '}
        <a href="mailto:generationallergyfree@gmail.com" className="text-oldpink hover:underline">
          generationallergyfree@gmail.com
        </a>{' '}
        and we can find a way for you to help us with your goods and services.
      </p>
    ),
  },
  {
    question: 'Is there anything else I can learn about donating to GenerationAllergyFree.com?',
    answer: (
      <p className="break-words text-gray-600">
        If there is some other way you&apos;d like to support our mission that isn&apos;t listed
        here, or if you have any questions at all, please contact us at{' '}
        <Link href="/contact" className="text-oldpink hover:underline">
          generationallergyfree.com/contact
        </Link>{' '}
        or directly send us an email at{' '}
        <a href="mailto:generationallergyfree@gmail.com" className="text-oldpink hover:underline">
          generationallergyfree@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function FAQs() {
  return (
    <div className="bg-oldyellow">
      <div className="py-12 sm:py-16">
        <div className="max-w-3xl divide-y-2 divide-black">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-black">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={clsx(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-2">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
