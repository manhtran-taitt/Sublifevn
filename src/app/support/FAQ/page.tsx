import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

const faqs = [
  { q: "What is CoSS® protocol and why is it superior?", a: "CoSS® (Communication of Smart Structure) is LifeSmart's proprietary wireless protocol offering 800m open-air transmission, ultra-low power consumption, and instant signal response." },
  { q: "Do LifeSmart devices work with Apple HomeKit & Matter?", a: "Yes! LifeSmart Smart Station gateways support Apple HomeKit, Matter, Google Assistant, and Amazon Alexa." },
  { q: "How can I become an authorized LifeSmart distributor?", a: "You can apply via our Partnership page or contact our global business team directly through the inquiry form." }
];

export default function TechnicalFAQPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Support Knowledgebase</span>
          <h1 className="text-4xl font-extrabold text-gray-900">Technical FAQ</h1>
          <p className="text-base text-gray-600">Frequently asked technical questions regarding hardware, gateway protocols, and integration.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs text-gray-600 pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
