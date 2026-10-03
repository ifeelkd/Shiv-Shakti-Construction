"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type FlatType, flatTypes } from "@/data/flats.data";
import ReraBadge from "@/components/ui/ReraBadge";

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
        className="object-contain p-2 sm:p-4 scale-100 group-hover:scale-[1.15] transition-transform duration-700 ease-out origin-center"
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
  const touchStartRef = useRef<{ x: number; y: number; dist: number }>({ x: 0, y: 0, dist: 0 });

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
    setZoom(1.3);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current = { x: pan.x, y: pan.y, dist };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (touchStartRef.current.dist > 0) {
        const factor = dist / touchStartRef.current.dist;
        setZoom((z) => Math.min(3.5, Math.max(0.8, z * (factor > 1 ? 1.03 : 0.97))));
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex justify-center w-full my-4">
      {/* Inline Blueprint Card */}
      <div
        onClick={handleOpen}
        className="relative max-w-[960px] w-full border border-[rgba(77,70,53,0.4)] bg-white shadow-2xl overflow-hidden cursor-pointer group rounded-xl p-2 sm:p-4 hover:border-[#d4af37] transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]"
      >
        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain block mx-auto rounded-lg select-none group-hover:scale-[1.015] transition-transform duration-300"
          />
        </div>

        {/* Hover / Tap Badge */}
        <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/90 backdrop-blur-md border border-[rgba(212,175,55,0.6)] px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full pointer-events-none transition-all duration-300 z-30 shadow-xl group-hover:scale-105 group-hover:bg-[#d4af37] group-hover:text-black">
          <span className="font-body text-[10px] sm:text-[12px] text-[#f2ca50] group-hover:text-black tracking-[1px] sm:tracking-[1.2px] uppercase font-bold flex items-center gap-1.5 sm:gap-2">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Tap to View &amp; Zoom
          </span>
        </div>
      </div>

      {/* Universal Fullscreen Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col animate-fade-in select-none">
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-3 sm:px-8 py-3 sm:py-4 border-b border-[#2a271d] bg-black/80 z-50">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <h3 className="font-heading text-xs sm:text-base text-white tracking-wide font-semibold truncate">
                Furniture Layout Plan Inspector
              </h3>
            </div>

            {/* Interactive Zoom & Pan Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <button
                onClick={handleZoomIn}
                className="px-2.5 sm:px-3 py-1.5 bg-[#1f1b13] hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs font-bold rounded-lg border border-[rgba(212,175,55,0.4)] transition-all flex items-center gap-1 shadow-md min-h-[36px]"
                title="Zoom In (+)"
              >
                + <span className="hidden sm:inline">Zoom In</span>
              </button>
              <button
                onClick={handleZoomOut}
                className="px-2.5 sm:px-3 py-1.5 bg-[#1f1b13] hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs font-bold rounded-lg border border-[rgba(212,175,55,0.4)] transition-all flex items-center gap-1 shadow-md min-h-[36px]"
                title="Zoom Out (-)"
              >
                - <span className="hidden sm:inline">Zoom Out</span>
              </button>
              <button
                onClick={handleReset}
                className="px-2.5 sm:px-3 py-1.5 bg-[#1f1b13] hover:bg-white hover:text-black text-gray-300 text-xs font-medium rounded-lg border border-gray-700 transition-all hidden sm:inline-block min-h-[36px]"
                title="Reset View"
              >
                Reset
              </button>
              <button
                onClick={handleClose}
                className="ml-1 sm:ml-2 px-3 py-1.5 bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1 min-h-[36px]"
                title="Close Viewer (Esc)"
              >
                ✕ <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>

          {/* Interactive Drag & Pan Zoom Viewport */}
          <div
            className="flex-1 w-full h-full overflow-hidden relative cursor-grab active:cursor-grabbing flex items-center justify-center p-2 sm:p-4 touch-none"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
          <div className="px-4 sm:px-6 py-2.5 sm:py-3 border-t border-[#2a271d] bg-black/90 flex items-center justify-between text-[11px] sm:text-xs text-gray-400">
            <span className="flex items-center gap-1.5 truncate">
              <span className="text-[#d4af37] font-semibold">Tip:</span> Drag to Pan · Pinch or Scroll to Zoom
            </span>
            <span className="font-mono text-[#d4af37] flex-shrink-0 ml-2">Zoom: {Math.round(zoom * 100)}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

/* --- Auto-Scrolling Amenities Dataset with Client-Requested Attractive Copy --- */
const scrollingAmenities = [
  {
    name: "Rooftop Open Gym",
    tagline: "Gym for your healthy, energetic life",
    image: "/images/amenities/open-gym.jpg",
    badge: "Sky Fitness",
  },
  {
    name: "Rooftop Sports Turf",
    tagline: "Turf for your morning games & weekend matches",
    image: "/images/amenities/rooftop-turf.jpg",
    badge: "Sky Sports",
  },
  {
    name: "Rooftop Kids’ Play Area",
    tagline: "Playground for your kids' joyous adventures",
    image: "/images/amenities/kids-play.jpg",
    badge: "Sky Recreation",
  },
  {
    name: "Rooftop Community Hall",
    tagline: "Grand hall for family celebrations & festive moments",
    image: "/images/amenities/community-hall.jpg",
    badge: "Sky Celebrations",
  },
  {
    name: "Rooftop Garden & Deck",
    tagline: "Lush green sanctuary to unwind under open skies",
    image: "/images/amenities/rooftop-garden.jpg",
    badge: "Sky Nature",
  },
  {
    name: "Grand Entrance Lobby",
    tagline: "A stylish first impression to welcome your guests",
    image: "/images/amenities/entrance-lobby.jpg",
    badge: "Luxury Arrival",
  },
  {
    name: "Ample Car Parking",
    tagline: "Spacious, secure parking for effortless arrivals",
    image: "/images/amenities/car-parking.jpg",
    badge: "Everyday Ease",
  },
  {
    name: "High-Speed Lifts",
    tagline: "Swift, effortless access across every single floor",
    image: "/images/amenities/high-speed-lifts.jpg",
    badge: "Fast Mobility",
  },
  {
    name: "24×7 Power Backup",
    tagline: "Uninterrupted comfort for your family, day & night",
    image: "/images/amenities/power-backup.jpg",
    badge: "Non-Stop Power",
  },
  {
    name: "24×7 Water Supply",
    tagline: "Reliable, pure water flow for a hassle-free lifestyle",
    image: "/images/amenities/water-supply.jpg",
    badge: "Pure Water",
  },
  {
    name: "24×7 CCTV Surveillance",
    tagline: "Round-the-clock vigilant security for peace of mind",
    image: "/images/amenities/cctv-surveillance.jpg",
    badge: "Digital Safety",
  },
  {
    name: "Fire Safety System",
    tagline: "Advanced fire protection safeguarding loved ones",
    image: "/images/amenities/fire-safety.jpg",
    badge: "Certified Safety",
  },
  {
    name: "Waste Management",
    tagline: "Clean, hygienic surroundings for a greener tomorrow",
    image: "/images/amenities/waste-management-bins.jpg",
    badge: "Eco Clean",
  },
];

interface FlatDetailLayoutProps {
  flat: FlatType;
}

export default function FlatDetailLayout({ flat }: FlatDetailLayoutProps) {
  const prefersReduced = useReducedMotion();

  const anim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          whileInView: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true },
        };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shivshakticonstruction.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Project",
        "item": "https://shivshakticonstruction.com/project",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": flat.title,
        "item": `https://shivshakticonstruction.com/project/${flat.slug}`,
      },
    ],
  };

  const residentialFlats = flatTypes.filter((f) => f.slug !== "penthouse" || f.slug === flat.slug);
  const otherFlats = flatTypes.filter((f) => f.slug !== flat.slug);
  const primarySibling = otherFlats.find((f) => f.slug !== "penthouse") || otherFlats[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ================================================================
          SECTION 1: TITLE & HERO INFO (REMAINS THE SAME)
      ================================================================ */}
      <section
        className="relative pt-[100px] md:pt-[140px] pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24"
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
              <li><Link href="/project" className="hover:text-[#f2ca50] transition-colors">Project</Link></li>
              <li aria-hidden="true"><span className="mx-1 text-[#4d4635]">/</span></li>
              <li className="text-[#f2ca50]" aria-current="page">{flat.title}</li>
            </ol>

            {/* Quick Switcher Pill */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#99907c] uppercase tracking-[1px]">Compare Layouts:</span>
              <div className="inline-flex p-0.5 bg-[#131313] border border-[rgba(77,70,53,0.4)] rounded-full">
                {residentialFlats.map((ft) => (
                  <Link
                    key={ft.slug}
                    href={`/project/${ft.slug}`}
                    className={`px-3 py-1 rounded-full text-[11px] font-body tracking-[0.8px] transition-all ${
                      flat.slug === ft.slug
                        ? "bg-[#d4af37] text-[#3c2f00] font-bold"
                        : "text-[#d0c5af] hover:text-[#f2ca50]"
                    }`}
                  >
                    {ft.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Title Area */}
            <motion.div {...anim({ y: 20 }, 0.1)}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <p className="label-sm">{flat.subtitle}</p>
                <ReraBadge size="sm" />
              </div>
              <h1 className="font-heading font-bold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#ffdf7d] leading-[1.05] mb-4">
                {flat.title}
              </h1>
              <p className="font-body text-[16px] md:text-[18px] text-[#d0c5af] leading-[26px] max-w-[560px] mb-8">
                {flat.configuration} · {flat.area}
              </p>
              
              <div className="flex gap-4 sm:gap-6 flex-wrap">
                <a
                  href="#3d-layouts"
                  className="bg-[#d4af37] px-6 py-3 hover:bg-[#f2ca50] transition-colors duration-300 flex items-center justify-center font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] text-[#3c2f00] uppercase"
                >
                  Explore 3D Layouts
                </a>

                {primarySibling && (
                  <Link
                    href={`/project/${primarySibling.slug}`}
                    className="border border-[rgba(212,175,55,0.6)] bg-[#1c1912] px-6 py-3 hover:border-[#f2ca50] hover:bg-[rgba(212,175,55,0.15)] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span className="font-body font-bold text-[11px] sm:text-[12px] tracking-[1.2px] text-[#ffdf7d] group-hover:text-[#fff] uppercase">
                      {flat.slug === "2bhk" ? `Upgrade to ${primarySibling.title} →` : `Explore ${primarySibling.title} Layout →`}
                    </span>
                  </Link>
                )}

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
          SECTION 2: 3D LAYOUT VARIANTS (ALIGNED IN A LIST VIEW ONLY)
      ================================================================ */}
      {flat.variants.length > 0 && (
        <section
          id="3d-layouts"
          className="px-4 sm:px-6 md:px-12 lg:px-24 py-14 sm:py-20 md:py-24"
          style={{ backgroundColor: "#111111" }}
        >
          <div className="max-w-[1240px] mx-auto">
            
            {/* Header (No Variant Buttons - List View Only) */}
            <div className="flex flex-col gap-3 mb-10 sm:mb-14">
              <p className="label-sm">02 — 3D Layout Variants</p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="heading-section">Explore All {flat.title} Layouts</h2>
                  <p className="font-body text-[#d0c5af] text-[13px] sm:text-[15px] mt-1 max-w-[600px]">
                    Detailed architectural 3D cutaway perspectives for each variant. Review exact dimensions, balconies, and room flow.
                  </p>
                </div>
                <span className="text-[#f2ca50] font-body text-[12px] uppercase tracking-[1.5px] font-semibold border border-[#f2ca50]/30 px-3.5 py-1.5 bg-[#171717] w-fit">
                  {flat.variants.length} Variants Available
                </span>
              </div>
              <div className="divider-gold mt-2" />
            </div>

            {/* Vertically Stacked List View of All Variants */}
            <div className="flex flex-col gap-10 sm:gap-14 md:gap-16">
              {flat.variants.map((v, index) => (
                <motion.div
                  key={v.name}
                  {...anim({ y: 30 }, index * 0.1)}
                  className="border border-[rgba(77,70,53,0.35)] hover:border-[#d4af37] bg-[#141414] transition-all duration-300 p-5 sm:p-8 md:p-10 shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: 3D Render Image with Tilt */}
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[4/3] w-full bg-[#0a0a0a] border border-[rgba(77,70,53,0.25)] overflow-hidden">
                        {v.map3d ? (
                          <TiltImage src={v.map3d} alt={`${v.name} 3D Floor Plan`} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#131313]">
                            <p className="text-[#99907c] font-body text-[13px] uppercase tracking-[1px]">
                              3D Layout Unavailable
                            </p>
                          </div>
                        )}
                      </div>
                      <p className="text-center font-body text-[11px] sm:text-[12px] text-[#99907c] mt-3 tracking-[1px] uppercase">
                        Interactive 3D view · Hover or drag to explore perspective
                      </p>
                    </div>

                    {/* Right: Specifications & Metrics */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-body text-[11px] uppercase tracking-[1.5px] text-[#f2ca50] font-bold px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30">
                            {flat.title} Layout
                          </span>
                          <span className="font-heading text-[15px] sm:text-[16px] text-[#ffdf7d] font-bold">
                            Option 0{index + 1}
                          </span>
                        </div>

                        <h3 className="font-heading font-black text-[26px] sm:text-[32px] text-white mb-4">
                          {v.name}
                        </h3>

                        {/* Area metrics breakdown */}
                        <div className="flex flex-col gap-3 mb-6 bg-[#0a0a0a] p-4 sm:p-5 border border-white/5">
                          <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
                            <span className="font-body text-[12px] text-[#99907c] uppercase">Super Built-up Area</span>
                            <span className="font-heading font-bold text-[18px] text-[#f2ca50]">{v.superBuiltUpArea}</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
                            <span className="font-body text-[12px] text-[#99907c] uppercase">Built-up Area</span>
                            <span className="font-heading font-semibold text-[15px] text-white">{v.builtUpArea}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-body text-[12px] text-[#99907c] uppercase">Carpet Area</span>
                            <span className="font-heading font-semibold text-[15px] text-[#d0c5af]">{v.carpetArea}</span>
                          </div>
                        </div>

                        {/* Room breakdown badges */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          <div className="text-center bg-[#1c1c1c] p-3 border border-white/5">
                            <p className="font-heading font-bold text-[18px] text-white">{v.bedrooms}</p>
                            <p className="font-body text-[10px] text-[#99907c] uppercase tracking-[1px]">Bedrooms</p>
                          </div>
                          <div className="text-center bg-[#1c1c1c] p-3 border border-white/5">
                            <p className="font-heading font-bold text-[18px] text-white">{v.bathrooms}</p>
                            <p className="font-body text-[10px] text-[#99907c] uppercase tracking-[1px]">Bathrooms</p>
                          </div>
                          <div className="text-center bg-[#1c1c1c] p-3 border border-white/5">
                            <p className="font-heading font-bold text-[18px] text-white">{v.balconies}</p>
                            <p className="font-body text-[10px] text-[#99907c] uppercase tracking-[1px]">Balconies</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="w-full bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] font-body font-bold text-[12px] tracking-[1.4px] py-3.5 text-center uppercase transition-all shadow-md"
                      >
                        Enquire For {v.name}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ================================================================
          SECTION 3: AMENITIES (AUTOMATICALLY SCROLLING HORIZONTALLY)
      ================================================================ */}
      <section
        className="py-14 sm:py-20 md:py-24 border-t border-[rgba(77,70,53,0.3)] overflow-hidden"
        style={{ backgroundColor: "#0b0b0b" }}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="label-sm">03 — World-Class Amenities</p>
              <h2 className="heading-section text-[26px] xs:text-[32px] sm:text-[38px]">
                Everyday Luxury &amp; Recreation
              </h2>
            </div>
            <p className="font-body text-[#d0c5af] text-[13px] sm:text-[14px] max-w-[460px]">
              Designed around how modern families live. Everything you need is right where you live.
            </p>
          </div>
          <div className="divider-gold mt-4" />
        </div>

        {/* Continuous Auto-Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden group/marquee">
          {/* Gradient Edge Masks for Smooth Visual Blend */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track: Duplicated list for seamless infinite loop */}
          <div className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] py-2 cursor-pointer w-max">
            {[...scrollingAmenities, ...scrollingAmenities].map((amenity, idx) => (
              <div
                key={`${amenity.name}-${idx}`}
                className="w-[260px] sm:w-[300px] flex-shrink-0 bg-[#141414] border border-[#d4af37]/30 hover:border-[#f2ca50] transition-all duration-300 overflow-hidden flex flex-col group/card shadow-lg"
              >
                {/* Small Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-108"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-[#f2ca50]/50 text-[#f2ca50] font-body text-[9px] uppercase tracking-wider px-2 py-0.5 font-bold">
                    {amenity.badge}
                  </span>
                </div>

                {/* Catchy Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-heading text-[15px] sm:text-[16px] text-white font-semibold mb-1 group-hover/card:text-[#f2ca50] transition-colors">
                      {amenity.name}
                    </h4>
                    <p className="font-body text-[12px] sm:text-[13px] text-[#ffdf7d] font-medium leading-snug">
                      &ldquo;{amenity.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <p className="text-center font-body text-[11px] text-[#8e8574] mt-4 tracking-wider uppercase">
          Hover to pause carousel · Scroll horizontally to view all amenities
        </p>
      </section>

      {/* ================================================================
          SECTION 4: TECHNICAL SPECS (BUILT TO LAST)
      ================================================================ */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 border-t border-[rgba(77,70,53,0.3)]"
        style={{ backgroundColor: "#131313" }}
      >
        <div className="max-w-[1240px] mx-auto">
          <motion.div {...anim({ y: 20 }, 0.1)} className="mb-8">
            <p className="label-sm mb-2">Technical Standards</p>
            <h2 className="heading-section text-[24px] sm:text-[32px]">Engineered For Permanence</h2>
            <div className="divider-gold mt-3" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {flat.constructionSpecs.map((spec, i) => (
              <div key={i} className="border border-[rgba(77,70,53,0.3)] p-5 bg-[#0e0e0e]/70 hover:border-[#d4af37] transition-colors">
                <div className="w-8 h-[1px] bg-[#d4af37] mb-3" />
                <h3 className="font-heading font-bold text-[15px] text-[#f2ca50] mb-2">{spec.label}</h3>
                <p className="font-body text-[13px] text-[#d0c5af] leading-[20px]">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: FURNITURE LAYOUT PLAN FOR THE BUILDING (RENAMED & PLACED AT THE END)
      ================================================================ */}
      {flat.map2d && flat.map2d.length > 0 && (
        <section
          className="px-4 sm:px-6 md:px-12 lg:px-24 py-14 sm:py-20 md:py-24 border-t border-[rgba(77,70,53,0.3)]"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <motion.div {...anim({ y: 20 }, 0.1)} className="text-center mb-10 sm:mb-14">
              <p className="label-sm mb-3">Architectural Blueprints</p>
              <h2 className="heading-section mb-3 text-[26px] sm:text-[36px] md:text-[42px]">
                Furniture Layout Plan for the Building
              </h2>
              <p className="font-body text-[#d0c5af] text-[13px] sm:text-[15px] max-w-[650px] mx-auto">
                Comprehensive floor plate blueprint detailing exact furniture arrangements, circulation corridors, and structural dimensions across all residences.
              </p>
              <div className="divider-gold mx-auto mt-4" />
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-16">
              {flat.map2d.map((mapUrl, i) => (
                <motion.div key={i} {...anim({ y: 30 }, 0.2 + (i * 0.1))}>
                   <MagnifierImage src={mapUrl} alt={`Furniture Layout Plan ${i+1}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          SECTION 6: PERSUASIVE CROSS-NAVIGATION
      ================================================================ */}
      <section
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 border-t border-b border-[rgba(77,70,53,0.3)]"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="max-w-[1280px] mx-auto">
          {primarySibling && (
            <motion.div
              {...anim({ y: 25 }, 0.1)}
              className="relative overflow-hidden border border-[rgba(212,175,55,0.4)] p-8 sm:p-12 md:p-14 bg-gradient-to-r from-[#17140e] via-[#13110c] to-[#0e0e0e] flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
            >
              <div className="max-w-[700px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.3)] mb-4">
                  <span className="font-body text-[11px] uppercase tracking-[1.5px] text-[#f2ca50] font-semibold">
                    Explore Other Configurations
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[40px] text-[#ffdf7d] leading-[1.15] mb-4">
                  Interested in Our {primarySibling.title} Residences?
                </h3>
                <p className="font-body text-[14px] sm:text-[16px] text-[#d0c5af] leading-[25px] mb-6">
                  Experience {primarySibling.configuration} with spacious super built-up area of <strong className="text-[#f2ca50]">{primarySibling.area}</strong>. Thoughtfully engineered for modern vertical living with premium amenities, private balconies, and cross-ventilation.
                </p>
                <div className="flex flex-wrap gap-4 text-[12px] text-[#99907c] font-body uppercase tracking-[1px]">
                  <span>{primarySibling.configuration}</span>
                  <span>&bull;</span>
                  <span>{primarySibling.area}</span>
                  <span>&bull;</span>
                  <span>{primarySibling.variants.length > 0 ? `${primarySibling.variants.length} Layout Plans` : "Signature Layout"}</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href={`/project/${primarySibling.slug}`}
                  className="inline-flex items-center gap-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-body font-bold text-[12px] sm:text-[13px] tracking-[1.5px] uppercase px-8 py-4 transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] group-hover:scale-105"
                >
                  <span>Explore {primarySibling.title} Layouts</span>
                  <span className="text-[18px]">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================================================================
          SECTION 7: CTA
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
