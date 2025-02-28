"use client"; // Make sure this is included if you're using the App Directory

import { useParams } from "next/navigation"; // Import useParams from next/navigation

const executiveDetails = {
  "taylor-swift": { name: "Taylor Swift", position: "President", program: "Music Business", description: "A global icon in music and leadership." },
  "jack-antonoff": { name: "Jack Antonoff", position: "Treasurer", program: "Music Production", description: "The mastermind behind many chart-topping hits." },
  "phoebe-bridgers": { name: "Phoebe Bridgers", position: "Secretary", program: "Songwriting", description: "A poet and lyricist with a love for indie music." },
};

const ExecutiveProfile = () => {
  const { id } = useParams(); // Get the dynamic route parameter

  // If id doesn't exist, show loading state or error
  if (!id) {
    return <p>Loading...</p>;
  }

  const executive = executiveDetails[id as keyof typeof executiveDetails];

  // If the executive doesn't exist, show an error or fallback message
  if (!executive) {
    return <p>Executive not found.</p>;
  }

  return (
    <div className="flex flex-col items-center p-10 text-gray-900">
      <h1 className="text-4xl font-bold">{executive.name}</h1>
      <h2 className="text-xl text-gray-600">{executive.position}</h2>
      <p className="mt-4 text-lg font-semibold">{executive.program}</p>
      <p className="mt-2 max-w-lg text-center">{executive.description}</p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e]"
      >
        Back to Roster
      </button>
    </div>
  );
};

export default ExecutiveProfile;
