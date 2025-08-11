import { REGISTRATION_URL } from "@/data/consts";
import Image from "next/image";

export default function Contacts() {
  return (
    <section
      className="relative w-full flex items-center justify-center max-xl:px-8"
      id="contacts"
    >
      <Image
        className="absolute -bottom-20 right-0 -z-1 max-xl:hidden"
        src="/assets/asset-contact-2-min.png"
        alt="contacts"
        width={1278}
        height={771}
      />
      <Image
        className="absolute top-25 left-70 -z-1 max-xl:hidden"
        src="/assets/asset-contact-1-min.png"
        alt="contacts"
        width={345}
        height={241}
      />
      <div className="flex flex-row max-xl:flex-col-reverse w-full items-center justify-center gap-8 rounded-2xl bg-white/5 pt-12.5 px-12.5 pb-15 max-xl:p-8 max-w-262.5 mt-67.5 mb-80 max-xl:mb-29">
        <div className="flex flex-col items-start justify-center gap-5 max-xl:w-full">
          <h2 className="gradient-text text-[32px] max-xl:text-start max-xl:text-2xl font-semibold uppercase font-unbounded">
            Ready to partner with us?
          </h2>
          <p className="text-secondary-blue text-lg max-xl:text-xs font-normal font-inter">
            We’re here to help. Get in touch with our team to start earning with
            high-performing brands and custom commission deals.
          </p>
          <div className="flex flex-col items-start justify-center">
            <p className="text-secondary-blue text-2xl max-xl:text-lg font-medium font-inter">
              Email:
              <a
                className="text-[#8182FE] text-2xl max-xl:text-lg font-semibold font-inter"
                href="mailto:support@wishpartners.io"
              >
                support@wishpartners.io
              </a>
            </p>
            <p className="text-secondary-blue text-2xl max-xl:text-lg font-medium font-inter">
              Telegram:
              <a
                className="text-[#8182FE] text-2xl max-xl:text-lg font-semibold font-inter"
                href="https://t.me/YourManagerHandle"
              >
                @YourManagerHandle
              </a>
            </p>
          </div>
          <a
            className="button button-hero w-full max-w-97"
            href={REGISTRATION_URL}
            target="_blank"
          >
            Become a Partner
          </a>
        </div>
        <Image
          src="/assets/contacts-min.png"
          alt="contacts"
          width={480}
          height={398}
        />
      </div>
    </section>
  );
}
