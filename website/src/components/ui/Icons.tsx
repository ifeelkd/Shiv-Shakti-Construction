import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DEFAULT_COLOR = "#F2CA50";

// --- Quick Links Icons ---

export const HomeIcon = ({ size = 24, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 9.5L12 3L21 9.5V21H15V14H9V21H3V9.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TowerIcon = ({ size = 24, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 21H18M9 21V3H15V21M9 7H15M9 11H15M9 15H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MapPinIcon = ({ size = 24, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PhoneIcon = ({ size = 24, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7289C21.721 20.9838 21.5574 21.2123 21.352 21.3996C21.1466 21.587 20.9039 21.7291 20.6393 21.8166C20.3748 21.9041 20.0941 21.935 20.814 21.907C17.7506 21.758 14.8118 20.9429 12.13 19.505C9.6223 18.1728 7.48166 16.0321 6.14946 13.5244C4.70651 10.8276 3.89134 7.8703 3.75 4.786C3.74801 4.51086 3.79051 4.23725 3.87491 3.98205C3.95932 3.72684 4.08401 3.49509 4.24151 3.3005C4.39902 3.1059 4.58625 2.95232 4.79155 2.84903C4.99684 2.74574 5.21614 2.69477 5.436 2.699H8.436C8.92248 2.69446 9.39462 2.87271 9.756 3.197C10.1174 3.52129 10.3444 3.96874 10.39 4.459C10.4735 5.39413 10.6558 6.31508 10.933 7.206C11.07 7.64303 11.0792 8.11026 10.9598 8.55246C10.8403 8.99465 10.5973 9.39343 10.26 9.702L9.006 10.956C10.2307 13.1091 12.0199 14.8983 14.173 16.123L15.427 14.869C15.7356 14.5317 16.1344 14.2887 16.5765 14.1693C17.0187 14.0498 17.486 14.059 17.923 14.196C18.8139 14.4732 19.7349 14.6555 20.67 14.739C21.1654 14.7849 21.6169 15.0163 21.9424 15.3857C22.2679 15.7551 22.4447 16.2369 22.436 16.732L22 16.92Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Nearby Categories Icons ---

export const EducationIcon = ({ size = 20, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 10V15M2 10L12 5L22 10L12 15L2 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12V17C6 17 8 19 12 19C16 19 18 17 18 17V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HealthcareIcon = ({ size = 20, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 14V10M10 12H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShoppingIcon = ({ size = 20, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 6H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TransportIcon = ({ size = 20, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="3" width="16" height="16" rx="2" stroke={color} strokeWidth="1.5" />
    <path d="M4 11H20" stroke={color} strokeWidth="1.5" />
    <path d="M8 15H8.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 15H16.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 21L8 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 21L16 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LifestyleIcon = ({ size = 20, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 20C11 20 5 17 5 11C5 8.23858 7.23858 6 10 6C11.5113 6 12.8647 6.67134 13.7843 7.73467" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 4C13 4 19 7 19 13C19 15.7614 16.7614 18 14 18C12.4887 18 11.1353 17.3287 10.2157 16.2653" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12L12 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LandmarkIcon = ({ size = 20, color = DEFAULT_COLOR, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 21H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 21V10H19V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 3L5 10H19L12 3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21V14H15V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
