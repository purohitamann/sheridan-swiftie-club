'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Mirrorball from '@/components/NewLook/Mirrorball';
import FanClubLetter from '@/components/NewLook/FanClubLetter';
import Footer from '@/components/NewLook/Footer';
import Carousel from '@/components/NewLook/Carousel';
import Gallery from '@/components/NewLook/Gallery';
import Header from '@/components/NewLook/Header';


const Home: React.FC = () => {
  // useEffect(() => {
  //   const audio = new Audio('/so-high-school-intro.mp3');
  // }, []);

  return (    <div className="flex flex-col min-h-screen bg-black pt-24 font-sans items-center">
      {/* Hero Section with Quote and Upload Form */}
      <div className="w-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 font-heading tracking-wide leading-tight">
              "And, baby that's <span className="text-orange-900 font-extrabold">SHOW BUSINESS</span> for you"
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8 font-sans">
              2 Years of Sheridan Swiftie Club, <span className="text-orange-200 font-bold">It's a brand new era!</span>
            </p>
            <Link href="/raffle">
              <button className="bg-black text-orange-500 font-bold py-4 px-8 rounded-lg text-xl border-2 border-black hover:bg-orange-900 hover:text-orange-100 transition-all duration-200 transform hover:scale-105">
                Enter Movie Ticket Giveaway
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full h-auto mt-12'>
        <Image src="/new-look/hero.JPG" className='sm:w-2/3 w-full h-auto rounded-lg shadow-2xl border-4 border-orange-500' alt="Taylor Swift" width={400} height={400} />
      </div>

      <div className='flex justify-center items-center w-full h-auto '>
      </div>
      <div className='' >
        <div className='flex flex-col items-center uppercase font-xs mt-8' >
          <h1 className='font-heading font-extrabold text-orange-500'>Hush, we're not the regulars</h1>
          <h1 className='font-heading font-extrabold text-orange-500'>We're Shining just for you!</h1>
        </div>
        
        <div className="mt-10 mb-10">
          <h2 className="text-center font-heading font-bold text-xl mb-4 text-orange-500">Our Upcoming Events</h2>
          <Carousel />
        </div>
        
      
          <FanClubLetter />

        <Mirrorball />
        <div>
          <Gallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
