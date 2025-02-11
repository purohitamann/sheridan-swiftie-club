import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({ subsets: ['latin'] });

import React from 'react';

export const metadata: Metadata = {
  title: 'Sheridan Swiftie Club',
  description: 'The official website for Sheridan Swiftie Club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" style={{ fontFamily: 'Cinzel' }} className={`${cinzel.className} overflow-y-hidden`}>


      <body className={`${inter.className} ${cinzel.className} `} style={{ fontFamily: 'Cinzel' }} >
        <div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4 text-white text-center">
            <p>A New Look is Coming! March 01, 2025</p>
          </div>
          {children}</div>


      </body>


    </html >

  );
}
