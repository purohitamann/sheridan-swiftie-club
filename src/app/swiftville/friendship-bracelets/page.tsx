'use client';
import Navbar from '@/components/Navbar';
import RSVPForm from '@/components/RSVPForm';
import React from 'react';

export default function page() {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-50'>
            <Navbar />
            <h1>Friendship Bracelets</h1>
            <RSVPForm formTitle="Friendship Bracelets" formDescription="Let's prepare for the eras tour! " currentEventId={102} currentEventCampus="Trafalgar Campus" />
        </div>
    );
}

