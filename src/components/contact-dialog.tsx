'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from '@formspree/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactDialogProps {
	children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
	const [open, setOpen] = useState(false);
	const [state, handleSubmit] = useForm('mvggyrpw');
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [showSuccess, setShowSuccess] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			setShowSuccess(true);
			// 显示成功界面 2 秒后关闭对话框
			setTimeout(() => {
				setOpen(false);
				setShowSuccess(false);
				setErrors({});
			}, 2000);
		}
	}, [state.succeeded]);

	const validateForm = (formData: FormData) => {
		const newErrors: Record<string, string> = {};

		// Validate name
		const name = formData.get('name') as string;
		if (!name || name.length < 2) {
			newErrors.name = 'Name must be at least 2 characters';
		}

		// Validate address
		const address = formData.get('address') as string;
		if (!address) {
			newErrors.address = 'Address is required';
		} else {
			// 移除多余空格，统一格式
			const cleanAddress = address.replace(/\s+/g, ' ').trim();
			// 更宽松的地址格式验证
			if (!/^[0-9]+[A-Za-z\s,]+[A-Z]{2}\s*\d{5}$/.test(cleanAddress)) {
				newErrors.address =
					'Please enter a valid US address (e.g., 123 Main St, City, NY 12345)';
			}
		}

		// Validate email
		const email = formData.get('email') as string;
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		// Validate phone - 更新美国电话号码格式验证
		const phone = formData.get('phone') as string;
		if (!phone) {
			newErrors.phone = 'Phone number is required';
		} else {
			// 移除所有非数字字符后检查长度
			const cleanPhone = phone.replace(/\D/g, '');
			if (cleanPhone.length !== 10) {
				newErrors.phone = 'Please enter a valid 10-digit US phone number';
			} else if (
				!/^(\+1|1)?[\s-]?\(?([0-9]{3})\)?[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/.test(
					phone
				)
			) {
				newErrors.phone =
					'Please enter a valid US phone number format (e.g., (123) 456-7890)';
			}
		}

		// Validate notes (optional)
		const notes = formData.get('notes') as string;
		if (notes && notes.length > 500) {
			newErrors.notes = 'Notes should not exceed 500 characters';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		if (!validateForm(formData)) {
			return;
		}

		await handleSubmit(e);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				{!showSuccess ? (
					<>
						<DialogHeader>
							<DialogTitle>Get Free Consultation</DialogTitle>
						</DialogHeader>
						<form onSubmit={onSubmit} className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium">
									Name *
								</label>
								<Input id="name" name="name" required placeholder="John Doe" />
								{errors.name && (
									<p className="text-red-500 text-xs">{errors.name}</p>
								)}
							</div>

							<div className="space-y-2">
								<label htmlFor="address" className="text-sm font-medium">
									Address *
								</label>
								<Input
									id="address"
									name="address"
									required
									placeholder="123 Main St, Oakland, CA 94539"
								/>
								{errors.address && (
									<p className="text-red-500 text-xs">{errors.address}</p>
								)}
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email *
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									required
									placeholder="john.doe@gmail.com"
								/>
								{errors.email && (
									<p className="text-red-500 text-xs">{errors.email}</p>
								)}
							</div>

							<div className="space-y-2">
								<label htmlFor="phone" className="text-sm font-medium">
									Phone *
								</label>
								<Input
									id="phone"
									name="phone"
									type="tel"
									required
									placeholder="(123) 456-7890"
								/>
								{errors.phone && (
									<p className="text-red-500 text-xs">{errors.phone}</p>
								)}
							</div>

							<div className="space-y-2">
								<label htmlFor="notes" className="text-sm font-medium">
									Additional Notes
								</label>
								<textarea
									id="notes"
									name="notes"
									className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Any additional information you'd like us to know..."
								/>
								{errors.notes && (
									<p className="text-red-500 text-xs">{errors.notes}</p>
								)}
							</div>

							<Button
								type="submit"
								className="w-full bg-blue-600 text-white hover:bg-blue-700"
								disabled={state.submitting}
							>
								{state.submitting ? 'Submitting...' : 'Submit'}
							</Button>
						</form>
					</>
				) : (
					<div className="flex flex-col items-center justify-center py-8 space-y-4">
						<div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
							<Check className="h-6 w-6 text-green-600" />
						</div>
						<h2 className="text-xl font-semibold text-center">
							Thank you for your submission!
						</h2>
						<p className="text-center text-muted-foreground">
							We will contact you soon.
						</p>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
}
