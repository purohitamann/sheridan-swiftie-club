"use client"; // Ensure this is included for the client-side execution

import Link from 'next/link'; // Import Link for navigation

const events = [
  {
    id: 'event-1',
    title: 'Swiftie Night',
    date: 'March 15, 2025',
    location: 'Sheridan College, Trafalgar',
    description: 'A night dedicated to celebrating Taylor Swift’s music with games, food, and fans!',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 'event-2',
    title: '1989 Listening Party',
    date: 'April 10, 2025',
    location: 'Downtown Toronto',
    description: 'Join us for a listening party of Taylor Swift’s iconic album, 1989, and meet fellow fans!',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 'event-3',
    title: 'Annual Swiftie Fundraiser',
    date: 'May 20, 2025',
    location: 'Sheridan College, Trafalgar',
    description: 'Our annual fundraiser to support local charities, featuring live music and auctions.',
    image: 'https://via.placeholder.com/500x300',
  },
];

const EventsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Upcoming Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p className="mt-2 text-sm text-gray-700">{event.description}</p>
            </div>
            <div className="p-4">
              <Link href={`/info/events/${event.id}`} passHref>
                <button className="px-4 py-2 bg-[#2EB67D] text-white rounded-lg hover:bg-[#218a5e] transition-colors duration-300">
                  View Event
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
