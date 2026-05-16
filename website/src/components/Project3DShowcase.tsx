"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function Project3DShowcase() {
  const prefersReduced = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundColor: "#030303",
        backgroundImage: `radial-gradient(circle at 50% 50%, #0a0a0a 0%, #030303 100%)`
      }}
      aria-label="Shiv Shakti Towers Infinite Showcase"
    >
      {/* Background Blueprint Grid (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative w-full max-w-[1600px] mx-auto flex items-center justify-center">
        
        {/* DEPTH LAYER 1: BACK TEXT (PARALLAX) */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.07 }}
            transition={{ duration: 2 }}
            className="font-heading font-black text-[20vw] tracking-tighter text-white uppercase select-none"
          >
            SHIV SHAKTI
          </motion.h2>
        </div>

        {/* DEPTH LAYER 2: THE MONOLITH (TOWER) */}
        <div 
          className="relative z-10 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
        >
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: "2500px" }}
          >
            <div
              className="relative w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
              style={{
                transformStyle: "preserve-3d",
                animation: prefersReduced ? "none" : "towerBreathe 15s ease-in-out infinite",
              }}
            >
              {/* Core Body (Glass & Gold) */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(40,40,40,0.9) 100%)",
                  borderLeft: "2px solid #d4af37",
                  borderTop: "1px solid rgba(212,175,55,0.4)",
                  backdropFilter: "blur(10px)",
                  transform: "translateZ(60px)",
                }}
              >
                {/* Internal Structural Light */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Premium Windows */}
                <div className="grid grid-cols-5 gap-1 px-8 py-16">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[2/3] rounded-[1px] transition-all duration-1000"
                      style={{
                        background: i % 14 === 0
                          ? "rgba(242,202,80,0.8)"
                          : "rgba(255,255,255,0.03)",
                        boxShadow: i % 14 === 0 ? "0 0 15px rgba(242,202,80,0.4)" : "none",
                        animation: prefersReduced
                          ? "none"
                          : `windowPulse ${4 + (i % 5)}s ease-in-out ${(i % 10) * 0.6}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Architectural Side Fin */}
              <div
                className="absolute top-0 right-[-40px] w-[40px] h-[90%] origin-left"
                style={{
                  background: "linear-gradient(90deg, #111 0%, #050505 100%)",
                  borderRight: "1px solid #d4af37",
                  transform: "rotateY(90deg) translateZ(0px)",
                }}
              />

              {/* Glowing Base Shadow */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[180%] h-20 bg-[#d4af37]/5 blur-[60px] rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* DEPTH LAYER 3: FOREGROUND OVERLAY TEXT (OVER TOP FLOOR) */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` }}
        >
          {/* Flagship Label — Hollow Gold Stroke */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4"
          >
            <h3 
              className="font-body font-bold text-[12px] sm:text-[14px] md:text-[16px] tracking-[6px] uppercase"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #f2ca50",
                letterSpacing: "8px"
              }}
            >
              Flagship Project
            </h3>
          </motion.div>

          {/* Project Name — Hollow Gold Stroke (Clickable) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="pointer-events-auto"
          >
            <Link href="/#real-estate" className="group block cursor-pointer">
              <h2
                className="font-heading font-black text-[6vw] sm:text-[5vw] leading-none tracking-tight uppercase text-center transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(242,202,80,0.5)]"
                style={{ 
                  color: "transparent",
                  WebkitTextStroke: "1.5px #f2ca50",
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))"
                }}
              >
                SHIV SHAKTI <br /> TOWERS
              </h2>
              <div className="w-0 h-[1px] bg-[#f2ca50] mx-auto mt-2 transition-all duration-500 group-hover:w-full opacity-50" />
            </Link>
          </motion.div>
        </div>

        {/* DEPTH LAYER 4: HUGE BASE OVERLAY */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-10"
          style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
        >
          <h2 className="font-heading font-black text-[25vw] leading-none tracking-tighter uppercase text-white/5">
            TOWERS
          </h2>
        </div>

        {/* FLOATING STATS: DISPERSED ARCHITECTURAL DATA */}
        <div className="absolute inset-0 z-40 pointer-events-none hidden lg:block">
          {/* Top Right Stat */}
          <motion.div 
            className="absolute top-[25%] right-[15%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="font-heading text-[56px] font-black text-white/80 leading-none">30</p>
            <p className="font-body text-[10px] tracking-[4px] text-[#d4af37] uppercase">Floors</p>
          </motion.div>

          {/* Bottom Left Stat */}
          <motion.div 
            className="absolute bottom-[25%] left-[15%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p className="font-heading text-[56px] font-black text-white/80 leading-none">2026</p>
            <p className="font-body text-[10px] tracking-[4px] text-[#d4af37] uppercase">Arrival</p>
          </motion.div>
        </div>

        {/* Mobile Info (Simple Fallback) */}
        <div className="absolute bottom-12 w-full px-6 flex justify-between lg:hidden z-40">
           <div className="text-center">
             <p className="font-heading font-black text-[32px] text-white">30</p>
             <p className="font-body text-[8px] tracking-[2px] text-[#d4af37]">FLOORS</p>
           </div>
           <div className="text-center">
             <p className="font-heading font-black text-[32px] text-white">2026</p>
             <p className="font-body text-[8px] tracking-[2px] text-[#d4af37]">ARRIVAL</p>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes towerBreathe {
          0%, 100% { transform: rotateY(-8deg) translateY(0) scale(1); }
          50% { transform: rotateY(8deg) translateY(-20px) scale(1.02); }
        }
        @keyframes windowPulse {
          0% { opacity: 0.3; filter: brightness(1); }
          100% { opacity: 1; filter: brightness(2) drop-shadow(0 0 10px #f2ca50); }
        }
      `}</style>
    </section>
  );
}
