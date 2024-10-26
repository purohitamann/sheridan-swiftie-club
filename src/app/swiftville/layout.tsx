import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cinzel } from 'next/font/google';



const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({ subsets: ['latin'] });

import React from 'react';

export const metadata: Metadata = {
    title: 'Swiftville',
    description: 'Oakville (taylors version)',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (


        <div className={`${inter.className} ${cinzel.className} `} style={{ fontFamily: 'Cinzel' }} >
            <div>

                {children}</div>

            <div ><Footer /></div>
        </div>




    );
}
