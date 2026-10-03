"use client";

import React from "react";

export default function StickyMobileBar() {
  const phoneNumber = "+91 96786 34115";
  const telHref = "tel:+919678634115";
  const whatsappHref =
    "https://wa.me/919678634115?text=Hello%2C%20I%27m%20interested%20in%20Shiv%20Shakti%20Towers";

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#131313]/95 backdrop-blur-md border-t border-[#d4af37]/30 shadow-[0_-10px_30px_rgba(0,0,0,0.85)] p-2.5 pb-[calc(10px+env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-2 max-w-[500px] mx-auto">
        <a
          href={telHref}
          className="flex items-center justify-center gap-2 bg-[#1c1912] hover:bg-[#252014] border border-[#d4af37]/60 text-[#f2ca50] py-3 px-3 rounded-none font-body font-bold text-[12px] tracking-[1.2px] uppercase transition-colors min-h-[46px]"
          aria-label={`Call us at ${phoneNumber}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call Us</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#ffdf7d] text-[#1c1400] py-3 px-3 rounded-none font-body font-bold text-[12px] tracking-[1.2px] uppercase transition-colors min-h-[46px]"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
