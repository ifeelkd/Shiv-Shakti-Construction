export interface NearbyPlace {
  name: string;
  category: "Education" | "Healthcare" | "Shopping" | "Transportation" | "Lifestyle" | "Landmarks";
  distanceText: string;
  travelTimeText: string;
}

export const nearbyPlaces: NearbyPlace[] = [
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
    name: "Lower Assam Hospital",
    category: "Healthcare",
    distanceText: "1.8 km",
    travelTimeText: "6 min drive",
  },
  {
    name: "Bongaigaon Civil Hospital",
    category: "Healthcare",
    distanceText: "3.0 km",
    travelTimeText: "10 min drive",
  },
  {
    name: "City Centre Market",
    category: "Shopping",
    distanceText: "0.8 km",
    travelTimeText: "3 min drive",
  },
  {
    name: "New Bongaigaon Railway Station",
    category: "Transportation",
    distanceText: "4.5 km",
    travelTimeText: "12 min drive",
  },
  {
    name: "Bongaigaon Railway Station",
    category: "Transportation",
    distanceText: "2.0 km",
    travelTimeText: "7 min drive",
  },
  {
    name: "Bagheswari Temple",
    category: "Landmarks",
    distanceText: "3.2 km",
    travelTimeText: "10 min drive",
  },
  {
    name: "Manas National Park",
    category: "Lifestyle",
    distanceText: "45 km",
    travelTimeText: "1 hr drive",
  },
  {
    name: "Danteshwari Temple",
    category: "Landmarks",
    distanceText: "1.5 km",
    travelTimeText: "5 min drive",
  },
  {
    name: "Chapaguri Bazaar",
    category: "Shopping",
    distanceText: "0.5 km",
    travelTimeText: "2 min walk",
  },
  {
    name: "Birjhora Mahavidyalaya",
    category: "Education",
    distanceText: "3.8 km",
    travelTimeText: "12 min drive",
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
