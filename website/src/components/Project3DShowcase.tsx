"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Project3DShowcase — A modular visual showcase component for Shiv Shakti Towers.
 *
 * Currently renders a CSS 3D building visualization with ambient particle effects.
 * Designed to be easily replaceable with a real Three.js / React Three Fiber viewer
 * or an iframe embed when a 3D model asset becomes available.
 *
 * Performance: Uses only CSS transforms + a lightweight canvas for particles.
 * Mobile: Falls back to a static visual with reduced animation.
 */
export default function Project3DShowcase() {
  const prefersReduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for lazy initialization
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ambient particle effect on canvas
  useEffect(() => {
    if (!isVisible || prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vy: number; alpha: number; size: number }[] = [];
    const PARTICLE_COUNT = 30;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vy: -(0.2 + Math.random() * 0.5),
        alpha: 0.1 + Math.random() * 0.4,
        size: 1 + Math.random() * 2,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [isVisible, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#0e0e0e" }}
      aria-label="Shiv Shakti Towers 3D Showcase"
    >
      {/* Ambient particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1088px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Section Label */}
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 15 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="label-sm text-center mb-6 sm:mb-8"
        >
          Flagship Project
        </motion.p>

        {/* 3D Building Visualization */}
        <div className="flex justify-center mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            {/* CSS 3D Tower */}
            <div
              className="relative w-[200px] sm:w-[240px] md:w-[280px] h-[320px] sm:h-[380px] md:h-[440px]"
              style={{
                transformStyle: "preserve-3d",
                animation: prefersReduced ? "none" : "towerRotate 12s ease-in-out infinite",
              }}
            >
              {/* Front face */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 40%, #3a3a3a 100%)",
                  borderLeft: "1px solid rgba(212,175,55,0.3)",
                  borderRight: "1px solid rgba(212,175,55,0.2)",
                  borderTop: "2px solid rgba(212,175,55,0.5)",
                  transform: "translateZ(40px)",
                }}
              >
                {/* Windows grid */}
                <div className="grid grid-cols-4 gap-[3px] sm:gap-1 px-3 sm:px-4 pt-6 sm:pt-8">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[2/3] rounded-[1px]"
                      style={{
                        background: i % 7 === 0
                          ? "rgba(212,175,55,0.6)"
                          : i % 5 === 0
                          ? "rgba(212,175,55,0.3)"
                          : "rgba(255,255,255,0.05)",
                        animation: prefersReduced
                          ? "none"
                          : `windowGlow ${2 + (i % 5) * 0.5}s ease-in-out ${(i % 8) * 0.3}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>

                {/* Entrance */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[12%] bg-gradient-to-t from-[rgba(212,175,55,0.4)] to-transparent" />
              </div>

              {/* Side face */}
              <div
                className="absolute top-0 right-0 w-[60px] sm:w-[70px] md:w-[80px] h-full origin-right"
                style={{
                  background: "linear-gradient(180deg, #151515 0%, #222 40%, #2a2a2a 100%)",
                  borderRight: "1px solid rgba(212,175,55,0.15)",
                  borderTop: "2px solid rgba(212,175,55,0.3)",
                  transform: "rotateY(90deg) translateZ(0px)",
                }}
              >
                <div className="grid grid-cols-2 gap-[2px] px-2 pt-6 sm:pt-8">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[2/3] rounded-[1px]"
                      style={{
                        background: i % 4 === 0
                          ? "rgba(212,175,55,0.3)"
                          : "rgba(255,255,255,0.03)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Top / roof accent */}
              <div
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-[60%] h-[3px]"
                style={{ backgroundColor: "rgba(212,175,55,0.7)" }}
              />

              {/* Glow effect at base */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-8 blur-xl"
                style={{ backgroundColor: "rgba(212,175,55,0.15)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Project info */}
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-[640px] mx-auto"
        >
          <h2 className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[44px] text-[#e5e2e1] leading-[1.1] mb-4 sm:mb-6">
            Shiv Shakti Towers
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-[#d0c5af] leading-[24px] mb-6 sm:mb-8">
            Rising 30 floors above the Bongaigaon skyline, Shiv Shakti Towers is a statement in
            vertical living. Featuring 2BHK, 3BHK, and exclusive Penthouse residences with
            panoramic views of the Bagheswari Hills.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { value: "30", label: "Floors" },
              { value: "2026", label: "Completion" },
              { value: "3", label: "Unit Types" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="font-heading font-bold text-[28px] sm:text-[32px] text-[#d4af37] leading-[1.1]">
                  {stat.value}
                </p>
                <p className="font-body text-[10px] sm:text-[11px] tracking-[1px] uppercase text-[#99907c] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes towerRotate {
          0%, 100% { transform: rotateY(-5deg) rotateX(2deg); }
          50% { transform: rotateY(5deg) rotateX(-1deg); }
        }
        @keyframes windowGlow {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
