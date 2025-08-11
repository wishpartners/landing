import BenefitCard from "../ui/benefit-card";
import Image from "next/image";

export default function Benefits() {
  return (
    <section
      className="flex flex-col items-center gap-7.5 relative w-full"
      id="benefits"
    >
      <Image
        className="absolute -top-10 left-10 -z-1"
        src="/assets/asset-benefit-1-min.png"
        alt="benefits"
        width={467}
        height={1123}
      />
      <Image
        className="absolute -bottom-70 right-15 -z-1"
        src="/assets/asset-benefit-2-min.png"
        alt="benefits"
        width={467}
        height={1123}
      />
      <h2 className="text-[40px] max-xl:text-start max-xl:max-w-[324px] font-bold uppercase font-unbounded  text-center  gradient-text max-w-120">
        WHY YOU SHOULD CHOOSE US
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        <BenefitCard
          icon="/assets/benefit-1-min.png"
          title="New brands — untapped player base"
          description="Work with fresh offers that haven’t saturated the market yet."
        />
        <BenefitCard
          icon="/assets/benefit-2-min.png"
          title="We actually care about your results"
          description="Our affiliate team is fully committed to helping you earn more.
Expect fast replies, real support, and full transparency — we grow together."
        />
        <BenefitCard
          icon="/assets/benefit-3-min.png"
          title="Flexible deals for quality traffic"
          description="We're open to custom commission models — CPA, RevShare, hybrid, or exclusive setups.
Bring top traffic, and we’ll build a top offer just for you."
        />
      </div>
    </section>
  );
}
