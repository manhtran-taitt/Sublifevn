"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InnovationSection() {
  const { t } = useLanguage();

  const techItems = [
    {
      title: "CoSS® Protocol",
      subtitle: t("inn_sub"),
      iconImg: "https://iot.ilifesmart.com/resource/instance/Frame1597881188_1752733907_8079CB.webp",
      link: "/about_us/innovation",
      badge: "Wireless Protocol"
    },
    {
      title: "AI Builder",
      subtitle: t("inn_sub"),
      iconImg: "https://iot.ilifesmart.com/resource/instance/Frame1597881189_1752733913_0204B8.webp",
      link: "/about_us/innovation",
      badge: "AI Engine"
    },
    {
      title: "Fusion Link™",
      subtitle: t("inn_sub"),
      iconImg: "https://iot.ilifesmart.com/resource/instance/Frame1597881190_1752733919_000A04.webp",
      link: "/about_us/innovation",
      badge: "Hybrid Architecture"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            {t("inn_badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t("inn_title")}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {t("inn_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 relative rounded-xl bg-blue-50 flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                  <img
                    src={item.iconImg}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-100/60 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200/60 mt-6 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>{t("view_specs")}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
