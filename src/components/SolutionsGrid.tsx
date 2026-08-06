"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Building2, Hotel, HeartPulse, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionsGrid() {
  const { t } = useLanguage();

  const solutions = [
    {
      id: "residence",
      title: t("smart_residence"),
      desc: t("sol_sub"),
      image: "https://iot.ilifesmart.com/resource/instance/20240525_1752733621_7F95DE.webp",
      link: "/solutions/smart-residence",
      icon: <Home className="w-5 h-5 text-blue-500" />
    },
    {
      id: "hotel",
      title: t("smart_hotel"),
      desc: t("sol_sub"),
      image: "https://iot.ilifesmart.com/resource/instance/16_1752733653_95C074.webp",
      link: "/solutions/smart-hotel",
      icon: <Hotel className="w-5 h-5 text-blue-500" />
    },
    {
      id: "office",
      title: t("smart_office"),
      desc: t("sol_sub"),
      image: "https://iot.ilifesmart.com/resource/instance/20240526_1752733701_DD1709.webp",
      link: "/solutions/smart-office",
      icon: <Building2 className="w-5 h-5 text-blue-500" />
    },
    {
      id: "elderly",
      title: t("smart_elderly"),
      desc: t("sol_sub"),
      image: "https://iot.ilifesmart.com/resource/instance/14_1752733736_E26AC3.webp",
      link: "/solutions/smart-elderly-care",
      icon: <HeartPulse className="w-5 h-5 text-blue-500" />
    },
    {
      id: "gaming",
      title: t("smart_gaming"),
      desc: t("sol_sub"),
      image: "https://iot.ilifesmart.com/resource/instance/20240527_1752733748_403B4D.webp",
      link: "/solutions/smart-gaming-room",
      icon: <Gamepad2 className="w-5 h-5 text-blue-500" />
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          {t("sol_badge")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          {t("sol_title")}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          {t("sol_sub")}
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.slice(0, 2).map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg card-hover-effect border border-gray-100"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end text-white space-y-2 z-10">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md w-fit px-3 py-1.5 rounded-full">
                  {item.icon}
                  <span className="text-xs font-semibold text-white uppercase">{item.title}</span>
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{item.desc}</p>
                <div className="pt-2 flex items-center text-blue-400 font-semibold text-xs group-hover:text-blue-300">
                  <span>{t("explore_scenario")}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.slice(2, 5).map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md card-hover-effect border border-gray-100"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end text-white space-y-2 z-10">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md w-fit px-2.5 py-1 rounded-full">
                  {item.icon}
                  <span className="text-xs font-semibold text-white uppercase">{item.title}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-2">{item.desc}</p>
                <div className="pt-1 flex items-center text-blue-400 font-semibold text-xs group-hover:text-blue-300">
                  <span>{t("view_details")}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
