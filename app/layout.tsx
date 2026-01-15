import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.primaryService} in ${siteConfig.city}`,
  description: `Professional ${siteConfig.primaryService.toLowerCase()} services in ${siteConfig.city}. Licensed, insured, and trusted by hundreds of homeowners. Get your free estimate today!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
