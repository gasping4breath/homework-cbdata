import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/planets',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
