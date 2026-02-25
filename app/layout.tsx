import type { Metadata } from "next";
import "./globals.css";
import { PageLayout } from "@/components/templates";

export const metadata: Metadata = {
  title: "Andi Lauw — Frontend Developer",
  description:
    "Portofolio seorang Pengembang Frontend yang mengkhususkan diri dalam React, TypeScript, dan teknologi web modern.",
  keywords: [
    "frontend developer",
    "react",
    "angular",
    "typescript",
    "next",
    "portfolio",
  ],
  authors: [{ name: "Andi Lauw" }],
  openGraph: {
    title: "Andi Lauw — Frontend Developer",
    description: "Crafting beautiful, performant digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
