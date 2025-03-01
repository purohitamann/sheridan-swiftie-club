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

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24 font-slack font-bold items-center">
      <div className='flex justify-center items-center w-full h-auto '>
        <Image src="/new-look/hero.JPG" className='sm:w-2/3 w-full h-auto' alt="Taylor Swift" width={400} height={400} />
      </div>

      <div className='flex justify-center items-center w-full h-auto '>
      </div>
      <div className='' >
        <div className='flex flex-col items-center uppercase font-xs' >
          <h1 className='font-futura font-extrabold'>Hush, we're not the regulars</h1>
          <h1 className='font-futura font-extrabold'>We're Shining just for you!</h1>
        </div>
        
        <div className="mt-10 mb-10">
          <h2 className="text-center font-futura font-bold text-xl mb-4">Our Upcoming Events</h2>
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
