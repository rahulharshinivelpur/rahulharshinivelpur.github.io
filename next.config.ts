import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // static HTML export
  trailingSlash: true,   // needed for GitHub Pages routing
  images: {
    unoptimized: true,   // Next.js image optimization needs a server; disable for static
  },
};

export default nextConfig;
