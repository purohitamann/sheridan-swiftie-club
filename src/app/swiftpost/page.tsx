"use client"; // Ensure this is included for client-side execution

import Link from 'next/link'; // For navigation to individual posts

const posts = [
  {
    id: 'post-1',
    title: 'February Newsletter - Swiftie Update',
    date: 'February 28, 2025',
    summary: 'Check out our February updates, including exciting club events and a message from our president.',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 'post-2',
    title: 'March Swiftie Hangout - Save the Date!',
    date: 'March 10, 2025',
    summary: 'Join us for our March Swiftie hangout event. Read all the details here.',
    image: 'https://via.placeholder.com/500x300',
  },
  {
    id: 'post-3',
    title: 'Swiftie Fundraiser Announcement',
    date: 'March 1, 2025',
    summary: 'We are hosting our annual fundraiser! Learn how you can support the cause.',
    image: 'https://via.placeholder.com/500x300',
  },
];

const SwiftPostPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">SwiftPost - Newsletters</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-sm text-gray-700">{post.summary}</p>
            </div>
            <div className="p-4">
              <Link href={`/swiftpost/${post.id}`} passHref>
                <button className="px-4 py-2 bg-[#2EB67D] text-white rounded-lg hover:bg-[#218a5e] transition-colors duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiftPostPage;
