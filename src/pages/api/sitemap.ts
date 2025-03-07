import getBlogIndex from '@/lib/notion/getBlogIndex'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await getBlogIndex()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${Object.keys(posts)
        .map((slug) => {
          return `
          <url>
            <loc>https://douglaslopesdev.com.br/blog/${slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `
        })
        .join('')}
    </urlset>
  `

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  })

  res.end(sitemap)
}
