export interface NearbyPlace {
  name: string;
  category: "Education" | "Healthcare" | "Shopping" | "Transportation" | "Lifestyle" | "Landmarks";
  distanceText: string;
  travelTimeText: string;
}

export const nearbyPlaces: NearbyPlace[] = [
  // Education
  {
    name: "Delhi Public School (DPS), Dhaligaon",
    category: "Education",
    distanceText: "5.5 km",
    travelTimeText: "10 min drive",
  },
  {
    name: "Little Flower School (LFS)",
    category: "Education",
    distanceText: "0.6 km",
    travelTimeText: "2 min walk",
  },
  {
    name: "Menon IAS Academy",
    category: "Education",
    distanceText: "2.8 km",
    travelTimeText: "7 min drive",
  },
  {
    name: "Bongaigaon College",
    category: "Education",
    distanceText: "1.2 km",
    travelTimeText: "4 min drive",
  },
  {
    name: "Kendriya Vidyalaya",
    category: "Education",
    distanceText: "2.5 km",
    travelTimeText: "8 min drive",
  },
  {
    name: "Birjhora Mahavidyalaya",
    category: "Education",
    distanceText: "3.8 km",
    travelTimeText: "12 min drive",
  },

  // Healthcare
  {
    name: "Lower Assam Hospital",
    category: "Healthcare",
    distanceText: "1.8 km",
    travelTimeText: "6 min drive",
  },
  {
    name: "Agarwala Hospital",
    category: "Healthcare",
    distanceText: "1.2 km",
    travelTimeText: "4 min drive",
  },
  {
    name: "Swagat Hospital",
    category: "Healthcare",
    distanceText: "1.5 km",
    travelTimeText: "5 min drive",
  },
  {
    name: "Aastha Hospital",
    category: "Healthcare",
    distanceText: "4.2 km",
    travelTimeText: "9 min drive",
  },
  {
    name: "Bongaigaon Civil Hospital",
    category: "Healthcare",
    distanceText: "3.0 km",
    travelTimeText: "10 min drive",
  },

  // Shopping
  {
    name: "Smart Bazaar",
    category: "Shopping",
    distanceText: "0.5 km",
    travelTimeText: "2 min walk",
  },
  {
    name: "Vishal Mega Mart",
    category: "Shopping",
    distanceText: "1.5 km",
    travelTimeText: "5 min drive",
  },
  {
    name: "Universal Mall",
    category: "Shopping",
    distanceText: "1.2 km",
    travelTimeText: "4 min drive",
  },
  {
    name: "City Centre Market",
    category: "Shopping",
    distanceText: "0.8 km",
    travelTimeText: "3 min drive",
  },
  {
    name: "Chapaguri Bazaar",
    category: "Shopping",
    distanceText: "0.5 km",
    travelTimeText: "2 min walk",
  },

  // Transportation
  {
    name: "Lower Assam Bus Stand",
    category: "Transportation",
    distanceText: "2.2 km",
    travelTimeText: "6 min drive",
  },
  {
    name: "Chapaguri Highway (NH-27)",
    category: "Transportation",
    distanceText: "0.3 km",
    travelTimeText: "1 min drive",
  },
  {
    name: "Bongaigaon Railway Station",
    category: "Transportation",
    distanceText: "2.0 km",
    travelTimeText: "7 min drive",
  },
  {
    name: "New Bongaigaon Railway Station",
    category: "Transportation",
    distanceText: "4.5 km",
    travelTimeText: "12 min drive",
  },

  // Lifestyle
  {
    name: "Jolly Max",
    category: "Lifestyle",
    distanceText: "2.0 km",
    travelTimeText: "6 min drive",
  },
  {
    name: "Universal Cinema",
    category: "Lifestyle",
    distanceText: "1.2 km",
    travelTimeText: "4 min drive",
  },
  {
    name: "Cygnett Hotel",
    category: "Lifestyle",
    distanceText: "0.8 km",
    travelTimeText: "3 min drive",
  },
  {
    name: "Lemon Tree Hotel",
    category: "Lifestyle",
    distanceText: "1.5 km",
    travelTimeText: "5 min drive",
  },
  {
    name: "Open Pantry",
    category: "Lifestyle",
    distanceText: "0.4 km",
    travelTimeText: "2 min walk",
  },

  // Landmarks
  {
    name: "Bageshwari Temple",
    category: "Landmarks",
    distanceText: "3.2 km",
    travelTimeText: "10 min drive",
  },
  {
    name: "Astha Resort",
    category: "Landmarks",
    distanceText: "0.7 km",
    travelTimeText: "3 min drive",
  },
  {
    name: "Manas National Park",
    category: "Landmarks",
    distanceText: "45 km",
    travelTimeText: "1.5 hr drive",
  },
  {
    name: "Raimona National Park",
    category: "Landmarks",
    distanceText: "75 km",
    travelTimeText: "2 hr drive",
  },
  {
    name: "Saralpara Picnic Spot",
    category: "Landmarks",
    distanceText: "65 km",
    travelTimeText: "1.5 hr drive",
  },
  {
    name: "Danteshwari Temple",
    category: "Landmarks",
    distanceText: "1.5 km",
    travelTimeText: "5 min drive",
  },
];

export const placeCategories = [
  { key: "Education", label: "Education" },
  { key: "Healthcare", label: "Healthcare" },
  { key: "Shopping", label: "Shopping" },
  { key: "Transportation", label: "Transport" },
  { key: "Lifestyle", label: "Lifestyle" },
  { key: "Landmarks", label: "Landmarks" },
] as const;
