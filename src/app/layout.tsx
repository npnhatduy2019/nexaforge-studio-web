import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexaForge Studio | AI-Powered Enterprise Software Studio",
  description: "Building intelligent software for real-world business operations. Flagship products: DocVault AI (Intelligent Document Management) and AssetFlow (Enterprise Asset Management). Powered by Oracle APEX, Claude AI, and modern orchestration.",
  keywords: [
    "NexaForge Studio",
    "DocVault AI",
    "AssetFlow",
    "Enterprise Software",
    "Claude API",
    "Oracle APEX",
    "Document Intelligence",
    "Enterprise Asset Management",
    "AI Automation",
    "SaaS",
  ],
  authors: [{ name: "NexaForge Studio Engineering" }],
  openGraph: {
    title: "NexaForge Studio | AI-Powered Enterprise Software Studio",
    description: "Intelligent Software. Simpler Operations. Transforming complex workflows into secure, efficient, and intelligent experiences.",
    url: "https://nexaforge.studio",
    siteName: "NexaForge Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
