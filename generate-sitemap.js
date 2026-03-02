// const { SitemapStream, streamToPromise } = require('sitemap');
// const { createWriteStream } = require('fs');

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';


const staticRoutes = [
  '/',
  '/contact',
  '/about',
  '/request-info',
  '/solution',
  '/privacy',
  '/terms',
  '/what-we-do',
  '/solution/custom-solution',
  '/solution/automotive',
  '/solution/medical',
  '/solution/heavy-duty',
  '/solution/warehouse-castor',
  '/solution/furniture-castors',
];

// 🔹 If you have dynamic product slugs, add them here
const productSlugs = [
  // Example:
  // 'industrial-caster',
  // 'heavy-load-wheel'
];

const dynamicRoutes = productSlugs.map(slug => `/solution/${slug}`);

async function generateSitemap() {
  const stream = new SitemapStream({
    hostname: 'https://castersglobal.com', 
  });

  const writeStream = createWriteStream('./public/sitemap.xml');
  stream.pipe(writeStream);

  [...staticRoutes, ...dynamicRoutes].forEach(url => {
    stream.write({
      url,
      changefreq: 'weekly',
      priority: url === '/' ? 1.0 : 0.8,
    });
  });

  stream.end();
  await streamToPromise(stream);

  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();