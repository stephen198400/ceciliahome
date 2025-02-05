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
			},
		],
		sitemap: 'https://www.ceciliahome.design/sitemap.xml', // ✅ 确保和 Vercel 配置一致
	};
}
