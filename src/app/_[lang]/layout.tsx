import "./globals.css";

import Header from "@/components/Header";
import { CustomMetadata } from "@/config/metadata";
import { Locale, i18n } from "@/i18n.config";
import { Analytics } from "@vercel/analytics/react";

export const metadata = CustomMetadata;

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className="p-4 bg-black text-white">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
