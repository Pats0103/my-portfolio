import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Bubbles } from "@/components/Particles";

 const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratik dobariya",
  description: "Pratik dobariya portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Bubbles />
        <div className="relative">

        {children}
        </div>
        </body>
    </html>
  );
}
