import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "../styles/globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wishpartners.io"),
  title: "Wish Partners",
  description: "Wish Partners",
  openGraph: {
    title: "Wish Partners",
    description: "Wish Partners",
    url: "https://wishpartners.io",
    siteName: "Wish Partners",
    images: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
