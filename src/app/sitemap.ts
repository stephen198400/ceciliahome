import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ceciliahome.design';

	return [
		{
			url: baseUrl,
			lastModified: new Date().toISOString(),
			changeFrequency: 'daily',
			priority: 1,
		},
	];
}
