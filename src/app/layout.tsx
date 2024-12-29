import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: {
    default: "Magura",
    template: "%s | Magura",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${nunitoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
