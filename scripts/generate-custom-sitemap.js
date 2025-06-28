const fs = require('fs');
const path = require('path');

// Define only the main cities we want in the sitemap
const mainCities = [
  'landgraaf',
  'heerlen', 
  'kerkrade',
  'maastricht',
  'sittard-geleen',
  'brunssum',
  'venlo',
  'roermond',
  'weert'
];

const services = ['installatie', 'onderhoud', 'reparatie'];

function generateSitemap() {
  const siteUrl = 'https://aircoinstallatielandgraaf.nl';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/offerte', priority: '0.9', changefreq: 'weekly' },
    { url: '/diensten', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/merken', priority: '0.7', changefreq: 'weekly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/kennisbank', priority: '0.6', changefreq: 'weekly' },
    { url: '/over-ons', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog', priority: '0.6', changefreq: 'weekly' },
    { url: '/steden', priority: '0.7', changefreq: 'weekly' }
  ];

  mainPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add service pages
  services.forEach(service => {
    sitemap += `
  <url>
    <loc>${siteUrl}/diensten/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add only main city pages
  mainCities.forEach(city => {
    sitemap += `
  <url>
    <loc>${siteUrl}/steden/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add brand pages
  const brands = ['daikin', 'lg', 'samsung', 'toshiba', 'tosot', 'mitsubishi-electric', 'mitsubishi-heavy', 'gree'];
  brands.forEach(brand => {
    sitemap += `
  <url>
    <loc>${siteUrl}/merken/${brand}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add knowledge base articles
  const kennisbankArticles = [
    'klimaatbeheersing',
    'scop-seer-waarden',
    'airco-installatie-maastricht',
    'hoe-werkt-airco',
    'soorten-airco',
    'energiebesparing',
    'onderhoud-tips',
    'voordelen-airconditioning',
    'verwarmen-met-airco',
    'koudemiddelen',
    'veelvoorkomende-problemen',
    'storingscode-gids',
    'airco-luchtfilter-onderhoud'
  ];

  kennisbankArticles.forEach(article => {
    sitemap += `
  <url>
    <loc>${siteUrl}/kennisbank/${article}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  // Add blog posts
  const blogPosts = [
    'voordelen-van-airconditioning',
    'onderhoud-tips-airco',
    'airco-energiebesparing'
  ];

  blogPosts.forEach(post => {
    sitemap += `
  <url>
    <loc>${siteUrl}/blog/${post}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap
  fs.writeFileSync(path.join(__dirname, '../public/sitemap-custom.xml'), sitemap);
  console.log('Custom sitemap generated successfully!');
}

generateSitemap();