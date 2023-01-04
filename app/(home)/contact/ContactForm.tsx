/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import useWeb3Forms from '@web3forms/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form-latest';
import ErrorNotification from './ErrorNotification';
import SendingNotification from './SendingNotification';
import SuccessNotification from './SuccessNotification';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { submit } = useWeb3Forms<FormData>({
    access_key: '336fa9be-c4a6-4347-a855-64651fc2c17c',
    onSuccess: () => {
      setSending(false);
      setSuccess(true);
      reset();
    },
    onError: () => {
      setSending(false);
      setError(true);
    },
  });

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-20">
        <h1 className="font-display text-5xl font-bold uppercase leading-none md:text-8xl">
          Let&apos;s connect
        </h1>
        <h2 className="mt-8 max-w-prose text-lg md:text-xl">
          Insight and feedback helps everyone. Send us a message with the form below to start the
          conversation.
        </h2>
        <div className="mt-8 lg:col-span-3">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form
              onSubmit={handleSubmit((data) => {
                submit(data);
                setSending(true);
              })}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  placeholder="Name"
                  {...register('name', { required: 'Name is required' })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p role="alert" className="text-red-600">{`${errors.name?.message}`}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p role="alert" className="text-red-600">{`${errors.email?.message}`}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  placeholder="Message"
                  defaultValue=""
                  {...register('message', { required: 'Message is required' })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p role="alert" className="text-red-600">{`${errors.message?.message}`}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SendingNotification sendingState={[sending, setSending]} />
      <SuccessNotification successState={[success, setSuccess]} />
      <ErrorNotification errorState={[error, setError]} />
    </>
  );
}
