import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [];
  },

  trailingSlash: false,
};

export default nextConfig; 