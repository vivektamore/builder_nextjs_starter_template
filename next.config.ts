import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        pathname: '/api/v1/image/**',
      },
    ],
  },
  allowedDevOrigins: [
    '5efa59e44c0e48a1833e860b86424444-ec5a995f710b4de08f649dc9e.projects.builder.codes',
    '5efa59e44c0e48a1833e860b86424444-ec5a995f710b4de08f649dc9e.fly.dev'
  ]
};

export default nextConfig;
