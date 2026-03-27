import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for Vercel edge compatibility
  poweredByHeader: false,
  // Compress responses
  compress: true,
};

export default nextConfig;
