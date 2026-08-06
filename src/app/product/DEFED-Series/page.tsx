"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, BellRing, Lock, Radio, Shield, Zap } from "lucide-react";

interface DefedItem {
  name: string;
  subtitle: string;
  tag: string;
  bgImage: string;
  link: string;
}

const defedItems: DefedItem[] = [
  {
    name: "DEFED Smart Station PRO",
    subtitle: "Super Gateway with Cellular SIM Backup",
    tag: "Security Hub",
    bgImage: "https://iot.ilifesmart.com/resource/instance/通廊_1752731170_85BB74_1763717129_82E48F.webp",
    link: "/other/form"
  },
  {
    name: "DEFED Door/Window Sensor",
    subtitle: "Door Window Guardian & Tamper Alert",
    tag: "Intrusion Detection",
    bgImage: "https://iot.ilifesmart.com/resource/instance/maintheme-1_1752731173_D2AE57_1763717134_8053A7.webp",
    link: "/other/form"
  },
  {
    name: "DEFED Motion Sensor",
    subtitle: "High-Security Pet-Immune PIR Detector",
    tag: "Motion Guard",
    bgImage: "https://iot.ilifesmart.com/resource/instance/Property1_023_1725418911_A1C655.webp",
    link: "/other/form"
  },
  {
    name: "DEFED Key Fob",
    subtitle: "Arm, Disarm & Panic Button Remote",
    tag: "Remote Control",
    bgImage: "https://iot.ilifesmart.com/resource/instance/Property1_025_1725418930_B01CBA.webp",
    link: "/other/form"
  },
  {
    name: "DEFED Indoor Siren",
    subtitle: "105dB High Decibel Safety Alarm",
    tag: "Siren Alarm",
    bgImage: "https://iot.ilifesmart.com/resource/instance/Property1_024_1725418921_481689.webp",
    link: "/other/form"
  }
];

export default function DefedSeriesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            Design For Security
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">DEFED SECURITY KIT</h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Your Safety, Our Priority. Complete cellular-backed wireless security ecosystem for smart homes and offices.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-8">
          {defedItems.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px] sm:h-[440px] flex flex-col justify-end p-8 sm:p-12 border border-gray-800 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 space-y-3 max-w-xl text-white">
                <span className="bg-emerald-500 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </span>
                <h2 className="text-3xl font-extrabold">{item.name}</h2>
                <p className="text-sm text-gray-300">{item.subtitle}</p>

                <div className="pt-2">
                  <Link
                    href={item.link}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-bold text-xs rounded-full shadow-lg transition-all"
                  >
                    <span>Inquire {item.name}</span>
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
