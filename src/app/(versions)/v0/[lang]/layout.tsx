import "./globals.css";

import { i18n } from "@/i18n.config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: "Aurimar Lopes — Full Stack Developer",
  description: "Portfólio de Aurimar Lopes, Full Stack Developer especializado em web, mobile, desktop e soluções de inteligência artificial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="bg-[#101820]">
      <body>{children}</body>
    </html>
  );
}
