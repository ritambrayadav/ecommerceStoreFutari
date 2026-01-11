import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔑 VERY IMPORTANT for monorepo UI packages
  transpilePackages: ["@repo/ui"],

  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "storefront",
        filename: "static/chunks/remoteEntry.js",

        remotes: {
          productMfe:
            "productMfe@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },

        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
