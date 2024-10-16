'use client'


import Navbar from '@/components/Navbar'
import RSVPForm from '@/components/RSVPForm'
import Image from 'next/image'
import React from 'react'

export default function PaintNight() {


    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center bg-[#F1EBDB] relative overflow-hidden'>
            {/* Top-left positioned images */}
            <div className="absolute opacity-50 -right-40 sm:-right-96 w-full h-full left-3/4 rotate-2 sm:top-20 top-[80%]">
                <Image
                    src="/assets/drop.png"
                    alt="drop-bg"
                    width={250}
                    height={250}
                    className='rotate-45 sm:w-[250px] sm:h-[250px] w-[250px] h-[250px] -right-20'
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                />
            </div>

            <Navbar />

            <div className="mt-10">
                <Image
                    src="/assets/poster-pn.png"
                    alt="paint-night"
                    width={600}
                    height={300}
                    className="rounded align-middle"
                />
            </div>

            <div className="z-20">
                <RSVPForm
                    formTitle="Paint Night"
                    formDescription="Join us for a painting night!"
                    currentEventId={101}
                    currentEventCampus="Trafalgar Campus"
                />
            </div>

            {/* Top-right positioned images */}
            {/* <div className="absolute opacity-65 sm:top-20 sm:left-3/2 sm:-right-10 sm:bottom-72">
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="relative z-10 top-20 sm:top-10 rotate-45 sm:right-80 sm:w-[90px] sm:h-[50px] w-[100px] h-[100px]"
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="relative top-10 z-10 right-1/4 sm:right-96 sm:w-[90px] sm:h-[50px] w-[45px] h-[45px]"
                />
                <Image
                    src="/assets/drop.png"
                    alt="drop-bg"
                    width={250}
                    height={250}
                />
            </div> */}

            <div className="absolute opacity-50 bottom-10 left-10 ">
                <Image
                    src="/assets/drop.png"
                    alt="drop-bg"
                    width={250}
                    height={250}
                    className="rotate-90 "
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="mt-5"
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="mt-2 rotate-45"
                />
            </div>
            <div className="absolute opacity-50 bottom-30 right-10">
                <Image
                    src="/assets/drop.png"
                    alt="drop-bg"
                    width={250}
                    height={250}
                    className="rotate-90"
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="mt-5"
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="mt-2 rotate-45"
                />
            </div>
            <div className="absolute opacity-50 top-80 left-10">
                <Image
                    src="/assets/drop.png"
                    alt="drop-bg"
                    width={250}
                    height={250}
                    className="rotate-90 hidden sm:block"
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="mt-5 hidden sm:block"
                />
                <Image
                    src="/assets/tune.png"
                    alt="logo"
                    width={90}
                    height={50}
                    className="mt-2 rotate-45 hidden sm:block"
                />
            </div>
        </div>
    )
}
