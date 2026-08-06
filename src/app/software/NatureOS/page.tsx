import React from "react";
import Link from "next/link";

export default function NatureOSPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Panel OS</span>
          <h1 className="text-4xl font-extrabold text-white">NatureOS Interface</h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            The next-generation smart panel operating system designed for instant wall control.
          </p>
        </div>
        <div className="bg-gray-800 p-12 rounded-3xl border border-gray-700 space-y-6 text-center">
          <h2 className="text-3xl font-extrabold">Ultra-fluid Touch Experience</h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            NatureOS features intelligent card layout, customizable theme skins, video door station integration, and real-time room temperature & air quality monitoring.
          </p>
          <Link href="/other/form" className="inline-block px-8 py-3.5 bg-blue-600 text-white font-bold text-xs rounded-full shadow-lg">Inquire NatureOS Features</Link>
        </div>
      </div>
    </div>
  );
}
