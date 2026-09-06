import type { APIRoute } from 'astro';
import { site } from '../data/site';

const paths = ['/', '/booking'];

export const GET: APIRoute = () => {
  const now = new Date().toISOString().split('T')[0];
  const urls = paths
    .map(
      (p) =>
        `  <url><loc>${new URL(p, site.domain).href}</loc><lastmod>${now}</lastmod></url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
