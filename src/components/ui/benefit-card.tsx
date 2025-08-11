import Image from "next/image";

export default function BenefitCard({
  icon,
  title,
  description,
}: Readonly<{
  icon: string;
  title: string;
  description: string;
}>) {
  return (
    <div className="flex flex-col items-start gap-6 pt-6 px-8 pb-8 rounded-2xl bg-white/5 hover:bg-zinc-900 transition-all duration-300 max-w-97 h-109.5">
      <Image src={icon} alt="benefit" width={325} height={200} />
      <div className="flex flex-col items-start justify-center self-stretch gap-7.5">
        <h3 className="text-xl font-semibold uppercase font-unbounded text-white">
          {title}
        </h3>
        <p className="text-sm font-normal font-inter text-secondary-blue">
          {description}
        </p>
      </div>
    </div>
  );
}
