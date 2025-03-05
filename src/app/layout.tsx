import { VersionDropdown } from "@/components/version-dropdown";
import { CustomMetadata } from "@/config/metadata";
import { Analytics } from "@vercel/analytics/react";

export const metadata = CustomMetadata;

function RootHeader() {
  return (
    <div className="flex justify-end items-center h-8 px-3 py-1 bg-black ">
      <VersionDropdown />
    </div>)

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html className="scroll-smooth">
      <body>
        <RootHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
