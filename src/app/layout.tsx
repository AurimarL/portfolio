import "./[lang]/globals.css";
import { CustomMetadata } from "@/config/metadata";
import { Analytics } from "@vercel/analytics/react";

export const metadata = CustomMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth bg-[#101820]">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
