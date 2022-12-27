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
          style={{ label: 'paypal' }}
          fundingSource={fundingSource}
          createSubscription={(data, actions) =>
            actions.subscription
              .create({
                plan_id: 'P-96388462MV377654MMOVNTMY',
              })
              .then(
                (orderId) =>
                  // Your code here after create the order
                  orderId
              )
          }
          onApprove={
            (data, actions) => setSuccess(true) // You can add optional success message for the subscriber here
          }
          onError={(err) => {
            setError(true);
          }}
          onCancel={(err) => {
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
