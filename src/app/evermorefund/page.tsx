'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function EvermoreFund() {
    return (
        <div style={{ fontFamily: 'Cinzel' }} className='' >
            <div className='flex flex-col justify-center align-center items-center text-[#E4E2DD] '>
                <Navbar />
                <div className='text-xl sm:text-2xl font-bold mb-6'>
                    <h1>The Evermore Fund</h1>
                </div>
                <div className=' flex flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-20 sm:pl-20'>
                    <Image className="  radius-3xl  mb-10" src="/evermorefund.png" alt='profile-image' width={600} height={200}></Image>
                    <div className='rounded w-[80%] h-50 text-wrap text-justify flex-col '>
                        <p className='text-justify text-sm sm:text-base mt-4 sm:pr-60 sm:pl-60  '>
                            The Evermore Fund is a year-long initiative by the Sheridan Swiftie Club to support our activities and contribute to charitable causes. By purchasing “Evermore Tokens,” you can participate in our exciting club events and help us give back to the community. Whether it&apos;s through attending events or donating, each contribution helps us create a positive impact. This fundraiser is even more special as we celebrate the 1-year anniversary of the Sheridan Swiftie Club on <i>October 2nd, 2024!</i> The Evermore Fund will kick off on October 1st, 2024, marking a new chapter for our club. Join us throughout the year and make a difference—one token at a time!
                        </p>
                        <p className='text-justify text-sm sm:text-base mt-4 sm:pr-60 sm:pl-60' >The Evermore Fund will run from <i><strong>October 1, 2024</strong></i> through the end of the academic year in April 2025. Participants can contribute anytime by purchasing tokens for entry to our events or as donations. Specific event timings will be shared on our website and social media channels.</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-40 sm:pl-40'>

                    <Link href="/evermorefund" prefetch={false} className="hover:text-white hover:font-bold text-base"><strong> Buy Tokens</strong></Link>
                    <i>you can buy tokens starting at $5</i>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
