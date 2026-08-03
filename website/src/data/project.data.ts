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
  { label: "LOCATION", value: "North Bongaigaon" },
  { label: "COMMERCIAL", value: "G+2 Floor" },
  { label: "RESIDENTIAL", value: "3+6 Floor" },
  { label: "COMPLETION", value: "2028" },
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
  { value: "BUILT ON TRUST", label: "The Foundation of Every Project" },
  { value: "ENGINEERED FOR EXCELLENCE", label: "Quality in Every Detail" },
];

export const contactInfo = {
  email: "info@shivshakti.com",
  address: "Chapaguri, Bongaigaon, Assam",
  phone: "+91 96786 34115",
};
