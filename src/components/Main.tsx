"use client";

import Hero from "./sections/hero";
import OurBrands from "./sections/our-brands";
import Benefits from "./sections/benefits";
import Faq from "./sections/faq";
import Contacts from "./sections/contacts";
import Section777 from "./sections/777";

export default function Main() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center">
      <Hero />
      <OurBrands />
      <Section777 />
      <Benefits />
      <Faq />
      <Contacts />
    </main>
  );
}
