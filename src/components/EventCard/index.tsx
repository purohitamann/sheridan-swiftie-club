import React from 'react'
import Image from 'next/image'
import { Cinzel } from 'next/font/google'
import SwiftvilleButton from '../SwiftvilleButton'
const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })
type Event = {
    title: string
    description: string
    date: string
    time: string
    location: string
    link: string
    image: string
    type: string
}
export default function index(event: Event) {

    return (
        <div className='flex flex-col h-full justify-center items-center align-center pr-0 pl-0 sm:pr-40 sm:pl-40 rounded mb-30 text-white'>
            <Image className='rounded' src={event.image} width={600} height={300} alt="event" />
            <br />
            <br />
            <div className={`text-center text-[#0060FF] rounded max-w-screen-sm h-50 text-wrap  flex-col ${cinzel.className} `}>
                <h1 className="font-bold">{event.title}</h1>
                <p className="font-sans text-justify p-5">{event.description}</p>
                <p className="font-thin" >{event.date}</p>
                <p className="font-thin">{event.time}</p>
                <p className="font-thin">{event.location}</p>
                <SwiftvilleButton string='RSVP' link={event.link} />
                <p className="font-thin lowercase font-mono  italic animate-blink ">{event.type}</p>
            </div>

        </div>
    )
}

