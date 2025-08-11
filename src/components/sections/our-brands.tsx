import BrandCard from "../ui/brand-card";
import Image from "next/image";

export default function OurBrands() {
  return (
    <section
      className="flex flex-col items-center gap-12 max-xl:gap-7.5 relative w-full"
      id="our-brands"
    >
      <Image
        className="absolute top-0 left-0 -z-1"
        src="/assets/asset-brands-1-min.png"
        alt="our-brands"
        width={405}
        height={516}
      />
      <Image
        className="absolute top-50 right-0 -z-1"
        src="/assets/asset-brands-2-min.png"
        alt="our-brands"
        width={382}
        height={263}
      />
      <h2 className="max-xl:max-w-[324px] max-xl:text-start text-[40px] font-bold uppercase font-unbounded text-white text-center leading-[74px] max-xl:leading-12 gradient-text">
        Our Brands
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-12">
        <BrandCard link="https://bit.ly/nurwin">
          <Image
            src="/assets/nurwin.svg"
            alt="nurwin"
            width={295}
            height={72}
          />
        </BrandCard>
        <BrandCard>
          <h3 className="text-[32px] max-xl:text-[22px] font-semibold uppercase font-unbounded text-white text-center leading-[26px]">
            Coming Soon
          </h3>
          <p className="text-xl max-xl:text-sm font-normal font-unbounded text-secondary-blue text-center leading-[31px] max-xl:leading-[22px] max-w-90">
            New brands are on the way. As a Wish Partner, you’ll be the first to
            promote them.
          </p>
        </BrandCard>
      </div>
    </section>
  );
}
