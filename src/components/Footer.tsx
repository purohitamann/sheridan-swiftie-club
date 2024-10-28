'use client';
import React from 'react';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' });
// import { AlertCircle, CheckCircle2 } from "lucide-react";
import { EnvelopeOpenIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import { PartyPopperIcon } from 'lucide-react';
const Footer: React.FC = () => {
    return (
        <footer className={`${cinzel.className} font-sans  font-cinzel bg-[#E4E2DD] sticky w-[100vw] h-[50vh]   text-center text-[#37332b] py-4  sm:py-8 bottom-0 z-20`} style={{ fontFamily: 'Cinzel' }
        }>
            <div>
                <p className="text-xs sm:text-sm font-bold">our secret garden</p>
                <div className='flex p-2 justify-center gap-4'>

                    <a href="https://www.instagram.com/sheridanswiftieclub/" target="_blank" rel="noopener noreferrer">
                        <InstagramLogoIcon className='w-6 h-6 sm:w-6 sm:h-6' />
                    </a>
                    <a href='mailto:sheridanswiftieclub@gmail' target="_blank" rel="noopener noreferrer">

                        <EnvelopeOpenIcon className='w-6 h-6 sm:w-6 sm:h-6' />
                        {/* <EnvelopeCloseIcon className='w-8 h-8 sm:w-10 sm:h-10' /> */}
                    </a>
                    <a href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" target="_blank" rel="noopener noreferrer">

                        <PartyPopperIcon className='w-6 h-6 sm:w-6 sm:h-6' />
                    </a>

                </div>
            </div>
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
