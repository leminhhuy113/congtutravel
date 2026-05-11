import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://congtutravelcar.vn';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/#services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#fleet`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#pricing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#booking`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/#faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/#contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
