import PayPalProvider from './PayPalProvider';

export default function DonateLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <PayPalProvider>{children}</PayPalProvider>;
}
