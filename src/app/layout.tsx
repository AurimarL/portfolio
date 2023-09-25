import "./globals.css";
import Header from "@/components/Header";
import { CustomMetadata } from "@/config/metadata";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = CustomMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black" className="max-h-screen">
      <body>
        <Header />
        <main>{children}</main>
        <br />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
