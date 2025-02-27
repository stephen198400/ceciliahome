import { ContactDialogWrapper } from '@/components/contact-dialog-wrapper';
import { PhoneButton } from '@/components/PhoneButton';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// 动态导入组件
const ReviewCard = dynamic(() =>
	import('@/components/ReviewCard').then((mod) => mod.ReviewCard)
);

// 动态导入图标
const Icons = {
	Calendar: dynamic(() =>
		import('lucide-react').then((mod) => mod.Calendar)
	) as unknown as LucideIcon,
	Clock: dynamic(() =>
		import('lucide-react').then((mod) => mod.Clock)
	) as unknown as LucideIcon,
	Cpu: dynamic(() =>
		import('lucide-react').then((mod) => mod.Cpu)
	) as unknown as LucideIcon,
	FileCheck: dynamic(() =>
		import('lucide-react').then((mod) => mod.FileCheck)
	) as unknown as LucideIcon,
	Shield: dynamic(() =>
		import('lucide-react').then((mod) => mod.Shield)
	) as unknown as LucideIcon,
	UserCheck: dynamic(() =>
		import('lucide-react').then((mod) => mod.UserCheck)
	) as unknown as LucideIcon,
	Users: dynamic(() =>
		import('lucide-react').then((mod) => mod.Users)
	) as unknown as LucideIcon,
};

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="border-b">
				<div className="container mx-auto flex h-20 items-center justify-between px-4">
					<Link href="/" className="text-2xl font-bold hover:text-blue-600">
						Cecilia Home
					</Link>
					<PhoneButton />
				</div>
			</header>

			<main>
				{/* Hero Section */}
				<section className="py-10 md:py-24">
					<div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center">
						<div className="space-y-6">
							<p className="text-sm uppercase font-medium text-blue-600">
								Rebuild Stronger
							</p>
							<h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
								Expert Post-Wildfire Structural Inspection
							</h1>
							<p className="text-lg text-muted-foreground">
								Wildfire damage? Serving Southern California with professional
								structural inspections and certified reports for your insurance
								claims. Our reliable assessments help protect your property and
								maximize settlement outcomes.
							</p>
							<ContactDialogWrapper>
								<Button
									size="lg"
									className="bg-blue-600 text-white hover:bg-blue-700"
								>
									Get Free Consultation
								</Button>
							</ContactDialogWrapper>
						</div>
						<div className="relative aspect-square">
							<div className="relative aspect-square">
								<Image
									src="/hero.webp"
									alt="Professional structural engineer inspecting fire damage"
									fill
									priority
									className="rounded-2xl object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="border-y bg-gray-50 py-16">
					<div className="container mx-auto px-4">
						<p className="mb-12 text-center text-sm font-medium text-muted-foreground">
							Our Track Record
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{[
								{
									number: '2000+',
									label: 'Projects',
									icon: Icons.FileCheck,
								},
								{
									number: '1000+',
									label: 'Clients',
									icon: Icons.Users,
								},
								{
									number: '20+',
									label: 'Years of experience',
									icon: Icons.Calendar,
								},
								{
									number: '20+',
									label: 'Team Members',
									icon: Icons.UserCheck,
								},
							].map((stat, i) => (
								<div
									key={i}
									className="flex flex-col items-center justify-center text-center p-6"
								>
									<stat.icon className="h-8 w-8 mb-4 text-blue-600" />
									<span className="text-3xl md:text-4xl font-bold text-gray-900">
										{stat.number}
									</span>
									<span className="text-sm text-gray-600 mt-2">
										{stat.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="w-full py-12 bg-white">
					<div className="container mx-auto px-4">
						{/* Title Section */}
						<div className="mb-12 text-center">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								Why Post-Fire Structural Inspection is Critical
							</h2>
						</div>

						{/* Content Section */}
						<div className="flex flex-col gap-12">
							{/* 小屏幕图片 - 仅在 lg 以下显示 */}
							<div className="block lg:hidden w-full">
								<div className="relative aspect-[16/9]">
									<Image
										src="/fired-house.webp"
										alt="Fire damage assessment"
										fill
										className="rounded-lg object-cover shadow-lg"
									/>
								</div>
							</div>

							<div className="flex flex-col lg:flex-row items-stretch gap-12">
								{/* 大屏幕图片 - 仅在 lg 及以上显示 */}
								<div className="hidden lg:block w-full lg:w-1/2">
									<div className="relative h-full">
										<Image
											src="/fired-house.webp"
											alt="Fire damage assessment"
											fill
											className="rounded-lg object-cover shadow-lg"
										/>
									</div>
								</div>

								{/* Right Content Section */}
								<div className="w-full lg:w-1/2 flex flex-col">
									<div className="space-y-6 flex-grow">
										{/* Point 1 */}
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-gray-800">
												Hidden Structural Damage
											</h3>
											<p className="text-gray-600 leading-relaxed">
												Fire can severely compromise your building&apos;s
												structural integrity without visible signs. High
												temperatures can weaken steel reinforcements, crack
												concrete foundations, and deteriorate load-bearing
												elements.
											</p>
										</div>

										{/* Point 2 */}
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-gray-800">
												Immediate Safety Concerns
											</h3>
											<p className="text-gray-600 leading-relaxed">
												Unstable structures pose immediate risks of collapse.
												Our comprehensive assessment identifies potential
												hazards from compromised support beams, weakened floor
												joists, and damaged wall systems.
											</p>
										</div>

										{/* Point 3 */}
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-gray-800">
												Insurance & Reconstruction Support
											</h3>
											<p className="text-gray-600 leading-relaxed">
												Our detailed structural assessment reports are essential
												for insurance claims and reconstruction planning.
												Professional documentation helps expedite claims and
												ensures rebuilding meets safety standards.
											</p>
										</div>
									</div>

									{/* CTA Section */}
									<div className="pt-8">
										<ContactDialogWrapper>
											<Button
												size="lg"
												className="bg-blue-600 text-white hover:bg-blue-700"
											>
												Get Free Consultation
											</Button>
										</ContactDialogWrapper>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-24">
					<div className="container mx-auto px-4 flex flex-col items-center ">
						<div className="mb-16 max-w-3xl ">
							<h2 className="text-3xl font-bold md:text-4xl text-center">
								Expert Structural Engineers Committed to Safety
							</h2>
							<p className="mt-4 text-lg text-muted-foreground text-center">
								PE-licensed experts with 20+ years in California, providing
								rapid post-wildfire assessment and reconstruction. Your safety
								is our priority.
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-3">
							{[
								{
									icon: Icons.Clock,
									title: 'Rapid Disaster Inspection',
									description:
										'Expert structural evaluation within 24-48 hours of site access clearance. We provide detailed damage reports and reconstruction recommendations that meet all California building codes.',
								},
								{
									icon: Icons.FileCheck,
									title: 'Structural Reconstruction',
									description:
										'Complete structural design and engineering solutions for rebuilding your home, including fire-resistant materials and enhanced safety features.',
								},
								{
									icon: Icons.Shield,
									title: 'Safety Compliance',
									description:
										'All reconstruction plans are fully compliant with current California fire codes and local building regulations, ensuring long-term safety and property value.',
								},
							].map((service, i) => (
								<div
									key={i}
									className="relative space-y-4 rounded-2xl border p-8"
								>
									<service.icon className="h-8 w-8 text-blue-600 mb-4" />
									<h3 className="text-xl font-bold">{service.title}</h3>
									<p className="text-muted-foreground">{service.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-24">
					<div className="container mx-auto px-4">
						<div className="grid gap-16 lg:grid-cols-2">
							{/* 左侧图片 */}
							<div className="hidden lg:block h-full">
								<div className="relative h-full rounded-2xl overflow-hidden">
									<Image
										src="/teams.webp"
										alt="Painting service"
										fill
										className="object-cover"
									/>
								</div>
							</div>

							{/* Features 网格 */}
							<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12 mt-8">
								{[
									{
										icon: Icons.Shield,
										title: 'Licensed Engineers',
										description:
											'Our team of certified structural engineers brings decades of combined experience in California construction.',
									},
									{
										icon: Icons.Cpu,
										title: 'Advanced Technology',
										description:
											'State-of-the-art structural analysis tools and thermal imaging technology for precise assessments.',
									},
									{
										icon: Icons.FileCheck,
										title: 'Insurance Reports',
										description:
											'Professional assessment reports designed to maximize your insurance claims, backed by certified engineers.',
									},
									{
										icon: Icons.Clock,
										title: 'Free Consultation',
										description:
											'Free on-site inspection and consultation, followed by a comprehensive professional report for your property.',
									},
								].map((feature, i) => (
									<div key={i} className="space-y-3">
										<div className="flex items-center gap-3">
											<div className="flex-shrink-0">
												<feature.icon className="h-6 w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 text-blue-600" />
											</div>
											<h3 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight whitespace-nowrap">
												{feature.title}
											</h3>
										</div>
										<p className="text-sm md:text-sm lg:text-base text-gray-600 leading-relaxed pl-[2.25rem]">
											{feature.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="border-y bg-gray-50 py-24">
					<div className="container mx-auto px-4">
						<div className="mb-16 text-center">
							<h2 className="text-3xl font-bold md:text-4xl">
								Our 3-Step Inspection Process
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								We provide a systematic approach to evaluate fire damage and
								support your insurance claims. Here&apos;s how we work:
							</p>
						</div>
						<div className="relative">
							<div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-100 hidden md:block" />

							<div className="grid gap-16 md:gap-8">
								{[
									{
										step: '01',
										title: 'Free Initial Consultation',
										description:
											'Schedule a no-cost consultation to assess your fire-damaged property and develop a preliminary evaluation plan for comprehensive structural inspection.',
										align: 'left',
										image: '/contact.webp',
									},
									{
										step: '02',
										title: 'Professional On-Site Inspection',
										description:
											'Our licensed engineers conduct thorough on-site inspections using advanced equipment to evaluate structural integrity and document all damage conditions.',
										align: 'right',
										image: '/site-visit.webp',
									},
									{
										step: '03',
										title: 'Professional Inspection Report',
										description:
											'Receive a comprehensive structural assessment report with detailed analysis, photos, and recommendations, certified by our licensed engineers for your records and insurance purposes.',
										align: 'left',
										image: '/report.webp',
									},
								].map((step, i) => (
									<div
										key={i}
										className="relative grid md:grid-cols-2 items-center gap-8"
									>
										{/* Content */}
										<div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border h-full flex flex-col justify-center">
											<div className="relative">
												<div className="md:static">
													<span className="flex items-center justify-center w-12 h-12 rounded-full step-number font-bold">
														{step.step}
													</span>
												</div>
												<h3 className="text-xl font-bold mt-6 md:mt-4">
													{step.title}
												</h3>
												<p className="text-muted-foreground mt-2">
													{step.description}
												</p>
											</div>
										</div>
										{/* Image */}
										<div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gray-100 h-full">
											<Image
												src={step.image}
												alt={step.title}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				{/* Reviews Section */}
				<section className="py-24 bg-white overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold">
								Trusted by Homeowners Across California
							</h2>
							<p className="mt-4 text-lg text-gray-600">
								See what our clients say about our structural engineering
								services across different platforms
							</p>
						</div>

						{/* 添加自动滚动容器 */}
						<div className="relative -mx-4 px-4">
							<div className="review-scroll max-w-[1536px] mx-auto overflow-hidden">
								<div
									className="review-scroll-content flex gap-8"
									style={{ willChange: 'transform' }}
								>
									{[
										{
											platform: 'Thumbtack',
											logo: '/logos/thumbtack.png',
											logoWidth: 120,
											review:
												"After the wildfire damaged our home, Mason conducted an incredibly thorough inspection. His detailed report helped us understand the full extent of structural damage. The thermal imaging really showed issues we couldn't see. Worth every penny!",
											author: 'Michael Rodriguez',
											location: 'Pacific Palisades, CA',
											rating: 5.0,
										},
										{
											platform: 'Google',
											logo: '/logos/google.png',
											logoWidth: 100,
											review:
												"Called Cecilia Home after our insurance company was dragging their feet. Their assessment was comprehensive and the report quality was exceptional. They found significant damage that wasn't visible to the naked eye. Highly professional team.",
											author: 'Jennifer Wilson',
											location: 'Pasadena, CA',
											rating: 4.8,
										},
										{
											platform: 'Yelp',
											logo: '/logos/yelp.png',
											logoWidth: 80,
											review:
												"Quick response time when we needed them most. Their structural assessment revealed several safety concerns we hadn't noticed. The detailed documentation was crucial for our insurance claim. They really know their stuff!",
											author: 'Thomas Harris',
											location: 'Malibu, CA',
											rating: 4.7,
										},
										{
											platform: 'Houzz',
											logo: '/logos/houzz.png',
											logoWidth: 100,
											review:
												'Lost our vacation home in the recent fires. Mason and his team were incredibly empathetic and thorough. Their engineering report was instrumental in getting our insurance claim approved. They even helped explain technical details to our adjuster.',
											author: 'Patricia Kennedy',
											location: 'Ventura, CA',
											rating: 5.0,
										},
										{
											platform: 'HomeAdvisor',
											logo: '/logos/homeadvisor.png',
											logoWidth: 120,
											review:
												"Had serious concerns about smoke damage to our home's structure. The team did a fantastic job with their assessment - used advanced equipment and explained everything clearly. The report was detailed and professional. Only wish they had more availability.",
											author: 'Christopher Martinez',
											location: 'Santa Monica, CA',
											rating: 4.6,
										},
									].map((item, i) => (
										<ReviewCard key={i} {...item} />
									))}

									{/* 复制相同的评论数组用于无缝滚动 */}
									{[
										{
											platform: 'Thumbtack',
											logo: '/logos/thumbtack.png',
											logoWidth: 120,
											review:
												"After the wildfire damaged our home, Mason conducted an incredibly thorough inspection. His detailed report helped us understand the full extent of structural damage. The thermal imaging really showed issues we couldn't see. Worth every penny!",
											author: 'Michael Rodriguez',
											location: 'Pacific Palisades, CA',
											rating: 5.0,
										},
										{
											platform: 'Google',
											logo: '/logos/google.png',
											logoWidth: 100,
											review:
												"Called Cecilia Home after our insurance company was dragging their feet. Their assessment was comprehensive and the report quality was exceptional. They found significant damage that wasn't visible to the naked eye. Highly professional team.",
											author: 'Jennifer Wilson',
											location: 'Pasadena, CA',
											rating: 4.8,
										},
										{
											platform: 'Yelp',
											logo: '/logos/yelp.png',
											logoWidth: 80,
											review:
												"Quick response time when we needed them most. Their structural assessment revealed several safety concerns we hadn't noticed. The detailed documentation was crucial for our insurance claim. They really know their stuff!",
											author: 'Thomas Harris',
											location: 'Malibu, CA',
											rating: 4.7,
										},
										{
											platform: 'Houzz',
											logo: '/logos/houzz.png',
											logoWidth: 100,
											review:
												'Lost our vacation home in the recent fires. Mason and his team were incredibly empathetic and thorough. Their engineering report was instrumental in getting our insurance claim approved. They even helped explain technical details to our adjuster.',
											author: 'Patricia Kennedy',
											location: 'Ventura, CA',
											rating: 5.0,
										},
										{
											platform: 'HomeAdvisor',
											logo: '/logos/homeadvisor.png',
											logoWidth: 120,
											review:
												"Had serious concerns about smoke damage to our home's structure. The team did a fantastic job with their assessment - used advanced equipment and explained everything clearly. The report was detailed and professional. Only wish they had more availability.",
											author: 'Christopher Martinez',
											location: 'Santa Monica, CA',
											rating: 4.6,
										},
									].map((item, i) => (
										<ReviewCard key={`clone-${i}`} {...item} />
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-24">
					<div className="container mx-auto px-4">
						<div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-12 text-center md:p-24 text-white">
							<h2 className="text-3xl font-bold md:text-4xl">
								Get Professional Help for Your Fire-Damaged Home!
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
								Facing property damage from recent wildfires? Our licensed
								structural engineers are here to help protect your interests.
								Schedule a free consultation today for a thorough damage
								inspection and expert insurance claim support.
							</p>
							<div className="mt-8 flex flex-wrap justify-center gap-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
									<ContactDialogWrapper>
										<Button
											size="lg"
											className="bg-white text-blue-900 hover:bg-blue-50 w-full"
										>
											<Icons.Calendar className="mr-2 h-5 w-5" />
											Get Free Consultation
										</Button>
									</ContactDialogWrapper>
									<PhoneButton />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t py-12">
				<div className="container mx-auto px-4">
					{/* 主要内容区域 - 默认双列，lg 以上四列 */}
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
						<div>
							<h3 className="mb-4 text-lg font-bold">Contact Us</h3>
							<div className="space-y-2 text-sm text-muted-foreground">
								<p>510 909 1933</p>
								<p>contact@ceciliahome.net</p>
								<p>3700 Wilshire Blvd, Suite 950</p>
								<p>Los Angeles, CA 90010</p>
							</div>
						</div>

						<div>
							<h3 className="mb-4 text-lg font-bold">Services</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<Link href="#">Post-Fire Inspection</Link>
								</li>
								<li>
									<Link href="#">Structural Assessment</Link>
								</li>
								<li>
									<Link href="#">Insurance Support</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-4 text-lg font-bold">Company</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<Link href="https://cecilia123.com/about-us">About Us</Link>
								</li>
								<li>
									<Link href="https://cecilia123.com/about-us">Our Team</Link>
								</li>
								<li>
									<Link href="https://cecilia123.com/contact">Contact</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-4 text-lg font-bold">Legal</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<Link href="#">Privacy Policy</Link>
								</li>
								<li>
									<Link href="#">Terms of Service</Link>
								</li>
								<li>
									<Link href="#">CA License No C-69809</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* 版权信息 */}
					<div className="mt-12 pt-8 border-t">
						<p className="text-sm text-center text-muted-foreground">
							© {new Date().getFullYear()} Cecilia Home. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
