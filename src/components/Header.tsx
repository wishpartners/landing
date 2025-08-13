"use client";

import { LOGIN_URL, REGISTRATION_URL } from "@/data/consts";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LinkComponent from "./ui/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col items-start gap-2.5 backdrop-blur-2xl bg-black py-6 px-6 relative z-[100] isolate">
      <div className="flex justify-between items-center max-w-[1406px] w-full mx-auto">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={115} height={50} />
        </Link>
        <div className="flex gap-4 font-[Inter] max-xl:hidden">
          <LinkComponent
            text="Our Brands"
            href="our-brands"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          />
          <LinkComponent
            text="Benefits"
            href="benefits"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          />
          <LinkComponent
            text="FAQ"
            href="faq"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          />
          <LinkComponent
            text="Contacts"
            href="contacts"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          />
        </div>
        <div className="hidden max-xl:flex gap-4 items-center">
          <button onClick={toggleMenu} className="relative z-[9999]">
            {isMenuOpen ? (
              <X size={50} color="white" />
            ) : (
              <Menu size={50} color="white" />
            )}
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-black z-[99] transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } max-xl:flex flex-col hidden pt-24 px-4 pb-6 rounded-b-2xl isolate h-[100dvh]`}
        >
          <div className="flex flex-col justify-between items-center py-20 pointer-events-auto h-full">
            <div className="flex flex-col gap-9">
              <LinkComponent
                text="Our Brands"
                href="our-brands"
                className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
              />
              <LinkComponent
                text="Benefits"
                href="benefits"
                className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
              />
              <LinkComponent
                text="FAQ"
                href="faq"
                className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
              />
              <LinkComponent
                text="Contacts"
                href="contacts"
                className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex flex-col gap-10">
              <a className="button" href={REGISTRATION_URL}>
                Become a Partner
              </a>
              <a className="button" href={LOGIN_URL}>
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="max-xl:hidden flex gap-4">
          <a className="button" href={LOGIN_URL}>
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
