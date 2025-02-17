import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.ceciliahome.design';
	const lastModified = '2024-01-21T00:00:00.000Z';

	return [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: 'daily',
			priority: 1,
		},
	];
}
