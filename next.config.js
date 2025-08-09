/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  trailingSlash: true,
  // Force fresh build - disable cache
  distDir: '.next',
  turbopack: {
    // Turbopack configuration for development
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  // Headers are not supported with static export
  // headers: async () => { ... },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  },
};

module.exports = nextConfig;