import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'dolanfoods.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'media.gettyimages.com',
      // },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
};

export default nextConfig;
