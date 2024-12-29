import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans } from "./fonts/fonts";
import Navbar from "@/components/shared/Navbar/Navbar";



export const metadata: Metadata = {
  title: {
    default: "Magura",
    template: "%s | Magura"
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
        className={`${nunitoSans.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
