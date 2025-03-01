"use client"; // Ensure this is included for the client-side execution

import Link from 'next/link'; // Import Link for navigation
import { useState } from 'react';
import executivesData from '@/data/executives.json';
import Countdown from '@/components/NewLook/Countdown';

const ExecutiveRoster = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pt-40 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans text-center font-bold mb-4">Our Team</h1>
        <p className="text-center text-lg mb-12 font-slack text-gray-600">Meet the passionate individuals behind Sheridan Swiftie Club</p>
        <div className="flex flex-col items-center ">
      <h1 className="text-lg font-bold font-sans mb-6 bg-[#c52f2f] text-white p-2 rounded uppercase">Election is LIVE! Voting is happening now!</h1>
      <p className='text-sm font-mono pb-5'>voting lines are open till 13:13 5th March, Wednesday!</p>
      <div className='flex flex-col items-center p-3 pb-6 rounded-lg'>

      <Link href="https://sheridancollege.campuslabs.ca/engage/submitter/election/start/19332" > <button className="px-4 py-2 uppercase bg-[#2eb4b6] text-white rounded-lg hover:bg-[#cdc167] transition-colors duration-300 font-slack text-lg">Vote Now</button></Link>

      </div>
      <Countdown targetDate="2025-03-05T13:13:13" />
     
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {executivesData.map((exec, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredId(exec.fullName)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={exec.profilePic} 
                  alt={exec.fullName} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: hoveredId === exec.fullName ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-slack">{exec.pronouns}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold font-sans text-gray-800 mb-1">{exec.fullName}</h3>
                <p className="text-md font-slack text-[#2EB67D] mb-3">{exec.role}</p>
                
                <Link href={`/info/executives/${exec.id}`} passHref>
                  <button className="w-full mt-2 px-4 py-2 bg-white border border-[#2EB67D] text-[#2EB67D] rounded-lg hover:bg-[#2EB67D] hover:text-white transition-colors duration-300 font-slack">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveRoster;
