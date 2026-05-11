import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    ],
    sitemap: 'https://congtutravelcar.vn/sitemap.xml',
    host: 'https://congtutravelcar.vn',
  };
}
