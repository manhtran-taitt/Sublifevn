"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Radio, Zap, Lightbulb, Sliders, Thermometer, Music } from "lucide-react";

interface ProductItem {
  name: string;
  subtitle: string;
  image: string;
  link: string;
}

interface CategoryGroup {
  id: string;
  name: string;
  icon: React.ReactNode;
  products: ProductItem[];
}

const categoriesData: CategoryGroup[] = [
  {
    id: "central-control",
    name: "Central Control",
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    products: [
      { name: "DEFED Smart Station PRO", subtitle: "Faster. Stronger. Further.", image: "https://iot.ilifesmart.com/resource/instance/423_1730872135_802D3C.webp", link: "/product/DEFED-Series" },
      { name: "DEFED Smart Station", subtitle: "Smart Gateway", image: "https://iot.ilifesmart.com/resource/instance/Frame1597880919_1725355347_F476D9.webp", link: "/product/DEFED-Series" },
      { name: "Smart Station", subtitle: "Stable Living for Villas", image: "https://iot.ilifesmart.com/resource/instance/12_1756282107_00F682.webp", link: "/product/Nature-Series" },
      { name: "Nature", subtitle: "Big Screen Control", image: "https://iot.ilifesmart.com/resource/instance/Property1_005_1725355710_2E0DEA.webp", link: "/product/Nature-Series" },
      { name: "Nature 7 PRO", subtitle: "All-in-One Panel", image: "https://iot.ilifesmart.com/resource/instance/Property1_006_1725355725_B003ED.webp", link: "/product/Nature-Series" },
      { name: "Nature X PRO", subtitle: "Smart Desktop Hub", image: "https://iot.ilifesmart.com/resource/instance/Property1_007_1725355740_365278.webp", link: "/product/Nature-Series" },
      { name: "Nature Mini PRO", subtitle: "Compact & Complete", image: "https://iot.ilifesmart.com/resource/instance/003_1730770429_DA7906.webp", link: "/product/Nature-Series" },
      { name: "Nature Mini PRO (PoE)", subtitle: "PoE Control Center", image: "https://iot.ilifesmart.com/resource/instance/004_1730770570_85F992.webp", link: "/product/Nature-Series" },
      { name: "Nature Mini L", subtitle: "120mm Smart Panel", image: "https://iot.ilifesmart.com/resource/instance/Property1_009_1725355768_517E50.webp", link: "/product/Nature-Series" }
    ]
  },
  {
    id: "security",
    name: "Security",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    products: [
      { name: "Smart Door Lock C200", subtitle: "Multi-Access Keyless", image: "https://iot.ilifesmart.com/resource/instance/Property1_021_1725418890_61B41C.webp", link: "/product/DEFED-Series" },
      { name: "Outdoor Camera", subtitle: "Home Guardian 1080P", image: "https://iot.ilifesmart.com/resource/instance/031_1730447158_0BB9B7.webp", link: "/product/DEFED-Series" },
      { name: "Indoor Camera 5MP", subtitle: "5MP HD Night Vision", image: "https://iot.ilifesmart.com/resource/instance/Property1_022_1725418898_0EC06C.webp", link: "/product/DEFED-Series" },
      { name: "DEFED Motion Sensor", subtitle: "High-Security Detector", image: "https://iot.ilifesmart.com/resource/instance/Property1_023_1725418911_A1C655.webp", link: "/product/DEFED-Series" },
      { name: "DEFED Indoor Siren", subtitle: "Indoor Safety Alarm", image: "https://iot.ilifesmart.com/resource/instance/Property1_024_1725418921_481689.webp", link: "/product/DEFED-Series" },
      { name: "DEFED Door/Window Sensor", subtitle: "Door Window Guardian", image: "https://iot.ilifesmart.com/resource/instance/Property1_026_1725418940_D60BFE.webp", link: "/product/DEFED-Series" },
      { name: "DEFED Key Fob", subtitle: "Control With Ease", image: "https://iot.ilifesmart.com/resource/instance/Property1_025_1725418930_B01CBA.webp", link: "/product/DEFED-Series" },
      { name: "Smoke Detector (ZigBee)", subtitle: "Optical Smoke Sensor", image: "https://iot.ilifesmart.com/resource/instance/Frame1597880919_1758016844_409AF0.webp", link: "/product/DEFED-Series" },
      { name: "Water Leak Sensor", subtitle: "24/7 Flood Monitor", image: "https://iot.ilifesmart.com/resource/instance/Property1_027_1725418948_7DB212.webp", link: "/product/DEFED-Series" }
    ]
  },
  {
    id: "sensor",
    name: "Sensor",
    icon: <Radio className="w-5 h-5 text-blue-600" />,
    products: [
      { name: "Motion Sensor PRO", subtitle: "Tiny Motion Detector", image: "https://iot.ilifesmart.com/resource/instance/040_1725419077_708031.webp", link: "/product/DEFED-Series" },
      { name: "CUBE Door/Window Sensor", subtitle: "Open/Close Tracker", image: "https://iot.ilifesmart.com/resource/instance/041_1725419090_D91871.webp", link: "/product/DEFED-Series" },
      { name: "CUBE Environmental Sensor", subtitle: "Pleasant Home Climate", image: "https://iot.ilifesmart.com/resource/instance/042_1725419101_E2ABC0.webp", link: "/product/DEFED-Series" },
      { name: "Human Presence Sensor (Radar)", subtitle: "Ceiling Millimeter Radar", image: "https://iot.ilifesmart.com/resource/instance/043_1725419110_528B34.webp", link: "/product/DEFED-Series" },
      { name: "Air Quality Detector", subtitle: "Live Air Data Monitor", image: "https://iot.ilifesmart.com/resource/instance/044_1730447308_166738.webp", link: "/product/DEFED-Series" }
    ]
  },
  {
    id: "energy-saving",
    name: "Energy Saving",
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    products: [
      { name: "General Controller", subtitle: "Third-Party Integration", image: "https://iot.ilifesmart.com/resource/instance/051_1725419248_1A12A7.webp", link: "/other/form" },
      { name: "RS485 Converter", subtitle: "RS485 Integration Hub", image: "https://iot.ilifesmart.com/resource/instance/052_1725419257_0CBCED.webp", link: "/other/form" },
      { name: "Smart Plug (CoSS EU & FR)", subtitle: "Power Metering Plug", image: "https://iot.ilifesmart.com/resource/instance/3213_1756282751_469333.webp", link: "/other/form" },
      { name: "Smart Plug (ZigBee US)", subtitle: "15A Smart Outlet", image: "https://iot.ilifesmart.com/resource/instance/Lark20201123-174046_A7241C_1756118450_0351BF.webp", link: "/other/form" },
      { name: "HA Interface Adaptor", subtitle: "Dry Contact Module", image: "https://iot.ilifesmart.com/resource/instance/产品图-1_C1FA72_1756118899_206C5C.webp", link: "/other/form" }
    ]
  },
  {
    id: "lighting",
    name: "Lighting",
    icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
    products: [
      { name: "BLEND Switch PRO (Metal)", subtitle: "Elegant Smart Switch", image: "https://iot.ilifesmart.com/resource/instance/060_1725419446_5823F4.webp", link: "/product/Switch-Series" },
      { name: "Nature Switch", subtitle: "Red Dot Award Winner", image: "https://iot.ilifesmart.com/resource/instance/061_1730715556_A189D6.webp", link: "/product/Switch-Series" },
      { name: "Nature Switch (Matte)", subtitle: "Fingerprint-Free Finish", image: "https://iot.ilifesmart.com/resource/instance/061_1725419457_CFD121_1730710419_79E62C.webp", link: "/product/Switch-Series" },
      { name: "Smart Switch Air", subtitle: "Thinnest Smart Switch", image: "https://iot.ilifesmart.com/resource/instance/065_1725419501_F5C29C.webp", link: "/product/Switch-Series" },
      { name: "Triac Dimmer Switch", subtitle: "Precise Dimming Control", image: "https://iot.ilifesmart.com/resource/instance/070_1725419543_756C4F_1756178036_3A12DD.webp", link: "/product/Switch-Series" },
      { name: "CUBE Clicker", subtitle: "Wire-Free Remote Control", image: "https://iot.ilifesmart.com/resource/instance/074_1725419583_A844E8.webp", link: "/product/Switch-Series" },
      { name: "CUBE Switch Module PRO", subtitle: "In-wall Relay Module", image: "https://iot.ilifesmart.com/resource/instance/奇点开关pro076_1725422223_346501_1756179198_353FBB.webp", link: "/product/Switch-Series" }
    ]
  }
];

