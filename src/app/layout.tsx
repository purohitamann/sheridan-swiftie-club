import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/NewLook/SmoothScroll';

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
<head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" /> 
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
</head>
      <body className='font-inter'>
        <div>
          <SmoothScroll>{children}</SmoothScroll>

</div>

      </body>


    </html >

  );
}
