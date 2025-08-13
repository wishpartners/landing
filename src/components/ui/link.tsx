import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkComponent({
  href,
  text,
  className,
}: Readonly<{
  href: string;
  text: string;
  className: string;
}>) {
  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isMainPage = usePathname() === "/";

  return isMainPage ? (
    <Link
      onClick={(e) => smoothScroll(e, href)}
      href={`#${href}`}
      className={className}
    >
      {text}
    </Link>
  ) : (
    <Link href={`/#${href}`} className={className}>
      {text}
    </Link>
  );
}
