
import type { Metadata } from "next";
import { Inter,Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "pratik~",
  description: "A full-stack web developer with a passion for building functional and visually appealing websites. I specialize in React, Node.js, MongoDB, and Express.js to deliver dynamic web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
