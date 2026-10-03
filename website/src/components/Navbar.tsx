"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "PROJECTS", href: "/projects", sectionId: "" },
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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  // Scroll-spy: track which section is currently in view (home page only)
  useEffect(() => {
    if (!isHome) return;

    const checkActiveSection = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);

      // If in Hero section, clear active section
      if (currentScrollY < 250) {
        setActiveSection("");
        return;
      }

      // Check sections from bottom to top so the focused section takes priority
      const sections = ["contact", "about", "nearby"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top has entered the upper 65% of the viewport and its bottom is still visible
          if (rect.top <= window.innerHeight * 0.65 && rect.bottom >= 100) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    // If URL has #about hash on load
    if (typeof window !== "undefined" && window.location.hash === "#about") {
      setActiveSection("about");
    }

    window.addEventListener("scroll", checkActiveSection, { passive: true });
    checkActiveSection();

    return () => window.removeEventListener("scroll", checkActiveSection);
  }, [isHome]);

  // Track scroll for navbar background opacity and hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/Show on scroll
      // If we are currently navigating via a link click, don't hide the navbar
      if (isNavigating) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80 && !mobileOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen, isNavigating]);

  const handleLinkClick = useCallback(
    (href?: string) => {
      if (href === "/#about") {
        setActiveSection("about");
        if (isHome) {
          const el = document.getElementById("about");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (href && !href.startsWith("/#") && pathname !== href) {
        // Cross-page navigation: ensure viewport starts immediately at top without scroll jerk
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
      setIsNavigating(true);
      setVisible(true);
      setTimeout(() => setIsNavigating(false), 800);
    },
    [isHome, pathname]
  );

  const handleMobileLinkClick = useCallback(
    (href?: string) => {
      handleLinkClick(href);
      setMobileOpen(false);
    },
    [handleLinkClick]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isLinkActive = (link: (typeof navLinks)[number]) => {
    // PROJECTS highlights for /projects, /project, and any child like /project/2bhk
    if (link.href === "/projects" || link.href === "/project") {
      return (
        pathname === "/projects" ||
        pathname.startsWith("/projects/") ||
        pathname === "/project" ||
        pathname.startsWith("/project/")
      );
    }
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: scrolled
            ? "rgba(19,19,19,0.95)"
            : "rgba(19,19,19,0.9)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(212,175,55,0.3)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-2.5 md:py-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center gap-3"
            aria-label="Shiv Shakti Construction — Home"
          >
            <Image
              src="/SS Logo.png"
              alt="Shiv Shakti Construction Logo"
              width={72}
              height={76}
              className="w-[44px] h-[47px] md:w-[72px] md:h-[76px] object-contain"
              priority
            />
            <Image
              src="/SS Text.png"
              alt="Shiv Shakti"
              width={176}
              height={62}
              className="hidden md:block w-[120px] lg:w-[176px] h-auto object-contain translate-y-[3px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-heading font-normal text-[12px] tracking-[1.8px] uppercase leading-[16px] transition-colors duration-300 hover:text-[#f2ca50] ml-10 first:ml-0 ${active
                      ? "text-[#f2ca50] border-b border-[#d4af37] pb-[5px]"
                      : "text-[#d0c5af]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Header Quick Contact & CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="tel:+919678634115"
              className="p-2.5 text-[#d0c5af] hover:text-[#f2ca50] border border-[rgba(212,175,55,0.3)] hover:border-[#f2ca50] transition-colors"
              aria-label="Call +91 96786 34115"
              title="Call: +91 96786 34115"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919678634115?text=Hello%2C%20I%27m%20interested%20in%20Shiv%20Shakti%20Towers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#d0c5af] hover:text-[#f2ca50] border border-[rgba(212,175,55,0.3)] hover:border-[#f2ca50] transition-colors"
              aria-label="Chat on WhatsApp"
              title="WhatsApp: +91 96786 34115"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <Link
              href="/contact?type=visit"
              onClick={() => handleLinkClick("/contact")}
              className="bg-[#d4af37] px-5 xl:px-7 py-3 items-center justify-center hover:bg-[#f2ca50] transition-colors duration-300"
            >
              <span className="font-body font-bold text-[11px] xl:text-[12px] tracking-[1.2px] text-[#3c2f00] whitespace-nowrap">
                BOOK A SITE VISIT
              </span>
            </Link>
          </div>

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
                className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                onClick={closeMobile}
                aria-hidden="true"
              />
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-[rgba(212,175,55,0.2)] relative z-50 shadow-2xl"
                style={{ backgroundColor: "rgba(19,19,19,0.98)" }}
              >
                <div className="flex flex-col px-6 py-6 gap-4 max-h-[calc(85vh-60px)] overflow-y-auto hide-scrollbar">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => handleMobileLinkClick(link.href)}
                        className={`font-heading text-[15px] tracking-[1.8px] uppercase transition-colors py-2 min-h-[44px] flex items-center ${active
                            ? "text-[#f2ca50] font-bold"
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
                      href="/project"
                      onClick={() => handleMobileLinkClick("/project")}
                      className="font-body text-[13px] tracking-[1px] uppercase text-[#ffdf7d] hover:text-[#f2ca50] transition-colors py-1 flex items-center min-h-[40px] font-semibold"
                    >
                      → Shiv Shakti Towers (Flagship)
                    </Link>
                    <Link
                      href="/project/2bhk"
                      onClick={() => handleMobileLinkClick("/project/2bhk")}
                      className="font-body text-[13px] tracking-[1px] uppercase text-[#99907c] hover:text-[#f2ca50] transition-colors py-1 flex items-center min-h-[40px]"
                    >
                      → 2BHK Residences
                    </Link>
                    <Link
                      href="/project/3bhk"
                      onClick={() => handleMobileLinkClick("/project/3bhk")}
                      className="font-body text-[13px] tracking-[1px] uppercase text-[#99907c] hover:text-[#f2ca50] transition-colors py-1 flex items-center min-h-[40px]"
                    >
                      → 3BHK Flats
                    </Link>
                  </div>

                  <Link
                    href="/contact?type=visit"
                    onClick={() => handleMobileLinkClick("/contact")}
                    className="bg-[#d4af37] px-6 py-3.5 text-center font-body font-bold text-[12px] tracking-[1.2px] text-[#3c2f00] mt-2 active:bg-[#f2ca50] min-h-[44px] flex items-center justify-center"
                  >
                    BOOK A SITE VISIT
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
