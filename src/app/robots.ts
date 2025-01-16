import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/private/'],
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				crawlDelay: 2,
			},
		],
		sitemap: 'https://ceciliahome.design/sitemap.xml',
		host: 'https://ceciliahome.design',
	};
}
