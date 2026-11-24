import type { Metadata } from "next";
import localFont from "next/font/local";
import { ru } from "@/i18n/ru";
import "./globals.css";

const headingFont = localFont({
  src: "./fonts/CormorantGaramond-Variable.ttf",
  display: "swap",
  weight: "300 700",
  fallback: ["serif"],
  adjustFontFallback: false,
  variable: "--font-heading",
});

const bodyFont = localFont({
  src: "./fonts/Inter-Variable.ttf",
  weight: "100 900",
  fallback: ["sans-serif"],
  adjustFontFallback: false,
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: ru.siteName,
  description: ru.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
