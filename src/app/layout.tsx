import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#1d4ed8',
};

export const metadata: Metadata = {
	metadataBase: new URL('https://ceciliahome.net'),
	title:
		'Cecilia Home Engineering | Expert Post-Wildfire Structural Inspection',
	description:
		'Professional structural engineering services specializing in post-wildfire damage assessment, insurance claim support, and reconstruction planning in Southern California.',
	keywords:
		'structural engineering, wildfire damage, fire damage inspection, structural assessment, insurance claims, California engineer, post-fire inspection',
	openGraph: {
		title:
			'Cecilia Home Engineering | Expert Post-Wildfire Structural Inspection',
		description:
			'Professional structural engineering services specializing in post-wildfire damage assessment.',
		images: ['/og-image.jpg'],
	},
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SpeedInsights />
				{children}
			</body>
		</html>
	);
}
