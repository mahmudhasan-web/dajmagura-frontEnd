import type { Metadata } from "next";
import "./globals.css";
import { lora, nunitoSans } from "./fonts/fonts";

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
    <html lang="en">
      <body
        className={`${nunitoSans.className} ${lora.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
