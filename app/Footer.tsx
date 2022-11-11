import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
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
              <Image src={logoWhite} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            </Link>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button type="button">
              <IconBrandTwitter size={18} stroke={1.5} color="white" />
            </button>
            <button type="button">
              <IconBrandYoutube size={18} stroke={1.5} color="white" />
            </button>
            <button type="button">
              <IconBrandInstagram size={18} stroke={1.5} color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-4 pt-16 pb-6 md:flex-row">
          <p className="text-sm text-white">© 2022 TwinZ LLC - All Rights Reserved</p>

          <nav className="flex items-center justify-between gap-4 text-xs">
            <Link href="/about">
              <p className="text-white hover:underline">About</p>
            </Link>
            <Link href="/courses">
              <p className="text-white hover:underline">Courses</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:underline">Contact</p>
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
