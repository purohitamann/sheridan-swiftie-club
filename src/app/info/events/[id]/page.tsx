"use client"; // For client-side execution

import { useParams } from "next/navigation"; // Import useParams to get the dynamic route param

const eventDetails = {
  "event-1": {
    title: 'Swiftie Night',
    date: 'March 15, 2025',
    location: 'Sheridan College, Trafalgar',
    description: 'A night dedicated to celebrating Taylor Swift’s music with games, food, and fans!',
    image: 'https://via.placeholder.com/800x400',
    fullDescription: 'Join us for a fun-filled night with games, trivia, and a celebration of all things Taylor Swift. Meet other Swifties and enjoy a night of music and memories.',
  },
  "event-2": {
    title: '1989 Listening Party',
    date: 'April 10, 2025',
    location: 'Downtown Toronto',
    description: 'Join us for a listening party of Taylor Swift’s iconic album, 1989, and meet fellow fans!',
    image: 'https://via.placeholder.com/800x400',
    fullDescription: 'Enjoy the full 1989 album while bonding with fans who share your love for Taylor Swift’s music. The party will feature exclusive merch, drinks, and good vibes.',
  },
  "event-3": {
    title: 'Annual Swiftie Fundraiser',
    date: 'May 20, 2025',
    location: 'Sheridan College, Trafalgar',
    description: 'Our annual fundraiser to support local charities, featuring live music and auctions.',
    image: 'https://via.placeholder.com/800x400',
    fullDescription: 'Come and join us for our biggest fundraiser of the year, where we’ll have live performances, charity auctions, and much more. All proceeds go to local causes.',
  },
};

const EventDetailPage = () => {
  const { id } = useParams(); // Get the dynamic ID from the route params

  const event = eventDetails[id as keyof typeof eventDetails];

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="p-6">
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-72 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
          <p className="text-lg text-gray-600">{event.date}</p>
          <p className="text-md text-gray-600">{event.location}</p>
          <p className="mt-4 text-lg text-gray-700">{event.fullDescription}</p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e]"
        >
          Back to Events
        </button>
      </div>
    </div>
  );
};

export default EventDetailPage;
