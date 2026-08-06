"use client";

import React, { useEffect, useRef, useState } from "react";
import QuoteModal from "@/components/QuoteModal";
import "./sublime.css";

const COUNTRY_LIST_EN = [
  { en: "Vietnam", nc: "VN" },
  { en: "United States", nc: "US" },
  { en: "United Kingdom", nc: "GB" },
  { en: "Australia", nc: "AU" },
  { en: "Canada", nc: "CA" },
  { en: "China", nc: "CN" },
  { en: "France", nc: "FR" },
  { en: "Germany", nc: "DE" },
  { en: "Hong Kong, China", nc: "HK" },
  { en: "India", nc: "IN" },
  { en: "Indonesia", nc: "ID" },
  { en: "Italy", nc: "IT" },
  { en: "Japan", nc: "JP" },
  { en: "Korea, South", nc: "KR" },
  { en: "Malaysia", nc: "MY" },
  { en: "New Zealand", nc: "NZ" },
  { en: "Philippines", nc: "PH" },
  { en: "Singapore", nc: "SG" },
  { en: "Taiwan, China", nc: "TW" },
  { en: "Thailand", nc: "TH" },
  { en: "United Arab Emirates", nc: "AE" }
];

const COUNTRY_LIST_VI = [
  { en: "Việt Nam", nc: "VN" },
  { en: "Hoa Kỳ (Mỹ)", nc: "US" },
  { en: "Vương Quốc Anh", nc: "GB" },
  { en: "Úc (Australia)", nc: "AU" },
  { en: "Canada", nc: "CA" },
  { en: "Trung Quốc", nc: "CN" },
  { en: "Pháp", nc: "FR" },
  { en: "Đức", nc: "DE" },
  { en: "Hồng Kông, Trung Quốc", nc: "HK" },
  { en: "Ấn Độ", nc: "IN" },
  { en: "Indonesia", nc: "ID" },
  { en: "Ý (Italy)", nc: "IT" },
  { en: "Nhật Bản", nc: "JP" },
  { en: "Hàn Quốc", nc: "KR" },
  { en: "Malaysia", nc: "MY" },
  { en: "New Zealand", nc: "NZ" },
  { en: "Philippines", nc: "PH" },
  { en: "Singapore", nc: "SG" },
  { en: "Đài Loan, Trung Quốc", nc: "TW" },
  { en: "Thái Lan", nc: "TH" },
  { en: "Các Tiểu Vương Quốc Ả Rập", nc: "AE" }
];

const GALLERY_IMAGES = [
  "/sublime_tob/assets/gallery1.webp",
  "/sublime_tob/assets/gallery2.webp",
  "/sublime_tob/assets/gallery3.webp",
  "/sublime_tob/assets/gallery4.webp",
  "/sublime_tob/assets/gallery5.webp",
  "/sublime_tob/assets/gallery6.webp"
];

const PRODUCT_SLIDES = [
  "/sublime_tob/assets/product-slide-1.webp",
  "/sublime_tob/assets/product-slide-2.webp",
  "/sublime_tob/assets/product-slide-3.webp",
  "/sublime_tob/assets/product-slide-4.webp",
  "/sublime_tob/assets/product-slide-5.webp"
];

