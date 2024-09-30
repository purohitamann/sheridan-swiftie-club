'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'


export default function EvermoreFund() {
    return (
        <div style={{ fontFamily: 'Cinzel' }} className='' >
            <div className='flex flex-col justify-center align-center items-center text-[#E4E2DD]  '>
                <Navbar />
                <div className='text-xl sm:text-2xl font-bold mb-6'>
                    <h1>The Evermore Fund</h1>
                </div>
                <div className=' flex flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-20 sm:pl-20'>
                    <Image className="  radius-3xl  mb-10" src="/evermorefund.gif" alt='profile-image' width={600} height={200} ></Image>
                    <div className='rounded w-[80%] h-50 text-wrap text-justify flex-col '>
                        <p className='text-justify text-sm sm:text-base mt-4 sm:pr-60 sm:pl-60  '>
                            The Evermore Fund is a month-to-month initiative by the Sheridan Swiftie Club to support our activities and contribute to charitable causes. By purchasing “Evermore Tokens,” you can participate in our exciting club events and help us give back to the community. Each contribution creates a positive impact. In October, we’re proud to announce that 75% of the proceeds will be directed to Feed Ontario, while 25% will cover the club's processing and management costs. You can buy tokens to enter the club's fair raffle and our upcoming event at the end of October. Join us as we celebrate the 1st anniversary of the Sheridan Swiftie Club on October 2nd, 2024!
                        </p>
                        <p className='text-justify text-sm sm:text-base mt-4 sm:pr-60 sm:pl-60' >The Evermore Fund will run from <i><strong>October 1, 2024</strong></i> through the end of the academic year in April 2025. Participants can contribute anytime by purchasing tokens for entry to our events or as donations. Specific event timings will be shared on our website and social media channels.</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 pr-0 pl-0 sm:pr-40 sm:pl-40'>

                    <Link href="/evermorefund" prefetch={false} className="hover:text-white hover:font-bold text-base"><strong> Buy Tokens</strong></Link>
                    <i>you can buy tokens starting at $5</i>
                </div>
                <br />
                <div>
                    <h1 className='text-xl sm:text-xl font-bold mb-6 px-10'>October Giving: The Evermore Fund x Feed Ontario</h1>
                </div>
                <div >
                    <iframe className='rounded  sm:w-[40vw] sm:h-[25vw]' src="https://www.youtube.com/embed/fVTrQ6E9BS8?si=imd2VgZOHDUZQM_s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <br />
                <div className='rounded w-[83%] h-50 text-wrap text-justify flex-col pr-0 pl-0 sm:pr-20 sm:pl-20  '>
                    <h3 className='text-justify text-sm sm:text-base sm:pr-60 sm:pl-60  font-bold'>Learn More About Feed Ontario </h3>
                    <p className='text-justify text-sm sm:text-base  sm:pr-60 sm:pl-60 '>Feed Ontario's food programs work in partnership with Ontario's agricultural, food, and grocery sectors to ensure food banks are stocked with the fresh, healthy food they need to support their communities. Join the Evermore Fund initiative to make an impact by purchasing a token from our site.</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
