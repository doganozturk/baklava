import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@trendyol/baklava@3.0.0/dist/themes/default.css"
        />

        <Script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@trendyol/baklava@3.0.0/dist/baklava.js"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
