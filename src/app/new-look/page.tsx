'use client';
import React, { useEffect } from 'react';
import ClubLogo from '@/components/NewLook/ClubLogo';
import Image from 'next/image';
const Home: React.FC = () => {
  useEffect(() => {
    const audio = new Audio('/so-high-school-intro.mp3');
    audio.volume = 0.5;
    audio.play();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white font-slack font-bold">
      <div className="flex flex-col justify-center items-center text-center p-20 ">
     
        <ClubLogo />
        <Image src="/new-look/hero.jpg" className='sm:w-2/3 w-full h-auto' alt="Taylor Swift" width={400} height={400} />
        <div>
            <div className='flex flex-col items-center uppercase  font-sm' >
            <h1 className='font-futura'>Glad you're here.</h1>
            <h1 className='font-futura '>We hope you stay around for a long time.</h1>


            </div>   
      </div>
          
          <div className='flex flex-col items-center pt-10'>  

            <ul className='flex justify-center space-x-4 font-sans font-bold text-sm  uppercase '>
                <li className='text-[#2a93b3]'>About</li>
                <li className='text-[#289c6c]'>Home</li>
                <li className='text-[#ECB22E]'>Executives</li>
                <li className='text-[#c52f2f]'>Events</li>
                {/* <li>Gallery</li> */}
            </ul>
          </div>
      </div>
  




      {/* <Body /> */}
    </main>
  );
};


  
export default Home;
