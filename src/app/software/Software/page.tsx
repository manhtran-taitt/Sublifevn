import React from "react";
import Link from "next/link";
import { Smartphone, Monitor, Cloud, Code, Check } from "lucide-react";

export default function SoftwareOverviewPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Intelligent Operating Systems</span>
          <h1 className="text-4xl font-extrabold text-gray-900">LifeSmart Software Ecosystem</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            From intuitive mobile APPs to edge panel operating systems and open cloud APIs for B2B management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all space-y-6">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">LifeSmart APP</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Mobile application for iOS and Android. Control devices, set automation routines, and manage security remotely.
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> One-tap Scene Execution</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Multi-home & Family Sharing</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Real-time Energy Monitoring</li>
            </ul>
            <Link href="/software/lifesmart_app" className="block text-center py-3 bg-blue-600 text-white font-semibold text-xs rounded-xl hover:bg-blue-700">Explore APP</Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all space-y-6">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">NatureOS</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Engineered specifically for Nature Series touch panels. Smooth gesture navigation and rich widget customization.
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Interactive Lighting Wheel</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> HVAC & Curtain Control</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Built-in Intercom & Doorbell</li>
            </ul>
            <Link href="/software/NatureOS" className="block text-center py-3 bg-blue-600 text-white font-semibold text-xs rounded-xl hover:bg-blue-700">Explore NatureOS</Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all space-y-6">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit">
              <Cloud className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">B2B Cloud API</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Open RESTful APIs and MQTT integration for property management systems, hotel PMS, and building management (BMS).
            </p>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Open Cloud & Local API</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Matter & HomeKit Protocol</li>
              <li className="flex items-center"><Check className="w-4 h-4 text-blue-600 mr-2" /> Commercial Fleet Management</li>
            </ul>
            <Link href="/other/form" className="block text-center py-3 bg-gray-900 text-white font-semibold text-xs rounded-xl hover:bg-black">Request API Access</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
