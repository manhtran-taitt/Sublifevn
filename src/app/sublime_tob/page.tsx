"use client";

import React, { useEffect, useRef, useState } from "react";
import "./sublime.css";

const COUNTRY_LIST = [
  { en: "Vietnam / Việt Nam", nc: "VN" },
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
  { en: "United Arab Emirates", nc: "AE" },
  { en: "Abkhazia", nc: "AB" },
  { en: "Afghanistan", nc: "AF" },
  { en: "Albania", nc: "AL" },
  { en: "Algeria", nc: "DZ" },
  { en: "Andorra", nc: "AD" },
  { en: "Angola", nc: "AO" },
  { en: "Argentina", nc: "AR" },
  { en: "Austria", nc: "AT" },
  { en: "Belgium", nc: "BE" },
  { en: "Brazil", nc: "BR" },
  { en: "Cambodia", nc: "KH" },
  { en: "Chile", nc: "CL" },
  { en: "Colombia", nc: "CO" },
  { en: "Czechia", nc: "CZ" },
  { en: "Denmark", nc: "DK" },
  { en: "Egypt", nc: "EG" },
  { en: "Finland", nc: "FI" },
  { en: "Greece", nc: "GR" },
  { en: "Hungary", nc: "HU" },
  { en: "Ireland", nc: "IE" },
  { en: "Israel", nc: "IL" },
  { en: "Laos", nc: "LA" },
  { en: "Mexico", nc: "MX" },
  { en: "Netherlands", nc: "NL" },
  { en: "Norway", nc: "NO" },
  { en: "Poland", nc: "PL" },
  { en: "Portugal", nc: "PT" },
  { en: "Qatar", nc: "QA" },
  { en: "Russia", nc: "RU" },
  { en: "Saudi Arabia", nc: "SA" },
  { en: "Spain", nc: "ES" },
  { en: "Sweden", nc: "SE" },
  { en: "Switzerland", nc: "CH" },
  { en: "Turkey", nc: "TR" }
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
  // Product Fader Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  // Floating Inquiry Trigger State
  const [floatingVisible, setFloatingVisible] = useState(false);

  // Form Role Tabbar State
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const roles = [
    { en: "Distributor", vi: "Nhà phân phối" },
    { en: "Installer", vi: "Đơn vị thi công" },
    { en: "Designer", vi: "KTS / Thợ thiết kế" },
    { en: "Developer", vi: "Chủ đầu tư / Chủ nhà" },
    { en: "System Integrator", vi: "Đơn vị tích hợp hệ thống" }
  ];

  // Country Selector State
  const [countryInput, setCountryInput] = useState("");
  const [countrySelected, setCountrySelected] = useState<{ en: string; nc: string } | null>(null);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  // Interested Multi-Select State
  const [interestedOptions, setInterestedOptions] = useState<{ [key: string]: boolean }>({
    "Wireless Smart Home (Smart Home Không dây)": false,
    "Wired Smart Home (Smart Home Có dây Bus)": false
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
      showToast("Vui lòng nhập Họ tên đầy đủ / Please enter your name!");
      return;
    }
    if (!formConcat.trim()) {
      showToast("Vui lòng nhập Số điện thoại / Please enter your contact number!");
      return;
    }
    if (!formEmail.trim()) {
      showToast("Vui lòng nhập Email / Please enter your email address!");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formEmail.trim())) {
      showToast("Định dạng Email chưa chính xác / Please confirm email format.");
      return;
    }
    if (!formContent.trim()) {
      showToast("Vui lòng nhập mô tả nhu cầu / Please enter your project requirements!");
      return;
    }
    if (!countrySelected && !countryInput.trim()) {
      showToast("Vui lòng chọn Quốc gia/Khu vực / Please select your country!");
      return;
    }

    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      showToast("Gửi yêu cầu thành công! Đội ngũ tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất / Submission successful! Our team will contact you shortly.");
      setFormName("");
      setFormCompany("");
      setFormArea("");
      setFormConcat("");
      setFormEmail("");
      setFormContent("");
      setCountryInput("");
      setCountrySelected(null);
    }, 1000);
  };

  const scrollToInquiry = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("inquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredCountries = COUNTRY_LIST.filter((c) =>
    c.en.toLowerCase().includes(countryInput.toLowerCase().trim())
  );

  const selectedInterestedText = Object.keys(interestedOptions)
    .filter((k) => interestedOptions[k])
    .join(", ");

  return (
    <div className="sublime-body min-h-screen bg-[#070707] text-[#d8b391]">
      {/* GEO Context Layer for AI Search Engines & SEO */}
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
        <img
          className="brand-image"
          src="/sublime_tob/assets/SBL.webp"
          alt="SUBLIME"
        />
        <a
          className="brand-link"
          href="https://iot.ilifesmart.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LifeSmart official site"
        >
          <span className="site-label">LifeSmart Official Site</span>
        </a>
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
              THE SOVEREIGN HYBRID HOME AUTOMATION SYSTEM <br />
              SUBLIME <span className="italic"> by LifeSmart </span>
            </h2>
            <p className="text-xl text-[#ccae8d] font-serif mt-2 italic">
              Hệ thống tự động hóa nhà thông minh lai độc bản — SUBLIME bởi LifeSmart
            </p>
            <p className="text-[#cfc6bc] text-base uppercase tracking-widest mt-4 font-sans">
              Wired or Wireless. Not a Choice. <br />
              <span className="text-[#d8b391] normal-case tracking-normal">
                (Có dây hay Không dây. Sự kết hợp hoàn hảo không thỏa hiệp.)
              </span>
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
              Architectural Switching.
              <br />
              Engineered Without Compromise.
            </h2>
            <p className="text-xl text-[#d8b391] font-serif italic mb-10 -mt-14">
              Công tắc kiến trúc thượng lưu. Đỉnh cao kỹ nghệ không thỏa hiệp.
            </p>

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
              REQUEST SPECIFICATION SHEET <br />
              <span className="text-[11px] font-normal tracking-widest block opacity-90">
                (YÊU CẦU BẢNG THÔNG SỐ KỸ THUẬT)
              </span>
            </button>
            <p className="audience">
              FOR SYSTEM INTEGRATORS &bull; CONTRACTORS &bull; DESIGNERS &bull; DEALERS <br />
              <span className="text-[#d8b391] text-xs normal-case tracking-normal block mt-1">
                DÀNH CHO ĐƠN VỊ TÍCH HỢP HỆ THỐNG &bull; NHÀ THẦU &bull; KTS THIẾT KẾ &bull; ĐẠI LÝ
              </span>
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
            <p className="mini">The Industry&apos;s Unresolved Tension.</p>
            <p className="text-sm text-[#cfc6bc] italic -mt-6 mb-4">
              (Thách thức chưa có lời giải của ngành nhà thông minh)
            </p>
            <p className="lede">
              Premium aesthetics, but plastic performance. Rugged reliability, but zero visual consideration. <br />
              <span className="text-base text-[#d8b391] font-serif block mt-2 normal-case">
                Thẩm mỹ cao cấp nhưng hiệu năng kém, hoặc bền bỉ nhưng thô ráp thiếu tinh tế.
              </span>
            </p>
            <h2>SUBLIME resolves this.</h2>
            <p className="text-2xl font-serif italic text-[#dcb796] -mt-6 mb-6">
              SUBLIME chính là câu trả lời hoàn hảo.
            </p>
            <p className="section-desc">
              Architectural refinement and protocol-grade engineering in a single platform. <br />
              <span className="text-lg text-[#cfc6bc] font-sans normal-case block mt-2">
                Sự tinh xảo về kiến trúc kết hợp cùng kỹ nghệ chuẩn mực công nghiệp trên một nền tảng duy nhất.
              </span>
            </p>
          </div>
          <div className="control-video-shell">
            {!useLocalControlVideo ? (
              <iframe
                id="controlYoutube"
                className="control-video control-youtube"
                src="https://www.youtube.com/embed/QutIGaRj94I?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
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
              <p className="eyebrow">Advantage 01 / Ưu điểm 01</p>
              <h2>
                Control4 Compatible.
                <br />
                More Choices for Every Project.
              </h2>
              <p className="text-lg text-[#d8b391] font-serif italic -mt-16 mb-8">
                Tương thích hoàn hảo với Control4. Đa dạng lựa chọn cho mọi công trình.
              </p>
              <p>
                Control4 Dealers And Integrators Now Have A New Dimension Of Choice. Sublime Panels Connect Seamlessly Via Bridge, Delivering Contemporary Architectural Presence To Any Control4 Project.
              </p>
              <p className="text-sm text-[#cfc6bc] normal-case -mt-4 mb-6">
                Các đại lý và nhà tích hợp Control4 giờ đây có thêm sự lựa chọn đột phá. Công tắc Sublime kết nối mượt mà qua bộ Bridge, mang lại phong cách kiến trúc hiện đại đẳng cấp cho mọi công trình Control4.
              </p>
              <p className="font-bold text-[#d8b391]">
                Same System. New Standard Of Wall Aesthetics. <br />
                <span className="font-normal text-sm text-[#cfc6bc] normal-case">
                  (Cùng một hệ thống. Chuẩn mực mới cho thẩm mỹ không gian tường.)
                </span>
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
                No Walls Broken. <br /> Total Renovation Freedom.
              </h3>
              <p className="text-xl text-[#d8b391] font-serif italic -mt-12 mb-8">
                Giữ nguyên cấu trúc tường. Tự do cải tạo và nâng cấp tối đa.
              </p>
              <div className="no-walls-grid mobile">
                <article>
                  <h4>FORM Flush-Mount Actuators</h4>
                  <h3>In-Wall or In-Ceiling Deployment</h3>
                  <p>
                    Fits standard 80/86/120mm back boxes or conceals seamlessly within ceiling voids. Perfect for localized room control.
                    <br />
                    <span className="text-xs text-[#cfc6bc] block mt-2">
                      (Tương thích đế âm chuẩn 80/86/120mm hoặc giấu kín trên trần thạch cao. Tối ưu cho điều khiển theo phòng.)
                    </span>
                  </p>
                </article>
                <article>
                  <h4>FORM Track Actuators</h4>
                  <h3>Centralized Distribution</h3>
                  <p>
                    Snaps onto standard DIN rails within the central tech closet. Ideal for high-density, multi-channel lighting and HVAC scheduling.
                    <br />
                    <span className="text-xs text-[#cfc6bc] block mt-2">
                      (Gắn thanh DIN-Rail tiêu chuẩn trong tủ điện trung tâm. Hoàn hảo cho điều khiển chiếu sáng đa kênh & HVAC mật độ cao.)
                    </span>
                  </p>
                </article>
              </div>
              <p>
                One Platform, Ultimate Renovation Freedom. Sublime Completely Decouples The Slim Touch Interface From The Heavy Switching Hardware.
              </p>
              <p className="text-sm text-[#cfc6bc] normal-case -mt-4 mb-4">
                Một nền tảng duy nhất, mang lại tự do cải tạo tuyệt đối. Sublime tách biệt hoàn toàn mặt cảm ứng siêu mỏng với bộ công tắc công suất nặng bên trong.
              </p>
            </article>

            <div className="no-walls-grid pc">
              <article>
                <h4>FORM Flush-Mount Actuators</h4>
                <h3>In-Wall or In-Ceiling Deployment</h3>
                <p className="text-xs text-[#d8b391] italic -mt-4 mb-3">
                  (Bộ chấp hành âm tường & âm trần)
                </p>
                <p>
                  Fits standard 80/86/120mm back boxes or conceals seamlessly within ceiling voids. Perfect for localized room control.
                  <br />
                  <span className="text-xs text-[#cfc6bc] block mt-2">
                    (Tương thích đế âm chuẩn 80/86/120mm hoặc giấu kín trên trần thạch cao. Tối ưu cho điều khiển từng phòng.)
                  </span>
                </p>
              </article>
              <article>
                <h4>FORM Track Actuators</h4>
                <h3>Centralized Distribution</h3>
                <p className="text-xs text-[#d8b391] italic -mt-4 mb-3">
                  (Bộ chấp hành tủ điện DIN-Rail)
                </p>
                <p>
                  Snaps onto standard DIN rails within the central tech closet. Ideal for high-density, multi-channel lighting and HVAC scheduling.
                  <br />
                  <span className="text-xs text-[#cfc6bc] block mt-2">
                    (Gắn thanh DIN-Rail tiêu chuẩn trong tủ điện trung tâm. Hoàn hảo cho hệ thống chiếu sáng & điều hòa trung tâm.)
                  </span>
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
              <p className="eyebrow">Advantage 02 / Ưu điểm 02</p>
              <h2>
                Fusion Link:<br />Wired or Wireless. Not a Choice.
              </h2>
              <p className="text-xl text-[#d8b391] font-serif italic -mt-12 mb-8">
                Fusion Link: Linh hoạt Có dây hay Không dây. Không cần phải đánh đổi.
              </p>
              <p>
                Fusion Link is LifeSmart&apos;s hybrid IoT architecture. Both wired and wireless signal modules are built into the product, deploy what the project demands.
              </p>
              <p className="text-sm text-[#cfc6bc] normal-case -mt-4 mb-4">
                Fusion Link là kiến trúc IoT lai độc quyền của LifeSmart. Tích hợp sẵn cả mô-đun tín hiệu có dây và không dây, đáp ứng mọi yêu cầu khắt khe của công trình.
              </p>
            </div>
            <div className="bullet-grid">
              <div>
                <p>Wired-only? (Thuần Có dây?)</p>
                <h3>CoTP token-pass protocol</h3>
                <h3>Hardware-grade reliability.</h3>
                <h3>Zero network dependency.</h3>
                <span className="text-xs text-[#cfc6bc] block mt-2">
                  (Giao thức CoTP độ tin cậy phần cứng cao, hoạt động độc lập không phụ thuộc mạng)
                </span>
              </div>
              <div>
                <p>Wireless-only? (Thuần Không dây?)</p>
                <h3>CoSS ultra-long-range mesh</h3>
                <h3>Self-healing network</h3>
                <h3>No cabling required.</h3>
                <span className="text-xs text-[#cfc6bc] block mt-2">
                  (Giao thức CoSS sóng siêu xa, mạng lưới tự chữa lành, không cần đi dây tín hiệu)
                </span>
              </div>
              <div>
                <p>Both? (Cả Hai?)</p>
                <h3>A single platform running dual protocols</h3>
                <h3>No hardware swap needed.</h3>
                <span className="text-xs text-[#cfc6bc] block mt-2">
                  (Một nền tảng chạy song song hai giao thức, không cần thay thế phần cứng)
                </span>
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
              <p className="eyebrow">Advantage 03 / Ưu điểm 03</p>
              <h2>Versatile Finishes.</h2>
              <p className="text-xl text-[#d8b391] font-serif italic -mt-12 mb-8">
                Đa dạng chất liệu hoàn thiện thượng lưu.
              </p>
              <p>
                SUBLIME faceplates are specified, not selected. Brushed metal, matte heritage finishes, natural mica, each material chosen for how it ages in situ.
              </p>
              <p className="text-sm text-[#cfc6bc] normal-case -mt-4 mb-6">
                Mặt công tắc SUBLIME được may đo theo thiết kế kiến trúc: Kim loại phay xước, lớp phủ di sản nhám mịn, đá Mica tự nhiên—mỗi chất liệu đều bền đẹp trường tồn theo thời gian.
              </p>
              <p>
                Magnetic-mount architecture enables tool-free faceplate swap. Specify the finish per room; change it per season.
              </p>
              <p className="text-sm text-[#cfc6bc] normal-case -mt-4 mb-4">
                Cấu trúc ngàm từ tính hít thông minh cho phép tháo lắp mặt công tắc dễ dàng không cần công cụ. Tùy biến màu sắc theo từng phòng hoặc theo từng mùa trong năm.
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
              9 Forms, 8 Sizes, 50+ Finishes.
              <br />
              Infinite Architectural Possibilities.
            </h2>
            <p className="text-xl text-[#d8b391] font-serif italic mt-3">
              9 Kiểu dáng, 8 Kích thước, 50+ Chất liệu hoàn thiện. Khả năng thiết kế kiến trúc vô tận.
            </p>
          </div>
          <div className="forms-grid">
            <article>
              <div className="product-tile small" />
              <h3>Classic</h3>
              <p>86*86mm &middot; Dune Gold</p>
              <span>Standard module range: outlets, USB, Ethernet <br />(Tích hợp đầy đủ ổ cắm, cổng USB, mạng LAN)</span>
            </article>
            <article>
              <div className="product-tile tall" />
              <h3>Standard</h3>
              <p>86*150mm &middot; Hammered Dawn Gold</p>
              <span>Multi-standard back box adapter (80/86/120) <br />(Tương thích mọi loại đế âm tiêu chuẩn)</span>
            </article>
            <article>
              <div className="product-tile wide" />
              <h3>Pro 6</h3>
              <p>172*150mm &middot; Feather Moonlight Silver</p>
              <span>Button + text + screen unified interaction <br />(Tương tác hợp nhất Nút bấm + Chữ + Màn hình)</span>
            </article>
            <article>
              <div className="product-tile wide black" />
              <h3>Pro 8</h3>
              <p>172*150mm &middot; Shining Obsidian Black</p>
              <span>Button + text + screen unified interaction <br />(Tương tác hợp nhất Nút bấm + Chữ + Màn hình)</span>
            </article>
            <article>
              <div className="product-tile max" />
              <h3>Max</h3>
              <p>258*150mm &middot; Silk Imperial Gold</p>
              <span>Full-space control: lighting, shading, HVAC, scenes <br />(Điều khiển toàn diện: Đèn, Rèm, Điều hòa, Kịch bản)</span>
            </article>
            <article>
              <div className="product-tile ultra" />
              <h3>Ultra</h3>
              <p>316*170mm &middot; Oil Painting Patina Jade</p>
              <span>SUBLIME OS / AirTalk Offline voice / intercom <br />(Hệ điều hành SUBLIME OS / Trợ lý giọng nói Offline)</span>
            </article>
            <article>
              <div className="product-tile slider" />
              <h3>Slider pro</h3>
              <p>172*86mm &middot; Damascus Obsidian Black</p>
              <span>Buttons + Slider <br />(Kết hợp Nút bấm & Thanh trượt cảm ứng)</span>
            </article>
            <article>
              <div className="product-tile bedside" />
              <h3>Bedside Pro</h3>
              <p>316*86mm &middot; Shining Obsidian Black</p>
              <span>8 buttons and a 5-pin layout <br />(8 Nút bấm chuyên dụng cho đầu giường)</span>
            </article>
            <article>
              <div className="product-tile line" />
              <h3>The Line</h3>
              <p>316*42mm &middot; Mirror Steel Radiant Gold</p>
              <span>3.5mm profile / Wall, desk, cabinetry integration <br />(Độ mỏng 3.5mm / Tích hợp âm tường, bàn, tủ gỗ)</span>
            </article>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners section-soft2">
          <div className="partner-scene">
            <img src="/sublime_tob/assets/scenery.webp" alt="SUBLIME project scenery" />
          </div>
          <div className="section-grid">
            <p className="eyebrow">Partnerships / Đối tác đồng hành</p>
            <h2>
              Built for Partners <br /> Who <span className="italic">Specify the Best</span>
            </h2>
            <p className="text-xl text-[#d8b391] font-serif italic -mt-12 mb-8">
              Kiến tạo dành riêng cho những đối tác luôn lựa chọn giải pháp cao cấp nhất.
            </p>
          </div>

          <div className="partner-grid">
            <article>
              <h4>01</h4>
              <h3>High-Value Product Category</h3>
              <p className="text-[#d8b391] text-sm font-serif italic -mt-3 mb-3">
                (Dòng sản phẩm giá trị thương mại cao)
              </p>
              <p>
                Premium-positioned product line with healthy margin structure. A category that elevates your proposal, not just your product list.
                <br />
                <span className="text-xs text-[#cfc6bc] block mt-2">
                  (Dòng sản phẩm phân khúc siêu sang với chính sách chiết khấu hấp dẫn, nâng tầm hồ sơ năng lực dự án của bạn.)
                </span>
              </p>
            </article>
            <article>
              <h4>02</h4>
              <h3>Dedicated Technical Support</h3>
              <p className="text-[#d8b391] text-sm font-serif italic -mt-3 mb-3">
                (Hỗ trợ kỹ thuật chuyên sâu 24/7)
              </p>
              <p>
                24/7 technical assistance for specification, installation, and commissioning. You ship with confidence.
                <br />
                <span className="text-xs text-[#cfc6bc] block mt-2">
                  (Đội ngũ kỹ sư hỗ trợ bóc tách tư vấn, thiết kế thi công và nghiệm thu 24/7 giúp bạn hoàn toàn yên tâm triển khai.)
                </span>
              </p>
            </article>
            <article>
              <h4>03</h4>
              <h3>Marketing & Specification Support</h3>
              <p className="text-[#d8b391] text-sm font-serif italic -mt-3 mb-3">
                (Tài liệu truyền thông & catalog mẫu)
              </p>
              <p>
                Co-branded collateral, project photography, and specification documents, ready for your next proposal.
                <br />
                <span className="text-xs text-[#cfc6bc] block mt-2">
                  (Cung cấp đầy đủ file CAD, catalog đồng thương hiệu, hình ảnh công thực tế sẵn sàng cho hồ sơ thầu.)
                </span>
              </p>
            </article>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry-form" className="block-form section-soft2">
          <div className="block-form-cont border border_mb">
            <div className="content">
              <p className="eyebrow">INQUIRY / ĐĂNG KÝ TƯ VẤN</p>
              <h2 className="title">GET A QUOTE / NHẬN BÁO GIÁ DỰ ÁN</h2>
              <div className="block-form-wrapper">
                <div className="block-form-tabbar-title">
                  You are a/an (Bạn là):
                </div>
                <div className="block-form-tabbar">
                  {roles.map((roleObj, idx) => (
                    <div
                      key={roleObj.en}
                      className={`block-form-tabbar-item ${activeRoleIndex === idx ? "on" : ""}`}
                      onClick={() => setActiveRoleIndex(idx)}
                    >
                      {roleObj.en} <span className="text-xs opacity-75 ml-1">({roleObj.vi})</span>
                    </div>
                  ))}
                </div>

                <form id="overseaForm" onSubmit={handleFormSubmit}>
                  <div className="block-form-row">
                    <div className="item-col2">
                      <div className="title">Your Name (Họ và tên):</div>
                      <input
                        id="contactName"
                        maxLength={128}
                        name="name"
                        type="text"
                        className="block-form-input"
                        placeholder="Your first and last name (Họ và tên đầy đủ)"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>

                    {activeRoleIndex === 3 ? (
                      <div className="item-col2 join">
                        <div className="title">Home Size (Diện tích căn hộ/Biệt thự):</div>
                        <input
                          id="contactArea"
                          maxLength={64}
                          name="area"
                          type="text"
                          className="block-form-input"
                          placeholder="Please enter your home's size in m2 (Ví dụ: 350 m2)"
                          value={formArea}
                          onChange={(e) => setFormArea(e.target.value)}
                        />
                      </div>
                    ) : (
                      <div className="item-col2 design">
                        <div className="title">Company (Tên công ty / Đơn vị):</div>
                        <input
                          id="contactCompany"
                          maxLength={128}
                          name="company"
                          type="text"
                          className="block-form-input"
                          placeholder="Your company name (Tên công ty của bạn)"
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="block-form-row">
                    <div className="item-col2">
                      <div className="title">E-mail (Địa chỉ Email):</div>
                      <input
                        id="contactEmail"
                        maxLength={64}
                        name="email"
                        type="text"
                        className="block-form-input"
                        placeholder="Work email is preferred (Email làm việc)"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    </div>
                    <div className={`item-col2 block-form-col ${countryDropdownOpen ? "is-open" : ""}`}>
                      <div className="title">Country/Region (Quốc gia / Khu vực):</div>
                      <div className="select-field">
                        <input
                          id="contactCountry"
                          maxLength={64}
                          name="country"
                          type="text"
                          className="block-form-input"
                          placeholder="Select an option (Chọn Quốc gia)"
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
                          <div className="block-form-empty p-3 text-[#cfc6bc88]">No data / Không có dữ liệu</div>
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
                      <div className="title">Contact Number (Số điện thoại / Zalo):</div>
                      <input
                        id="contactConcat"
                        maxLength={64}
                        name="concat"
                        type="text"
                        className="block-form-input"
                        placeholder="Your phone number or WhatsApp (Số điện thoại)"
                        value={formConcat}
                        onChange={(e) => setFormConcat(e.target.value)}
                      />
                    </div>

                    <div className={`item-col2 block-form-col ${interestDropdownOpen ? "is-open" : ""}`}>
                      <div className="title">You are interested in (Giải pháp quan tâm):</div>
                      <div className="select-field">
                        <input
                          id="contactInterested"
                          maxLength={128}
                          name="interested"
                          type="text"
                          className="block-form-input cursor-pointer"
                          placeholder="Select your interest (Chọn giải pháp)"
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
                        {[
                          "Wireless Smart Home (Smart Home Không dây)",
                          "Wired Smart Home (Smart Home Có dây Bus)"
                        ].map((opt) => (
                          <div
                            key={opt}
                            className={`block-form-option ${interestedOptions[opt] ? "on" : ""}`}
                            onMouseDown={(ev) => {
                              ev.preventDefault();
                              setInterestedOptions((prev) => ({
                                ...prev,
                                [opt]: !prev[opt]
                              }));
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="block-form-row">
                    <div className="item-col">
                      <div className="title">Describe your needs (Mô tả chi tiết yêu cầu dự án):</div>
                      <textarea
                        id="contactContent"
                        maxLength={1024}
                        name="content"
                        className="block-form-textarea"
                        placeholder="Please provide a detailed description of your requirements (Thông tin số lượng phòng, loại công trình...)"
                        value={formContent}
                        onChange={(e) => setFormContent(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="block-form-tip">
                    We respect your confidentiality and all information is protected. <br />
                    <span className="text-xs">
                      (Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin dự án của bạn.)
                    </span>
                  </div>

                  <div className="block-form-box">
                    <button className="block-form-button" type="submit" disabled={formLoading}>
                      {formLoading ? "SUBMITTING..." : "SUBMIT APPLICATION (GỬI YÊU CẦU)"}
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
          Close (Đóng)
        </button>
        {lightboxSrc && <img src={lightboxSrc} alt="SUBLIME Large preview" />}
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
    </div>
  );
}
