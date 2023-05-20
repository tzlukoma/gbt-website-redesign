import Nav from '@/components/Nav';
import './globals.css';
import { Lato, Josefin_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const josefin_sans = Josefin_Sans({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-josefin-sans',
	display: 'swap',
});

const lato = Lato({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-lato',
	display: 'swap',
});

export const metadata = {
	title: 'George B. Thompson Website',
	description: 'Live life by design, not by default',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${lato.variable} ${josefin_sans.variable}`}>
			<body>
				<Nav />
				<div className="pt-16">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
