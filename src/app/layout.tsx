import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "AI Social Manager Pro",
  description: "AI-powered social media automation platform",

  other: {
    "tiktok-developers-site-verification":
      "dZgQT4BpYAGktKmQgxhdTEh0rUOHvX67",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}