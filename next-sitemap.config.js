/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://my-profile-9ioh.vercel.app/', // قم بتغيير هذا إلى دومين موقعك
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://my-profile-9ioh.vercel.app//sitemap.xml', // قم بتغيير هذا إلى دومين موقعك
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  generateIndexSitemap: false,
}
