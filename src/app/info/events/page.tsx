"use client"; // Ensure this is included for the client-side execution

import Link from 'next/link'; // Import Link for navigation
import { useState } from 'react';
import eventsData from '@/data/events.json';
import Footer from '@/components/NewLook/Footer';

const EventsPage = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { events } = eventsData;


  const formatDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };


  const isEventPassed = (dateStr: string) => {
    const [month, day, year] = dateStr.split('/');
    const eventDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

 
  const isComingSoon = (dateStr: string) => {
    const [month, day, year] = dateStr.split('/');
    const eventDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const twoWeeksFromNow = new Date(today);
    twoWeeksFromNow.setDate(today.getDate() + 14);
    
    return eventDate >= today && eventDate <= twoWeeksFromNow;
  };


  const comingSoonEvents = events.filter(event => isComingSoon(event.date));
  const upcomingEvents = events.filter(event => !isEventPassed(event.date) && !isComingSoon(event.date));
  const pastEvents = events.filter(event => isEventPassed(event.date));


  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <div 
      key={event.key} 
      className="bg-white  rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHoveredId(event.key)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ 
            transform: hoveredId === event.key ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute top-0 right-0 bg-[#2EB67D] text-white px-3 py-1 m-2 rounded-full text-sm font-slack">
          {event.type}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold font-sans text-gray-800">{event.title}</h3>
        </div>
        
        <div className="flex items-center mb-3">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p className="text-sm font-slack text-gray-600">{formatDate(event.date)}</p>
        </div>
        
        <div className="flex items-center mb-3">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm font-slack text-gray-600">{event.time}</p>
        </div>
        
        <div className="flex items-center mb-5">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <p className="text-sm font-slack text-gray-600">{event.location}</p>
        </div>
        
        <Link href={`/info/events/${event.key}`} passHref>
          <button className="w-full mt-2 px-4 py-2 bg-white border border-[#2EB67D] text-[#2EB67D] rounded-lg hover:bg-[#2EB67D] hover:text-white transition-colors duration-300 font-slack">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-40 bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans text-center font-bold mb-4">Events</h1>
        <p className="text-center text-lg mb-12 font-slack text-gray-600">Join us for these exciting Swiftie gatherings</p>
        
        {/* Coming Soon Events Section */}
        {comingSoonEvents.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-800">Coming Soon</h2>
              <span className="ml-3 px-3 py-1 bg-red-500 text-white text-sm font-slack rounded-full animate-pulse">
                New Events!
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoonEvents.map((event) => (
                <div key={event.key} className="relative">
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-red-500 text-white text-xs font-slack rounded-full shadow-lg">
                      Coming Soon!
                    </span>
                  </div>
                  <div className="border-2 border-red-500 rounded-lg p-1">
                    <EventCard event={event} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        

        {upcomingEvents.length >= 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-sans font-bold mb-6 text-gray-800">Upcoming Events</h2>
{upcomingEvents.length == 0 && (
  <div className="text-center py-12">
    <p className="text-xl font-slack text-gray-600">No upcoming events scheduled at this time. Check back soon!</p>
  </div>
)}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {upcomingEvents.map((event) => (
                <EventCard key={event.key} event={event} />
              ))}
            </div>
          </>
        )}
        

        {pastEvents.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-sans font-bold mb-6 text-gray-800">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.key} className="opacity-80 grayscale-[30%]">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </>
        )}
        
 
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl font-slack text-gray-600">No events scheduled at this time. Check back soon!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
