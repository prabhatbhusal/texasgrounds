import React from 'react'
import { NavItems } from '@/lib/constants/data'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
const Navbar = () => {
  return (
    <main>
      <div className="lg:flex lg:flex-row md:flex-col sm:flex-col justify-between items-center">
        <div className="flex gap-5 justify-center items-center">
          {NavItems.map((link) => (
            <div className="" key={link.id}>
              <ul>
                <Link href={link.url}>{link.title}</Link>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={1000}
            height={50}
            className="lg:h-[74px] lg:w-[296px]"
          />
        </div>
        <div className="flex items-center gap-[12px]">
          <button>
            <Image
              src="/icons/map.png"
              alt="logo"
              width={1000}
              height={50}
              className="lg:h-[34px] lg:w-[34px]"
            />
          </button>
          <button>
            <Image
              src="/icons/call.png"
              alt="logo"
              width={1000}
              height={50}
              className="lg:h-[34px] lg:w-[34px]"
            />
          </button>
          <span className="underline">281-345-1678</span>
          <Button size="lg">Consult Now</Button>
        </div>
      </div>
    </main>
  );
}

export default Navbar
