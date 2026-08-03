"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { FlatType, FlatVariant } from "@/data/flats.data";

/* --- 3D Tilt Image Component --- */
const TiltImage = ({ src, alt }: { src: string; alt: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-[rgba(77,70,53,0.3)] bg-[#0a0a0a] shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-crosshair group"
    >
      {/* Glossy overlay */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1), transparent 60%)",
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-2 sm:p-4 scale-100 group-hover:scale-[1.3] transition-transform duration-700 ease-out origin-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </motion.div>
  );
};

/* --- Magnifier / Universal Interactive Blueprint Viewer Component --- */
const MagnifierImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setZoom(1.3); // Start with a nice comfortable zoom
    setPan({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleZoomIn = () => setZoom((z) => Math.min(3.5, z + 0.4));
  const handleZoomOut = () => setZoom((z) => Math.max(0.8, z - 0.4));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(3.5, z + 0.25));
    } else {
      setZoom((z) => Math.max(0.8, z - 0.25));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="flex justify-center w-full my-4">
      {/* Inline Blueprint Card */}
      <div
        onClick={handleOpen}
        className="relative max-w-[920px] w-full border border-[rgba(77,70,53,0.4)] bg-white shadow-2xl overflow-hidden cursor-pointer group rounded-xl p-2 sm:p-4 hover:border-[#d4af37] transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]"
      >
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain block mx-auto rounded-lg select-none group-hover:scale-[1.015] transition-transform duration-300"
          />
        </div>

        {/* Hover Badge */}
        <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur-md border border-[rgba(212,175,55,0.6)] px-4 py-2.5 rounded-full pointer-events-none transition-all duration-300 z-30 shadow-xl group-hover:scale-105 group-hover:bg-[#d4af37] group-hover:text-black">
          <span className="font-body text-[11px] sm:text-[12px] text-[#f2ca50] group-hover:text-black tracking-[1.2px] uppercase font-bold flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Click for Universal HD Zoom & Pan
          </span>
        </div>
      </div>

      {/* Universal Fullscreen Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in select-none">
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-[#2a271d] bg-black/60 z-50">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
              <h3 className="font-heading text-sm sm:text-base text-white tracking-wide font-semibold">
                Architectural Floor Plan — Universal Blueprint Inspector
              </h3>
            </div>

            {/* Interactive Zoom & Pan Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="px-3 py-1.5 bg-[#1f1b13] hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs font-bold rounded-lg border border-[rgba(212,175,55,0.4)] transition-all flex items-center gap-1 shadow-md"
                title="Zoom In (+)"
              >
                + Zoom In
              </button>
              <button
                onClick={handleZoomOut}
                className="px-3 py-1.5 bg-[#1f1b13] hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs font-bold rounded-lg border border-[rgba(212,175,55,0.4)] transition-all flex items-center gap-1 shadow-md"
                title="Zoom Out (-)"
              >
                - Zoom Out
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 bg-[#1f1b13] hover:bg-white hover:text-black text-gray-300 text-xs font-medium rounded-lg border border-gray-700 transition-all hidden sm:inline-block"
                title="Reset View"
              >
                Reset
              </button>
              <button
                onClick={handleClose}
                className="ml-2 px-3.5 py-1.5 bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1"
                title="Close Viewer (Esc)"
              >
                ✕ Close
              </button>
            </div>
          </div>

          {/* Interactive Drag & Pan Zoom Viewport */}
          <div
            className="flex-1 w-full h-full overflow-hidden relative cursor-grab active:cursor-grabbing flex items-center justify-center p-4"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="transition-transform duration-75 ease-out"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: "center center",
              }}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl bg-white p-2"
                draggable={false}
              />
            </div>
          </div>

          {/* Footer Navigation Bar */}
          <div className="px-6 py-3 border-t border-[#2a271d] bg-black/80 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-[#d4af37] font-semibold">Tip:</span> Scroll wheel to Zoom · Click & Drag to Pan in 360° · Esc to Close
            </span>
            <span className="font-mono text-[#d4af37]">Zoom: {Math.round(zoom * 100)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

interface FlatDetailLayoutProps {
  flat: FlatType;
}

export default function FlatDetailLayout({ flat }: FlatDetailLayoutProps) {
  const prefersReduced = useReducedMotion();
  const [activeVariant, setActiveVariant] = useState<FlatVariant>(flat.variants[0] || null);

  const anim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          whileInView: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true },
        };

  return (
    <>
      {/* ================================================================
          SECTION 1: HERO & BASIC INFO
      ================================================================ */}
      <section
        className="relative pt-[90px] md:pt-[140px] pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24"
        style={{ backgroundColor: "#0e0e0e" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 50%, rgba(212,175,55,0.02) 100%)",
          }}
        />

        <div className="relative max-w-[1088px] mx-auto">
          {/* Breadcrumb & Quick Switcher */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex items-center justify-between flex-wrap gap-4">
            <ol className="flex items-center gap-2 font-body text-[11px] sm:text-[12px] tracking-[1px] uppercase text-[#99907c]">
              <li><Link href="/" className="hover:text-[#f2ca50] transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="mx-1 text-[#4d4635]">/</span></li>
              <li><Link href="/#landmarks" className="hover:text-[#f2ca50] transition-colors">Flats</Link></li>
              <li aria-hidden="true"><span className="mx-1 text-[#4d4635]">/</span></li>
              <li className="text-[#f2ca50]" aria-current="page">{flat.title}</li>
            </ol>

            {/* Quick Switcher Pill */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#99907c] uppercase tracking-[1px]">Compare Layouts:</span>
              <div className="inline-flex p-0.5 bg-[#131313] border border-[rgba(77,70,53,0.4)] rounded-full">
                <Link
                  href="/flats/2bhk"
                  className={`px-3 py-1 rounded-full text-[11px] font-body tracking-[0.8px] transition-all ${
                    flat.slug === "2bhk"
                      ? "bg-[#d4af37] text-[#3c2f00] font-bold"
                      : "text-[#d0c5af] hover:text-[#f2ca50]"
                  }`}
                >
                  2 BHK
                </Link>
                <Link
                  href="/flats/3bhk"
                  className={`px-3 py-1 rounded-full text-[11px] font-body tracking-[0.8px] transition-all ${
                    flat.slug === "3bhk"
                      ? "bg-[#d4af37] text-[#3c2f00] font-bold"
                      : "text-[#d0c5af] hover:text-[#f2ca50]"
                  }`}
                >
                  3 BHK
                </Link>
              </div>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Title Area */}
            <motion.div {...anim({ y: 20 }, 0.1)}>
              <p className="label-sm mb-3">{flat.subtitle}</p>
              <h1 className="font-heading font-bold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#ffdf7d] leading-[1.05] mb-4">
                {flat.title}
              </h1>
              <p className="font-body text-[16px] md:text-[18px] text-[#d0c5af] leading-[26px] max-w-[560px] mb-8">
                {flat.configuration} · {flat.area}
              </p>
              
              <div className="flex gap-4 sm:gap-6 flex-wrap">
                <Link
                  href="#3d-layouts"
                  className="bg-[#d4af37] px-6 py-3 hover:bg-[#f2ca50] transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] text-[#3c2f00] uppercase">
                    Explore 3D Layouts
                  </span>
                </Link>

                <Link
                  href={flat.slug === "2bhk" ? "/flats/3bhk" : "/flats/2bhk"}
                  className="border border-[rgba(212,175,55,0.6)] bg-[#1c1912] px-6 py-3 hover:border-[#f2ca50] hover:bg-[rgba(212,175,55,0.15)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span className="font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] text-[#ffdf7d] group-hover:text-[#fff] uppercase">
                    {flat.slug === "2bhk" ? "Upgrade to 3 BHK →" : "View 2 BHK Layout →"}
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="border border-[rgba(77,70,53,0.5)] px-6 py-3 hover:bg-[rgba(212,175,55,0.1)] transition-colors duration-300 flex items-center justify-center"
                >
                  <span className="font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] text-[#99907c] hover:text-[#f2ca50] uppercase">
                    {flat.ctaLabel}
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* High-Level Specs Grid */}
            <motion.div {...anim({ x: 30 }, 0.2)} className="grid grid-cols-2 gap-4 sm:gap-6">
               {[
                  { label: "Bedrooms", value: flat.specifications.find(s => s.label === "Bedrooms")?.value },
                  { label: "Bathrooms", value: flat.specifications.find(s => s.label === "Bathrooms")?.value },
                  { label: "Balconies", value: flat.specifications.find(s => s.label === "Balconies")?.value?.split(" ")[0] },
                  { label: "Layout Options", value: flat.variants.length.toString() },
               ].map((stat, idx) => (
                 <div key={idx} className="border border-[rgba(77,70,53,0.3)] p-5 bg-[#131313]/60 backdrop-blur-sm">
                   <p className="font-heading font-bold text-[32px] sm:text-[40px] text-[#f2ca50] leading-none mb-2">
                     {stat.value || "—"}
                   </p>
                   <p className="font-body text-[11px] sm:text-[12px] text-[#99907c] uppercase tracking-[1px]">
                     {stat.label}
                   </p>
                 </div>
               ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: 2D FLOOR PLANS
      ================================================================ */}
      {flat.map2d && flat.map2d.length > 0 && (
        <section
          className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24"
          style={{ backgroundColor: "#131313" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <motion.div {...anim({ y: 20 }, 0.1)} className="text-center mb-10 sm:mb-16">
              <p className="label-sm mb-3">Architectural Blueprints</p>
              <h2 className="heading-section mb-4">Master Floor Plan</h2>
              <div className="divider-gold mx-auto" />
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-16">
              {flat.map2d.map((mapUrl, i) => (
                <motion.div key={i} {...anim({ y: 30 }, 0.2 + (i * 0.1))}>
                   <MagnifierImage src={mapUrl} alt={`2D Floor Plan ${i+1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          SECTION 3: 3D LAYOUT VARIANTS (INTERACTIVE TABS)
      ================================================================ */}
      {flat.variants.length > 0 && activeVariant && (
        <section
          id="3d-layouts"
          className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24"
          style={{ backgroundColor: "#0e0e0e" }}
        >
          <div className="max-w-[1280px] mx-auto">
            
            {/* Header & Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
              <motion.div {...anim({ y: 20 }, 0.1)}>
                <p className="label-sm mb-3">Interactive Layouts</p>
                <h2 className="heading-section">Explore 3D Variants</h2>
              </motion.div>

              {/* Magnetic Pill Tabs */}
              <motion.div {...anim({ y: 20 }, 0.2)} className="flex p-1 bg-[#131313] border border-[rgba(77,70,53,0.3)] rounded-full self-start overflow-x-auto hide-scrollbar">
                {flat.variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setActiveVariant(v)}
                    className="relative px-6 py-2.5 rounded-full transition-colors font-heading text-[14px] sm:text-[15px] tracking-[1px] whitespace-nowrap outline-none"
                    style={{ color: activeVariant.name === v.name ? "#3c2f00" : "#d0c5af" }}
                  >
                    {activeVariant.name === v.name && (
                      <motion.div
                        layoutId="activeVariantTab"
                        className="absolute inset-0 bg-[#d4af37] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{v.name}</span>
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Sticky Split Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
              
              {/* Left Side: Sticky Data Card */}
              <div className="lg:col-span-5 lg:sticky top-[120px] flex flex-col gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVariant.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="border border-[rgba(77,70,53,0.3)] p-6 sm:p-8 bg-[#131313]/80 backdrop-blur-md"
                  >
                    <h3 className="font-heading font-bold text-[28px] sm:text-[32px] text-[#ffdf7d] mb-6">
                      {activeVariant.name} Specifications
                    </h3>
                    
                    <div className="flex flex-col gap-4 mb-8">
                      {[
                        { label: "Super Built-up Area", value: activeVariant.superBuiltUpArea, highlight: true },
                        { label: "Built-up Area", value: activeVariant.builtUpArea },
                        { label: "Carpet Area", value: activeVariant.carpetArea },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-end border-b border-[rgba(77,70,53,0.2)] pb-3">
                          <span className="font-body text-[12px] sm:text-[13px] text-[#99907c] uppercase tracking-[0.8px]">
                            {item.label}
                          </span>
                          <span className={`font-heading text-[16px] sm:text-[18px] ${item.highlight ? 'text-[#f2ca50] font-bold' : 'text-[#e5e2e1]'}`}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Beds", value: activeVariant.bedrooms },
                        { label: "Baths", value: activeVariant.bathrooms },
                        { label: "Balcony", value: activeVariant.balconies },
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center bg-[#0a0a0a] border border-[rgba(77,70,53,0.2)] py-3">
                          <p className="font-heading font-bold text-[20px] text-[#d0c5af]">{stat.value}</p>
                          <p className="font-body text-[10px] text-[#99907c] uppercase tracking-[1px]">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Interior Highlights (Consistent across variants) */}
                <div className="hidden lg:block border border-[rgba(77,70,53,0.3)] p-6 sm:p-8 bg-[#131313]/40">
                  <h4 className="font-body text-[12px] text-[#f2ca50] uppercase tracking-[1.5px] mb-4">Interior Experience</h4>
                  <ul className="flex flex-col gap-3">
                    {flat.interiorHighlights.slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 mt-[6px] bg-[#d4af37] rounded-full flex-shrink-0" />
                        <span className="font-body text-[13px] text-[#d0c5af] leading-[20px]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Interactive 3D Render */}
              <div className="lg:col-span-7" style={{ perspective: "1000px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVariant.name}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeVariant.map3d ? (
                      <TiltImage src={activeVariant.map3d} alt={`${activeVariant.name} 3D Layout`} />
                    ) : (
                      <div className="w-full aspect-[4/3] flex items-center justify-center bg-[#131313] border border-[rgba(77,70,53,0.3)]">
                        <p className="text-[#99907c] font-body text-[13px] uppercase tracking-[1px]">3D Layout Unavailable</p>
                      </div>
                    )}
                    <p className="text-center font-body text-[12px] text-[#99907c] mt-4 tracking-[1px] uppercase">
                      Hover and move mouse to explore 3D depth
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          SECTION 4: ENGINEERING STANDARDS & AMENITIES
      ================================================================ */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24"
        style={{ backgroundColor: "#131313" }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20">
          
          {/* Engineering */}
          <motion.div {...anim({ y: 20 }, 0.1)}>
            <p className="label-sm mb-3">Technical Specs</p>
            <h2 className="heading-section mb-8">Built to Last</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {flat.constructionSpecs.map((spec, i) => (
                <div key={i} className="border border-[rgba(77,70,53,0.3)] p-5 bg-[#0e0e0e]/50 hover:border-[#d4af37] transition-colors">
                  <div className="w-8 h-[1px] bg-[#d4af37] mb-3" />
                  <h3 className="font-heading font-bold text-[15px] text-[#f2ca50] mb-2">{spec.label}</h3>
                  <p className="font-body text-[13px] text-[#d0c5af] leading-[20px]">{spec.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div {...anim({ y: 20 }, 0.2)}>
            <p className="label-sm mb-3">Project Highlights</p>
            <h2 className="heading-section mb-8">Amenities Included</h2>
            <div className="flex flex-wrap gap-3">
              {flat.amenities.map((amenity, i) => (
                <div key={i} className="border border-[rgba(77,70,53,0.2)] px-4 py-2 bg-[#1c1b1b]/50">
                  <span className="font-body text-[12px] sm:text-[13px] text-[#e5e2e1]">{amenity}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================================================================
          SECTION 5: PERSUASIVE CROSS-NAVIGATION
      ================================================================ */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 border-t border-b border-[rgba(77,70,53,0.3)]"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="max-w-[1280px] mx-auto">
          {flat.slug === "2bhk" ? (
            <motion.div
              {...anim({ y: 25 }, 0.1)}
              className="relative overflow-hidden border border-[rgba(212,175,55,0.4)] p-8 sm:p-12 md:p-14 bg-gradient-to-r from-[#17140e] via-[#13110c] to-[#0e0e0e] flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
            >
              <div className="max-w-[700px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)] mb-4">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                  <span className="font-body text-[11px] uppercase tracking-[1.5px] text-[#f2ca50] font-semibold">
                    Elevate Your Living Experience
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[40px] text-[#ffdf7d] leading-[1.15] mb-4">
                  Desire Extra Room &amp; Unmatched Grandeur?
                </h3>
                <p className="font-body text-[14px] sm:text-[16px] text-[#d0c5af] leading-[25px] mb-6">
                  While our 2 BHK offers an exceptionally smart and efficient sanctuary, our <strong className="text-[#f2ca50]">3 BHK Residences (1,629 &ndash; 1,999 sq.ft.)</strong> grant expansive open-plan entertaining halls, a dedicated personal suite balcony, and versatile space for growing families or executive home offices.
                </p>
                <div className="flex flex-wrap gap-4 text-[12px] text-[#99907c] font-body uppercase tracking-[1px]">
                  <span>3 Bedrooms</span>
                  <span>&bull;</span>
                  <span>3 Bathrooms</span>
                  <span>&bull;</span>
                  <span>Personal Suite Balcony</span>
                  <span>&bull;</span>
                  <span>Up to 1,999 sq.ft</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/flats/3bhk"
                  className="inline-flex items-center gap-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] uppercase px-8 py-4 transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] group-hover:scale-105"
                >
                  <span>Explore 3 BHK Layouts</span>
                  <span className="text-[18px]">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              {...anim({ y: 25 }, 0.1)}
              className="relative overflow-hidden border border-[rgba(212,175,55,0.4)] p-8 sm:p-12 md:p-14 bg-gradient-to-r from-[#131313] via-[#16140e] to-[#0e0e0e] flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
            >
              <div className="max-w-[700px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)] mb-4">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                  <span className="font-body text-[11px] uppercase tracking-[1.5px] text-[#f2ca50] font-semibold">
                    Smart Luxury &amp; Pure Efficiency
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[40px] text-[#ffdf7d] leading-[1.15] mb-4">
                  Seeking a Smarter, Optimized Footprint?
                </h3>
                <p className="font-body text-[14px] sm:text-[16px] text-[#d0c5af] leading-[25px] mb-6">
                  Our <strong className="text-[#f2ca50]">2 BHK Residences (1,258 &ndash; 1,592 sq.ft.)</strong> are crafted for urban sophistication without unnecessary complexity. Perfectly proportioned for modern couples, boutique families, or high-yield real estate portfolios &mdash; enjoying full access to all Shiv Shakti Towers luxury amenities.
                </p>
                <div className="flex flex-wrap gap-4 text-[12px] text-[#99907c] font-body uppercase tracking-[1px]">
                  <span>2 Bedrooms</span>
                  <span>&bull;</span>
                  <span>2 Bathrooms</span>
                  <span>&bull;</span>
                  <span>Private Balcony</span>
                  <span>&bull;</span>
                  <span>Up to 1,592 sq.ft</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/flats/2bhk"
                  className="inline-flex items-center gap-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] uppercase px-8 py-4 transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] group-hover:scale-105"
                >
                  <span>Explore 2 BHK Layouts</span>
                  <span className="text-[18px]">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================================
          SECTION 6: CTA
      ================================================================ */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24"
        style={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, #0e0e0e 40%, rgba(212,175,55,0.05) 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div {...anim({ y: 20 }, 0.1)}>
            <h2 className="font-heading font-bold text-[32px] sm:text-[44px] text-[#e5e2e1] leading-[1.1] mb-4">
              Interested in {flat.title}?
            </h2>
            <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] mb-8 sm:mb-10">
              Schedule a site visit or request the complete technical dossier. Our team responds within 48 business hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#d4af37] hover:bg-[#f2ca50] transition-colors duration-300 px-10 py-5"
            >
              <span className="font-body font-bold text-[13px] sm:text-[14px] tracking-[1.4px] text-[#3c2f00] uppercase">
                {flat.ctaLabel}
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
