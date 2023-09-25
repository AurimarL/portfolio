import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metadata as customMetadata } from "@/config/customMetadata";

export const metadata = customMetadata;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
