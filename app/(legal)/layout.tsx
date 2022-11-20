import 'app/globals.css';

import Footer from '#/ui/Footer';
import Header from '#/ui/Header';
import { Inter, Oswald } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
});

const oswald = Oswald({
  variable: '--font-oswald',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} overflow-x-hidden`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Generation Allergy Free</title>
        <meta name="description" content="Generation Allergy Free" key="desc" />
      </head>
      <body className="overflow-x-hidden">
        <Header intent="secondary" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
