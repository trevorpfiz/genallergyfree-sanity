import { IconBrandLinkedin, IconBrandPatreon } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';

import logoWhite from 'public/genallergyfree-black-upscaled-removebg-white.png';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
          <div>
            <Link href="/">
              <Image
                src={logoWhite}
                alt="Generation Allergy Free Logo"
                style={{ width: '200px', height: 'auto' }}
              />
            </Link>
          </div>

          <div className="flex items-center justify-between gap-4">
            <a
              href="https://www.linkedin.com/company/generationallergyfree/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconBrandLinkedin size={20} stroke={1.5} color="white" />
            </a>
            <a
              href="https://www.patreon.com/user?u=84526279"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconBrandPatreon size={20} stroke={1.5} color="white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-4 pt-16 pb-6 md:flex-row">
          <p className="text-sm text-white">© 2022 TwinZ LLC - All Rights Reserved</p>

          <nav className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <Link href="/about">
              <p className="text-white hover:underline">About</p>
            </Link>
            <Link href="/courses">
              <p className="text-white hover:underline">Courses</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:underline">Contact</p>
            </Link>
            <Link href="/donate">
              <p className="text-white hover:underline">Donate</p>
            </Link>
            <Link href="/legal/privacy-policy">
              <p className="text-white hover:underline">Privacy</p>
            </Link>
            <Link href="/legal/terms-of-service">
              <p className="text-white hover:underline">Terms</p>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
