export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Partner {
  name: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const projectSpecs: ProjectSpec[] = [
  { label: "FLOORS", value: "30" },
  { label: "COMPLETION", value: "2026" },
  { label: "LOCATION", value: "BONGAIGAON" },
];

export const partners: Partner[] = [
  { name: "Jaquar" },
  { name: "Grasim" },
  { name: "Dalmia" },
  { name: "Ambuja" },
];

export const testimonial: Testimonial = {
  quote:
    '"The structural precision delivered by Shiv Shakti is unparalleled. They don\'t just build; they curate permanence."',
  author: "Ananya Sharma",
  role: "Lead Architect, Global Designs Ltd.",
};

export const heroStats = [
  { value: "25+", label: "Years of Heritage" },
  { value: "142", label: "Completed Assets" },
];

export const contactInfo = {
  email: "info@shivshakti.com",
  address: "Chapaguri, Bongaigaon, Assam",
  phone: "+91 98765 43210",
};
