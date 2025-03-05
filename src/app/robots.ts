import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/_vercel/"], // Prevent indexing of internal paths
      },
    ],
    sitemap: "https://aurimarlopes.com/sitemap.xml", // Change to your actual domain
  }
}
