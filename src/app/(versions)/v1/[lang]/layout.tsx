import "./globals.css";

import Header from "@/components/Header";
import { i18n } from "@/i18n.config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white">
      <Header />
      {children}
    </div>
  );
}
