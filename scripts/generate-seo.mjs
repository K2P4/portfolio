import fs from 'node:fs';
import path from 'node:path';

function normalizeSiteUrl(raw) {
  if (!raw) return null;
  const trimmed = String(raw).trim();
  if (!trimmed) return null;

  const withProtocol = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withProtocol);
    url.hash = '';
    url.search = '';
    return url.toString().replace(/\/$/, '');
  } catch {
    return null;
  }
}

const siteUrl =
  normalizeSiteUrl(process.env.SITE_URL) ||
  normalizeSiteUrl(process.env.VITE_SITE_URL) ||
  normalizeSiteUrl(process.env.VERCEL_URL) ||
  normalizeSiteUrl(process.env.URL) ||
  normalizeSiteUrl(process.env.DEPLOY_PRIME_URL) ||
  'https://thura.newway-solution.com';

const lastmod = new Date().toISOString().slice(0, 10);
const publicDir = path.resolve(process.cwd(), 'public');

const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`[seo] Generated robots.txt + sitemap.xml for ${siteUrl}`);
