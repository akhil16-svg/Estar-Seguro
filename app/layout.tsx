import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://akhil16-svg.github.io/Estar-Seguro/"),
  title: {
    default: "Estar Seguro Polymer | Engineering Component Manufacturing",
    template: "%s | Estar Seguro Polymer",
  },
  description:
    "Engineering component manufacturing and sourcing solutions across plastics, rubber, vacuum forming, foam, and sheet metal.",
  icons: {
    icon: `${basePath}/brand/estar-seguro-logo.webp`,
    shortcut: `${basePath}/brand/estar-seguro-logo.webp`,
  },
  openGraph: {
    title: "Estar Seguro Polymer Pvt. Ltd.",
    description: "Built around your engineering requirement.",
    url: "https://akhil16-svg.github.io/Estar-Seguro/",
    siteName: "Estar Seguro Polymer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: "Estar Seguro Polymer engineering components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estar Seguro Polymer Pvt. Ltd.",
    description: "Engineering components. One dependable partner.",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
