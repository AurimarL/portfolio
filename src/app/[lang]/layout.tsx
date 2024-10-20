import "./globals.css";

import { CustomMetadata } from "@/config/metadata";
import type { Locale } from "@/i18n.config";
import { Analytics } from "@vercel/analytics/react";

export const metadata = CustomMetadata;

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: {
		lang: Locale;
	};
}) {
	return (
		<html lang={params.lang}>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
