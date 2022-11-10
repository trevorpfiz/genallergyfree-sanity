import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/genallergyfree-upscaled-crop.jpg';

export function Header() {
  return (
    <header className="absolute top-0 w-full bg-transparent">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between bg-transparent px-4 py-6">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" style={{ width: '230px', height: 'auto' }} priority />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-6">
          <Link href="/about" className="font-medium hover:underline">
            About Us
          </Link>
          <Link href="/courses">
            <button
              className="rounded-full bg-pink-400 py-2 px-4 font-semibold text-white hover:bg-pink-500"
              type="button"
            >
              Courses
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
