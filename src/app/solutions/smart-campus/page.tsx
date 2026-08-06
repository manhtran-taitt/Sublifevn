import React from "react";
import Link from "next/link";

export default function SmartCampusPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Smart Campus & Educational IoT</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Classroom HVAC management, campus lighting schedules, and energy efficiency dashboards.</p>
        <Link href="/other/form" className="inline-block px-8 py-3.5 bg-blue-600 text-white font-bold text-xs rounded-full">Inquire Campus Solution</Link>
      </div>
    </div>
  );
}
