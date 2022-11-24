import '#/styles/globals.css';

import { Inter, Oswald } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
});

const oswald = Oswald({
  variable: '--font-oswald',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full overflow-hidden`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Generation Allergy Free</title>
        <meta name="description" content="Generation Allergy Free" key="desc" />
      </head>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
