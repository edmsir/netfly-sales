import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable gzip compression for faster page loads
  compress: true,

  // Remove X-Powered-By header for security and minimal header size
  poweredByHeader: false,

  // React strict mode for catching potential issues
  reactStrictMode: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true, // Optimize CSS loading
  },

  images: {
    // Prefer modern formats for better compression
    formats: ["image/avif", "image/webp"],

    // Optimized device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Extended cache TTL for better performance
    minimumCacheTTL: 86400, // 24 hours (was 60 seconds)

    // SVG support
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Quality presets optimized for web
    qualities: [50, 60, 75, 85],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;
