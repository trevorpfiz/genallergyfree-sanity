import '#/styles/globals.css';

import Script from 'next/script';

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
    <html lang="en" id="scroll" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Header intent="primary" />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
      <Script
        src="https://cdn.jsdelivr.net/gh/ElektrikSpark/thinkhive-widget@latest/index.min.js"
        data-assistantId="clglu3fpd0003rt0hu30l2zrt"
      />
    </html>
  );
}
