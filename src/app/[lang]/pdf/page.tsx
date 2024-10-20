import dynamic from "next/dynamic";
import { getResumeDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n.config";
import { Suspense } from "react";
const Resume = dynamic(() => import("@/components/Resume"), { ssr: false });

// export const runtime = "edge";

export default async function ResumePdfPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const data = await getResumeDictionary(params.lang);
  return (
    <div className="flex h-screen justify-center">
      <Suspense fallback={<p>Loading...</p>}>
        <Resume data={data} />
      </Suspense>
    </div>
  );
}
