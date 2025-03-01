"use client"; // For client-side execution

import { useParams, useRouter } from "next/navigation";
import eventsData from '@/data/events.json';

const EventDetailPage = () => {
  const { id } = useParams(); // Get the dynamic ID from the route params
  const router = useRouter();
  const { events } = eventsData;
  
  // Convert id to number
  const eventId = parseInt(id as string, 10);
  
  // Find the event
  const event = events.find(e => e.key === eventId);

  // Function to format date
  const formatDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (!event) {
    return (
      <div className="min-h-screen pt-40 bg-white flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-sans mb-4">Event Not Found</h1>
          <p className="mb-8 font-slack text-xl">Sorry, we couldn't find the event you're looking for.</p>
          <button
            onClick={() => router.push('/info/events')}
            className="px-6 py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e] font-slack text-lg"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
          <div className="relative">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-80 object-cover" 
            />
            <div className="absolute top-0 right-0 bg-[#2EB67D] text-white px-4 py-2 m-4 rounded-lg text-sm font-slack">
              {event.type}
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-sans text-gray-800 mb-6">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#2EB67D] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="text-sm font-slack text-gray-500">Date</p>
                  <p className="font-sans">{formatDate(event.date)}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#2EB67D] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-slack text-gray-500">Time</p>
                  <p className="font-sans">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#2EB67D] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-slack text-gray-500">Location</p>
                  <p className="font-sans">{event.location}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold font-sans text-gray-800 mb-4">About This Event</h2>
              <p className="text-lg font-slack text-gray-700 leading-relaxed whitespace-pre-line">{event.description}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/info/events')}
            className="px-6 py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e] font-slack text-lg"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
