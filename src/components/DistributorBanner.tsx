"use client";

import React from "react";
import Link from "next/link";
import { Handshake, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DistributorBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-12 text-white shadow-2xl border border-blue-800/40">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-3.5 py-1.5 rounded-full">
              <Handshake className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300 uppercase">{t("dist_badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t("dist_title")}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {t("dist_sub")}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/cooperation/become-a-partner"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-xl hover:shadow-blue-500/30 transition-all transform hover:scale-105"
            >
              <span>{t("dist_btn")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
