import Article from '@/components/Article'
import React from 'react'
import WinterExec from '/winter.svg'
import "./executive.css";
import "../globals.css";
import Banner from '../../components/Banner'
import Profile from '../../components/Profile'
function exec() {
    return (
        <section className='flex-col' >

            <div className="winter">

            </div>
            <div className="flex pt-5">
                <Banner title='SSC Executives 2024-25' subtitle='Meet your Executive Team' >
                    <div className="flex flex-col justify-center items-center align-center  text-[#E4E2DD] w-full h-full rounded">
                        <h1>Coming Soon!</h1>
                    </div>
                </Banner>
            </div>



            <section className='flex-col p-0 m:0 sm:flex sm:mr-10 sm:ml-10 sm:p-40'>
                <Profile fullName='Aman Hiran Purohit' profilePic='/executives/AP.png' role='President' pronouns='He/Him' description='I am the architect who drew up the plan for the club. I am also the President of the club. My pride and joy the Sheridan Swiftie Club is turning 1, we are working very hard in building this amazing community. Looking foarward to all the events and meetups we have planned this fall semester! ' />
                <Profile fullName='Vidhi Kalal' profilePic='/executives/VK.png' role='Vice President - Events' pronouns='She/Her' description='Hosting more events and getting surplus engagement. TTPD : I can do it with a broken heart . I think it resonates a lot with that.  ' />
                <Profile fullName='Cris Cabrera' profilePic='/executives/CC.png' role='Vice President - Engagement' pronouns='She/They' description='Howdy! My name is Cris and I’m enchanted to be the new VP of the Sheridan Swiftie Club this year! The good news about that is that I have a place where I can talk about music that I enjoy with other people without being judged! The bad news is that I will never beat the allegations that I listen to Taylor Swift music way too much. But hey, haters gonna hate! I hope to see a lot of familiar and new faces this year at events and in the club! I’m super excited to plan and host events!' />
                <Profile fullName='Siddharth Lamba' profilePic='/executives/SL.png' role='Events Lead' pronouns='He/Him' description='Events Lead at SSC. Looking forward to knowing new members and meeting new peeps!' />
                <Profile fullName='Prabal Manchanda' profilePic='/executives/PM.png' role='Operations Manager' pronouns='He/Him' description="Hello, Swifties! I'm Prabal Manchanda, your Operations Manager here at the Sheridan Swiftie Club. This fall, I'm especially excited about our upcoming events and the chance to welcome new members into our community. We've got some fun activities planned that will dive deep into Taylor's discography and her evolution as an artist. I'm looking forward to seeing how her music continues to inspire and resonate with us all in new and meaningful ways." />
                <Profile fullName='Aditya Sharma' profilePic='/executives/AD.png' role='Social Media Manager' pronouns='He/Him' description='Your Mind is everything you become what you believe in. Creating lots of graphics designs and poster and unleashing my potential, i love design and animation its a hobby for me.' />
                <Profile fullName='Tanya Arora' profilePic='/executives/TA.png' role='Advisor' pronouns='She/Her' description="Argumentative antithetical dream girl. I'm in my Taylor Swift's 1989 era because I'm embracing a season of reinvention and self-discovery, much like how Taylor redefined her sound with this album. It's a time of feeling empowered, letting go of the past, and confidently stepping into new opportunities. *1989* represents a mix of nostalgia and forward momentum for me—I'm celebrating personal growth while enjoying life's vibrant moments, just like the upbeat and adventurous vibes of the album. More events and publicizing the club more. " />
            </section>
        </section>
    )
}

export default exec

