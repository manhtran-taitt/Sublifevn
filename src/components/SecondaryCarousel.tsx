"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SecondaryCarousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: t("adv_slide1_title"),
      subtitle: t("adv_slide1_sub"),
      link: "/software/Software",
      bgImage: "https://iot.ilifesmart.com/resource/instance/通廊_1752731775_7E63D2_1752802687_8D4618.webp"
    },
    {
      id: 1,
      title: t("adv_slide2_title"),
      subtitle: t("adv_slide2_sub"),
      link: "/cooperation/become-a-partner",
      bgImage: "https://iot.ilifesmart.com/resource/instance/通廊_1753866481_90B88D.webp"
    },
    {
      id: 2,
      title: t("adv_slide3_title"),
      subtitle: t("adv_slide3_sub"),
      link: "/product/all_products",
      bgImage: "https://iot.ilifesmart.com/resource/instance/completesmarthomesolutions_1754034145_7BE304.webp"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[520px] lg:h-[620px] my-8 overflow-hidden rounded-2xl max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out scale-105"
                style={{ backgroundImage: `url('${slide.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              <div className="relative h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16 z-20 text-white max-w-3xl space-y-4">
                <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest">
                  {t("adv_badge")}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="pt-2">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-white font-semibold text-sm transition-colors group"
                  >
                    <span>{t("see_more_details")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-6 right-8 z-30 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "w-6 bg-blue-500" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
