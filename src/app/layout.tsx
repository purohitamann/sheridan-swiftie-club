import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/NewLook/SmoothScroll';
import Header from '@/components/NewLook/Header';
import GlitterBackground from '@/components/NewLook/GlitterBackground';


const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

import React from 'react';
import Footer from '@/components/NewLook/Footer';

export const metadata: Metadata = {
  title: 'Sheridan Swiftie Club',
  description: 'The official website for Sheridan Swiftie Club',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" className={`${inter.className} overflow-y-hidden`}>
<head>

</head>
      <body className='font-sans'>
       
        <div className="relative z-10 bg-black">
          <SmoothScroll>
            <Header />
             <GlitterBackground />
            {children}
          </SmoothScroll>
        </div>
    
      </body>
    </html >
  );
}
