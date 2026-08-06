"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Monitor, Cpu, Touchpad, CheckCircle2 } from "lucide-react";

interface PanelModel {
  title: string;
  subtitle: string;
  tag: string;
  bgImage: string;
  link: string;
  features: string[];
}

const naturePanels: PanelModel[] = [
  {
    title: "Nature X PRO",
    subtitle: "Desktop Smart Control Center",
    tag: "Desktop Touch & Dial",
    bgImage: "https://iot.ilifesmart.com/resource/instance/通栏1_1728963684_BA0E75.webp",
    link: "/other/form",
    features: ["Interactive Rotary Dial & OLED Touchscreen", "Built-in CoSS Gateway & Speaker", "Customizable RGB Ambient Light Base"]
  },
  {
    title: "Nature Panel",
    subtitle: "Less is More Flagship Touch Screen",
    tag: "10.1-inch HD Touch Center",
    bgImage: "https://iot.ilifesmart.com/resource/instance/通栏1-1_1728963704_F5D1D6.webp",
    link: "/other/form",
    features: ["CNC Precision Aluminum Alloy Frame", "All-in-One HVAC, Shading & Lighting Control", "NatureOS Dynamic Scene Dashboard"]
  },
  {
    title: "Nature 7 PRO",
    subtitle: "One Touch, Infinite Control",
    tag: "7-inch Wall Touch Center",
    bgImage: "https://iot.ilifesmart.com/resource/instance/通栏1-2_1728963719_39045D.webp",
    link: "/other/form",
    features: ["Built-in Smart Station Hub", "Intercom & Video Doorbell System", "Dual Power Lines Support (AC & PoE)"]
  },
  {
    title: "Nature Mini PRO",
    subtitle: "Space Redefined, Clutter-Free",
    tag: "4-inch Smart Wall Panel",
    bgImage: "https://iot.ilifesmart.com/resource/instance/通栏1_1730702251_7AE6D9.webp",
    link: "/other/form",
    features: ["Standard 86 Box Flush Mount", "Multi-Protocol Support (CoSS, ZigBee, Wi-Fi)", "Real-Time Temperature & Power Status"]
  },
  {
    title: "Nature Mini L",
    subtitle: "Beauty in Every Dimension",
    tag: "120mm US Standard Panel",
    bgImage: "https://iot.ilifesmart.com/resource/instance/通栏1_1729762228_5332DB.webp",
    link: "/other/form",
    features: ["Fits US/AU 120 Wall Junction Boxes", "Dual Physical Buttons + Touch Display", "Seamless Smart Scene Triggering"]
  }
];

export default function NatureSeriesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
            Control Center Series
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Nature Series</h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            The LifeSmart control panel series provides different-sized control centers. Whether on the wall or on a desktop, you can choose the one you need.
          </p>
        </div>

        {/* Panel Full Banners */}
        <div className="space-y-10">
          {naturePanels.map((panel, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 min-h-[420px] sm:min-h-[480px] flex flex-col justify-end group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${panel.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative p-8 sm:p-12 z-10 space-y-4 max-w-2xl">
                <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {panel.tag}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{panel.title}</h2>
                <p className="text-base text-gray-200 font-medium">{panel.subtitle}</p>

                <ul className="space-y-2 pt-2">
                  {panel.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs text-gray-300 space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href={panel.link}
                    className="inline-flex items-center space-x-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-full shadow-lg transition-all"
                  >
                    <span>Inquire {panel.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
