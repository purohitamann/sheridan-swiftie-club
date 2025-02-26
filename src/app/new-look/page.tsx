'use client';
import React, { useEffect } from 'react';
import ClubLogo from '@/components/NewLook/ClubLogo';
import Image from 'next/image';
import Link from 'next/link';
import Mirrorball from '@/components/NewLook/Mirrorball';
import FanClubLetter from '@/components/NewLook/FanClubLetter';
import Footer from '@/components/NewLook/Footer';
import Carousel from '@/components/NewLook/Carousel';
import Gallery from '@/components/NewLook/Gallery';

const Home: React.FC = () => {
  useEffect(() => {
    const audio = new Audio('/so-high-school-intro.mp3');
    audio.volume = 0.5;
    audio.play();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-slack font-bold items-center p-5 sm:p-10">
      <div className="flex flex-col justify-center items-center text-center pt-20 ">
        <ClubLogo />
      </div>
      <div className='flex justify-center items-center w-full h-auto'>
        <Image src="/new-look/hero.jpg" className='sm:w-2/3 w-full h-auto' alt="Taylor Swift" width={400} height={400} />
      </div>
      <div className='p-4' >
        <div className='flex flex-col items-center uppercase font-xs' >
          <h1 className='font-futura font-extrabold'>Hush, we're not the regulars</h1>
          <h1 className='font-futura font-extrabold'>We're Shining just for you!</h1>
        </div>

        <div className='flex flex-col items-center pt-10'>
          <ul className='flex justify-center space-x-4 font-sans font-bold text-sm uppercase'>
            <li className='text-[#2a93b3]'><Link href={"/about"} >About</Link></li>
            <li className='text-[#289c6c]'><Link href={"/"} >Home</Link></li>
            <li className='text-[#ECB22E]'><Link href={"/executives"} >Executives</Link></li>
            <li className='text-[#c52f2f]'><Link href={"/events"} >Events</Link></li>
            {/* <li>Gallery</li> */}
          </ul>
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
