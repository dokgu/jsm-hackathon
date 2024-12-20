import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});
export const metadata: Metadata = {
	title: 'JSM Hackathon',
	description: 'The startup landing page for JS Hackathon'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<meta name='description' content='All-in-one platform for startups.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icon.png' />
				<Script async defer src='https://app.visitortracking.com/assets/js/tracer.js' />
				<Script
					id='visitor-tracking'
					dangerouslySetInnerHTML={{
						__html: `
							function init_tracer() {
								var tracer = new Tracer({
									websiteId : 'e6e1be1d-1350-49ef-81d2-56f77ebe6d91',
									async : true,
									debug : false
								});
							}
						`
					}}
				/>
			</head>
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
