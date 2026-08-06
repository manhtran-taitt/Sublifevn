"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SublimeBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[480px] lg:h-[540px] my-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('https://iot.ilifesmart.com/resource/instance/通廊_1742888810_0735B1.webp')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-start z-10 text-left">
        <div className="max-w-xl space-y-4">
          <span className="text-amber-300 font-semibold tracking-widest text-xs uppercase">
            {t("sublime_badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-200 tracking-tight">
            {t("sublime_title")}
          </h2>
          <p className="text-lg text-amber-100 font-medium">
            {t("sublime_sub")}
          </p>
          <div className="pt-2">
            <Link
              href="/product/Nature-Series"
              className="inline-flex items-center space-x-2 px-7 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>{t("sublime_btn")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
