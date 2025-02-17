/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'ceciliahome.design',
					},
				],
				permanent: true,
				destination: 'https://www.ceciliahome.design/:path*',
			},
		];
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Robots-Tag',
						value:
							'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
					},
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
			{
				source: '/fonts/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/images/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
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
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
		minimumCacheTTL: 31536000,
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ['lucide-react'],
		scrollRestoration: true,
		webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	poweredByHeader: false,
	compress: true,
};

module.exports = nextConfig;
