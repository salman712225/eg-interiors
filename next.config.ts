import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 430, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
