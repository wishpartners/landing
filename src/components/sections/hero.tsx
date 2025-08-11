import { REGISTRATION_URL } from "@/data/consts";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[885px]">
      <div className="flex flex-col items-start gap-2 mt-70 ms-[10%] max-xl:ms-12.5 max-xl:mt-101 max-xl:gap-6">
        <h1 className="text-5xl font-bold uppercase font-unbounded text-white max-xl:text-[40px] max-xl:max-w-[324px]">
          YOU WISH. WE DO.
        </h1>
        <p className="text-2xl text-white font-inter font-medium leading-[72px] max-xl:text-base max-xl:leading-[24px] max-xl:max-w-[300px]">
          The ones you wish you’d partnered with earlier
        </p>
        <a className="button button-hero" href={REGISTRATION_URL}>
          Become a Partner
        </a>
      </div>
      <Image
        src="/assets/hero-min.png"
        alt="hero"
        className="absolute top-0 right-0 -z-1 max-xl:hidden"
        width={1618}
        height={1285}
      />
      <Image
        src="/assets/hero-mobile-min.png"
        alt="hero"
        className="absolute -top-10 right-0 -z-1 max-xl:block hidden"
        width={440}
        height={686}
      />
    </div>
  );
}
