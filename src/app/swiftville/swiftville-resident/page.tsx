'use client';
import RSVPForm from '@/components/RSVPForm';
import React from 'react';


const page = () => {


    return (
        <div className='flex flex-col justify-center items-center bg-slate-50'>

            <h1>Become a Swiftville Resident! </h1>
            <p>Apply to become a Swiftville Resident, prepare for the resident test!  </p>
            <RSVPForm formTitle="Swiftville Resident" formDescription="Apply to become a Swiftville citizen, prepare for the resident test!  " currentEventId={100} currentEventCampus="Trafalgar Campus" />

        </div>
    );
};

export default page;