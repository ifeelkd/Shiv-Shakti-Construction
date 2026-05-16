"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { flatTypes } from "@/data/flats.data";

export default function LegacyAssets() {
  const prefersReduced = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (direction: "prev" | "next") => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const cardWidth = container.firstElementChild
        ? (container.firstElementChild as HTMLElement).offsetWidth + 24
        : 400;
      const newIndex =
        direction === "next"
          ? Math.min(activeIndex + 1, flatTypes.length - 1)
          : Math.max(activeIndex - 1, 0);

      setActiveIndex(newIndex);
      container.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" });
    },
    [activeIndex]
  );

  return (
    <section
      id="landmarks"
      className="section-padding"
      style={{ backgroundColor: "rgba(212,175,55,0.2)" }}
      aria-label="Legacy Assets — Flat Types"
    >
      <div className="max-w-[1088px] mx-auto">
        {/* Section Header with Nav Arrows */}
        <div className="flex items-end justify-between mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="label-sm">03 — Landmarks</p>
            <h2 className="heading-section">Legacy Assets</h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("prev")}
              disabled={activeIndex === 0}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-[rgba(77,70,53,0.3)] flex items-center justify-center hover:border-[#d4af37] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5.5 0.5L0.5 5.5L5.5 10.5"
                  stroke="#d0c5af"
                  strokeWidth="1"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("next")}
              disabled={activeIndex >= flatTypes.length - 1}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-[rgba(77,70,53,0.3)] flex items-center justify-center hover:border-[#d4af37] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0.5 0.5L5.5 5.5L0.5 10.5"
                  stroke="#d0c5af"
                  strokeWidth="1"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards — Desktop Grid / Mobile Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible scroll-snap-x pb-4 lg:pb-0 -mx-4 px-4 sm:-mx-0 sm:px-0"
        >
          {flatTypes.map((flat, index) => {
            const detailHref =
              flat.slug === "penthouse"
                ? "/contact"
                : `/flats/${flat.slug}`;

            return (
              <motion.article
                key={flat.slug}
                initial={prefersReduced ? undefined : { opacity: 0, y: 40 }}
                whileInView={
                  prefersReduced ? undefined : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-[#f2ca50] overflow-hidden group flex-shrink-0 w-[80vw] sm:w-[70vw] lg:w-auto snap-start"
              >
                <Link href={detailHref} className="block">
                  {/* Card Image */}
                  <div className="relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden">
                    <Image
                      src={flat.image}
                      alt={`${flat.title} unit — Shiv Shakti Towers`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="font-body font-bold text-[14px] tracking-[1.4px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#d4af37] px-6 py-3">
                        VIEW DETAILS →
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-12">
                    <h3 className="font-heading font-normal text-[18px] sm:text-[20px] text-[#7d5900] leading-[28px] mb-1 sm:mb-2">
                      {flat.title}
                    </h3>
                    <p className="font-body font-normal text-[10px] tracking-[1px] uppercase text-black leading-[15px] mb-2">
                      {flat.subtitle}
                    </p>
                    <p className="font-body font-normal text-[11px] sm:text-[12px] text-[#7d5900] leading-[18px]">
                      {flat.configuration} · {flat.area}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile scroll indicator dots */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          {flatTypes.map((flat, idx) => (
            <span
              key={flat.slug}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeIndex
                  ? "bg-[#d4af37]"
                  : "bg-[rgba(212,175,55,0.3)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
