"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Theme } from "react-daisyui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cyberpunk">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Theme dataTheme="cyberpunk">
          <div className="container mx-auto m-2 ">
            <Header />
            <main className=" flex items-center justify-center ">
              {children}
            </main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
