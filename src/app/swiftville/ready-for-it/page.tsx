'use client';
import Navbar from '@/components/Navbar';
import RSVPForm from '@/components/RSVPForm';
import React from 'react';
import Image from 'next/image';

export default function page() {
    return (
        <div className='min-h-screen w-full  flex flex-col justify-center items-center bg-[#D9D9D9]  relative overflow-hidden'>
            <Navbar />
            <div className='flex flex-col justify-center items-center'>
                <Image src="/assets/mv/mv-poster-2.png" alt='friendship-bracelets' className='w-4/5' width={600} height={100} />
            </div>
            <div >
                <Image src="/assets/mv/elem-02.png" alt='friendship-bracelets' className=' w-2/5 fixed -bottom-5 sm:-bottom-30   opacity-75 right-3/4 z-0' width={600} height={100} />


            </div>

            <Image src="/assets/mv/elem-01.png" alt='friendship-bracelets' className=' w-2/5 fixed -bottom-45  sm:top-0   opacity-75 sm:left-3/4 sm:pr-40 z-10 right-0 top-0' width={600} height={100} />

            <div className='flex flex-col justify-center items-center z-20'>

                <RSVPForm
                    formTitle="Ready for it?"
                    formDescription={`

Calling all Swifties! Get ready to experience the magic of Taylor Swift’s Eras Tour on campus! 


                    `}
                    currentEventId={103}
                    currentEventCampus="Trafalgar Campus"
                />

            </div>

        </div>
    );
}
