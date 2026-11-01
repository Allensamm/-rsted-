import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ørsted — Energy for what comes next | Independent design concept",
  description:
    "An independent Ørsted homepage redesign concept by Bazalel Design. Explore offshore wind engineering, verified global projects and responsible energy development.",
  metadataBase: new URL(
    "https://orsted-bazalel-design-concept.blondeactor.chatgpt.site",
  ),
  robots: { index: false, follow: false },
  openGraph: {
    title: "Ørsted — Energy for what comes next",
    description:
      "An independent homepage design concept by Bazalel Design. Not commissioned by or affiliated with Ørsted.",
    type: "website",
    images: [
      {
        url: "/images/hero-2200.webp",
        width: 2200,
        height: 1467,
        alt: "Offshore wind turbines across open sea",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
