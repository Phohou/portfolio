import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio', // Replace 'portfolio' with your GitHub repo name
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
