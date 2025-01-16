import { Star } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ReviewCardProps {
	platform: string;
	logo: string;
	logoWidth: number;
	review: string;
	author: string;
	location: string;
	rating: number;
}

export function ReviewCard({
	platform,
	logo,
	logoWidth,
	review,
	author,
	location,
	rating,
}: ReviewCardProps) {
	return (
		<div
			className="flex-shrink-0 w-[400px] bg-white rounded-xl p-8 shadow-sm border"
			role="article"
		>
			<div className="flex items-center justify-between mb-6">
				<Image
					src={logo}
					alt={`${platform} Logo`}
					width={logoWidth}
					height={40}
					className="object-contain"
				/>
				<div
					className="flex gap-1"
					role="group"
					aria-label={`Rating: ${rating} out of 5 stars`}
				>
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-5 w-5 ${
								i < Math.floor(rating)
									? 'text-yellow-400 fill-yellow-400'
									: 'text-gray-200 fill-gray-200'
							}`}
							aria-hidden="true"
						/>
					))}
				</div>
			</div>
			<blockquote className="text-gray-600 mb-4">
				<p>&ldquo;{review}&rdquo;</p>
			</blockquote>
			<div className="flex items-center gap-3">
				<Avatar>
					<AvatarImage
						src={`/users/${author.split(' ')[0]}.png`}
						alt={`${author}'s profile picture`}
					/>
					<AvatarFallback>{author.charAt(0)}</AvatarFallback>
				</Avatar>
				<div>
					<p className="font-semibold">{author}</p>
					<p className="text-sm text-gray-500">{location}</p>
				</div>
			</div>
		</div>
	);
}
