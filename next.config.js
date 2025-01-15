/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Robots-Tag',
						value: 'index, follow',
					},
					{
						key: 'Cache-Control',
						value: 'no-store, no-cache, must-revalidate',
					},
				],
			},
			{
				source: '/favicon.ico',
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-cache, no-store, must-revalidate',
					},
				],
			},
		];
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	experimental: {
		optimizeCss: true,
	},
};

module.exports = nextConfig;
