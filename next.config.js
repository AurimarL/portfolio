/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheStartUrl: false,
  workboxOptions: { disableDevLogs: true },
  disable: !process.env.NODE_ENV === "production",
});

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random.imagecdn.app",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
});

module.exports = nextConfig;
