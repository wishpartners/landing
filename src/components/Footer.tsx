"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const isMainPage = usePathname() === "/";

  return (
    <footer className="bg-transparent flex flex-row items-center justify-center gap-8 py-7.5 flex-wrap max-xl:flex-col max-xl:gap-7.5 max-xl:items-start max-xl:justify-start max-xl:px-10 max-xl:py-7.5">
      <div className="flex flex-row items-center justify-center gap-4">
        {/* <Image
          src="/assets/linkedin.svg"
          alt="linkedin"
          width={36}
          height={36}
        />
        <Image
          src="/assets/instagram.svg"
          alt="instagram"
          width={36}
          height={36}
        /> */}
        <a href="https://t.me/aff_wish" target="_blank">
          <Image
            src="/assets/telegram.svg"
            alt="telegram"
            width={36}
            height={36}
          />
        </a>
      </div>
      <div className="flex flex-row max-xl:flex-col-reverse items-center max-xl:items-start justify-center gap-15 max-xl:gap-7.5 flex-wrap">
        <p className="text-white/65 text-2xl max-xl:text-base font-normal font-inter">
          Wish Partners © 2025 All rights reserved.
        </p>
        <p className="text-white/65 text-lg max-xl:text-base font-normal font-inter max-w-115.5">
          Part of the Wish Partners Network. Operates under international
          iGaming compliance standards.
        </p>
        {isMainPage && (
          <Link
            href="/terms"
            target="_blank"
            className="text-white/65 text-lg max-xl:text-base font-normal font-inter max-w-115.5"
          >
            TERMS AND CONDITIONS
          </Link>
        )}
      </div>
    </footer>
  );
}
