import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/header";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
	title: "多様化ゆた鯖",
};

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});
const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
});

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="ja" suppressHydrationWarning>
			<body className={`${inter.variable} ${notoSansJP.variable}`}>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
