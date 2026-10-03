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
    title: "Quality Construction & Engineering",
    description:
      "Earthquake-resistant RCC design, deep foundations, and certified high-grade steel for rock-solid safety and longevity.",
    cta: "OUR QUALITY",
    href: "/project",
  },
  {
    icon: "/images/icon-material.svg",
    title: "Premium Materials & Finishes",
    description:
      "Handpicked vitrified tiles, branded electrical and sanitary fittings, premium fixtures, and top-grade paints for a luxurious feel.",
    cta: "SPECIFICATIONS",
    href: "/project",
  },
  {
    icon: "/images/icon-urban.svg",
    title: "Real Estate Development",
    description:
      "Thoughtfully planned residential and commercial spaces in prime North Bongaigaon with modern amenities and clear title deeds.",
    cta: "EXPLORE PROJECT",
    href: "/project",
  },
];
