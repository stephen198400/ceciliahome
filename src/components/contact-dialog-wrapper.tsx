'use client';

import dynamic from 'next/dynamic';
import { Button } from './ui/button';

const ContactDialog = dynamic(
	() => import('./contact-dialog').then((mod) => mod.ContactDialog),
	{
		ssr: false,
		loading: () => (
			<Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
				Loading...
			</Button>
		),
	}
);

export function ContactDialogWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ContactDialog>{children}</ContactDialog>;
}
