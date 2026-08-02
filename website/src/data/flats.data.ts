export interface FlatVariant {
  name: string; // e.g. "Flat B"
  builtUpArea: string;
  carpetArea: string;
  superBuiltUpArea: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  map3d?: string;
}

export interface RoomDimension {
  room: string;
  dimension: string;
  icon: "bedroom" | "living" | "kitchen" | "dining" | "bathroom" | "balcony" | "wash" | "store" | "foyer";
}

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
  /** Per-flat variants with accurate areas from architectural plans */
  variants: FlatVariant[];
  /** Representative room dimensions (from largest variant) */
  roomDimensions: RoomDimension[];
  /** Interior highlights visible in 3D renders */
  interiorHighlights: string[];
  /** Construction quality / technical specs */
  constructionSpecs: { label: string; detail: string }[];
  /** 2D architectural floor plan maps */
  map2d?: string[];
}

export const flatTypes: FlatType[] = [
  {
    slug: "3bhk",
    title: "3 BHK",
    subtitle: "Premium Residential",
    image: "/images/card-3bhk.png",
    configuration: "3 Bed · 3 Bath · 2 Balcony",
    area: "1,629 – 1,999 sq.ft.",
    specifications: [
      { label: "Super Built-up Area", value: "1,629 – 1,999 sq.ft." },
      { label: "Built-up Area", value: "1,357 – 1,665 sq.ft." },
      { label: "Carpet Area", value: "1,105 – 1,333 sq.ft." },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Balconies", value: "2 (incl. Personal Balcony)" },
      { label: "Living + Dining", value: "Spacious Open Plan" },
      { label: "Kitchen", value: "Modular with Utility" },
      { label: "Variants Available", value: "4 (Flat A, E, F, G)" },
      { label: "Total Slab Area per Floor", value: "11,005 sq.ft." },
      { label: "Status", value: "Under Construction" },
    ],
    amenities: [
      "Italian Marble Flooring",
      "Modular Kitchen",
      "Built-in Wardrobes",
      "24/7 Water Supply",
      "Power Backup",
      "CCTV Security",
      "Covered Parking",
      "Landscaped Garden",
      "Children's Play Area",
      "Personal Balcony",
      "Wash Area / Utility",
      "Lift Access",
    ],
    ctaLabel: "ENQUIRE ABOUT 3BHK",
    map2d: ["/images/maps/2d_map_page_1.jpg", "/images/maps/2d_map_page_2.jpg"],
    variants: [
      {
        name: "Flat A",
        builtUpArea: "1,483.35 sq.ft",
        carpetArea: "1,105.05 sq.ft",
        superBuiltUpArea: "1,780 sq.ft",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        map3d: "/images/maps/3d_map_page_1.jpg",
      },
      {
        name: "Flat E",
        builtUpArea: "1,357.73 sq.ft",
        carpetArea: "1,230.58 sq.ft",
        superBuiltUpArea: "1,629 sq.ft",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        map3d: "/images/maps/3d_map_page_5.jpg",
      },
      {
        name: "Flat F",
        builtUpArea: "1,665.65 sq.ft",
        carpetArea: "1,306.32 sq.ft",
        superBuiltUpArea: "1,999 sq.ft",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        map3d: "/images/maps/3d_map_page_6.jpg",
      },
      {
        name: "Flat G",
        builtUpArea: "1,599.29 sq.ft",
        carpetArea: "1,333.01 sq.ft",
        superBuiltUpArea: "1,895 sq.ft",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        map3d: "/images/maps/3d_map_page_7.jpg",
      },
    ],
    roomDimensions: [
      { room: "Living / Dining Room", dimension: "17'-2\" × 22'-9\"", icon: "living" },
      { room: "Master Bedroom", dimension: "16'-9\" × 13'-4\"", icon: "bedroom" },
      { room: "Bedroom 2", dimension: "13'-2\" × 12'-0\"", icon: "bedroom" },
      { room: "Bedroom 3", dimension: "11'-7\" × 12'-6\"", icon: "bedroom" },
      { room: "Kitchen", dimension: "11'-6\" × 10'-4\"", icon: "kitchen" },
      { room: "Master Toilet", dimension: "8'-0\" × 4'-0\"", icon: "bathroom" },
      { room: "Toilet 2", dimension: "7'-0\" × 4'-0\"", icon: "bathroom" },
      { room: "Toilet 3", dimension: "7'-0\" × 4'-1\"", icon: "bathroom" },
      { room: "Personal Balcony", dimension: "4'-0\" × 8'-4\"", icon: "balcony" },
      { room: "Wash / Balcony", dimension: "16'-9\" × 4'-0\"", icon: "wash" },
      { room: "Store Room", dimension: "3'-6\" × 4'-0\"", icon: "store" },
      { room: "Foyer", dimension: "6'-0\" × 5'-7\"", icon: "foyer" },
    ],
    interiorHighlights: [
      "Premium marble-finish flooring across living and dining areas",
      "Spacious open-plan living and dining with seamless flow",
      "Full-height wardrobes with dark wood laminate finish in every bedroom",
      "Modular kitchen with integrated counter, sink, and ample cabinet space",
      "Floor-to-ceiling windows for abundant natural light",
      "Designer bathroom fittings with wall-mounted wash basins",
      "Dedicated wash area and utility balcony for convenience",
      "Private balcony accessible from the master bedroom",
      "Contemporary furniture-ready layouts with pre-planned electrical points",
      "Road-facing units with direct views from main balcony",
    ],
    constructionSpecs: [
      { label: "Structural Steel", detail: "FE-500 grade reinforcement confirming to IS 456:2000 code" },
      { label: "Foundation", detail: "Designed according to site soil condition and soil bearing capacity testing" },
      { label: "Loading Factor", detail: "20% loading factor applied to calculate super built-up area" },
      { label: "Architecture", detail: "Designed by MakeMyHouse.com — certified architects and interior designers" },
      { label: "Floor Slab", detail: "Total slab area 11,005 sq.ft per floor across all units" },
      { label: "Quality Compliance", detail: "All dimensions strictly followed per approved architectural and structural drawings" },
    ],
  },
  {
    slug: "2bhk",
    title: "2 BHK",
    subtitle: "Smart Residential",
    image: "/images/card-2bhk.png",
    configuration: "2 Bed · 2 Bath · 1 Balcony",
    area: "1,258 – 1,592 sq.ft.",
    specifications: [
      { label: "Super Built-up Area", value: "1,258 – 1,592 sq.ft." },
      { label: "Built-up Area", value: "1,048 – 1,326 sq.ft." },
      { label: "Carpet Area", value: "913 – 1,333 sq.ft." },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Balconies", value: "1" },
      { label: "Living + Dining", value: "Combined Open Layout" },
      { label: "Kitchen", value: "Modular / Semi-Modular" },
      { label: "Variants Available", value: "3 (Flat B, C, D)" },
      { label: "Total Slab Area per Floor", value: "11,005 sq.ft." },
      { label: "Status", value: "Under Construction" },
    ],
    amenities: [
      "Vitrified Tile Flooring",
      "Modular / Semi-Modular Kitchen",
      "Built-in Wardrobes",
      "24/7 Water Supply",
      "Power Backup",
      "CCTV Security",
      "Two-Wheeler Parking",
      "Community Hall",
      "Jogging Track",
      "Wash Area / Utility",
      "Store Room",
      "Lift Access",
    ],
    ctaLabel: "ENQUIRE ABOUT 2BHK",
    map2d: ["/images/maps/2d_map_page_1.jpg", "/images/maps/2d_map_page_2.jpg"],
    variants: [
      {
        name: "Flat B",
        builtUpArea: "1,229.12 sq.ft",
        carpetArea: "913.09 sq.ft",
        superBuiltUpArea: "1,475 sq.ft",
        bedrooms: 2,
        bathrooms: 2,
        balconies: 1,
        map3d: "/images/maps/3d_map_page_2.jpg",
      },
      {
        name: "Flat C",
        builtUpArea: "1,048.09 sq.ft",
        carpetArea: "988.07 sq.ft",
        superBuiltUpArea: "1,258 sq.ft",
        bedrooms: 2,
        bathrooms: 2,
        balconies: 1,
        map3d: "/images/maps/3d_map_page_3.jpg",
      },
      {
        name: "Flat D",
        builtUpArea: "1,326.71 sq.ft",
        carpetArea: "1,333.01 sq.ft",
        superBuiltUpArea: "1,592 sq.ft",
        bedrooms: 2,
        bathrooms: 2,
        balconies: 1,
        map3d: "/images/maps/3d_map_page_4.jpg",
      },
    ],
    roomDimensions: [
      { room: "Living Room", dimension: "14'-4\" × 15'-3\"", icon: "living" },
      { room: "Master Bedroom", dimension: "12'-10\" × 12'-6\"", icon: "bedroom" },
      { room: "Bedroom 2", dimension: "12'-10\" × 11'-0\"", icon: "bedroom" },
      { room: "Kitchen", dimension: "11'-3\" × 11'-3\"", icon: "kitchen" },
      { room: "Dining Room", dimension: "8'-4\" × 16'-9\"", icon: "dining" },
      { room: "Master Toilet", dimension: "6'-5\" × 5'-6\"", icon: "bathroom" },
      { room: "Toilet 2", dimension: "7'-0\" × 4'-1\"", icon: "bathroom" },
      { room: "Balcony", dimension: "5'-3\" × 6'-0\"", icon: "balcony" },
      { room: "Wash Area", dimension: "3'-6\" × 5'-11\"", icon: "wash" },
      { room: "Store Room", dimension: "4'-9\" × 4'-0\"", icon: "store" },
    ],
    interiorHighlights: [
      "Premium vitrified tile flooring across all rooms",
      "Open-plan living room seamlessly connected to dining area",
      "Full-height wardrobes with dark wood laminate in both bedrooms",
      "Semi-modular kitchen with counter space and sink unit",
      "Large windows providing cross-ventilation and natural light",
      "Designer bathroom fittings with modern wash basins",
      "Dedicated wash area and utility space",
      "Private balcony with railing for views",
      "Store room for additional storage convenience",
      "Furniture-ready layouts with pre-planned electrical points",
    ],
    constructionSpecs: [
      { label: "Structural Steel", detail: "FE-500 grade reinforcement confirming to IS 456:2000 code" },
      { label: "Foundation", detail: "Designed according to site soil condition and soil bearing capacity testing" },
      { label: "Loading Factor", detail: "20% loading factor applied to calculate super built-up area" },
      { label: "Architecture", detail: "Designed by MakeMyHouse.com — certified architects and interior designers" },
      { label: "Floor Slab", detail: "Total slab area 11,005 sq.ft per floor across all units" },
      { label: "Quality Compliance", detail: "All dimensions strictly followed per approved architectural and structural drawings" },
    ],
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
    variants: [],
    roomDimensions: [],
    interiorHighlights: [],
    constructionSpecs: [],
  },
];