export default function AllProductsPage() {
  const [activeTab, setActiveTab] = useState<string>("central-control");

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden h-[260px] sm:h-[320px] shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://iot.ilifesmart.com/resource/instance/通廊_1742888810_0735B1_1756798534_051161.webp')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="relative h-full p-8 sm:p-12 flex flex-col justify-center items-start text-white space-y-2">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-widest">LifeSmart Catalog</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-200">Re-invent The Wall Switch</h1>
            <p className="text-sm text-amber-100 font-medium">Enjoy Your Life with SUBLIME & AIoT Products</p>
          </div>
        </div>

        {/* Anchor Tab Navigation Bar */}
        <div className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-gray-200 shadow-md overflow-x-auto flex space-x-2 scrollbar-none">
          {categoriesData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-2 ${
                activeTab === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Category Sections & Product Cards */}
        <div className="space-y-12 pt-4">
          {categoriesData.map((cat) => (
            <div key={cat.id} id={cat.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 rounded-2xl">{cat.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                </div>
                <span className="text-xs font-semibold text-gray-400">{cat.products.length} Products</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.products.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="group bg-gray-50 hover:bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="h-44 rounded-xl overflow-hidden bg-white flex items-center justify-center p-3 border border-gray-100/60">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-1">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="pt-4 mt-2 border-t border-gray-200/50 flex items-center justify-between text-xs font-semibold text-blue-600">
                      <span>Explore Device</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
