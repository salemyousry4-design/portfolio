import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.scss";

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar, Footer, Preloader } from "./components/legacy";
import { CursorGlow } from "./components/legacy/3d";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
});

const description =
	"Salem Yousry: AI automation engineer and MBA-qualified business strategist in Cairo, with 4 years in the restaurant and F&B sector. Turning business problems into AI automations and LLM applications.";

export const metadata: Metadata = {
	// Absolute base for the OG image. On Vercel, Next falls back to the production URL automatically.
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-fox-3551.vercel.app"),
	title: "Salem Yousry | AI Automation Engineer & Business Strategist",
	description,
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
	openGraph: {
		title: "Salem Yousry | AI Automation Engineer & Business Strategist",
		description,
		images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Salem Yousry" }],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={`${inter.variable} ${playfair.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<Preloader />
					<CursorGlow />
					<main className="relative min-h-screen">
						<Navbar />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
