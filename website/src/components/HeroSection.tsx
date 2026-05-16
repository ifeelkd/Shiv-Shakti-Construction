"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroStats } from "@/data/project.data";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const anim = (props: Record<string, unknown>, delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, ...props },
          animate: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#131313" }}
      aria-label="Hero — Shiv Shakti Construction"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.png"
          alt="Shiv Shakti Construction flagship building at sunset"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #131313 0%, rgba(19,19,19,0.6) 40%, rgba(19,19,19,0) 100%)",
          }}
        />
        {/* Bottom gradient for stats readability */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 md:hidden"
          style={{
            background: "linear-gradient(to top, #131313 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-24 pt-[100px] sm:pt-[120px] pb-16 md:pt-[140px] md:pb-24">
        <div className="max-w-[896px]">
          {/* Subtitle */}
          <motion.p
            {...anim({ y: 20 }, 0.2)}
            className="font-body font-normal text-[11px] sm:text-[12px] md:text-[14px] tracking-[2.1px] uppercase text-[#e5e2e1] leading-[20px] mb-4 sm:mb-6 md:mb-8"
          >
            Established 2025 — BONGAIGAON, India
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            {...anim({ y: 30 }, 0.4)}
            className="font-heading font-bold text-[36px] sm:text-[52px] md:text-[72px] lg:text-[88px] xl:text-[96px] text-[#ffdf7d] leading-[1.05] mb-4 sm:mb-6 md:mb-8"
          >
            SHIV SHAKTI
            <br />
            CONSTRUCTION
          </motion.h1>

          {/* Description */}
          <motion.p
            {...anim({ y: 20 }, 0.6)}
            className="font-body font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#d0c5af] leading-[24px] sm:leading-[26px] md:leading-[28px] max-w-[576px] mb-6 sm:mb-8 md:mb-12"
          >
            Crafting the skyline with mathematical precision and editorial
            elegance. Shiv Shakti is the silent force behind the city&apos;s most
            ambitious monoliths.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...anim({ y: 20 }, 0.8)}
            className="flex items-center gap-0"
          >
            <a
              href="#real-estate"
              className="group bg-[#d4af37] hover:bg-[#f2ca50] active:bg-[#e6be3f] transition-colors duration-300 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 flex items-center gap-3"
            >
              <span className="font-body font-bold text-[11px] sm:text-[12px] md:text-[14px] tracking-[1.4px] text-[#3c2f00] text-center whitespace-nowrap">
                EXPLORE THE TOWER
              </span>
              <span className="text-[#3c2f00] transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <div className="ml-8 w-[128px] h-[0.5px] bg-[#d4af37] hidden md:block" />
          </motion.div>
        </div>
      </div>

      {/* Stats - Bottom Right */}
      <motion.div
        {...anim({ x: 20 }, 1.0)}
        className="absolute bottom-8 sm:bottom-12 right-4 sm:right-6 md:right-12 flex flex-col items-end gap-3 sm:gap-4 z-10"
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="text-right">
            <p className="font-heading font-bold text-[24px] sm:text-[28px] md:text-[36px] text-[#d4af37] leading-[1.1]">
              {stat.value}
            </p>
            <p className="font-body font-normal text-[9px] sm:text-[10px] tracking-[1px] uppercase text-[#d0c5af] leading-[15px]">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
