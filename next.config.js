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
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  },
};

module.exports = nextConfig;