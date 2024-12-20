import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

interface MarketingLayoutProps {
	children: React.ReactNode;
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
	return (
		<>
			{/* <SiteBanner /> */}
			<SiteHeader />
			<main className='mx-auto flex-1 overflow-hidden'>{children}</main>
			<SiteFooter />
		</>
	);
}
