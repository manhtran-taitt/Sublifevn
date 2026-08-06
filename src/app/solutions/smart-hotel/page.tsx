import React from "react";
import Link from "next/link";
import { Hotel, Key, Zap, Users } from "lucide-react";

export default function SmartHotelPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://iot.ilifesmart.com/resource/instance/16_1752733653_95C074.webp"
            alt="Smart Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-12 text-white">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Hospitality Intelligence</span>
              <h1 className="text-4xl font-extrabold">Smart Hotel Solution</h1>
              <p className="text-sm text-gray-200">
                Enhance guest experience, reduce room energy consumption by up to 30%, and streamline PMS front-desk management.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <Key className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Keyless Guest Check-in</h3>
            <p className="text-xs text-gray-600">Mobile Bluetooth & QR code room door access synced directly with PMS software.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <Zap className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Smart Energy Saving</h3>
            <p className="text-xs text-gray-600">Occupancy PIR sensors automatically set HVAC to eco mode when guests exit.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <Hotel className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold">Nature Mini Hotel RCU</h3>
            <p className="text-xs text-gray-600">All-in-one wall control replacement for traditional bulky RCU boxes.</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Hospitality Project Inquiry</h3>
            <p className="text-xs text-gray-400">Consult with our hotel automation engineers.</p>
          </div>
          <Link href="/other/form" className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-full">Request B2B Hotel Proposal</Link>
        </div>
      </div>
    </div>
  );
}
