export interface Amenity {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "rooftop" | "lifestyle" | "essential" | "security";
  isFeatured?: boolean;
  image: string;
  badge?: string;
  iconName: string;
}

export const amenitiesData = {
  sectionLabel: "04 — Amenities",
  mainHeadline: "MORE THAN A HOME. A BETTER WAY TO LIVE.",
  subHeadline: "World-Class Amenities. Everyday Luxury.",
  overview:
    "Designed around the way modern families live, Shiv Shakti Towers brings comfort, convenience, security and recreation together—so everything you need is right where you live.",
  closingQuote:
    "With rooftop recreation, fitness, celebrations, landscaped spaces and everyday essentials, Shiv Shakti Towers is crafted to make every day feel a little more complete.",

  rooftopExperience: [
    {
      id: "rooftop-open-gym",
      name: "ROOFTOP OPEN GYM",
      tagline: "Work out, breathe in, and rise above the routine.",
      description: "An invigorating open-air fitness centre with modern workout equipment and calisthenics rigs surrounded by fresh breeze and 360° elevated skyline views.",
      category: "rooftop" as const,
      isFeatured: true,
      image: "/images/amenities/open-gym.jpg",
      badge: "Sky Fitness",
      iconName: "Fitness",
    },
    {
      id: "rooftop-turf",
      name: "ROOFTOP SPORTS TURF",
      tagline: "Elevate your game under the open sky.",
      description: "All-weather multi-sport synthetic turf with protective safety netting for cricket, football, and active outdoor family recreation above the city.",
      category: "rooftop" as const,
      isFeatured: true,
      image: "/images/amenities/rooftop-turf.jpg",
      badge: "Sky Sports",
      iconName: "Turf",
    },
    {
      id: "rooftop-kids",
      name: "ROOFTOP KIDS’ PLAY AREA",
      tagline: "Where little adventures happen above the ordinary.",
      description: "A safe, vibrant open-air space where little ones can play, laugh and grow with panoramic open-sky vistas.",
      category: "rooftop" as const,
      isFeatured: true,
      image: "/images/amenities/kids-play.jpg",
      badge: "Sky Recreation",
      iconName: "PlayArea",
    },
    {
      id: "rooftop-community",
      name: "ROOFTOP COMMUNITY HALL",
      tagline: "Your rooftop space for celebrations, gatherings and unforgettable moments.",
      description: "Celebrate milestones, festivals, birthdays and family moments under one majestic rooftop with banquet setups.",
      category: "rooftop" as const,
      isFeatured: true,
      image: "/images/amenities/community-hall.jpg",
      badge: "Sky Celebrations",
      iconName: "Community",
    },
  ],

  allAmenities: [
    {
      id: "entrance-lobby",
      name: "Grand Entrance Lobby",
      tagline: "A stylish first impression, every single day.",
      description: "Double-height luxury reception lounge crafted with Italian marble and ambient designer lighting.",
      category: "lifestyle" as const,
      image: "/images/amenities/entrance-lobby.jpg",
      iconName: "Lobby",
    },
    {
      id: "rooftop-garden",
      name: "Rooftop Garden & Lounge",
      tagline: "Breathe easy, unwind and enjoy open-air views.",
      description: "Landscaped lush greenery, seating deck and walking paths overlooking the Bongaigaon horizon.",
      category: "lifestyle" as const,
      image: "/images/amenities/rooftop-garden.jpg",
      iconName: "Garden",
    },
    {
      id: "car-parking",
      name: "Ample Car Parking",
      tagline: "Spacious, secure parking for effortless arrivals.",
      description: "Dedicated, well-planned covered parking bays with designated vehicular entry and exit ramps.",
      category: "essential" as const,
      image: "/images/amenities/car-parking.jpg",
      iconName: "Parking",
    },
    {
      id: "high-speed-lifts",
      name: "High-Speed Lifts",
      tagline: "Smooth, swift access across every floor.",
      description: "Branded automatic elevators with ARD (Automatic Rescue Device) and standby power backup.",
      category: "essential" as const,
      image: "/images/amenities/high-speed-lifts.jpg",
      iconName: "Elevator",
    },
    {
      id: "power-backup",
      name: "24×7 Power Backup",
      tagline: "Uninterrupted comfort, day and night.",
      description: "Heavy-duty silent generator setup ensuring non-stop power for lifts, water pumps, common areas and flats.",
      category: "essential" as const,
      image: "/images/amenities/power-backup.jpg",
      iconName: "Power",
    },
    {
      id: "water-supply",
      name: "24×7 Water Supply",
      tagline: "Reliable water for a hassle-free lifestyle.",
      description: "Dual deep-borewell system with overhead storage tanks and automatic filtration for clean water round the clock.",
      category: "essential" as const,
      image: "/images/amenities/water-supply.jpg",
      iconName: "Water",
    },
    {
      id: "cctv-surveillance",
      name: "24×7 CCTV Surveillance",
      tagline: "Added security, constant peace of mind.",
      description: "Comprehensive multi-tier digital security coverage across entry points, lobbies, corridors and parking.",
      category: "security" as const,
      image: "/images/amenities/cctv-surveillance.jpg",
      iconName: "Security",
    },
    {
      id: "fire-safety",
      name: "Fire Safety System",
      tagline: "Advanced protection for what matters most.",
      description: "Full compliance with National Building Code fire guidelines including hydrants, smoke detectors and fire exits.",
      category: "security" as const,
      image: "/images/amenities/fire-safety.jpg",
      iconName: "FireSafety",
    },
    {
      id: "waste-management",
      name: "Waste Management",
      tagline: "Cleaner surroundings for a greener tomorrow.",
      description: "Eco-friendly segregated collection chutes and hygienic disposal systems for a fresh and clean community.",
      category: "essential" as const,
      image: "/images/amenities/waste-management-bins.jpg",
      iconName: "Waste",
    },
  ],
};
