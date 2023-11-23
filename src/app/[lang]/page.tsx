import { Locale } from "@/i18n.config";

// import { getDictionary } from "@/lib/dictionaries";
// export const runtime = "edge";

export default function Home({ params }: { params: { lang: Locale } }) {
  // const {} = await getDictionary(params.lang);

  return (
    <main className="flex justify-center items-center h-screen">
      <h1 className=" text-5xl">A Big Hello</h1>
    </main>
  );
}
