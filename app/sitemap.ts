import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: "https://wilsonwislinlaw.com",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},
{
url: "https://wilsonwislinlaw.com/services",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: "https://wilsonwislinlaw.com/pricing",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},
{
url: "https://wilsonwislinlaw.com/faq",
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.6,
},
{
url: "https://wilsonwislinlaw.com/contact",
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.6,
},
];
}
