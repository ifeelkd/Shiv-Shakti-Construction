export interface FlatType {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  configuration: string;
  area: string;
  specifications: { label: string; value: string }[];
  amenities: string[];
  ctaLabel: string;
}

export const flatTypes: FlatType[] = [
  {
    slug: "3bhk",
    title: "3 BHK",
    subtitle: "Premium Residential",
    image: "/images/card-3bhk.png",
    configuration: "3 Bed · 3 Bath · 2 Balcony",
    area: "1,650 sq.ft.",
    specifications: [
      { label: "Super Built-up Area", value: "1,650 sq.ft." },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Balconies", value: "2" },
      { label: "Living + Dining", value: "Spacious Open Plan" },
      { label: "Kitchen", value: "Modular with Utility" },
      { label: "Status", value: "Under Construction" },
    ],
    amenities: [
      "Italian Marble Flooring",
      "Modular Kitchen",
      "24/7 Water Supply",
      "Power Backup",
      "CCTV Security",
      "Covered Parking",
      "Landscaped Garden",
      "Children's Play Area",
    ],
    ctaLabel: "ENQUIRE ABOUT 3BHK",
  },
  {
    slug: "2bhk",
    title: "2 BHK",
    subtitle: "Smart Residential",
    image: "/images/card-2bhk.png",
    configuration: "2 Bed · 2 Bath · 1 Balcony",
    area: "1,150 sq.ft.",
    specifications: [
      { label: "Super Built-up Area", value: "1,150 sq.ft." },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Balconies", value: "1" },
      { label: "Living + Dining", value: "Combined Open Layout" },
      { label: "Kitchen", value: "Semi-Modular" },
      { label: "Status", value: "Under Construction" },
    ],
    amenities: [
      "Vitrified Tile Flooring",
      "Semi-Modular Kitchen",
      "24/7 Water Supply",
      "Power Backup",
      "CCTV Security",
      "Two-Wheeler Parking",
      "Community Hall",
      "Jogging Track",
    ],
    ctaLabel: "ENQUIRE ABOUT 2BHK",
  },
  {
    slug: "penthouse",
    title: "PENTHOUSE",
    subtitle: "Ultra Premium Living",
    image: "/images/card-penthouse.png",
    configuration: "4 Bed · 4 Bath · 3 Balcony",
    area: "2,800 sq.ft.",
    specifications: [
      { label: "Super Built-up Area", value: "2,800 sq.ft." },
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "4" },
      { label: "Balconies", value: "3 (Panoramic)" },
      { label: "Living + Dining", value: "Double-Height Ceiling" },
      { label: "Kitchen", value: "Island Modular" },
      { label: "Status", value: "Limited Availability" },
    ],
    amenities: [
      "Premium Italian Marble",
      "Private Terrace Garden",
      "Smart Home Automation",
      "Dedicated Elevator Access",
      "VRV Air Conditioning",
      "Premium Fittings by Jaquar",
      "Private Parking Bay",
      "360° Hill Views",
    ],
    ctaLabel: "ENQUIRE ABOUT PENTHOUSE",
  },
];
