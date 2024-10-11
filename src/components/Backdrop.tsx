import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar';
import { Kaushan_Script } from 'next/font/google';
import { Cinzel } from 'next/font/google';
const kaushan = Kaushan_Script({ subsets: ['latin'], weight: '400' });
const alfa = Cinzel({ subsets: ['latin'], weight: '400' });

interface BackdropProps {
    children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
    return (
        <div className="w-full h-screen bg-[#F1EBDB] flex justify-center items-center relative overflow-hidden">
            <div className={`absolute z-20 w-full top-0 text-[#0060FF] ${alfa.className} `}>
                <Navbar />
            </div>
            <div className="relative ">


                {/* Decorative Images */}
                <div className="absolute sm:-right-96 w-full h-full left-3/4 rotate-2 sm:-top-20 -top-[80%]">
                    <Image
                        src="/assets/drop.png"
                        alt="drop-bg"
                        width={250}
                        height={250}
                        className="opacity-50 rotate-45 sm:w-[250px] sm:h-[250px] w-[250px] h-[250px] -right-20 "
                    />

                    <Image
                        src="/assets/tune.png"
                        alt="logo"
                        width={90}
                        height={50}
                        className="relative bottom-44 left-10 p-2 sm:w-[90px] sm:h-[60px] w-[80px] h-[80px] "
                    />

                    <Image
                        src="/assets/tune.png"
                        alt="logo"
                        width={90}
                        height={50}
                        className="relative rotate-45 bottom-40 left-10 sm:w-[90px] sm:h-[60px] w-[45px] h-[45px] "
                    />
                </div>
                <div className="p-2 rotate-2  ">
                    {children}
                </div>

                <div className="absolute sm:top-20 sm:left-1/2 sm:-right-10 sm:bottom-72 ">
                    <Image
                        src="/assets/tune.png"
                        alt="logo"
                        width={90}
                        height={50}
                        className="relative z-10 top-20 sm:top-10 rotate-45  sm:right-80 sm:w-[90px] sm:h-[50px] w-[100px] h-[100px] "
                    />

                    <Image
                        src="/assets/tune.png"
                        alt="logo"
                        width={90}
                        height={50}
                        className="relative top-10 z-10 right-1/4 sm:right-96 sm:w-[90px] sm:h-[50px] w-[45px] h-[45px] "
                    />

                    <Image
                        src="/assets/drop.png"
                        alt="drop-bg"
                        width={250}
                        height={250}
                        className="relative  bottom-1/3 sm:top-3/4 rotate-90 sm:right-[180%] right-20  opacity-50  sm:w-[260px] sm:h-[260px] w-[200px] h-[200px] "
                    />
                </div>

            </div>
        </div>
    )
}

export default Backdrop;
