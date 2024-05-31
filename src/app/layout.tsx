import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAdsense } from "@src/components/GoogleAdsense";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Billeteras Virtuales",
  formatDetection: {
    telephone: false,
  },
  title: {
    template: "%s - Billeteras Virtuales",
    default: "Billeteras Virtuales",
  },
  description:
    "Una app para conocer las billeteras virtuales que más rendimientos generan en Argentina. Conocé la TNA de Uala, Prex, Supervielle, Taca Taca, Banco Galicia, n1u y más.",
  metadataBase: process.env.VERCEL_URL
    ? new URL("https://billeterasvirtuales.com.ar/")
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  alternates: {
    canonical: "https://billeterasvirtuales.com.ar/",
  },
  keywords: [
    "financial",
    "wallet",
    "virtual",
    "billetera",
    "finanzas",
    "tna",
    "uala",
    "prex",
    "claro pay",
    "mercadopago",
  ],
  authors: [{ name: "Agustin Moles", url: "https://agustinmoles.com.ar" }],
  creator: "Agustin Moles",
  publisher: "Agustin Moles",
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <GoogleAdsense />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
