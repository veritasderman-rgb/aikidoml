import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/aikidoml" : "",
  assetPrefix: isGitHubPages ? "/aikidoml/" : "",
};

export default nextConfig;
