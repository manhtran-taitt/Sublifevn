import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://sublime.thachanhitt.com"),
  title: "SUBLIME by Thạch Anh ITT - Next-Gen Luxury Architectural Intelligence",
  description:
    "Hệ thống tự động hóa nhà thông minh cao cấp SUBLIME bởi Thạch Anh ITT. Giải pháp công tắc thông minh kết hợp chuẩn kết nối có dây CoTP & không dây CoSS trên cùng một nền tảng.",
  keywords: ["smart home", "SUBLIME", "Thạch Anh ITT", "LifeSmart", "home automation", "smart switch", "CoTP", "CoSS"],
  openGraph: {
    title: "SUBLIME by Thạch Anh ITT - Next-Gen Luxury Architectural Intelligence",
    description:
      "Hệ thống tự động hóa nhà thông minh cao cấp SUBLIME bởi Thạch Anh ITT. Giải pháp công tắc thông minh kết hợp chuẩn kết nối có dây CoTP & không dây CoSS.",
    url: "https://sublime.thachanhitt.com",
    siteName: "SUBLIME by Thạch Anh ITT",
    images: [
      {
        url: "/OG-sublime-thach-anh-itt.png",
        width: 1200,
        height: 630,
        alt: "SUBLIME by Thạch Anh ITT",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUBLIME by Thạch Anh ITT - Next-Gen Luxury Architectural Intelligence",
    description:
      "Hệ thống tự động hóa nhà thông minh cao cấp SUBLIME bởi Thạch Anh ITT. Giải pháp công tắc thông minh kết hợp chuẩn kết nối có dây CoTP & không dây CoSS.",
    images: ["/OG-sublime-thach-anh-itt.png"],
  },
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
