"use client"; // Ensure this is included for the client-side execution

import Link from 'next/link'; // Import Link for navigation

const executives = [
  { id: 'taylor-swift', name: 'Taylor Swift', position: 'President', program: 'Music Business', description: 'A global icon in music and leadership.' },
  { id: 'jack-antonoff', name: 'Jack Antonoff', position: 'Treasurer', program: 'Music Production', description: 'The mastermind behind many chart-topping hits.' },
  { id: 'phoebe-bridgers', name: 'Phoebe Bridgers', position: 'Secretary', program: 'Songwriting', description: 'A poet and lyricist with a love for indie music.' },
];

const ExecutiveRoster = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {executives.map((exec) => (
        <div key={exec.id} className="w-full sm:w-64 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800">{exec.name}</h3>
          <p className="text-md text-gray-600">{exec.position}</p>
          <p className="text-sm text-gray-500 mt-2">{exec.program}</p>
          <p className="text-xs text-gray-400 mt-2">{exec.description}</p>
          
          {/* Link to executive detail page */}
          <Link href={`/info/executives/${exec.id}`} passHref>
            <button className="mt-4 px-4 py-2 bg-[#2EB67D] text-white rounded-lg hover:bg-[#218a5e] transition-colors duration-300">
              View Profile
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExecutiveRoster;
