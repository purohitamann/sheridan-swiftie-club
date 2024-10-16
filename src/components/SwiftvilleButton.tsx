import React from 'react';
import { Kaushan_Script } from 'next/font/google';
import Link from 'next/link';
import { Button } from './ui/button';


const kaushan = Kaushan_Script({ subsets: ['latin'], weight: '400' });

export default function SwiftvilleButton({ string, link }: { string: string, link: string }) {
    return (
        <div>

            <Button className={`bg-blue-500 ${kaushan.className} hover:bg-blue-700 text-white font-bold py-2 px-4 border border-x-pink-400 rounded`}>
                <Link href={link}> {string}
                </Link>
            </Button>


        </div>
    );

}