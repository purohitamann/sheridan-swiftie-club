import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "../components/ThemeWrapper/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Sheridan Swiftie Club",
  description: "The official website for Sheridan Swiftie Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">


      <body className={inter.className}>   {children}  </body>

    </html>
  );
}
