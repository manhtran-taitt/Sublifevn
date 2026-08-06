"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname === "/" || pathname?.startsWith("/sublime")) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                Life<span className="text-blue-500">Smart</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>
            <div className="space-y-2 text-xs text-gray-400 pt-2">
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Email: contact@ilifesmart.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Website: https://iot.ilifesmart.com</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t("nav_products")}</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/product/Nature-Series" className="hover:text-white transition-colors">{t("nature_series")}</Link></li>
              <li><Link href="/product/Switch-Series" className="hover:text-white transition-colors">{t("sublime_series")}</Link></li>
              <li><Link href="/product/Switch-Series" className="hover:text-white transition-colors">{t("smart_switches")}</Link></li>
              <li><Link href="/product/DEFED-Series" className="hover:text-white transition-colors">{t("defed_kit")}</Link></li>
              <li><Link href="/product/all_products" className="hover:text-white transition-colors">{t("central_control")}</Link></li>
              <li><Link href="/product/all_products" className="hover:text-white transition-colors">{t("sensors_monitors")}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t("nav_solutions")}</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions/smart-residence" className="hover:text-white transition-colors">{t("smart_residence")}</Link></li>
              <li><Link href="/solutions/smart-hotel" className="hover:text-white transition-colors">{t("smart_hotel")}</Link></li>
              <li><Link href="/solutions/smart-office" className="hover:text-white transition-colors">{t("smart_office")}</Link></li>
              <li><Link href="/solutions/smart-campus" className="hover:text-white transition-colors">{t("smart_campus")}</Link></li>
              <li><Link href="/solutions/smart-elderly-care" className="hover:text-white transition-colors">{t("smart_elderly")}</Link></li>
              <li><Link href="/solutions/smart-gaming-room" className="hover:text-white transition-colors">{t("smart_gaming")}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t("nav_about")}</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/software/lifesmart_app" className="hover:text-white transition-colors">{t("lifesmart_app")}</Link></li>
              <li><Link href="/about_us/company-profile" className="hover:text-white transition-colors">{t("company_profile")}</Link></li>
              <li><Link href="/about_us/innovation" className="hover:text-white transition-colors">{t("innovation_tech")}</Link></li>
              <li><Link href="/about_us/company-news" className="hover:text-white transition-colors">{t("company_news")}</Link></li>
              <li><Link href="/resources/brand-brochure-product-manual" className="hover:text-white transition-colors">{t("nav_resources")}</Link></li>
              <li><Link href="/cooperation/become-a-partner" className="hover:text-white transition-colors">{t("nav_partnership")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} LifeSmart Inc. {t("footer_rights")}</p>
          <div className="flex space-x-6">
            <Link href="/support/FAQ" className="hover:text-gray-400">{t("footer_privacy")}</Link>
            <Link href="/support/FAQ" className="hover:text-gray-400">{t("footer_terms")}</Link>
            <Link href="/support/FAQ" className="hover:text-gray-400">{t("footer_faq")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
