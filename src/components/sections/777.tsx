import { REGISTRATION_URL } from "@/data/consts";
import Image from "next/image";

export default function Section777() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-full w-[1141px] max-xl:w-[578px] h-[1141px] max-xl:h-[578px] relative">
      <div className="absolute top-0 w-full h-full radial-gradient-777 -z-1" />
      <Image
        className="max-xl:w-[100vw]"
        src="/assets/777.png"
        alt="777"
        width={855}
        height={170}
      />
      <h2 className="text-[40px] max-xl:text-lg font-bold uppercase font-unbounded  text-center text-white max-w-7xl max-xl:max-w-[100vw] max-xl:px-7.5">
        Wish Partners is your gateway to high-performing iGaming brands, fast
        payouts, and flexible commission deals.
      </h2>
      <p className="text-2xl max-xl:text-sm font-normal font-unbounded text-white text-center max-w-4xl max-xl:max-w-[100vw] max-xl:px-7.5">
        Whether you`re a media buyer, affiliate team, influencer, or SEO expert
        — we help your traffic earn more.
      </p>
      <a className="button button-777" href={REGISTRATION_URL}>
        Become a Partner
      </a>
    </div>
  );
}
// border-radius: 1141px;
// background: radial-gradient(50% 50% at 50% 50%, #827EFF 0%, #504D98 44.5%, #2C2B4E 65.34%, rgba(31, 30, 52, 0.00) 77.85%);
// filter: blur(69.0999984741211px);
// width: 1141px;
// height: 1141px;
// flex-shrink: 0;
