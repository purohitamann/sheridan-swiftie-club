'use client';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-400 sticky w-[100vw] h-[30vh]   text-center text-[#37332b] py-4  mt-4 sm:py-8 bottom-0" style={{ fontFamily: 'Cinzel' }}>
            <div className="text-xs sm:text-sm">
                <p className="p-1">Disclaimer: We&apos;re not affiliated with Taylor Nation</p>
                <p className="p-1">Designed and developed by Sheridan Swiftie Club</p>
                <p className="p-1">© 2024 Sheridan Swiftie Club</p>
            </div>
        </footer>
    );
};

export default Footer;