export default function SublimePage() {
  // Language Switcher State ('vi' or 'en')
  const [lang, setLang] = useState<"vi" | "en">("vi");

  // Product Fader Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  // Floating Inquiry Trigger State
  const [floatingVisible, setFloatingVisible] = useState(false);

  // Form Role Tabbar State
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const rolesEN = [
    "Distributor",
    "Installer",
    "Designer",
    "Developer",
    "System Integrator"
  ];

  const rolesVI = [
    "Nhà phân phối",
    "Đơn vị thi công",
    "KTS / Thiết kế",
    "Chủ đầu tư / Chủ nhà",
    "Nhà tích hợp hệ thống"
  ];

  // Country Selector State
  const [countryInput, setCountryInput] = useState("");
  const [countrySelected, setCountrySelected] = useState<{ en: string; nc: string } | null>(null);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  // Interested Multi-Select State
  const [interestedOptions, setInterestedOptions] = useState<{ [key: string]: boolean }>({
    "Wireless Smart Home": false,
    "Wired Smart Home": false
  });
  const [interestDropdownOpen, setInterestDropdownOpen] = useState(false);

  // Form Fields State
  const [formName, setFormName] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formArea, setFormArea] = useState("");
  const [formConcat, setFormConcat] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Toast / Form Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Marquee Gallery Ref & Touch Dragging State
  const trackRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const movedRef = useRef(false);
  const halfWidthRef = useRef(0);

  // Video fallback refs
  const heroLocalRef = useRef<HTMLVideoElement>(null);
  const controlLocalRef = useRef<HTMLVideoElement>(null);
  const [useLocalHeroVideo, setUseLocalHeroVideo] = useState(false);
  const [useLocalControlVideo, setUseLocalControlVideo] = useState(false);

  // Product Slides cross-fader timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % PRODUCT_SLIDES.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  // Floating Inquiry Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector(".hero");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setFloatingVisible(rect.bottom <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Marquee Gallery Animation Loop
  useEffect(() => {
    let animId: number;

    const measure = () => {
      if (trackRef.current) {
        halfWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };

    measure();
    window.addEventListener("resize", measure);

    const tick = () => {
      if (!isPaused && !isDragging) {
        setXPos((prevX) => {
          let nextX = prevX - 0.24;
          const hw = halfWidthRef.current || 1800;
          if (Math.abs(nextX) >= hw) {
            nextX += hw;
          }
          return nextX;
        });
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", measure);
    };
  }, [isPaused, isDragging]);

  // Gallery Dragging Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    movedRef.current = false;
    startXRef.current = e.clientX;
    startOffsetRef.current = xPos;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startXRef.current;
    if (Math.abs(delta) > 4) movedRef.current = true;
    setXPos(startOffsetRef.current + delta);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      setIsDragging(true);
      movedRef.current = false;
      startXRef.current = e.touches[0].clientX;
      startOffsetRef.current = xPos;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    const delta = e.touches[0].clientX - startXRef.current;
    if (Math.abs(delta) > 4) movedRef.current = true;
    setXPos(startOffsetRef.current + delta);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const openImageLightbox = (src: string) => {
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formLoading) return;

    if (!formName.trim()) {
      showToast(lang === "vi" ? "Vui lòng nhập Họ tên của bạn." : "The name is a required field!");
      return;
    }
    if (!formConcat.trim()) {
      showToast(lang === "vi" ? "Vui lòng nhập Số điện thoại liên hệ." : "Contact Number is a required field!");
      return;
    }
    if (!formEmail.trim()) {
      showToast(lang === "vi" ? "Vui lòng nhập địa chỉ Email." : "The email is a required field!");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formEmail.trim())) {
      showToast(lang === "vi" ? "Vui lòng kiểm tra lại định dạng Email." : "Please confirm the format of the email address.");
      return;
    }
    if (!formContent.trim()) {
      showToast(lang === "vi" ? "Vui lòng nhập chi tiết nhu cầu dự án." : "The content is a required field!");
      return;
    }
    if (!countrySelected && !countryInput.trim()) {
      showToast(lang === "vi" ? "Vui lòng chọn Quốc gia/Khu vực." : "The country/Region is a required field!");
      return;
    }

    setFormLoading(true);

    const payload = {
      name: formName.trim(),
      role: currentRoles[activeRoleIndex],
      company: formCompany.trim(),
      area: formArea.trim(),
      email: formEmail.trim(),
      phone: formConcat.trim(),
      country: countrySelected ? countrySelected.en : countryInput.trim(),
      interest: selectedInterestedText || "Khác / All",
      content: formContent.trim(),
    };

    fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        setFormLoading(false);
        showToast(
          lang === "vi"
            ? "Gửi yêu cầu thành công! Đội ngũ tư vấn sẽ gửi báo giá đến email của bạn và liên hệ lại trong thời gian sớm nhất."
            : "Your submission has been successful. Our team will process your quote request as soon as possible!"
        );
        setFormName("");
        setFormCompany("");
        setFormArea("");
        setFormConcat("");
        setFormEmail("");
        setFormContent("");
        setCountryInput("");
        setCountrySelected(null);
      })
      .catch(() => {
        setFormLoading(false);
        showToast(
          lang === "vi"
            ? "Gửi yêu cầu thành công! Chúng tôi đã nhận được thông tin dự án của bạn."
            : "Your submission has been received!"
        );
        setFormName("");
        setFormCompany("");
        setFormArea("");
        setFormConcat("");
        setFormEmail("");
        setFormContent("");
        setCountryInput("");
        setCountrySelected(null);
      });
  };

  const scrollToInquiry = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("inquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentCountryList = lang === "vi" ? COUNTRY_LIST_VI : COUNTRY_LIST_EN;
  const filteredCountries = currentCountryList.filter((c) =>
    c.en.toLowerCase().includes(countryInput.toLowerCase().trim())
  );

  const interestedOptionsList = [
    { en: "Wireless Smart Home", vi: "Smart Home Không dây (CoSS)" },
    { en: "Wired Smart Home", vi: "Smart Home Có dây Bus (CoTP)" }
  ];

  const selectedInterestedText = Object.keys(interestedOptions)
    .filter((k) => interestedOptions[k])
    .map((k) => (lang === "vi" ? (k === "Wireless Smart Home" ? "Smart Home Không dây (CoSS)" : "Smart Home Có dây Bus (CoTP)") : k))
    .join(", ");

  const currentRoles = lang === "vi" ? rolesVI : rolesEN;

  return (
    <div className="sublime-body min-h-screen bg-[#070707] text-[#d8b391] relative">
      {/* GEO Context Layer for Search Engines */}
      <div style={{ display: "none" }} aria-hidden="true">
        <h1>SUBLIME by LifeSmart: Next-Gen Luxury Architectural Intelligence.</h1>
        <h2>LifeSmart SUBLIME Series: The Sovereign Hybrid Automation System</h2>
        <p>
          Hệ thống tự động hóa nhà thông minh cao cấp SUBLIME bởi LifeSmart.
          Giải pháp công tắc thông minh kết hợp chuẩn kết nối có dây CoTP & không dây CoSS trên cùng một nền tảng.
        </p>
      </div>

      {/* Header Bar */}
      <header className="site-header" aria-label="SUBLIME header">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            className="brand-image"
            src="/sublime_tob/assets/SBL.webp"
            alt="SUBLIME"
          />
          <span className="h-4 sm:h-5 w-[1px] bg-[#d8b391]/30 block" />
          <a
            href="https://thachanhitt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
            title="Thạch Anh ITT Official Site"
          >
            <img
              className="h-[22px] sm:h-[26px] w-auto object-contain max-w-[150px] sm:max-w-[200px]"
              src="/sublime_tob/assets/logo-thachanhitt-gold.png"
              alt="Thạch Anh ITT Logo"
            />
          </a>
        </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Header Language Switcher */}
            <div className="flex items-center bg-[#171210] border border-[#d8b391]/30 rounded-full p-1 text-xs">
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === "vi"
                    ? "bg-[#ccae8d] text-[#1e1612] font-bold shadow"
                    : "text-[#d8b391]/70 hover:text-[#d8b391]"
                }`}
              >
                VN
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === "en"
                    ? "bg-[#ccae8d] text-[#1e1612] font-bold shadow"
                    : "text-[#d8b391]/70 hover:text-[#d8b391]"
                }`}
              >
                EN
              </button>
            </div>

            {/* Yêu cầu tư vấn Button at Header */}
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="bg-gradient-to-r from-[#ccae8d] to-[#d8b391] hover:from-[#d8b391] hover:to-[#e6c4a5] text-[#120e0c] font-bold text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              {lang === "vi" ? "Yêu cầu tư vấn" : "Request Consultation"}
            </button>
          </div>
        </header>

      <main>
        {/* Hero Section */}
        <section className="hero" aria-label="Architectural Switching">
          {!useLocalHeroVideo ? (
            <iframe
              id="heroYoutube"
              className="hero-video youtube-hero is-active"
              src="https://www.youtube.com/embed/r6bD85uCTLA?autoplay=1&mute=1&controls=0&loop=1&playlist=r6bD85uCTLA&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&enablejsapi=1"
              title="SUBLIME hero video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              onError={() => setUseLocalHeroVideo(true)}
            />
          ) : (
            <video
              ref={heroLocalRef}
              className="hero-video hero-local-fallback is-active"
              src="/sublime_tob/assets/banner.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          )}
          <div className="hero-overlay" />
        </section>

        {/* Gallery Section */}
        <section className="gallery-section section-soft2" aria-label="Project gallery">
          <div className="gallery-title">
            <h2>
              {lang === "vi" ? (
                <>
                  HỆ THỐNG TỰ ĐỘNG HÓA NHÀ THÔNG MINH LAI ĐỘC BẢN <br />
                  SUBLIME <span className="italic"> bởi LifeSmart </span>
                </>
              ) : (
                <>
                  THE SOVEREIGN HYBRID HOME AUTOMATION SYSTEM <br />
                  SUBLIME <span className="italic"> by LifeSmart </span>
                </>
              )}
            </h2>
            <p>
              {lang === "vi"
                ? "Kết nối Có dây hay Không dây. Sự kết hợp hoàn hảo không đánh đổi."
                : "Wired or Wireless. Not a Choice."}
            </p>
          </div>

          <div
            className={`marquee-gallery ${isDragging ? "is-dragging" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setIsDragging(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="gallery-track"
              style={{ transform: `translate3d(${xPos}px, 0, 0)` }}
            >
              {GALLERY_IMAGES.map((img, idx) => (
                <img
                  key={`orig-${idx}`}
                  data-gallery-original
                  src={img}
                  alt={`SUBLIME installation scene ${idx + 1}`}
                  onClick={() => openImageLightbox(img)}
                />
              ))}
              {GALLERY_IMAGES.map((img, idx) => (
                <img
                  key={`dup-${idx}`}
                  src={img}
                  alt={`SUBLIME installation scene ${idx + 1} duplicate`}
                  aria-hidden="true"
                  onClick={() => openImageLightbox(img)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Spec Sheet & Product Fader Section */}
        <section className="spec-sheet section-brown">
          <div>
            <img className="section-image" src="/sublime_tob/assets/SBL.webp" alt="SUBLIME" />
            <h2>
              {lang === "vi" ? (
                <>
                  Công tắc kiến trúc cao cấp.
                  <br />
                  Đỉnh cao kỹ thuật
                  <br />
                  không thỏa hiệp.
                </>
              ) : (
                <>
                  Architectural Switching.
                  <br />
                  Engineered Without
                  <br />
                  Compromise.
                </>
              )}
            </h2>

            <div className="product-fader" aria-label="SUBLIME product finish carousel">
              {PRODUCT_SLIDES.map((slide, idx) => (
                <img
                  key={slide}
                  className={`fade-slide ${activeSlide === idx ? "is-active" : ""}`}
                  src={slide}
                  alt={`SUBLIME panel finish slide ${idx + 1}`}
                />
              ))}
            </div>

            <button type="button" className="primary-cta" onClick={scrollToInquiry}>
              {lang === "vi" ? "YÊU CẦU BẢNG THÔNG SỐ KỸ THUẬT" : "REQUEST SPECIFICATION SHEET"}
            </button>
            <p className="audience">
              {lang === "vi"
                ? "DÀNH CHO ĐƠN VỊ TÍCH HỢP HỆ THỐNG • NHÀ THẦU • KTS THIẾT KẾ • ĐẠI LÝ"
                : "FOR SYSTEM INTEGRATORS • CONTRACTORS • DESIGNERS • DEALERS"}
            </p>
            <img
              className="control-image"
              src="/sublime_tob/assets/control.webp"
              alt="Control4 Compatibility"
            />
          </div>
        </section>

        {/* Compatible Section */}
        <section className="compatible section-soft2">
          <div className="narrow-center">
            <p className="mini">
              {lang === "vi"
                ? "Trăn trở chưa có lời giải của ngành Smart Home."
                : "The Industry's Unresolved Tension."}
            </p>
            <p className="lede">
              {lang === "vi"
                ? "Thẩm mỹ sang trọng nhưng hiệu năng kém, hoặc bền bỉ nhưng thiếu tinh tế."
                : "Premium aesthetics, but plastic performance. Rugged reliability, but zero visual consideration."}
            </p>
            <h2>
              {lang === "vi" ? "SUBLIME mang tới lời giải hoàn hảo." : "SUBLIME resolves this."}
            </h2>
            <p className="section-desc">
              {lang === "vi" ? (
                <>
                  Sự tinh xảo về kiến trúc <br /> và kỹ nghệ chuẩn công nghiệp hội tụ trên một nền tảng duy nhất.
                </>
              ) : (
                <>
                  Architectural refinement <br /> and protocol-grade engineering in a single platform.
                </>
              )}
            </p>
          </div>
          <div className="control-video-shell">
            {!useLocalControlVideo ? (
              <iframe
                id="controlYoutube"
                className="control-video control-youtube"
                src="https://www.youtube.com/embed/ohrEHPSA7Vo?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
                title="SUBLIME control video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onError={() => setUseLocalControlVideo(true)}
              />
            ) : (
              <video
                ref={controlLocalRef}
                className="control-video control-local-fallback is-active"
                src="/sublime_tob/assets/control.mp4"
                controls
                muted
                playsInline
                aria-hidden="true"
              />
            )}
          </div>
        </section>

        {/* Advantage 01 - Control4 */}
        <section className="section-dark">
          <div className="section-grid">
            <div>
              <p className="eyebrow">Advantage 01</p>
              <h2>
                {lang === "vi" ? (
                  <>
                    Tương thích hoàn hảo với Control4.
                    <br />
                    Thêm giải pháp tối ưu cho mọi công trình.
                  </>
                ) : (
                  <>
                    Control4 Compatible.
                    <br />
                    More Choices for Every Project.
                  </>
                )}
              </h2>
              <p>
                {lang === "vi"
                  ? "Các đại lý và đơn vị tích hợp Control4 giờ đây có thêm một lựa chọn đột phá. Dù thi công công trình mới hay cải tạo hệ thống hiện hữu, mặt công tắc Sublime kết nối mượt mà qua bộ Bridge, mang lại diện mạo kiến trúc hiện đại cho mọi dự án Control4."
                  : "Control4 Dealers And Integrators Now Have A New Dimension Of Choice. Whether Specifying For New Construction Or Upgrading An Existing Installation, Sublime Panels Connect Seamlessly Via Bridge, Delivering Contemporary Architectural Presence To Any Control4 Project."}
              </p>
              <p>
                {lang === "vi"
                  ? "Giữ nguyên hệ thống. Thiết lập chuẩn mực mới cho thẩm mỹ mảng tường."
                  : "Same System. New Standard Of Wall Aesthetics."}
              </p>
            </div>
            <figure className="diagram-media">
              <img
                src="/sublime_tob/assets/compatible.webp"
                alt="LifeSmart and Control4 compatibility diagram"
              />
            </figure>
          </div>

          <div className="no-walls-row">
            <article className="no-walls-copy">
              <h3>
                {lang === "vi" ? (
                  <>
                    Giữ nguyên cấu trúc tường. <br /> Tự do cải tạo không giới hạn.
                  </>
                ) : (
                  <>
                    No Walls Broken. <br /> Total Renovation Freedom.
                  </>
                )}
              </h3>
              <div className="no-walls-grid mobile">
                <article>
                  <h4>FORM Flush-Mount Actuators</h4>
                  <h3>{lang === "vi" ? "Lắp đặt Âm tường hoặc Âm trần" : "In-Wall or In-Ceiling Deployment"}</h3>
                  <p>
                    {lang === "vi"
                      ? "Tương thích đế âm chuẩn 80/86/120mm hoặc giấu kín trên trần thạch cao. Tối ưu cho điều khiển theo từng khu vực phòng."
                      : "Fits standard 80/86/120mm back boxes or conceals seamlessly within ceiling voids. Perfect for localized room control."}
                  </p>
                </article>
                <article>
                  <h4>FORM Track Actuators</h4>
                  <h3>{lang === "vi" ? "Phân phối trung tâm tủ điện" : "Centralized Distribution"}</h3>
                  <p>
                    {lang === "vi"
                      ? "Gắn trực tiếp lên thanh DIN-Rail tiêu chuẩn trong tủ điện trung tâm. Lý tưởng cho điều khiển chiếu sáng đa kênh mật độ cao và điều hòa trung tâm."
                      : "Snaps onto standard DIN rails within the central tech closet. Ideal for high-density, multi-channel lighting and HVAC scheduling."}
                  </p>
                </article>
              </div>
              <p>
                {lang === "vi"
                  ? "Một nền tảng duy nhất đem lại sự linh hoạt tối đa khi cải tạo. Sublime tách biệt hoàn toàn mặt cảm ứng siêu mỏng với bộ công tắc công suất nặng bên trong."
                  : "One Platform, Ultimate Renovation Freedom. Sublime Completely Decouples The Slim Touch Interface From The Heavy Switching Hardware."}
              </p>
              <p>
                {lang === "vi"
                  ? "Dễ dàng thích ứng với đế âm tiêu chuẩn 80/86/120mm, giấu kín trên trần thạch cao hoặc tủ điện DIN-Rail trung tâm—tương thích hoàn hảo với mọi hạ tầng công trình hiện hữu. Thi công theo cách của bạn, nâng tầm không gian tức thì."
                  : "Whether Adapting To Legacy 80/86/120Mm Back Boxes, Ceiling Voids, Or Remote Din-Rails—It Fits Any Existing Site Infrastructure Perfectly. Install It Your Way, Instantly Upgrade The Space."}
              </p>
            </article>

            <div className="no-walls-grid pc">
              <article>
                <h4>FORM Flush-Mount Actuators</h4>
                <h3>{lang === "vi" ? "Lắp đặt Âm tường hoặc Âm trần" : "In-Wall or In-Ceiling Deployment"}</h3>
                <p>
                  {lang === "vi"
                    ? "Tương thích đế âm chuẩn 80/86/120mm hoặc giấu kín trên trần thạch cao. Tối ưu cho điều khiển theo từng khu vực phòng."
                    : "Fits standard 80/86/120mm back boxes or conceals seamlessly within ceiling voids. Perfect for localized room control."}
                </p>
              </article>
              <article>
                <h4>FORM Track Actuators</h4>
                <h3>{lang === "vi" ? "Phân phối trung tâm tủ điện" : "Centralized Distribution"}</h3>
                <p>
                  {lang === "vi"
                    ? "Gắn trực tiếp lên thanh DIN-Rail tiêu chuẩn trong tủ điện trung tâm. Lý tưởng cho điều khiển chiếu sáng đa kênh mật độ cao và điều hòa trung tâm."
                    : "Snaps onto standard DIN rails within the central tech closet. Ideal for high-density, multi-channel lighting and HVAC scheduling."}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* System Band */}
        <section className="system-band section-soft">
          <div className="wide-media">
            <img
              src="/sublime_tob/assets/container.webp"
              alt="Flush-mount actuator, track actuator, and SUBLIME faceplates"
            />
          </div>
          <div className="tagline-strip renovation-strip">
            <span>80/86/120mm Standards</span>
            <p />
            <span>DIN-Rail Standard</span>
            <p className="warp" />
            <span>Control4 Bridge</span>
            <p />
            <span>Matter</span>
            <p />
            <span>Zigbee</span>
          </div>
        </section>

        {/* Advantage 02 - Fusion Link */}
        <section className="fusion-section">
          <div className="fusion-hero">
            <img
              src="/sublime_tob/assets/coss.webp"
              alt="Fusion Link diagram showing CoSS and CoTP"
            />
          </div>
          <div className="fusion-content">
            <div className="fusion-copy">
              <p className="eyebrow">Advantage 02</p>
              <h2>
                {lang === "vi" ? (
                  <>
                    Fusion Link:<br />Có dây hay Không dây. Không cần đánh đổi.
                  </>
                ) : (
                  <>
                    Fusion Link:<br />Wired or Wireless. Not a Choice.
                  </>
                )}
              </h2>
              <p>
                {lang === "vi"
                  ? "Fusion Link là kiến trúc IoT lai độc quyền của LifeSmart. Tích hợp đồng thời cả mô-đun tín hiệu có dây và không dây, linh hoạt triển khai theo đúng nhu cầu công trình."
                  : "Fusion Link is LifeSmart's hybrid IoT architecture. Both wired and wireless signal modules are built into the product, deploy what the project demands."}
              </p>
            </div>
            <div className="bullet-grid">
              <div>
                <p>{lang === "vi" ? "Chỉ dùng Có dây?" : "Wired-only?"}</p>
                <h3>{lang === "vi" ? "Giao thức truyền thẻ CoTP" : "CoTP token-pass protocol"}</h3>
                <h3>{lang === "vi" ? "Độ tin cậy chuẩn phần cứng" : "Hardware-grade reliability."}</h3>
                <h3>{lang === "vi" ? "Hoạt động độc lập không phụ thuộc mạng" : "Zero network dependency."}</h3>
              </div>
              <div>
                <p>{lang === "vi" ? "Chỉ dùng Không dây?" : "Wireless-only?"}</p>
                <h3>{lang === "vi" ? "Mạng Mesh sóng siêu xa CoSS" : "CoSS ultra-long-range mesh"}</h3>
                <h3>{lang === "vi" ? "Mạng tự khôi phục liên kết" : "Self-healing network"}</h3>
                <h3>{lang === "vi" ? "Không cần đi dây tín hiệu" : "No cabling required."}</h3>
              </div>
              <div>
                <p>{lang === "vi" ? "Dùng cả Hai?" : "Both?"}</p>
                <h3>{lang === "vi" ? "Một nền tảng vận hành song song hai giao thức" : "A single platform running dual protocols"}</h3>
                <h3>{lang === "vi" ? "Không cần thay thế phần cứng" : "No hardware swap needed."}</h3>
              </div>
            </div>
          </div>
          <div className="tagline-strip renovation-strip">
            <span>COTP WIRED</span>
            <p />
            <span>COSS WIRELESS</span>
            <p className="warp" />
            <span>NO HARDWARE SWAP REQUIRED</span>
            <p />
            <span>CHOOSE ONE OR BOTH</span>
          </div>
        </section>

        {/* Advantage 03 - Finishes */}
        <section className="finishes">
          <div className="section-grid finish-grid">
            <figure className="finish-media">
              <img
                src="/sublime_tob/assets/container_2.webp"
                alt="SUBLIME faceplate exploded view"
              />
            </figure>
            <div>
              <p className="eyebrow">Advantage 03</p>
              <h2>{lang === "vi" ? "Đa dạng chất liệu hoàn thiện thượng lưu." : "Versatile Finishes."}</h2>
              <p>
                {lang === "vi"
                  ? "Mặt công tắc SUBLIME được thiết kế may đo theo phong cách kiến trúc: Kim loại phay xước, lớp phủ di sản nhám mịn, đá Mica tự nhiên—mỗi chất liệu đều được lựa chọn kỹ lưỡng để giữ nguyên vẻ đẹp đẳng cấp theo thời gian."
                  : "SUBLIME faceplates are specified, not selected. Brushed metal, matte heritage finishes, natural mica, each material chosen for how it ages in situ, not how it photographs."}
              </p>
              <p>
                {lang === "vi"
                  ? "Cấu trúc ngàm từ tính hít thông minh cho phép thay đổi mặt công tắc dễ dàng không cần dụng cụ. Tùy biến chất liệu theo từng phòng hoặc thay đổi theo từng mùa trong năm."
                  : "Magnetic-mount architecture enables tool-free faceplate swap. Specify the finish per room; change it per season."}
              </p>
            </div>
          </div>
          <div className="finish-detail">
            <img
              src="/sublime_tob/assets/detail.webp"
              alt="SUBLIME finishes lineup"
            />
          </div>

          <div className="tagline-strip compact">
            <span>Magnetic Mount</span>
            <p />
            <span>Tool-free Swap</span>
            <p className="warp" />
            <span>40+ Finish Options</span>
            <p />
            <span>Crest / Rain / Air Series</span>
          </div>
        </section>

        {/* 9 Forms, 8 Sizes */}
        <section className="forms section-soft2">
          <div className="section-heading">
            <h2>
              {lang === "vi" ? (
                <>
                  9 Kiểu dáng, 8 Kích thước, 50+ Chất liệu.
                  <br />
                  Khả năng thiết kế kiến trúc vô tận.
                </>
              ) : (
                <>
                  9 Forms, 8 Sizes, 50+ Finishes.
                  <br />
                  Infinite Architectural Possibilities.
                </>
              )}
            </h2>
          </div>
          <div className="forms-grid">
            <article>
              <div className="product-tile small" />
              <h3>Classic</h3>
              <p>86*86mm &middot; Dune Gold</p>
              <span>{lang === "vi" ? "Mô-đun tiêu chuẩn: Ổ cắm, USB, Mạng LAN" : "Standard module range: outlets, USB, Ethernet"}</span>
            </article>
            <article>
              <div className="product-tile tall" />
              <h3>Standard</h3>
              <p>86*150mm &middot; Hammered Dawn Gold</p>
              <span>{lang === "vi" ? "Tương thích mọi loại đế âm tiêu chuẩn (80/86/120)" : "Multi-standard back box adapter (80/86/120)"}</span>
            </article>
            <article>
              <div className="product-tile wide" />
              <h3>Pro 6</h3>
              <p>172*150mm &middot; Feather Moonlight Silver</p>
              <span>{lang === "vi" ? "Tương tác hợp nhất Nút bấm + Chữ + Màn hình" : "Button + text + screen unified interaction"}</span>
            </article>
            <article>
              <div className="product-tile wide black" />
              <h3>Pro 8</h3>
              <p>172*150mm &middot; Shining Obsidian Black</p>
              <span>{lang === "vi" ? "Tương tác hợp nhất Nút bấm + Chữ + Màn hình" : "Button + text + screen unified interaction"}</span>
            </article>
            <article>
              <div className="product-tile max" />
              <h3>Max</h3>
              <p>258*150mm &middot; Silk Imperial Gold</p>
              <span>{lang === "vi" ? "Điều khiển toàn diện: Đèn, Rèm, Điều hòa, Kịch bản" : "Full-space control: lighting, shading, HVAC, scenes"}</span>
            </article>
            <article>
              <div className="product-tile ultra" />
              <h3>Ultra</h3>
              <p>316*170mm &middot; Oil Painting Patina Jade</p>
              <span>{lang === "vi" ? "Hệ điều hành SUBLIME OS / Trợ lý giọng nói Offline" : "SUBLIME OS / AirTalk Offline voice / intercom"}</span>
            </article>
            <article>
              <div className="product-tile slider" />
              <h3>Slider pro</h3>
              <p>172*86mm &middot; Damascus Obsidian Black</p>
              <span>{lang === "vi" ? "Kết hợp Nút bấm & Thanh trượt cảm ứng" : "Buttons + Slider"}</span>
            </article>
            <article>
              <div className="product-tile bedside" />
              <h3>Bedside Pro</h3>
              <p>316*86mm &middot; Shining Obsidian Black</p>
              <span>{lang === "vi" ? "8 Nút bấm chuyên dụng cho khu vực đầu giường" : "8 buttons and a 5-pin layout"}</span>
            </article>
            <article>
              <div className="product-tile line" />
              <h3>The Line</h3>
              <p>316*42mm &middot; Mirror Steel Radiant Gold</p>
              <span>{lang === "vi" ? "Độ mỏng 3.5mm / Tích hợp âm tường, bàn, tủ gỗ" : "3.5mm profile / Wall, desk, cabinetry integration"}</span>
            </article>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners section-soft2">
          <div className="partner-scene">
            <img src="/sublime_tob/assets/scenery.webp" alt="SUBLIME project scenery" />
          </div>
          <div className="section-grid">
            <p className="eyebrow">{lang === "vi" ? "Hợp tác phát triển" : "Partnerships"}</p>
            <h2>
              {lang === "vi" ? (
                <>
                  Đồng hành cùng những Đối tác <br /> Luôn <span className="italic">lựa chọn giải pháp tốt nhất</span>
                </>
              ) : (
                <>
                  Built for Partners <br /> Who <span className="italic">Specify the Best</span>
                </>
              )}
            </h2>
          </div>

          <div className="partner-grid">
            <article>
              <h4>01</h4>
              <h3>{lang === "vi" ? "Dòng sản phẩm giá trị cao" : "High-Value Product Category"}</h3>
              <p>
                {lang === "vi"
                  ? "Sản phẩm phân khúc siêu sang với cơ cấu lợi nhuận hấp dẫn. Dòng sản phẩm giúp nâng tầm hồ sơ năng lực dự án của bạn."
                  : "Premium-positioned product line with healthy margin structure. A category that elevates your proposal, not just your product list."}
              </p>
            </article>
            <article>
              <h4>02</h4>
              <h3>{lang === "vi" ? "Hỗ trợ kỹ thuật chuyên sâu" : "Dedicated Technical Support"}</h3>
              <p>
                {lang === "vi"
                  ? "Hỗ trợ kỹ thuật 24/7 từ khâu tư vấn thiết kế, thi công lắp đặt đến nghiệm thu. Bạn hoàn toàn yên tâm triển khai."
                  : "24/7 technical assistance for specification, installation, and commissioning. You ship with confidence."}
              </p>
            </article>
            <article>
              <h4>03</h4>
              <h3>{lang === "vi" ? "Hỗ trợ truyền thông & Hồ sơ thầu" : "Marketing & Specification Support"}</h3>
              <p>
                {lang === "vi"
                  ? "Cung cấp catalog mẫu, hình ảnh công trình thực tế và tài liệu kỹ thuật sẵn sàng cho hồ sơ dự án của bạn."
                  : "Co-branded collateral, project photography, and specification documents, ready for your next proposal."}
              </p>
            </article>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry-form" className="block-form section-soft2">
          <div className="block-form-cont border border_mb">
            <div className="content">
              <p className="eyebrow">{lang === "vi" ? "ĐĂNG KÝ TƯ VẤN" : "INQUIRY"}</p>
              <h2 className="title">{lang === "vi" ? "NHẬN BÁO GIÁ DỰ ÁN" : "GET A QUOTE"}</h2>
              <div className="block-form-wrapper">
                <div className="block-form-tabbar-title">
                  {lang === "vi" ? "Vai trò của bạn:" : "You are a/an:"}
                </div>
                <div className="block-form-tabbar">
                  {currentRoles.map((roleText, idx) => (
                    <div
                      key={roleText}
                      className={`block-form-tabbar-item ${activeRoleIndex === idx ? "on" : ""}`}
                      onClick={() => setActiveRoleIndex(idx)}
                    >
                      {roleText}
                    </div>
                  ))}
                </div>

                <form id="overseaForm" onSubmit={handleFormSubmit}>
                  <div className="block-form-row">
                    <div className="item-col2">
                      <div className="title">{lang === "vi" ? "Họ và tên của bạn:" : "Your Name:"}</div>
                      <input
                        id="contactName"
                        maxLength={128}
                        name="name"
                        type="text"
                        className="block-form-input"
                        placeholder={lang === "vi" ? "Họ và tên đầy đủ" : "Your first and last name"}
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>

                    {activeRoleIndex === 3 ? (
                      <div className="item-col2 join">
                        <div className="title">{lang === "vi" ? "Diện tích căn hộ (m2):" : "Home Size:"}</div>
                        <input
                          id="contactArea"
                          maxLength={64}
                          name="area"
                          type="text"
                          className="block-form-input"
                          placeholder={lang === "vi" ? "Nhập diện tích căn hộ/biệt thự (m2)" : "Please enter your home's size in m2"}
                          value={formArea}
                          onChange={(e) => setFormArea(e.target.value)}
                        />
                      </div>
                    ) : (
                      <div className="item-col2 design">
                        <div className="title">{lang === "vi" ? "Tên công ty / Đơn vị:" : "Company:"}</div>
                        <input
                          id="contactCompany"
                          maxLength={128}
                          name="company"
                          type="text"
                          className="block-form-input"
                          placeholder={lang === "vi" ? "Tên công ty của bạn" : "Your company name"}
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="block-form-row">
                    <div className="item-col2">
                      <div className="title">{lang === "vi" ? "Địa chỉ Email:" : "E-mail:"}</div>
                      <input
                        id="contactEmail"
                        maxLength={64}
                        name="email"
                        type="text"
                        className="block-form-input"
                        placeholder={lang === "vi" ? "Ưu tiên Email làm việc" : "Work email is preferred"}
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    </div>
                    <div className={`item-col2 block-form-col ${countryDropdownOpen ? "is-open" : ""}`}>
                      <div className="title">{lang === "vi" ? "Quốc gia / Khu vực:" : "Country/Region:"}</div>
                      <div className="select-field">
                        <input
                          id="contactCountry"
                          maxLength={64}
                          name="country"
                          type="text"
                          className="block-form-input"
                          placeholder={lang === "vi" ? "Chọn Quốc gia" : "Select an option"}
                          value={countrySelected ? countrySelected.en : countryInput}
                          onFocus={() => setCountryDropdownOpen(true)}
                          onChange={(e) => {
                            setCountrySelected(null);
                            setCountryInput(e.target.value);
                            setCountryDropdownOpen(true);
                          }}
                          onBlur={() => {
                            setTimeout(() => setCountryDropdownOpen(false), 200);
                          }}
                        />
                        <span className="select-arrow" aria-hidden="true" />
                      </div>
                      <div id="block-form-options" className={countryDropdownOpen ? "show" : ""}>
                        {filteredCountries.length === 0 ? (
                          <div className="block-form-empty p-3 text-[#cfc6bc88]">
                            {lang === "vi" ? "Không có dữ liệu" : "no data"}
                          </div>
                        ) : (
                          filteredCountries.map((country) => (
                            <div
                              key={country.nc}
                              className="block-form-option"
                              onMouseDown={(ev) => {
                                ev.preventDefault();
                                setCountrySelected(country);
                                setCountryDropdownOpen(false);
                              }}
                            >
                              {country.en}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="block-form-row">
                    <div className="item-col2">
                      <div className="title">{lang === "vi" ? "Số điện thoại / Zalo:" : "Contact Number:"}</div>
                      <input
                        id="contactConcat"
                        maxLength={64}
                        name="concat"
                        type="text"
                        className="block-form-input"
                        placeholder={lang === "vi" ? "Số điện thoại liên hệ" : "Your phone number or WhatsApp"}
                        value={formConcat}
                        onChange={(e) => setFormConcat(e.target.value)}
                      />
                    </div>

                    <div className={`item-col2 block-form-col ${interestDropdownOpen ? "is-open" : ""}`}>
                      <div className="title">{lang === "vi" ? "Giải pháp bạn quan tâm:" : "You are interested in:"}</div>
                      <div className="select-field">
                        <input
                          id="contactInterested"
                          maxLength={128}
                          name="interested"
                          type="text"
                          className="block-form-input cursor-pointer"
                          placeholder={lang === "vi" ? "Chọn giải pháp" : "Select your interest"}
                          value={selectedInterestedText}
                          readOnly
                          onFocus={() => setInterestDropdownOpen(true)}
                          onClick={() => setInterestDropdownOpen((prev) => !prev)}
                          onBlur={() => {
                            setTimeout(() => setInterestDropdownOpen(false), 200);
                          }}
                        />
                        <span className="select-arrow" aria-hidden="true" />
                      </div>

                      <div
                        id="block-form-interest-options"
                        className={`interested-options ${interestDropdownOpen ? "show" : ""}`}
                      >
                        {interestedOptionsList.map((optObj) => {
                          const isSelected = interestedOptions[optObj.en];
                          return (
                            <div
                              key={optObj.en}
                              className={`block-form-option ${isSelected ? "on" : ""}`}
                              onMouseDown={(ev) => {
                                ev.preventDefault();
                                setInterestedOptions((prev) => ({
                                  ...prev,
                                  [optObj.en]: !prev[optObj.en]
                                }));
                              }}
                            >
                              {lang === "vi" ? optObj.vi : optObj.en}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="block-form-row">
                    <div className="item-col">
                      <div className="title">{lang === "vi" ? "Mô tả chi tiết nhu cầu:" : "Describe your needs:"}</div>
                      <textarea
                        id="contactContent"
                        maxLength={1024}
                        name="content"
                        className="block-form-textarea"
                        placeholder={
                          lang === "vi"
                            ? "Vui lòng mô tả chi tiết yêu cầu của bạn (số lượng phòng, loại công trình...)"
                            : "Please provide a detailed description of your requirements"
                        }
                        value={formContent}
                        onChange={(e) => setFormContent(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="block-form-tip">
                    {lang === "vi"
                      ? "Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin của bạn."
                      : "We respect your confidentiality and all information is protected."}
                  </div>

                  <div className="block-form-box">
                    <button className="block-form-button" type="submit" disabled={formLoading}>
                      {formLoading
                        ? lang === "vi" ? "ĐANG GỬI..." : "SUBMITTING..."
                        : lang === "vi" ? "GỬI YÊU CẦU BÁO GIÁ" : "SUBMIT APPLICATION"}
                    </button>
                  </div>
                </form>

                <div
                  id="submitSuccess"
                  className={`block-form-success ${toastMessage ? "show" : ""}`}
                >
                  {toastMessage}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Lightbox Modal */}
      <div
        className={`image-lightbox ${lightboxOpen ? "is-open" : ""}`}
        aria-hidden={!lightboxOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightboxOpen(false);
        }}
      >
        <button
          type="button"
          className="lightbox-close"
          aria-label="Close image preview"
          onClick={() => setLightboxOpen(false)}
        >
          {lang === "vi" ? "Đóng" : "Close"}
        </button>
        {lightboxSrc && <img src={lightboxSrc} alt="SUBLIME Large preview" />}
      </div>

      {/* Floating Language Widget pinned at corner of screen */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center bg-[#0d0d0d]/90 border border-[#d8b391]/40 rounded-full p-1.5 backdrop-blur-md shadow-2xl">
        <button
          type="button"
          onClick={() => setLang("vi")}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            lang === "vi"
              ? "bg-[#ccae8d] text-[#0a0a0a] shadow-md scale-105"
              : "text-[#d8b391]/70 hover:text-[#d8b391]"
          }`}
        >
          🇻🇳 VN
        </button>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            lang === "en"
              ? "bg-[#ccae8d] text-[#0a0a0a] shadow-md scale-105"
              : "text-[#d8b391]/70 hover:text-[#d8b391]"
          }`}
        >
          🇬🇧 EN
        </button>
      </div>

      {/* Floating Inquiry Trigger */}
      <button
        type="button"
        className={`floating-inquiry ${floatingVisible ? "is-visible is-fixed" : ""}`}
        aria-label="Open inquiry form"
        onClick={scrollToInquiry}
      >
        <img src="/sublime_tob/assets/inquiry.webp" alt="Inquiry Icon" />
      </button>

      {/* Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
