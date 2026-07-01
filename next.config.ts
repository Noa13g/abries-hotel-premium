import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/abries-hotel-premium" : undefined,
  assetPrefix: isGitHubPages ? "/abries-hotel-premium/" : undefined,
};

export default nextConfig;
