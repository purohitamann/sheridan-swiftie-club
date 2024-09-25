'use client';
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer';
import Link from 'next/link';
import TypewriterEffect from '@/components/TypeWriterEffect/TypeWriterEffect';
import Navbar from '@/components/Navbar';

function Exec() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <> {mounted && (<div className="flex flex-col justify-center items-center  p-6 sm:p-10 min-w-full min-h-[100vh] " style={{ fontFamily: 'Cinzel' }}>
            {/* Navigation Links */}
            <Navbar />

            {/* Banner Section */}
            <div className="w-full px-4 sm:px-10">
                <Banner title="SSC Executives 2024-25" subtitle="Meet your Executive Team">
                    <div className="flex flex-col justify-center items-center text-[#E4E2DD] w-full rounded">
                        <h1 className="italic text-2xl sm:text-4xl">Executive Roster</h1>
                    </div>
                </Banner>
            </div>

            {/* Typewriter Effect */}
            <div className="my-6">
                <TypewriterEffect />
            </div>

            {/* Profiles Section */}
            <div className="flex flex-col justify-center items-center space-y-10 sm:px-10">
                {/* Aman Hiran Purohit */}
                <Profile
                    fullName="Aman Hiran Purohit"
                    profilePic="/executives/AP.png"
                    role="President"
                    pronouns="He/Him"
                    description="I&apos;m Aman, the architect behind the Sheridan Swiftie Club and proud to serve as its President. As we celebrate the club&apos;s 1st anniversary, I&apos;m thrilled about the exciting events and meetups we have planned this fall. It&apos;s been an amazing journey, and I can&apos;t wait to see how we continue to grow this vibrant community!"
                />

                {/* Vidhi Kalal */}
                <Profile
                    fullName="Vidhi Kalal"
                    profilePic="/executives/VK.png"
                    role="Vice President - Events"
                    pronouns="She/Her"
                    description="Hi, I&apos;m Vidhi, your VP of Events! Organizing events and boosting engagement is my passion. As we head into this new semester, I&apos;m excited to host memorable events and foster even more participation within our community. Let&apos;s make this year full of amazing Swiftie moments!"
                />

                {/* Cris Cabrera */}
                <Profile
                    fullName="Cris Cabrera"
                    profilePic="/executives/CC.png"
                    role="Vice President - Engagement"
                    pronouns="She/They"
                    description="Hey there! I&apos;m Cris, your VP of Engagement, and I&apos;m super excited to connect with fellow Swifties this year. I love discussing music with no judgment, especially Taylor Swift&apos;s! I can&apos;t wait to meet new faces and create awesome memories with everyone. Let&apos;s make this year unforgettable!"
                />

                {/* Abira Ester Demello */}
                <Profile
                    fullName="Abira Ester Demello"
                    role="Outreach & Engagement Coordinator"
                    profilePic="/executives/AD.png"
                    pronouns="She/Her"
                    description="Hi, I&apos;m Abira, a third-year Computer Science student and the Outreach & Engagement Coordinator at SSC. Music has always been a major influence in my life, and Taylor Swift&apos;s work is no exception. I&apos;m excited to help organize events and contribute to growing this amazing Swiftie community!"
                />

                {/* Siddharth Lamba */}
                <Profile
                    fullName="Siddharth Lamba"
                    profilePic="/executives/SL.png"
                    role="Events Lead"
                    pronouns="He/Him"
                    description="Hello, I&apos;m Siddharth, the Events Lead at SSC. I&apos;m looking forward to getting to know all the new members and collaborating with everyone to create some unforgettable events this year. Let&apos;s make this fall semester a great one for all Swifties!"
                />

                {/* Prabal Manchanda */}
                <Profile
                    fullName="Prabal Manchanda"
                    profilePic="/executives/PM.png"
                    role="Operations Manager"
                    pronouns="He/Him"
                    description="Hey, Swifties! I&apos;m Prabal, your Operations Manager. This fall, I&apos;m excited about our upcoming events and the chance to welcome new members. We&apos;ve got some fun activities planned to explore Taylor&apos;s music and her journey as an artist. Can&apos;t wait to see you all at the events!"
                />

                {/* Aditya Sharma */}
                <Profile
                    fullName="Aditya Sharma"
                    profilePic="/executives/AS.png"
                    role="Social Media Manager"
                    pronouns="He/Him"
                    description="Hi, I&apos;m Aditya, your Social Media Manager. Designing graphics and animations is my passion, and I&apos;m excited to create engaging content for the club. Let&apos;s make sure SSC&apos;s presence shines online and keeps everyone connected and excited for what&apos;s next!"
                />

                {/* Tanya Arora */}
                <Profile
                    fullName="Tanya Arora"
                    profilePic="/executives/TA.png"
                    role="Advisor"
                    pronouns="She/Her"
                    description="Hey, I&apos;m Tanya, and I&apos;m thrilled to be the club&apos;s Advisor this year. I&apos;m embracing my own personal growth journey, much like Taylor in her *1989* era. I look forward to advising the club and ensuring we continue to have impactful events and a strong presence on campus."
                />
            </div>

            {/* Footer */}
            <div className="flex justify-center m-0 p-0">
                <Footer />
            </div>
        </div>

        )}

        </>
    );
}

export default Exec;
