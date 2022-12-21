/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_URL || 'https://www.generationallergyfree.com/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
