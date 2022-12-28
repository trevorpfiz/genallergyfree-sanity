'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID || '',
        components: 'buttons',
        intent: 'subscription',
        vault: true,
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
