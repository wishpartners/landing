export default function BrandCard({
  children,
  link,
}: Readonly<{
  children: React.ReactNode;
  link?: string;
}>) {
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="flex flex-col items-center justify-center gap-[22px] w-117 max-xl:max-w-82 h-110 
      max-xl:h-78 p-7 rounded-[14px] bg-nurwin"
      >
        {children}
      </div>
    </a>
  ) : (
    <div className="flex flex-col items-center justify-center gap-[22px] w-117 max-xl:max-w-82 h-110 max-xl:h-78 p-7 rounded-[14px] bg-gradient-to-b from-[#5D5AB2] to-[#2F2059] ">
      {children}
    </div>
  );
}
