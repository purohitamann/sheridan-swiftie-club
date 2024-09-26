'use client';
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer';
import Link from 'next/link';
import TypewriterEffect from '@/components/TypeWriterEffect/TypeWriterEffect';
import Navbar from '@/components/Navbar';
import executivesData from '@/data/executives.json';

function Exec() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            {mounted && (
                <div className="flex flex-col justify-center items-center  p-6 sm:p-10 min-w-full min-h-[100vh] " style={{ fontFamily: 'Cinzel' }}>
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
                        {executivesData.map((executive: { fullName: string; profilePic: string; role: string; pronouns: string; description: string; }, index: React.Key | null | undefined) => (
                            <Profile
                                key={index}
                                fullName={executive.fullName}
                                profilePic={executive.profilePic}
                                role={executive.role}
                                pronouns={executive.pronouns}
                                description={executive.description}
                            />
                        ))}
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
