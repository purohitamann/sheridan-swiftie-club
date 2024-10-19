'use client';
import Navbar from '@/components/Navbar'
import RSVPForm from '@/components/RSVPForm'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-50'>
            <Navbar />
            <h1>Let&apos;s Get Ready For it...</h1>
            <RSVPForm formTitle="Ready for it?" formDescription="Let's prepare for the eras tour! " currentEventId={103} currentEventCampus="Trafalgar Campus" />
        </div>
    )
}
