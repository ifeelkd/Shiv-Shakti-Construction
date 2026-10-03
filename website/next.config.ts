import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
  },
  async redirects() {
    return [
      { source: "/flats/2bhk", destination: "/project/2bhk", permanent: true },
      { source: "/flats/3bhk", destination: "/project/3bhk", permanent: true },
    ];
  },
};

export default nextConfig;

