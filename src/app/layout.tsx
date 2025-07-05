import { Header } from "@/components/header";
import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="ja" suppressHydrationWarning>
			<body>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
