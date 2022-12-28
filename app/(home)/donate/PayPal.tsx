'use client';

import { FUNDING_SOURCE } from '@paypal/paypal-js';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

import CancelNotification from './CancelNotification';
import ErrorNotification from './ErrorNotification';
import SuccessNotification from './SuccessNotification';

export default function PayPal() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [cancel, setCancel] = useState(false);

  const fundingSources: FUNDING_SOURCE[] = ['paypal', 'card'];

  return (
    <>
      {fundingSources.map((fundingSource) => (
        <PayPalButtons
          key={fundingSource}
          style={{ layout: 'vertical' }}
          fundingSource={fundingSource}
          createSubscription={(data, actions) =>
            actions.subscription
              .create({
                plan_id: process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_PLAN_ID || '',
              })
              .then(
                (orderId) =>
                  // Your code here after create the order
                  orderId
              )
          }
          onApprove={
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            async (data, actions) => setSuccess(true) // You can add optional success message for the subscriber here
          }
          onError={(err) => {
            console.log(err);
            setError(true);
          }}
          onCancel={(err) => {
            console.log(err);
            setCancel(true);
          }}
        />
      ))}
      <SuccessNotification successState={[success, setSuccess]} />
      <ErrorNotification errorState={[error, setError]} />
      <CancelNotification errorState={[cancel, setCancel]} />
    </>
  );
}
