'use client';
import Navbar from '@/components/Navbar';
import RSVPForm from '@/components/RSVPForm';
import React from 'react';
import Image from 'next/image';

export default function page() {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-50 overflow-hidden '>
            <Navbar />
            <div className='flex flex-col justify-center items-center'>
                <Image src="/assets/fb/fb-ssu.png" alt='friendship-bracelets' className='w-4/5' width={600} height={300} />
                <Image src="/assets/fb/erasprep.png" alt='friendship-bracelets' className='w-2/5' width={600} height={100} />

            </div>


            <RSVPForm formTitle="Friendship Bracelet Making Pop-up" formDescription="Let's prepare for the eras tour! Enter your information below to enter our giveaway!! " currentEventId={102} currentEventCampus="Trafalgar Campus" />

            <div className='absolute bottom-0'>
                <Image src="/assets/fb/tay-tay.png" alt='friendship-bracelets' className='w-3/5' width={600} height={100} />
                {/* <Image src="/assets/fb/elems.png" alt='friendship-bracelets' className='w-2/5' width={600} height={100} /> */}
            </div>
        </div>
    );
}

