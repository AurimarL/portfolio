import PortfolioPage from "./page.client";
import { Locale } from "@/i18n.config";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return <PortfolioPage lang={lang} />;
}
