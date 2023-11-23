import "./globals.css";

import { CustomMetadata } from "@/config/metadata";
import { Locale, i18n } from "@/i18n.config";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../../components/Footer";

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
    <html lang={params.lang}>
      <body className="bg-black text-white">
        <header></header>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
