import React from "react";
import Link from "next/link";

export default function SmartOfficePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://iot.ilifesmart.com/resource/instance/20240526_1752733701_DD1709.webp" alt="Smart Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-12 text-white">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Workplace Tech</span>
              <h1 className="text-4xl font-extrabold">Smart Office Solution</h1>
              <p className="text-sm text-gray-200">Centralized scheduling, conference room automation, energy monitoring, and access control.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/other/form" className="px-8 py-3.5 bg-blue-600 text-white font-bold text-xs rounded-full">Contact Office Solution Manager</Link>
        </div>
      </div>
    </div>
  );
}
