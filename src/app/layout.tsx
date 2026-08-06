import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "LifeSmart: Smart Home Automation & AIoT Solutions",
  description:
    "LifeSmart is a global leader in smart home solutions. We provide a complete AIoT ecosystem of smart devices, control panels, and automation for residential, hospitality, and commercial spaces.",
  keywords: ["smart home", "AIoT solutions", "LifeSmart", "home automation", "smart switch", "Nature Series"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <QuoteModal />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
