/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
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
}

module.exports = nextConfig
