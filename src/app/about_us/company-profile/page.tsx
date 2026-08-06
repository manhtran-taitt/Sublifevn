import React from "react";
import Link from "next/link";
import { Globe2, Award, Users2, ShieldAlert } from "lucide-react";

export default function CompanyProfilePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Global AIoT Leader</span>
          <h1 className="text-4xl font-extrabold text-gray-900">About LifeSmart</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            LifeSmart is a leading global brand dedicated to providing smart home automation, AIoT hardware, and energy management solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-2">
            <span className="text-4xl font-extrabold text-blue-600">100+</span>
            <p className="text-xs font-semibold text-gray-600 uppercase">Countries Served</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-2">
            <span className="text-4xl font-extrabold text-blue-600">4M+</span>
            <p className="text-xs font-semibold text-gray-600 uppercase">Active Users</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-2">
            <span className="text-4xl font-extrabold text-blue-600">500+</span>
            <p className="text-xs font-semibold text-gray-600 uppercase">Global Patents</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-2">
            <span className="text-4xl font-extrabold text-blue-600">iF / Red Dot</span>
            <p className="text-xs font-semibold text-gray-600 uppercase">Design Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
