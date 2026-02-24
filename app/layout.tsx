import type { Metadata } from "next";
import "./globals.css";
import { PageLayout } from "@/components/templates";

export const metadata: Metadata = {
  title: "Nama Kamu — Frontend Developer",
  description:
    "Portfolio of a Frontend Developer specializing in React, Vue.js, TypeScript, and modern web technologies.",
  keywords: ["frontend developer", "react", "angular", "typescript", "next", "portfolio"],
  authors: [{ name: "Nama Kamu" }],
  openGraph: {
    title: "Nama Kamu — Frontend Developer",
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
