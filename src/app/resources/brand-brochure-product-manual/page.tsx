import React from "react";
import Link from "next/link";
import { Download, FileText, HelpCircle } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Downloads & Guides</span>
          <h1 className="text-4xl font-extrabold text-gray-900">Brand Brochure & User Manuals</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Download official LifeSmart product datasheets, installation guides, and solution catalogs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
            <FileText className="w-10 h-10 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Global Product Brochure 2026</h3>
            <p className="text-xs text-gray-600">Complete catalog featuring SUBLIME, Nature Series, DEFED, and software platform specs.</p>
            <Link href="/other/form" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-bold text-xs rounded-full">
              <Download className="w-4 h-4" />
              <span>Download PDF (28 MB)</span>
            </Link>
          </div>

          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
            <HelpCircle className="w-10 h-10 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">User & Installation Manuals</h3>
            <p className="text-xs text-gray-600">Step-by-step wiring diagrams, gateway pairing steps, and APP setup guides.</p>
            <Link href="/support/FAQ" className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white font-bold text-xs rounded-full">
              <span>View Technical FAQ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
