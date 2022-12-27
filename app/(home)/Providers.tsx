'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'Afj4ZnkBSoAUoESXVB1tkCmw9K7Nru_sBMtijIu6GWsIzKSNrMnUxEa3NlSycyxRSTs7g2HxY4tbXA7U',
        components: 'buttons',
        intent: 'subscription',
        vault: true,
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
