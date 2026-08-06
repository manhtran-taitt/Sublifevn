import React from "react";
import Link from "next/link";

export default function LifeSmartAppPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Mobile Control</span>
          <h1 className="text-4xl font-extrabold text-gray-900">LifeSmart Mobile APP</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Take total control of your smart home wherever you are in the world.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Seamless Mobile Automation</h2>
          <p className="text-sm max-w-xl mx-auto text-blue-100">
            Available on iOS App Store & Google Play Store with multi-language support, widgets, Apple Watch controls, and voice control via Siri, Alexa, and Google Assistant.
          </p>
          <Link href="/other/form" className="inline-block px-8 py-3.5 bg-white text-blue-600 font-bold text-xs rounded-full shadow-lg">Download App Information</Link>
        </div>
      </div>
    </div>
  );
}
