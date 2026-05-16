export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export const services: ServiceItem[] = [
  {
    icon: "/images/icon-structural.svg",
    title: "Structural Engineering",
    description:
      "Deep-foundation logistics and high-tensile steel integration for seismic-ready commercial monoliths.",
    cta: "CORE SPECS",
    href: "/#process",
  },
  {
    icon: "/images/icon-material.svg",
    title: "Material Procurement",
    description:
      "Exclusive sourcing of Grade-A Italian marble, structural glass, and sustainable carbon-neutral concrete.",
    cta: "LOGISTICS",
    href: "/#about",
  },
  {
    icon: "/images/icon-urban.svg",
    title: "Urban Development",
    description:
      "Comprehensive site master-planning and navigational design for high-density residential complexes.",
    cta: "PORTFOLIO",
    href: "/#landmarks",
  },
];
