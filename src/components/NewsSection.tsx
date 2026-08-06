"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsSection() {
  const { t } = useLanguage();

  const newsData = [
    {
      id: 1,
      title: "LifeSmart Global Partner Summit 2026: Shaping the Future of AIoT",
      category: "FEATURED EVENT",
      date: "March 15, 2026",
      summary: "Over 500 global distributors and system integrators gathered to explore next-generation smart home ecosystem solutions.",
      image: "https://iot.ilifesmart.com/resource/instance/20260709-134038_1783575655_B6E96E.webp",
      link: "/about_us/company-news"
    },
    {
      id: 2,
      title: "LifeSmart Launches SUBLIME Series at CES 2026",
      category: "NEW LAUNCH",
      date: "January 10, 2026",
      summary: "SUBLIME metallic switch series wins international design awards for elegant aesthetic craftsmanship.",
      image: "https://iot.ilifesmart.com/resource/instance/060_1725419446_5823F4.webp",
      link: "/about_us/company-news"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              {t("news_badge")}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {t("news_title")}
            </h2>
          </div>
          <Link
            href="/about_us/company-news"
            className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 mt-4 sm:mt-0"
          >
            <span>{t("all_articles")}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((news) => (
            <Link
              key={news.id}
              href={news.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {news.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center text-gray-400 text-xs space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {news.summary}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>{t("read_more")}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
