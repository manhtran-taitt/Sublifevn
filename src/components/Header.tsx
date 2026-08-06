"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Send, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  if (pathname?.startsWith("/sublime")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileCategory = (cat: string) => {
    setExpandedMobileCategory(expandedMobileCategory === cat ? null : cat);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              Life<span className="text-blue-600 font-extrabold">Smart</span>
              <span className="w-2 h-2 rounded-full bg-blue-600 ml-1 group-hover:scale-125 transition-transform" />
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* PRODUCTS */}
            <div className="relative group py-2">
              <Link
                href="/product/all_products"
                className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 flex items-center transition-colors uppercase"
              >
                {t("nav_products")} <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 hidden group-hover:grid grid-cols-3 gap-6 mega-menu-enter z-50">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3 border-b border-gray-100 pb-2">
                    {t("star_products")}
                  </h4>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <Link href="/product/Nature-Series" className="text-gray-700 hover:text-blue-600 font-medium block">
                        {t("sublime_series")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/Nature-Series" className="text-gray-700 hover:text-blue-600 font-medium block">
                        {t("nature_series")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/Switch-Series" className="text-gray-700 hover:text-blue-600 font-medium block">
                        {t("smart_switches")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/product/DEFED-Series" className="text-gray-700 hover:text-blue-600 font-medium block">
                        {t("defed_kit")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3 border-b border-gray-100 pb-2">
                    {t("product_lines")}
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li><Link href="/product/all_products" className="hover:text-blue-600 block">{t("central_control")}</Link></li>
                    <li><Link href="/product/DEFED-Series" className="hover:text-blue-600 block">{t("security_alarm")}</Link></li>
                    <li><Link href="/product/all_products" className="hover:text-blue-600 block">{t("sensors_monitors")}</Link></li>
                    <li><Link href="/product/all_products" className="hover:text-blue-600 block">{t("energy_saving")}</Link></li>
                    <li><Link href="/product/all_products" className="hover:text-blue-600 block">{t("lighting_control")}</Link></li>
                    <li><Link href="/product/all_products" className="hover:text-blue-600 block">{t("shading_curtains")}</Link></li>
                    <li><Link href="/product/all_products" className="hover:text-blue-600 block">{t("hvac_control")}</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3 border-b border-gray-100 pb-2">
                    {t("float_quote")}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">{t("quote_prompt")}</p>
                  <Link
                    href="/other/form"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
                  >
                    {t("get_quote_now")}
                  </Link>
                </div>
              </div>
            </div>

            {/* SOFTWARE */}
            <div className="relative group py-2">
              <Link
                href="/software/Software"
                className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 flex items-center transition-colors uppercase"
              >
                {t("nav_software")} <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 hidden group-hover:block mega-menu-enter z-50">
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link href="/software/lifesmart_app" className="text-gray-700 hover:text-blue-600 font-medium block">
                      {t("lifesmart_app")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/software/NatureOS" className="text-gray-700 hover:text-blue-600 font-medium block">
                      {t("nature_os")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/software/Software" className="text-gray-700 hover:text-blue-600 font-medium block">
                      {t("cloud_api")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="relative group py-2">
              <Link
                href="/solutions/all-smart-solutions"
                className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 flex items-center transition-colors uppercase"
              >
                {t("nav_solutions")} <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 hidden group-hover:block mega-menu-enter z-50">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link href="/solutions/smart-residence" className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-blue-600">{t("smart_residence")}</Link>
                  <Link href="/solutions/smart-hotel" className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-blue-600">{t("smart_hotel")}</Link>
                  <Link href="/solutions/smart-office" className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-blue-600">{t("smart_office")}</Link>
                  <Link href="/solutions/smart-campus" className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-blue-600">{t("smart_campus")}</Link>
                  <Link href="/solutions/smart-elderly-care" className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-blue-600">{t("smart_elderly")}</Link>
                  <Link href="/solutions/smart-gaming-room" className="p-2 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-blue-600">{t("smart_gaming")}</Link>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <Link
              href="/projects/all-projects"
              className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 transition-colors uppercase"
            >
              {t("nav_projects")}
            </Link>

            {/* RESOURCES */}
            <div className="relative group py-2">
              <Link
                href="/resources/brand-brochure-product-manual"
                className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 flex items-center transition-colors uppercase"
              >
                {t("nav_resources")} <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 hidden group-hover:block mega-menu-enter z-50">
                <ul className="space-y-2 text-xs">
                  <li><Link href="/resources/brand-brochure-product-manual" className="text-gray-700 hover:text-blue-600 font-medium block py-1">Catalog & Brochure</Link></li>
                  <li><Link href="/resources/brand-brochure-product-manual" className="text-gray-700 hover:text-blue-600 font-medium block py-1">Manuals</Link></li>
                  <li><Link href="/support/FAQ" className="text-gray-700 hover:text-blue-600 font-medium block py-1">{t("footer_faq")}</Link></li>
                </ul>
              </div>
            </div>

            {/* ABOUT US */}
            <div className="relative group py-2">
              <Link
                href="/about_us/company-profile"
                className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 flex items-center transition-colors uppercase"
              >
                {t("nav_about")} <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 hidden group-hover:block mega-menu-enter z-50">
                <ul className="space-y-2 text-xs">
                  <li><Link href="/about_us/company-profile" className="text-gray-700 hover:text-blue-600 font-medium block py-1">{t("company_profile")}</Link></li>
                  <li><Link href="/about_us/innovation" className="text-gray-700 hover:text-blue-600 font-medium block py-1">{t("innovation_tech")}</Link></li>
                  <li><Link href="/about_us/company-news" className="text-gray-700 hover:text-blue-600 font-medium block py-1">{t("company_news")}</Link></li>
                </ul>
              </div>
            </div>

            {/* PARTNERSHIP */}
            <Link
              href="/cooperation/become-a-partner"
              className="text-xs font-semibold tracking-wider text-gray-800 hover:text-blue-600 transition-colors uppercase"
            >
              {t("nav_partnership")}
            </Link>
          </nav>

          {/* Right Action Button & Language Switcher & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher Button */}
            <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 text-[11px] font-bold">
              <button
                onClick={() => setLang("vi")}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center space-x-1 ${
                  lang === "vi"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>VN</span>
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all flex items-center space-x-1 ${
                  lang === "en"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>EN</span>
              </button>
            </div>

            <Link
              href="/other/form"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all transform hover:scale-105"
            >
              <Send className="w-3.5 h-3.5 mr-1.5" /> {t("nav_quote_btn")}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-gray-200 shadow-2xl h-[calc(100vh-60px)] overflow-y-auto z-50 p-6 space-y-4">
          <div className="space-y-3">
            {/* Products Mobile */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileCategory("products")}
                className="w-full flex justify-between items-center text-sm font-bold text-gray-900 uppercase"
              >
                <span>{t("nav_products")}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${expandedMobileCategory === "products" ? "rotate-90" : ""}`} />
              </button>
              {expandedMobileCategory === "products" && (
                <div className="mt-2 pl-4 space-y-2 text-xs text-gray-600">
                  <Link href="/product/Nature-Series" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("sublime_series")}</Link>
                  <Link href="/product/Nature-Series" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("nature_series")}</Link>
                  <Link href="/product/Switch-Series" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_switches")}</Link>
                  <Link href="/product/DEFED-Series" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("defed_kit")}</Link>
                  <Link href="/product/all_products" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-blue-600 font-semibold">{t("product_lines")} →</Link>
                </div>
              )}
            </div>

            {/* Software Mobile */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileCategory("software")}
                className="w-full flex justify-between items-center text-sm font-bold text-gray-900 uppercase"
              >
                <span>{t("nav_software")}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${expandedMobileCategory === "software" ? "rotate-90" : ""}`} />
              </button>
              {expandedMobileCategory === "software" && (
                <div className="mt-2 pl-4 space-y-2 text-xs text-gray-600">
                  <Link href="/software/lifesmart_app" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("lifesmart_app")}</Link>
                  <Link href="/software/NatureOS" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("nature_os")}</Link>
                  <Link href="/software/Software" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-blue-600 font-semibold">{t("cloud_api")} →</Link>
                </div>
              )}
            </div>

            {/* Solutions Mobile */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileCategory("solutions")}
                className="w-full flex justify-between items-center text-sm font-bold text-gray-900 uppercase"
              >
                <span>{t("nav_solutions")}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${expandedMobileCategory === "solutions" ? "rotate-90" : ""}`} />
              </button>
              {expandedMobileCategory === "solutions" && (
                <div className="mt-2 pl-4 space-y-2 text-xs text-gray-600">
                  <Link href="/solutions/smart-residence" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_residence")}</Link>
                  <Link href="/solutions/smart-hotel" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_hotel")}</Link>
                  <Link href="/solutions/smart-office" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_office")}</Link>
                  <Link href="/solutions/smart-campus" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_campus")}</Link>
                  <Link href="/solutions/smart-elderly-care" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_elderly")}</Link>
                  <Link href="/solutions/smart-gaming-room" onClick={() => setMobileMenuOpen(false)} className="block py-1">{t("smart_gaming")}</Link>
                </div>
              )}
            </div>

            <Link href="/projects/all-projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-gray-900 uppercase border-b border-gray-100">
              {t("nav_projects")}
            </Link>

            <Link href="/resources/brand-brochure-product-manual" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-gray-900 uppercase border-b border-gray-100">
              {t("nav_resources")}
            </Link>

            <Link href="/about_us/company-profile" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-gray-900 uppercase border-b border-gray-100">
              {t("nav_about")}
            </Link>

            <Link href="/cooperation/become-a-partner" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-gray-900 uppercase border-b border-gray-100">
              {t("nav_partnership")}
            </Link>

            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded-xl">
                <span className="text-xs font-medium text-gray-700">Ngôn ngữ / Language:</span>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setLang("vi")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg ${lang === "vi" ? "bg-blue-600 text-white" : "text-gray-600"}`}
                  >
                    VN
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg ${lang === "en" ? "bg-blue-600 text-white" : "text-gray-600"}`}
                  >
                    EN
                  </button>
                </div>
              </div>
              <Link
                href="/other/form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md"
              >
                {t("nav_quote_btn")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
