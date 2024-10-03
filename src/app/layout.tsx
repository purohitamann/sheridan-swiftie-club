import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cinzel } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "../components/ThemeWrapper/ThemeWrapper";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });



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
    <html lang="en" style={{ fontFamily: 'Cinzel' }}>


      <body className={`${inter.className} ${cinzel.className}`} style={{ fontFamily: 'Cinzel' }} >
        <div>
          {children}</div>


      </body>


    </html >
  );
}
