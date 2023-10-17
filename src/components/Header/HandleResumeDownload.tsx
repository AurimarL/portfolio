import { IResumeData } from "@/types";
import dynamic from "next/dynamic";
import ReactPDF from "@react-pdf/renderer";

const Resume = dynamic(() => import("@/components/Resume"), { ssr: false });

export async function HandleResumeDownload({ data }: { data: IResumeData }) {
  try {
    if (typeof window !== "undefined") {
      return ReactPDF.renderToStream(<Resume data={data} />);
    } else {
      // Handle client-side rendering or show an error message
      console.error("PDF generation is not supported in the browser.");
    }
  } catch (error) {
    console.error(error);
  }
}
