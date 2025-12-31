import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "productMfe",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ProductPage": "./pages/index.tsx",
        },
      })
    );

    return config;
  },
};

export default nextConfig;
