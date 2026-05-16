import type { Metadata, Viewport } from "next";
import { Noto_Serif, Inter, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131313",
};

export const metadata: Metadata = {
  title: "Shiv Shakti Towers | Shiv Shakti Construction — Premium Living in Bongaigaon",
  description:
    "Discover Shiv Shakti Towers — a masterclass in vertical living by Shiv Shakti Construction. Explore 2BHK, 3BHK, and Penthouse residences in Bongaigaon, Assam.",
  openGraph: {
    title: "Shiv Shakti Towers | Shiv Shakti Construction",
    description:
      "Premium residential towers redefining the Bongaigaon skyline. 2BHK, 3BHK & Penthouse units available.",
    type: "website",
    locale: "en_IN",
    siteName: "Shiv Shakti Construction",
  },
  keywords: [
    "Shiv Shakti Towers",
    "Shiv Shakti Construction",
    "Bongaigaon",
    "2BHK",
    "3BHK",
    "Penthouse",
    "Assam Real Estate",
    "Premium Apartments",
    "Chapaguri",
    "Property Bongaigaon",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#d4af37] focus:text-[#3c2f00] focus:px-4 focus:py-2 focus:font-body focus:font-bold focus:text-[14px]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
