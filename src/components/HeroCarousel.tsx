"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: t("hero_slide1_title"),
      subtitle: t("hero_slide1_sub"),
      link: "/product/Nature-Series",
      btnText: t("hero_slide1_btn"),
      bgDesktop: "https://iot.ilifesmart.com/resource/instance/通廊_1752730874_731F0B_1763717218_0F590C.webp",
      bgMobile: "https://iot.ilifesmart.com/resource/instance/maintheme_1752731180_B3BD5E_1763717223_E71217.webp",
      textColor: "text-gray-900"
    },
    {
      id: 1,
      title: t("hero_slide2_title"),
      subtitle: t("hero_slide2_sub"),
      link: "/product/DEFED-Series",
      btnText: t("hero_slide2_btn"),
      bgDesktop: "https://iot.ilifesmart.com/resource/instance/通廊_1752731170_85BB74_1763717129_82E48F.webp",
      bgMobile: "https://iot.ilifesmart.com/resource/instance/maintheme-1_1752731173_D2AE57_1763717134_8053A7.webp",
      textColor: "text-gray-900"
    },
    {
      id: 2,
      title: t("hero_slide3_title"),
      subtitle: t("hero_slide3_sub"),
      link: "/product/Switch-Series",
      btnText: t("hero_slide3_btn"),
      bgDesktop: "https://iot.ilifesmart.com/resource/instance/通廊_1752731304_FE8183_1763717040_59F3A5.webp",
      bgMobile: "https://iot.ilifesmart.com/resource/instance/maintheme-2_1752731286_598C0E_1763717044_7B9F84.webp",
      textColor: "text-white"
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
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[620px] lg:h-[690px] overflow-hidden bg-gray-900 pt-16">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out scale-105"
              style={{ backgroundImage: `url('${slide.bgDesktop}')` }}
            />
            <div
              className="md:hidden absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bgMobile}')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

            <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-start text-left z-20">
              <div className="max-w-2xl space-y-4">
                <span className="inline-block px-3 py-1 bg-blue-600/90 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                  {t("hero_badge")}
                </span>
                <h1
                  className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                    slide.textColor === "text-white" ? "text-white" : "text-gray-900 drop-shadow-sm"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-base sm:text-xl font-medium whitespace-pre-line leading-relaxed ${
                    slide.textColor === "text-white" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <div className="pt-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center space-x-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.btnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all shadow-md focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all shadow-md focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-blue-600" : "w-2.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
