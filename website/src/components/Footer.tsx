import Link from "next/link";

const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "2BHK Flats", href: "/flats/2bhk" },
  { label: "3BHK Flats", href: "/flats/3bhk" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "PRIVACY", href: "#" },
  { label: "TERMS", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0e0e0e",
        borderTop: "1px solid rgba(77,70,53,0.3)",
      }}
      className="py-8 sm:py-16 md:py-20 lg:py-24"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Top Row — Multi-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-12 mb-8 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-heading font-bold text-[18px] sm:text-[20px] text-[#d4af37] leading-[28px] mb-2 block"
            >
              SHIV SHAKTI
            </Link>
            <p className="font-body text-[12px] sm:text-[13px] text-[#99907c] leading-[20px] max-w-[280px]">
              Crafting the skyline with precision and elegance. Premium
              residential and commercial development in Bongaigaon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-bold text-[11px] tracking-[1.2px] uppercase text-[#f2ca50] mb-2 sm:mb-5">
              Quick Links
            </p>
            <nav
              className="flex flex-col gap-1.5 sm:gap-3"
              aria-label="Footer quick links"
            >
              {sitemapLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-[12px] sm:text-[13px] text-[#99907c] hover:text-[#d4af37] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-body font-bold text-[11px] tracking-[1.2px] uppercase text-[#f2ca50] mb-2 sm:mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-1.5 sm:gap-3">
              <a
                href="tel:+919678634115"
                className="font-body text-[12px] sm:text-[13px] text-[#99907c] hover:text-[#d4af37] transition-colors"
              >
                +91 96786 34115
              </a>
              <a
                href="mailto:info@shivshakti.com"
                className="font-body text-[12px] sm:text-[13px] text-[#99907c] hover:text-[#d4af37] transition-colors"
              >
                info@shivshakti.com
              </a>
              <p className="font-body text-[12px] sm:text-[13px] text-[#99907c]">
                Chapaguri, Bongaigaon, Assam
              </p>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <p className="font-body font-bold text-[11px] tracking-[1.2px] uppercase text-[#f2ca50] mb-3 sm:mb-5">
              Connect
            </p>
            <div className="flex flex-row flex-wrap gap-2.5 sm:flex-col sm:gap-4">
              <a
                href="https://www.instagram.com/shiv.shakti.constructions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] px-3 py-2 sm:px-5 sm:py-2.5 transition-all duration-500 group w-fit"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#99907c] group-hover:text-[#d4af37] transition-colors duration-300"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span className="font-body font-bold text-[10px] sm:text-[12px] tracking-[1.2px] uppercase text-[#99907c] group-hover:text-[#f2ca50] transition-colors duration-300">
                  Instagram
                </span>
              </a>
              <a
                href="https://wa.me/919678634115?text=Hello%2C%20I%27m%20interested%20in%20Shiv%20Shakti%20Towers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[rgba(77,70,53,0.3)] hover:border-[#d4af37] px-3 py-2 sm:px-5 sm:py-2.5 transition-all duration-500 group w-fit"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#99907c] group-hover:text-[#d4af37] transition-colors duration-300"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-body font-bold text-[10px] sm:text-[12px] tracking-[1.2px] uppercase text-[#99907c] group-hover:text-[#f2ca50] transition-colors duration-300">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row — Copyright */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 sm:pt-10"
          style={{ borderTop: "1px solid rgba(77,70,53,0.2)" }}
        >
          <p className="font-body font-normal text-[9px] sm:text-[10px] tracking-[1px] uppercase text-[#99907c] leading-[15px]">
            © 2026 SHIV SHAKTI CONSTRUCTION. ALL RIGHTS RESERVED.
          </p>
          <nav
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            aria-label="Legal"
          >
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body font-normal text-[10px] tracking-[1px] uppercase text-[#99907c] leading-[15px] hover:text-[#d4af37] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
