"use client"; // For client-side execution

import { useParams } from 'next/navigation'; // Import useParams to get dynamic route param

const postDetails = {
  "post-1": {
    title: 'February Newsletter - Swiftie Update',
    date: 'February 28, 2025',
    image: 'https://via.placeholder.com/800x400',
    content: `Hello Swifties! Welcome to our February newsletter! This month we have exciting updates on upcoming events, including a special Swiftie hangout, and a message from our club president. Don't miss out on the fun—join us for all the festivities!`,
  },
  "post-2": {
    title: 'March Swiftie Hangout - Save the Date!',
    date: 'March 10, 2025',
    image: 'https://via.placeholder.com/800x400',
    content: `We are excited to announce our March Swiftie Hangout! Mark your calendars for March 10th, 2025, and come meet fellow Swifties. We’ll have games, music, and more. Be there for the best Swiftie event of the year!`,
  },
  "post-3": {
    title: 'Swiftie Fundraiser Announcement',
    date: 'March 1, 2025',
    image: 'https://via.placeholder.com/800x400',
    content: `Our annual Swiftie Fundraiser is coming up soon! We’re hosting a charity event to support local causes, and we need your help! Join us on March 20th for a day of fun, live performances, and auctions. All proceeds go to charity, and we can’t wait to see you there!`,
  },
};

const PostDetailPage = () => {
  const { id } = useParams(); // Get the dynamic ID from the route params

  const post = postDetails[id as keyof typeof postDetails];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="p-6">
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
          <p className="text-lg text-gray-600">{post.date}</p>
          <div className="mt-4 text-lg text-gray-700">{post.content}</div>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e]"
        >
          Back to SwiftPosts
        </button>
      </div>
    </div>
  );
};

export default PostDetailPage;
