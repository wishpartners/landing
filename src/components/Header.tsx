"use client";

import { REGISTRATION_URL } from "@/data/consts";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col items-start gap-2.5 backdrop-blur-2xl bg-black py-6 px-6 relative z-[100] isolate">
      <div className="flex justify-between items-center max-w-[1406px] w-full mx-auto">
        <Image src="/assets/logo.svg" alt="logo" width={115} height={50} />
        <div className="flex gap-4 font-[Inter] max-xl:hidden">
          <a
            onClick={(e) => smoothScroll(e, "our-brands")}
            href="#our-brands"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          >
            Our Brands
          </a>
          <a
            onClick={(e) => smoothScroll(e, "benefits")}
            href="#benefits"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          >
            Benefits
          </a>
          <a
            onClick={(e) => smoothScroll(e, "faq")}
            href="#faq"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          >
            FAQ
          </a>
          <a
            onClick={(e) => smoothScroll(e, "contacts")}
            href="#contacts"
            className="text-[#B6C4E7] text-sm text-center font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors w-[185px]"
          >
            Contacts
          </a>
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
          } max-xl:flex flex-col hidden pt-24 px-4 h-fit pb-6 rounded-b-2xl isolate`}
        >
          <div className="flex flex-col gap-9 items-center py-20 pointer-events-auto">
            <a
              onClick={(e) => {
                smoothScroll(e, "our-brands");
                toggleMenu();
              }}
              href="#our-brands"
              className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
            >
              Our Brands
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "benefits");
                toggleMenu();
              }}
              href="#benefits"
              className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
            >
              Benefits
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "faq");
                toggleMenu();
              }}
              href="#faq"
              className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
            >
              FAQ
            </a>
            <a
              onClick={(e) => {
                smoothScroll(e, "contacts");
                toggleMenu();
              }}
              href="#contacts"
              className="text-white text-3xl font-unbounded font-semibold leading-[22px] uppercase cursor-pointer hover:opacity-80 transition-opacity"
            >
              Contacts
            </a>
          </div>
        </div>
        <div className="max-xl:hidden">
          <a className="button" href={REGISTRATION_URL}>
            Become a Partner
          </a>
        </div>
      </div>
    </header>
  );
}
