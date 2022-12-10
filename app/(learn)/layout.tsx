import '#/styles/globals.css';

import { Inter, Oswald } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full overflow-x-hidden`}>
      <body className="h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
