import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n.config";

// export const runtime = "edge";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const {
    
  } = await getDictionary(params.lang);

  return (
    <main className="flex flex-col items-center gap-4 ">
      <h1>under construction</h1>
    </main>
  );
}
