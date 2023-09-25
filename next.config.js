/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
  
  module.exports = nextConfig
  