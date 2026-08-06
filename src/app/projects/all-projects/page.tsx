import React from "react";
import Link from "next/link";
import { Building, Hotel, Home, School, Shield } from "lucide-react";

interface ProjectCase {
  title: string;
  category: string;
  location: string;
  image: string;
}

const projects: ProjectCase[] = [
  { title: "Grand Hyatt Luxury Suites", category: "Hotel", location: "Global Showcase", image: "https://iot.ilifesmart.com/resource/instance/16_1752733653_95C074.webp" },
  { title: "Metro Commercial Tower", category: "Office", location: "Singapore", image: "https://iot.ilifesmart.com/resource/instance/20240526_1752733701_DD1709.webp" },
  { title: "Sunset Bay Villa Complex", category: "Residence", location: "Dubai, UAE", image: "https://iot.ilifesmart.com/resource/instance/20240525_1752733621_7F95DE.webp" },
  { title: "Universal Smart Care Center", category: "Elderly Care", location: "Tokyo, Japan", image: "https://iot.ilifesmart.com/resource/instance/14_1752733736_E26AC3.webp" }
];

export default function AllProjectsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Global Deployment</span>
          <h1 className="text-4xl font-extrabold text-gray-900">LifeSmart Worldwide Projects</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Trusted by over 4,000,000 users and enterprise customers across 100+ countries and regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="h-64 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600 uppercase">{p.category}</span>
                  <span className="text-gray-400">{p.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
