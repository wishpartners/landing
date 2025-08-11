import { faqData } from "@/data/faq";
import { FaqItem } from "../ui/FaqItem";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="relative w-full" id="faq">
      <Image
        className="absolute top-100 left-0 -z-1 max-xl:hidden"
        src="/assets/asset-faq-1-min.png"
        alt="faq"
        width={467}
        height={1123}
      />
      <Image
        className="absolute top-100 right-0 -z-1 max-xl:hidden"
        src="/assets/asset-faq-2-min.png"
        alt="faq"
        width={518}
        height={949}
      />
      <div className="flex flex-col max-w-[876px] mx-auto w-full gap-8 mt-102.5">
        <h2 className="text-[40px] font-bold uppercase font-unbounded  text-center gradient-text">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 max-xl:grid-cols-1 gap-x-20 gap-y-2 mb-8 max-xl:px-5">
          {faqData.map((item, index) => (
            <FaqItem
              key={`${index}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
