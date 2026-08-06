import React from "react";
import Link from "next/link";
import { Home, Lightbulb, Shield, Tv, Sparkles, ArrowRight } from "lucide-react";

export default function SmartResidencePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://iot.ilifesmart.com/resource/instance/20240525_1752733621_7F95DE.webp"
            alt="Smart Residence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-12 text-white">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Residential Automation</span>
              <h1 className="text-4xl font-extrabold">Smart Residence Solution</h1>
              <p className="text-sm text-gray-200">
                Transform your home with automated lighting, climate synchronization, security monitoring, and voice control.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
            <Lightbulb className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Smart Lighting & Scenes</h3>
            <p className="text-xs text-gray-600">Automated ambient dimming and welcome scenes triggered upon entering your home.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Comprehensive Security</h3>
            <p className="text-xs text-gray-600">24/7 door status monitoring, water leak detection, and emergency mobile push alerts.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
            <Tv className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Home Theater Integration</h3>
            <p className="text-xs text-gray-600">One-click cinema mode lowering shades, dimming lights, and powering audio receivers.</p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Ready to automate your home?</h3>
            <p className="text-xs text-blue-100">Get a tailored layout quote for your apartment or villa.</p>
          </div>
          <Link href="/other/form" className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 font-bold text-xs rounded-full shadow-lg">Request Solution Quote</Link>
        </div>
      </div>
    </div>
  );
}
