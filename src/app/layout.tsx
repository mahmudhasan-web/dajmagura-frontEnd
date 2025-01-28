import type { Metadata } from "next";
import "./globals.css";
// import { lora } from "./fonts/fonts";
import Navbar from "@/components/shared/Navbar/Navbar";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

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
      <body className={`font-nexa antialiased`}>
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
