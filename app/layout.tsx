import type { Metadata } from "next";
import { ru } from "@/i18n/ru";
import "./globals.css";

export const metadata: Metadata = {
  title: ru.siteName,
  description: ru.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
