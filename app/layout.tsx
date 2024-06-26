import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City Sage",
  description: "self-guided walking tours made for you by ai",
  openGraph: {
    type: "website",
    url: "https://citysage.me",
    title: "City Sage",
    description: "self-guided walking tours made for you by ai",
    images: "https://www.citysage.me/city-sage.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@danmana",
    creator: "@danmana",
    images: "https://www.citysage.me/city-sage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
