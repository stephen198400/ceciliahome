'use client';

import { Phone } from 'lucide-react';

export function PhoneButton() {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.location.href = 'tel:+15109091933';
	};

	return (
		<a
			href="tel:+15109091933"
			onClick={handleClick}
			className="flex items-center justify-center gap-4 text-gray-600 hover:text-blue-600 transition-colors border  border-gray-200 rounded-md px-4 py-2 hover:border-blue-600 hover:shadow-md bg-white cursor-pointer"
		>
			<Phone className="h-5 w-5" />
			<span className="text-sm font-medium">510 909 1933</span>
		</a>
	);
}
