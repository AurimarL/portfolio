import { MetadataRoute } from "next"
import { versions } from "@/config/versions"
import { i18n } from "@/i18n.config"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://aurimarlopes.com" 
    
    let urls: MetadataRoute.Sitemap = []

    versions.forEach(({ version }) => {
        i18n.locales.forEach((locale) => {
            urls.push({
                url: `${baseUrl}/${version}/${locale}`,
                lastModified: new Date().toISOString(),
            })
        })
    })

    return urls
}
