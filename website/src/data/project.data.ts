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

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Under Construction" | "Ready to Move" | "Upcoming" | "Completed";
  reraNumber: string;
  location: string;
  address: string;
  completionText: string;
  specs: ProjectSpec[];
  heroImage: string;
  featuredImage: string;
  isFlagship?: boolean;
}

export const currentProject: Project = {
  id: "shiv-shakti-towers",
  slug: "project",
  name: "Shiv Shakti Towers",
  tagline: "Ultra-Modern Vertical Living in North Bongaigaon",
  description:
    "A signature residential and commercial landmark at Chapaguri, North Bongaigaon. Featuring earthquake-resistant G+6 engineering, expansive 2BHK & 3BHK residences, and sky-level recreation.",
  status: "Under Construction",
  reraNumber: "RERA BO 212 of 2026-2027",
  location: "Chapaguri, North Bongaigaon, Assam",
  address: "Chapaguri, Bongaigaon, Assam",
  completionText: "By 2028",
  heroImage: "/images/Hero Building.png",
  featuredImage: "/images/Featured Building.png",
  isFlagship: true,
  specs: [
    { label: "LOCATION", value: "North Bongaigaon" },
    { label: "COMMERCIAL", value: "G+2 Floor" },
    { label: "RESIDENTIAL", value: "3+6 Floor" },
    { label: "COMPLETION", value: "2028" },
  ],
};

/** All projects collection — easily add new projects here (e.g. Phase 2, Shiv Shakti Heights, etc.) */
export const projects: Project[] = [currentProject];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug || p.id === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

// Backwards-compatible exports for existing components
export const projectSpecs: ProjectSpec[] = currentProject.specs;

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
  whatsapp: "https://wa.me/919678634115?text=Hello%2C%20I%27m%20interested%20in%20Shiv%20Shakti%20Towers",
  reraNumber: "RERA BO 212 of 2026-2027",
};
