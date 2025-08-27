import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG : true,
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "avatars.githubusercontent.com",
        hostname : "*"
      },
    ],
  },
};

export default nextConfig;
