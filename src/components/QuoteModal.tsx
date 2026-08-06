"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface QuoteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function QuoteModal({ isOpen: externalIsOpen, onClose: externalOnClose }: QuoteModalProps) {
  const { lang } = useLanguage();
  const isVi = lang === "vi";

  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalOnClose || setInternalIsOpen;

  const [userRole, setUserRole] = useState(isVi ? "Đại Lý" : "Distributor");
  const [interest, setInterest] = useState(isVi ? "Smart Home Không dây" : "Wireless Smart Home");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    area: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name.trim(),
      role: userRole,
      company: formData.company.trim(),
      area: formData.area.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      country: "Vietnam",
      interest: interest,
      content: formData.content.trim(),
    };

    fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          if (typeof setIsOpen === "function") setIsOpen(false);
          setFormData({ name: "", email: "", phone: "", company: "", area: "", content: "" });
        }, 2800);
      })
      .catch(() => {
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          if (typeof setIsOpen === "function") setIsOpen(false);
        }, 2800);
      });
  };

  const roles = isVi
    ? ["Đại Lý", "Đơn Vị Tích Hợp", "Chủ Đầu Tư BĐS", "Khách Hàng Cá Nhân"]
    : ["Distributor", "System Integrator", "Developer", "End User"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#120e0c] border border-[#d8b391]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-[#d8b391]">
        <button
          onClick={() => {
            if (typeof setIsOpen === "function") setIsOpen(false);
          }}
          className="absolute top-6 right-6 text-[#d8b391]/60 hover:text-[#d8b391] p-2 rounded-full hover:bg-[#221a15] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-[#ccae8d] mx-auto animate-bounce" />
            <h3 className="text-2xl font-extrabold text-[#f3e6d8]">
              {isVi ? "Gửi Yêu Cầu Thành Công!" : "Submitted Successfully!"}
            </h3>
            <p className="text-sm text-[#cfc6bc]">
              {isVi
                ? "Cảm ơn bạn đã liên hệ LifeSmart. Thông tin báo giá đã được gửi về email manhtranwork19@gmail.com và đội ngũ tư vấn sẽ phản hồi trong 24h."
                : "Thank you for reaching out to LifeSmart. Our team will contact you shortly."}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#f3e6d8]">
                {isVi ? "Đăng Ký Nhận Báo Giá Dự Án" : "Request Project Quotation"}
              </h2>
              <p className="text-xs text-[#d8b391]/70 mt-1">
                {isVi
                  ? "Vui lòng điền thông tin để đội ngũ tư vấn giải pháp LifeSmart hỗ trợ bạn tốt nhất."
                  : "Please fill in the information for our LifeSmart solution team to assist you."}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#d8b391] uppercase mb-2">
                {isVi ? "BẠN LÀ:" : "YOU ARE A:"}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {roles.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setUserRole(r)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                      userRole === r
                        ? "border-[#ccae8d] bg-[#ccae8d] text-[#120e0c] shadow-md font-bold"
                        : "border-[#d8b391]/30 bg-[#1c1714] text-[#d8b391]/80 hover:border-[#d8b391]"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d8b391] mb-1">
                    {isVi ? "Họ và tên *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isVi ? "Nguyễn Văn A" : "John Doe"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none placeholder-[#d8b391]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#d8b391] mb-1">
                    {isVi ? "Email liên hệ *" : "Contact Email *"}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="info@thachanhitt.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none placeholder-[#d8b391]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d8b391] mb-1">
                    {isVi ? "Số điện thoại / Zalo *" : "Phone / Zalo *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09536661774"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none placeholder-[#d8b391]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#d8b391] mb-1">
                    {isVi ? "Tên Công ty / Đơn vị" : "Company Name"}
                  </label>
                  <input
                    type="text"
                    placeholder={isVi ? "Thạch Anh ITT" : "Company name"}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none placeholder-[#d8b391]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d8b391] mb-1">
                    {isVi ? "Diện tích công trình (m²)" : "Project Area (m²)"}
                  </label>
                  <input
                    type="text"
                    placeholder="150m²"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none placeholder-[#d8b391]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#d8b391] mb-1">
                    {isVi ? "Giải pháp quan tâm" : "Solution of Interest"}
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none cursor-pointer"
                  >
                    <option value="Smart Home Không dây">Smart Home Không dây (CoSS)</option>
                    <option value="Smart Home Có dây Bus">Smart Home Có dây (CoTP)</option>
                    <option value="Smart Hotel">Khách Sạn Thông Minh</option>
                    <option value="Smart Office">Văn Phòng Thông Minh</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d8b391] mb-1">
                  {isVi ? "Nhu cầu chi tiết" : "Project Details"}
                </label>
                <textarea
                  rows={3}
                  placeholder={isVi ? "Mô tả chi tiết dự án của bạn..." : "Describe your project needs..."}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d8b391]/30 bg-[#1c1714] text-xs text-[#f3e6d8] focus:ring-2 focus:ring-[#ccae8d] focus:border-[#ccae8d] focus:outline-none placeholder-[#d8b391]/30"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-[#ccae8d] to-[#d8b391] hover:from-[#d8b391] hover:to-[#e6c4a5] text-[#120e0c] font-extrabold text-xs rounded-xl shadow-lg uppercase tracking-wider transition-all transform active:scale-98"
              >
                {loading
                  ? isVi ? "ĐANG GỬI THÔNG TIN..." : "SUBMITTING..."
                  : isVi ? "GỬI YÊU CẦU BÁO GIÁ NGAY" : "SUBMIT QUOTE REQUEST"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
