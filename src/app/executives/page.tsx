import React from 'react';
import Banner from '../../components/Banner';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer';
import Link from 'next/link';

function Exec() {
    return (
        <section className="flex flex-col justify-center items-center p-6 sm:p-10 w-full min-h-[100vh]">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap');
            </style>
            {/* Navigation Links */}
            <section className="flex justify-center items-center space-x-6 text-[#E4E2DD] py-6">
                <Link href="/" className="hover:text-white hover:font-bold text-base">Home</Link>
                <Link href="https://forms.gle/Fc63swf8ZpRHEG9r9" className="hover:text-white hover:font-bold text-base">Join The Team</Link>
                <Link href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" className="hover:text-white hover:font-bold text-base">Events</Link>
            </section>

            {/* Banner Section */}
            <div className="w-full py-5 px-4 sm:px-10">
                <Banner title="SSC Executives 2024-25" subtitle="Meet your Executive Team">
                    <div className="flex flex-col justify-center items-center text-[#E4E2DD] w-full h-full rounded">
                        <h1 className="italic text-2xl sm:text-4xl">Executive Roster</h1>
                    </div>
                </Banner>
            </div>

            {/* Profiles Section */}
            <section className="flex flex-col justify-center items-center space-y-10 sm:space-y-16 w-full px-4 sm:px-10">
                <Profile
                    fullName="Aman Hiran Purohit"
                    profilePic="/executives/AP.png"
                    role="President"
                    pronouns="He/Him"
                    description="I'm Aman, the architect behind the Sheridan Swiftie Club and proud to serve as its President. As we celebrate the club's 1st anniversary, I'm thrilled about the exciting events and meetups we have planned this fall. It's been an amazing journey, and I can't wait to see how we continue to grow this vibrant community!"
                />

                <Profile
                    fullName="Vidhi Kalal"
                    profilePic="/executives/VK.png"
                    role="Vice President - Events"
                    pronouns="She/Her"
                    description="Hi, I'm Vidhi, your VP of Events! Organizing events and boosting engagement is my passion. As we head into this new semester, I’m excited to host memorable events and foster even more participation within our community. Let's make this year full of amazing Swiftie moments!"
                />

                <Profile
                    fullName="Cris Cabrera"
                    profilePic="/executives/CC.png"
                    role="Vice President - Engagement"
                    pronouns="She/They"
                    description="Hey there! I'm Cris, your VP of Engagement, and I'm super excited to connect with fellow Swifties this year. I love discussing music with no judgment, especially Taylor Swift's! I can’t wait to meet new faces and create awesome memories with everyone. Let’s make this year unforgettable!"
                />

                <Profile
                    fullName="Abira Ester Demello"
                    role="Outreach & Engagement Coordinator"
                    profilePic="/executives/AD.png"
                    pronouns="She/Her"
                    description="Hi, I'm Abira, a third-year Computer Science student and the Outreach & Engagement Coordinator at SSC. Music has always been a major influence in my life, and Taylor Swift's work is no exception. I’m excited to help organize events and contribute to growing this amazing Swiftie community!"
                />

                <Profile
                    fullName="Siddharth Lamba"
                    profilePic="/executives/SL.png"
                    role="Events Lead"
                    pronouns="He/Him"
                    description="Hello, I'm Siddharth, the Events Lead at SSC. I'm looking forward to getting to know all the new members and collaborating with everyone to create some unforgettable events this year. Let's make this fall semester a great one for all Swifties!"
                />

                <Profile
                    fullName="Prabal Manchanda"
                    profilePic="/executives/PM.png"
                    role="Operations Manager"
                    pronouns="He/Him"
                    description="Hey, Swifties! I'm Prabal, your Operations Manager. This fall, I’m excited about our upcoming events and the chance to welcome new members. We’ve got some fun activities planned to explore Taylor’s music and her journey as an artist. Can’t wait to see you all at the events!"
                />

                <Profile
                    fullName="Aditya Sharma"
                    profilePic="/executives/AS.png"
                    role="Social Media Manager"
                    pronouns="He/Him"
                    description="Hi, I'm Aditya, your Social Media Manager. Designing graphics and animations is my passion, and I’m excited to create engaging content for the club. Let’s make sure SSC’s presence shines online and keeps everyone connected and excited for what’s next!"
                />

                <Profile
                    fullName="Tanya Arora"
                    profilePic="/executives/TA.png"
                    role="Advisor"
                    pronouns="She/Her"
                    description="Hey, I'm Tanya, and I'm thrilled to be the club's Advisor this year. I'm embracing my own personal growth journey, much like Taylor in her *1989* era. I look forward to advising the club and ensuring we continue to have impactful events and a strong presence on campus."
                />
            </section>


        </section>
    )
}

export default Exec;
