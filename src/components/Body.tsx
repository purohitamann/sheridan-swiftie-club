import React from 'react';
import LinkComponent from '../components/LinkComponent/LinkComponent';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Executives from '../components/Executives';
import Link from 'next/link';
import TypewriterEffect from './TypeWriterEffect/TypeWriterEffect';

const Body: React.FC = () => {
    return (
        <section className="flex flex-col justify-start items-center p-4 sm:p-10 w-[100vw] min-h-[100vh]">
            {/* Navigation Links */}
            <section className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-[#E4E2DD] mb-6'>
                <Link href="/" className='hover:text-white hover:font-bold text-sm sm:text-base'>Home</Link>
                <Link href="/evermorefund" className='hover:text-white hover:font-bold text-sm sm:text-base'>Donate</Link>
                <Link href="https://forms.gle/Fc63swf8ZpRHEG9r9" className='hover:text-white hover:font-bold text-sm sm:text-base'>Join The Team</Link>
                <Link href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" className='hover:text-white hover:font-bold text-sm sm:text-base'>Events</Link>
            </section>

            {/* Main Content */}
            <div
                style={{ fontFamily: 'Cinzel' }}
                className="flex flex-col justify-center items-center text-[#E4E2DD] text-base sm:text-lg rounded-md max-w-4xl text-center space-y-8 px-4"
            >
                {/* Introduction Section */}
                <div className='mb-10'>
                    <h1 className="text-xl sm:text-2xl font-bold">
                        The Sheridan Swiftie Club: <i>A Place for All Swifties!</i>
                    </h1>
                    <p className='text-justify text-sm sm:text-base mt-4'>
                        Welcome to the Sheridan Swiftie Club, the ultimate fan community for Taylor Swift enthusiasts at Sheridan College! Whether you&apos;re a casual listener or an unwavering superfan, you&apos;ll find a warm, inviting space to celebrate everything about Taylor Swift&apos;s music, style, and cultural impact. Our club is a vibrant and inclusive environment where Swifties from all walks of life come together to connect, share, and appreciate the artistry and influence of one of the world&apos;s most beloved music icons.
                    </p>
                    <p className='text-justify text-sm sm:text-base mt-4'>
                        Join us for events, discussions, and more. We can&apos;t wait to meet you!
                    </p>
                </div>

                {/* History Section */}
                <div className='mb-10'>
                    <h1 className="text-xl sm:text-2xl font-bold">A Journey from Humble Beginnings</h1>
                    <p className='text-justify text-sm sm:text-base mt-4'>
                        The Sheridan Swiftie Club was founded on October 2, 2023, by a group of just four passionate students who shared a common love for Taylor Swift. With nothing but a shared vision and excitement for Taylor&apos;s work, these founding members set out to create a space where students at Sheridan College could bond over their mutual admiration for her music and impact. What started as a small group of fans has since blossomed into a thriving community, with nine dedicated executive members now leading the charge.
                    </p>
                    <p className='text-justify text-sm sm:text-base mt-4'>
                        From those early days, the club has grown beyond our wildest expectations. Thanks to the overwhelming support from Swifties across Sheridan&apos;s Trafalgar Campus, we&apos;ve expanded our team, strengthened our presence, and organized countless events to engage our members. But our journey is far from over! We are always looking for new ways to expand and improve our community, and that&apos;s where you come in!
                    </p>
                </div>

                {/* Evermore Fund Section */}
                <div className='mb-10'>
                    <h1 className="text-xl sm:text-2xl font-bold"><a href="/evermorefund" className='hover:text-white hover:font-bold ' >Evermore Fund:</a> <i>Support Sheridan Swiftie Club & Make a Difference</i></h1>
                    <p className='text-justify text-sm sm:text-base mt-4'>
                        To celebrate the Sheridan Swiftie Club&apos;s first anniversary, we&apos;re thrilled to announce the Evermore Fund, our year-long initiative aimed at supporting club activities and contributing to charitable causes. Starting on October 1, 2024, this exciting new chapter allows both members and supporters to make a positive impact on the club and the community.
                    </p>
                    <br />
                    <p>buy <a href="/evermorefund" className='hover:text-white hover:font-bold text-white font-bold py-2 px-4 rounded
   bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 
   shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out
   relative font-sans' >Evermore</a> tokens to support & win <i>TTPD Tote Bags</i></p>
                </div>
            </div>

            {/* Executives Section */}
            <section className="flex flex-col justify-center items-center align-center py-14 text-[#E4E2DD] w-full">
                <Executives />
            </section>

            {/* Links and Typewriter Section */}
            <div className="flex flex-col items-center justify-center w-full h-[20vh] mb-10 space-y-10 sm:mt-10">
                <LinkComponent />
                <TypewriterEffect />

            </div>
            <div className='flex justify-center '>
                <Footer />
            </div>


        </section>
    );
};

export default Body;
