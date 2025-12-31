import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "storefront",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          productMfe:
            "productMfe@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },
      })
    );
    return config;
  },
};

export default nextConfig;
