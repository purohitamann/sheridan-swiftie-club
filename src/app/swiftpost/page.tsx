"use client"; // Ensure this is included for client-side execution

import Link from 'next/link'; // For navigation to individual posts
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    id: 'feb-newsletter-2025',
    title: 'February Newsletter - Swiftie Update',
    date: 'February 28, 2025',
    summary: 'Check out our February updates, including exciting club events and a message from our president.',
    image: '/new-look/election.png',
  },
  // {
  //   id: 'post-2',
  //   title: 'March Swiftie Hangout - Save the Date!',
  //   date: 'March 10, 2025',
  //   summary: 'Join us for our March Swiftie hangout event. Read all the details here.',
  //   image: 'https://via.placeholder.com/500x300',
  // },
  // {
  //   id: 'post-3',
  //   title: 'Swiftie Fundraiser Announcement',
  //   date: 'March 1, 2025',
  //   summary: 'We are hosting our annual fundraiser! Learn how you can support the cause.',
  //   image: 'https://via.placeholder.com/500x300',
  // },
];

const SwiftPostPage = () => {
  return (
    <div className="min-h-screen pt-40 bg-white text-black p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans text-center mb-8 font-bold">SwiftPost</h1>
        <p className="text-center text-lg mb-12 font-slack">The latest news and updates from Sheridan Swiftie Club</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="polaroid bg-white text-black transform transition-all duration-300 hover:rotate-1">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs font-slack">{post.date}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold font-sans">{post.title}</h3>
                <p className="mt-2 text-sm font-slack">{post.summary}</p>
              </div>
              <div className="p-4 flex justify-center">
                <Link href={`/swiftpost/${post.id}`} passHref>
                  <button className="px-4 py-2 bg-[#2EB67D] text-white rounded-lg hover:bg-[#218a5e] transition-colors duration-300 font-slack text-lg">
                    Read More
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

export default SwiftPostPage;
