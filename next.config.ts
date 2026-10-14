import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
};

module.exports = {
  allowedDevOrigins: ['10.188.35.176'],
}

export default nextConfig;
