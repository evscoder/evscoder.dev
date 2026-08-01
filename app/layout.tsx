import type { Metadata } from "next";
import localFont from "next/font/local";
import "./tailwind.css";
import "./globals.scss";

const monocraft = localFont({
  src: [
    {
      path: "../public/fonts/Monocraft-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Monocraft-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Monocraft-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-text",
});

const iceland = localFont({
  src: "../public/fonts/Iceland-Regular.woff2",
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Evgeny Staroverov | Frontend Engineer",
  description: "Portfolio migrated to Next.js App Router with preserved branding and assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-lang="ru"
      className={`${monocraft.variable} ${iceland.variable} h-full antialiased`}
    >
      <body className="load min-h-full flex flex-col">{children}</body>
    </html>
  );
}
