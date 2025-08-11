export default function BrandCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center gap-[22px] w-117 max-xl:max-w-82 h-110 max-xl:h-78 p-7 rounded-[14px] bg-gradient-to-b from-[#5D5AB2] to-[#2F2059] ">
      {children}
    </div>
  );
}
