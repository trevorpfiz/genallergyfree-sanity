import '#/styles/globals.css';

import Footer from '#/ui/Footer';
import Header from '#/ui/Header';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} overflow-x-hidden overflow-y-scroll`}
    >
      <body className="overflow-x-hidden">
        <Header intent="primary" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
