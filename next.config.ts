import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages — site is served at /rahul-harshu-wedding/
  basePath: isProd ? "/rahul-harshu-wedding" : "",
  assetPrefix: isProd ? "/rahul-harshu-wedding/" : "",
};

export default nextConfig;
