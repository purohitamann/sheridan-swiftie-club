"use client"; 

import { useParams, useRouter } from "next/navigation";
import executivesData from '@/data/executives.json';

const ExecutiveProfile = () => {
  const { id } = useParams(); 
  const router = useRouter();
  
  
  if (!id) {
    return (
      <div className="min-h-screen pt-40 bg-white flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-sans mb-4">Profile Not Found</h1>
          <p className="mb-8 font-slack text-xl">Sorry, we couldn't find the executive profile you're looking for.</p>
          <button
            onClick={() => router.push('/info/executives')}
            className="px-6 py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e] font-slack text-lg"
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  const executive = executivesData.find(exec => exec.id === id);

  return (
    <div className="min-h-screen pt-40 bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={executive?.profilePic} 
                alt={executive?.fullName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold font-sans text-gray-800 mb-2">{executive?.fullName}</h1>
              <p className="text-xl font-slack text-[#2EB67D] mb-2">{executive?.role}</p>
              <p className="text-sm font-slack text-gray-600 mb-6">{executive?.pronouns}</p>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-lg font-slack text-gray-700 leading-relaxed">{executive?.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/info/executives')}
            className="px-6 py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e] font-slack text-lg"
          >
            Back to Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveProfile;
