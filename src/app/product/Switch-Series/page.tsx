"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Sparkles, Sliders, CheckCircle2 } from "lucide-react";

interface SwitchGroup {
  category: string;
  desc: string;
  items: {
    name: string;
    tagline: string;
    bgImage: string;
    textColor: string;
  }[];
}

const switchData: SwitchGroup[] = [
  {
    category: "SUBLIME Luxury Series",
    desc: "Crafted with solid metallic finishes, tactile mechanical feedback, and ambient LED highlights.",
    items: [
      {
        name: "SUBLIME Touch Switch",
        tagline: "Solid Brass & Glass Finish",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880898_1756796706_125350.webp",
        textColor: "text-white"
      },
      {
        name: "SUBLIME Push Switch",
        tagline: "Mechanical Click Feedback",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880899_1756796715_A1D1EF.webp",
        textColor: "text-gray-900"
      },
      {
        name: "SUBLIME Scene Switch",
        tagline: "Multi-Scene Shortcut Controller",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880900_1756796730_A575F8.webp",
        textColor: "text-white"
      },
      {
        name: "SUBLIME Knob Switch",
        tagline: "Precision Dimming & HVAC Knob",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880901_1756796751_7E4C48.webp",
        textColor: "text-white"
      }
    ]
  },
  {
    category: "Nature Switch Series",
    desc: "Minimalist Red Dot Award winning design with customizable 16M RGB backlights.",
    items: [
      {
        name: "Nature Switch",
        tagline: "Red Dot Award Winner",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880904_1756796904_49653F.webp",
        textColor: "text-gray-900"
      },
      {
        name: "Nature Switch (Matte)",
        tagline: "Fingerprint-Free Matte Texture",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880903_1756796934_9026C2.webp",
        textColor: "text-gray-900"
      },
      {
        name: "Nature Switch L (120 Standard)",
        tagline: "US / AU Junction Box Fit",
        bgImage: "https://iot.ilifesmart.com/resource/instance/20260709-134038_1783575655_B6E96E.webp",
        textColor: "text-white"
      }
    ]
  },
  {
    category: "Starry & BLEND Series",
    desc: "Modern aluminum frame switches engineered with ultra-fast CoSS wireless response.",
    items: [
      {
        name: "Starry Smart Switch",
        tagline: "Matte Metal Frame Switch",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880911_1756797079_4B4537.webp",
        textColor: "text-gray-900"
      },
      {
        name: "BLEND Switch PRO (Metal)",
        tagline: "Integrated Dual-Wire Relay",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880909_1756797092_51D450.webp",
        textColor: "text-gray-900"
      },
      {
        name: "BLEND Switch PRO",
        tagline: "Neutral-Free Retrofit Fit",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880910_1756797103_DC2226.webp",
        textColor: "text-gray-900"
      },
      {
        name: "Smart Switch Air",
        tagline: "Ultra-Thin Profile Switch",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880912_1756797117_0AD295.webp",
        textColor: "text-gray-900"
      }
    ]
  },
  {
    category: "CUBE & In-Wall Relays",
    desc: "Concealed switch modules turning traditional wall switches into smart automation controls.",
    items: [
      {
        name: "CUBE Switch Module PRO",
        tagline: "Compact In-wall Relay",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597881256_1757057537_D85252.webp",
        textColor: "text-gray-900"
      },
      {
        name: "CUBE Switch Module",
        tagline: "Retrofit Micro Module",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597881257_1757057551_69C96E.webp",
        textColor: "text-gray-900"
      },
      {
        name: "CUBE Clicker",
        tagline: "Wire-Free Battery Switch",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880906_1756798768_792BDA_1756870342_640A84.webp",
        textColor: "text-gray-900"
      },
      {
        name: "Dimmer & Motion Switch",
        tagline: "Motion Sensor + Triac Dimmer",
        bgImage: "https://iot.ilifesmart.com/resource/instance/Frame1597880907_1756798608_40A187.webp",
        textColor: "text-gray-900"
      }
    ]
  }
];

export default function SwitchSeriesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Architectural Lighting & Power
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            SMART SWITCH SERIES
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Switches in All Sizes & Materials. Light Up Your Day with CoSS® ultra-reliable wireless transmission.
          </p>
        </div>

        {/* Series Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 overflow-x-auto space-x-4 pb-2">
          {switchData.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 font-bold text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                activeTab === idx
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Series Showcase */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">{switchData[activeTab].category}</h2>
            <p className="text-xs text-gray-500 mt-1">{switchData[activeTab].desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {switchData[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden shadow-lg h-[360px] flex flex-col justify-end p-8 border border-gray-100 group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="relative z-10 text-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <div className="pt-2">
                    <Link
                      href="/other/form"
                      className="inline-flex items-center space-x-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-md transition-all"
                    >
                      <span>Inquire Product</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
