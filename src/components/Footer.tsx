'use client';
import React from 'react';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' });

const Footer: React.FC = () => {
    return (
        <footer className={`${cinzel.className} font-sans  font-cinzel bg-[#E4E2DD] sticky w-[100vw] h-[30vh]   text-center text-[#37332b] py-4  sm:py-8 bottom-0 z-20`} style={{ fontFamily: 'Cinzel' }
        }>
            <div className={`text-xs sm:text-sm ${cinzel.className}  `}>
                <p className="p-1 font-mono">1430 Trafalgar Rd, Oakville, ON L6H 2L1</p>
            </div>
            <div className={`text-xs sm:text-sm ${cinzel.className}`}>
                <p className="p-1">Disclaimer: We&apos;re not affiliated with Taylor Nation</p>
                <p className="p-1">Designed and developed by Sheridan Swiftie Club</p>
                <p className="p-1">© 2024 Sheridan Swiftie Club</p>
            </div>

        </footer >
    );
};

export default Footer;
