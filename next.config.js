/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
        pathname: '/**',
      },
    ],
    // Image formats for optimization
    formats: ['image/avif', 'image/webp'],
    // Enable image optimization
    unoptimized: false,
    // SVG support with security
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  // Enable static optimization
  output: 'standalone',
  // Compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
