import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://praxisia.org",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}