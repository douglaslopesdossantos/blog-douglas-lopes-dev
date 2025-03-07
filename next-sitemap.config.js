module.exports = {
  siteUrl: 'https://www.douglaslopesdev.com.br', // Replace with your website URL
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://douglaslopesdev.com.br/sitemap.xml'],
  },
}
