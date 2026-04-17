import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.jsdelivr.net" },
      { hostname: "assets.chanhdai.com" },
      { hostname: "cdn.worldvectorlogo.com" },
      { hostname: "cdn.simpleicons.org" },
    ],
  },
};

export default nextConfig;
