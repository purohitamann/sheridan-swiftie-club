'use client'

import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import fundData from '@/data/evermorefund.json'
import Prompt from '@/components/Prompt'


interface ImageData {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface Description {
    text: string;
}

interface Intro {
    heading: string;
    image: ImageData;
    description: Description[];
}

interface BuyTokens {
    link: string;
    text: string;
    note: string;
    disclaimer: string;
}

interface Video {
    src: string;
    title: string;
    allow: string[];
}

interface OctoberGiving {
    heading: string;
    video: Video;
    video_src: string;
    title: string;
}

interface FeedOntario {
    heading: string;
    description: string;
}

interface EvermoreFundData {
    title: string;
    intro: Intro;
    buy_tokens: BuyTokens;
    october_giving: OctoberGiving;
    feed_ontario: FeedOntario;
}

export default function EvermoreFund() {
    const [data, setData] = useState<EvermoreFundData | null>(fundData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (!data) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div className='font-sans' >
            <div className='flex flex-col justify-center align-center items-center text-[#E4E2DD]  '>
                <Navbar />
                <div className='text-xl sm:text-2xl font-bold mb-6'>
                    <a href="/evermorefund" >  {data.title}</a>

                </div>
                <div className='flex flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-20 sm:pl-20'>
                    <Image
                        className="radius-3xl mb-10"
                        unoptimized
                        src={data.intro.image.src}
                        alt={data.intro.image.alt}
                        width={data.intro.image.width}
                        height={data.intro.image.height}
                    />
                    <p className='text-center text-sm sm:text-base mt-4 font-mono'>
                        $1 will serve two meals! <br />Buy Evermore tokens to enter our events and <br /> support club initiatives.
                    </p>
                    <br />
                    <div>
                        <button
                            onClick={openModal}
                            className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-transform duration-300">
                            Enter Giveaway
                        </button>
                        <Prompt isOpen={isModalOpen} onClose={closeModal} />
                    </div>
                    <br />
                    <div className='rounded w-[80%] h-50 text-wrap text-justify flex-col '>
                        {data.intro.description.map((desc, index) => (
                            <p className='text-justify text-sm sm:text-base mt-4 sm:pr-60 sm:pl-60' key={index}>
                                {desc.text}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-40 sm:pl-40'>
                    <Link href={data.october_giving.video_src} prefetch={false} className="hover:text-white hover:font-bold text-base">
                        <strong className='hover:text-white hover:font-bold text-white font-bold py-2 px-4 rounded
   bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 
   shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out
   relative font-sans' >{data.buy_tokens.text}</strong>
                    </Link>
                    <br />
                    <i>{data.buy_tokens.note}</i>
                    <i>*{data.buy_tokens.disclaimer}*</i>
                </div>
                <br />
                <div>
                    <h1 className='text-xl sm:text-xl font-bold mb-6 px-10'>{data.october_giving.heading}</h1>
                </div>
                <div className='flex flex-col w-[60vw] h-[40vh] sm:h-[60vh] justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-40 sm:pl-40'>


                    <iframe
                        className='rounded sm:w-[50vw] sm:h-[25vw]'
                        src={data.october_giving.video_src}
                        title={data.october_giving.title}
                        style={{ border: 'none', width: '100%', height: '100%' }} // Set iframe to fill the container
                        allow={data.october_giving.video.allow.join(', ')}
                    ></iframe>

                </div>
                <br />
                <div className='rounded w-[83%] h-50 text-wrap text-justify flex-col pr-0 pl-0 sm:pr-20 sm:pl-20  '>
                    <h3 className='text-justify text-sm sm:text-base sm:pr-60 sm:pl-60 font-bold'>{data.feed_ontario.heading}</h3>
                    <p className='text-justify text-sm sm:text-base  sm:pr-60 sm:pl-60'>{data.feed_ontario.description}</p>
                </div>
                <br />
                <div>
                    <iframe
                        className='rounded sm:w-[40vw] sm:h-[25vw]'
                        src={data.october_giving.video.src}
                        title={data.october_giving.video.title}
                        allow={data.october_giving.video.allow.join(', ')}
                    ></iframe>
                </div>
                <br />

            </div >
            <div className='font-sans'>
                <Footer />
            </div>
        </div >
    )
}
