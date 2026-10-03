import React from "react";

interface ReraBadgeProps {
  size?: "sm" | "md" | "lg" | "banner" | "floating";
  className?: string;
}

export function ReraIcon({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Outer Octagon */}
      <polygon
        points="13,3 31,3 41,13 41,31 31,41 13,41 3,31 3,13"
        stroke="#f2ca50"
        strokeWidth="2.5"
        fill="rgba(212,175,55,0.12)"
      />
      {/* Inner Octagonal Border */}
      <polygon
        points="15,6 29,6 38,15 38,29 29,38 15,38 6,29 6,15"
        stroke="#d4af37"
        strokeWidth="1.2"
        opacity="0.8"
      />
      {/* Bold Checkmark */}
      <path
        d="M13 22.5L19.5 29L31 15.5"
        stroke="#f2ca50"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReraBadge({ size = "md", className = "" }: ReraBadgeProps) {
  // Small floating badge on image
  if (size === "floating") {
    return (
      <div
        className={`bg-black/90 backdrop-blur-md border border-[#d4af37] px-3.5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex items-center gap-2.5 ${className}`}
      >
        <ReraIcon size={24} />
        <div className="flex flex-col text-left">
          <span className="font-heading font-black text-[11px] sm:text-[12px] text-[#ffdf7d] tracking-[1.2px] uppercase leading-tight">
            RERA APPROVED
          </span>
          <span className="font-body font-semibold text-[10px] sm:text-[11px] text-white/95 tracking-wide leading-tight">
            RERA BO 212 of 2026-2027
          </span>
        </div>
      </div>
    );
  }

  // Full-width prominent banner filling the entire blank area above text
  if (size === "banner") {
    return (
      <div
        className={`w-full p-4 sm:p-5 bg-gradient-to-r from-[#17140e] via-[#211a0d] to-[#17140e] border border-[#d4af37] shadow-[0_4px_30px_rgba(212,175,55,0.18)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative overflow-hidden ${className}`}
      >
        <div className="flex items-center gap-3.5 sm:gap-4 z-10">
          <ReraIcon size={46} />
          <div className="flex flex-col">
            <span className="font-body text-[10px] sm:text-[11px] font-bold text-[#f2ca50] uppercase tracking-[2px]">
              GOVT. REGISTERED &amp; APPROVED
            </span>
            <span className="font-heading font-black text-[18px] sm:text-[20px] md:text-[22px] text-[#ffdf7d] tracking-[1.5px] uppercase leading-tight mt-0.5">
              RERA APPROVED
            </span>
            <span className="font-body font-bold text-[13px] sm:text-[14px] text-white tracking-wide leading-tight mt-1">
              RERA BO 212 of 2026-2027
            </span>
          </div>
        </div>

        <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-[#d4af37]/20 pt-2 sm:pt-0 z-10">
          <span className="font-body text-[10px] sm:text-[11px] font-bold text-[#f2ca50] uppercase tracking-[1.5px] px-2.5 py-1 bg-[#d4af37]/15 border border-[#d4af37]/40">
            Certified Project
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#b0a793] mt-1 font-body font-medium">
            100% Clear Land Titles
          </span>
        </div>

        {/* Ambient subtle glow background */}
        <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  if (size === "sm") {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[#17140e] border border-[#d4af37]/60 rounded-full ${className}`}>
        <ReraIcon size={18} />
        <div className="flex items-center gap-1.5 font-body text-[11px] sm:text-[12px]">
          <span className="font-bold text-[#ffdf7d] uppercase tracking-[0.5px]">RERA APPROVED:</span>
          <span className="text-[#e5e2e1] font-medium">RERA BO 212 of 2026-2027</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 sm:gap-3.5 p-2.5 sm:p-3 bg-[#14120c] border border-[#d4af37]/80 shadow-[0_4px_25px_rgba(212,175,55,0.18)] ${className}`}
    >
      <ReraIcon size={size === "lg" ? 44 : 38} />
      <div className="flex flex-col">
        <span className="font-heading font-black text-[14px] sm:text-[16px] text-[#ffdf7d] tracking-[1.5px] uppercase leading-tight">
          RERA APPROVED
        </span>
        <span className="font-body font-bold text-[12px] sm:text-[13px] text-white tracking-wide leading-tight mt-0.5">
          RERA BO 212 of 2026-2027
        </span>
      </div>
    </div>
  );
}
