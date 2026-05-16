"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "SERVICES", href: "/#services", sectionId: "services" },
  { label: "REAL ESTATE", href: "/#real-estate", sectionId: "real-estate" },
  { label: "LOCATION", href: "/location", sectionId: "nearby" },
  { label: "ABOUT", href: "/#about", sectionId: "about" },
  { label: "CONTACT", href: "/contact", sectionId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Scroll-spy: track which section is currently in view (home page only)
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = navLinks
      .filter((l) => l.sectionId)
      .map((l) => l.sectionId);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  // Track scroll for navbar background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isLinkActive = (link: (typeof navLinks)[number]) => {
    // On sub-pages, check pathname
    if (!isHome && link.href.startsWith("/") && !link.href.startsWith("/#")) {
      return pathname === link.href || pathname.startsWith(link.href + "/");
    }
    // On home, check scroll-spy
    if (isHome && link.sectionId) {
      return activeSection === link.sectionId;
    }
    return false;
  };

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(19,19,19,0.95)"
            : "rgba(19,19,19,0.9)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(212,175,55,0.3)",
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-bold text-[18px] sm:text-[20px] md:text-[24px] tracking-[-1.2px] text-[#d4af37] leading-[32px]"
            aria-label="Shiv Shakti Construction — Home"
          >
            SHIV SHAKTI
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-heading font-normal text-[12px] tracking-[1.8px] uppercase leading-[16px] transition-colors duration-300 hover:text-[#f2ca50] ml-10 first:ml-0 ${
                    active
                      ? "text-[#f2ca50] border-b border-[#d4af37] pb-[5px]"
                      : "text-[#d0c5af]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:flex bg-[#d4af37] px-6 xl:px-8 py-3 items-center justify-center hover:bg-[#f2ca50] transition-colors duration-300"
          >
            <span className="font-body font-bold text-[11px] xl:text-[12px] tracking-[1.2px] text-[#3c2f00] whitespace-nowrap">
              START YOUR BUILD
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-2 -mr-2"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[2px] bg-[#d4af37]"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-[#d4af37]"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[2px] bg-[#d4af37]"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[60px] bg-black/50 z-40 lg:hidden"
                onClick={closeMobile}
                aria-hidden="true"
              />
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-[rgba(212,175,55,0.2)] relative z-50"
                style={{ backgroundColor: "rgba(19,19,19,0.98)" }}
              >
                <div className="flex flex-col px-6 py-6 gap-5">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={closeMobile}
                        className={`font-heading text-[14px] tracking-[1.8px] uppercase transition-colors py-1 ${
                          active
                            ? "text-[#f2ca50]"
                            : "text-[#d0c5af] hover:text-[#f2ca50]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  {/* Sub-page links in mobile */}
                  <div className="border-t border-[rgba(212,175,55,0.15)] pt-4 mt-1 flex flex-col gap-3">
                    <Link
                      href="/flats/2bhk"
                      onClick={closeMobile}
                      className="font-body text-[12px] tracking-[1px] uppercase text-[#99907c] hover:text-[#f2ca50] transition-colors"
                    >
                      → 2BHK Flats
                    </Link>
                    <Link
                      href="/flats/3bhk"
                      onClick={closeMobile}
                      className="font-body text-[12px] tracking-[1px] uppercase text-[#99907c] hover:text-[#f2ca50] transition-colors"
                    >
                      → 3BHK Flats
                    </Link>
                  </div>

                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="bg-[#d4af37] px-6 py-3 text-center font-body font-bold text-[12px] tracking-[1.2px] text-[#3c2f00] mt-2 active:bg-[#f2ca50]"
                  >
                    START YOUR BUILD
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
