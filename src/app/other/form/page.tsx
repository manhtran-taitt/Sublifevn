import React from "react";
import QuoteModal from "@/components/QuoteModal";

export default function InquiryFormPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl w-full bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Contact & Quotes</span>
          <h1 className="text-3xl font-extrabold text-gray-900">LifeSmart Inquiry Form</h1>
          <p className="text-xs text-gray-500">Please fill out your project or distribution requirements below.</p>
        </div>

        <QuoteModal />
        
        <div className="p-4 bg-blue-50 rounded-2xl text-xs text-blue-800 space-y-1 text-center">
          <p className="font-semibold">Need immediate support?</p>
          <p>Email: <a href="mailto:inquiry@ilifesmart.com" className="underline font-bold">inquiry@ilifesmart.com</a></p>
        </div>
      </div>
    </div>
  );
}
