import type { Metadata } from 'next';
import Head from 'next/head';
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
			<Head>
				<title>JSM Hackathon</title>
				<meta name='description' content='All-in-one platform for startups.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/icon.png' />
			</Head>
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
