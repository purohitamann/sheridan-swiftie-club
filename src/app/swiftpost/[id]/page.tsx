"use client"; // For client-side execution

import { useParams, useRouter } from 'next/navigation'; // Import useParams to get dynamic route param

const postDetails = {
  'feb-newsletter-2025': {
    title: 'February Newsletter - Swiftie Update',
    date: 'February 28, 2025',
    image: '/new-look/election.png',
    "content": "Hey Swifties! 🎶✨\n\nThe time has come to shape the future of our fan club! The Swifties Annual Election is officially LIVE, and your vote matters more than ever.\n\n📅 Last Day to Vote: March 5, 2024\n⏳ Time is ticking! Don't wait—cast your vote now!\n\nOur executive nominees are dedicated Swifties just like you, ready to bring new ideas, organize unforgettable events, and keep the Swiftie spirit alive.\n\nLet's make this election era iconic.\n\nBest,\nThe Executive Team"
  },
  // Other posts...
};

const PostDetailPage = () => {
  const { id } = useParams(); // Get the dynamic ID from the route params
  const router = useRouter();
  
  const post = postDetails[id as keyof typeof postDetails];

  // Format content with proper line breaks
  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      <p key={index} className={`mb-4 ${line.trim().startsWith('📅') || line.trim().startsWith('⏳') ? 'font-medium' : ''}`}>
        {line}
      </p>
    ));
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-24 font-sans md:pt-40 bg-white text-black flex flex-col items-center justify-center p-4 md:p-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4">Post Not Found</h1>
          <p className="mb-8 font-slack text-lg md:text-xl">Sorry, we couldn't find the article you're looking for.</p>
          <button
            onClick={() => router.push('/swiftpost')}
            className="px-4 py-2 md:px-6 md:py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e] font-slack text-base md:text-lg"
          >
            Back to SwiftPosts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans pt-24 md:pt-40 bg-white text-black p-2 md:p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mb-6 md:mb-8">
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 md:h-72 object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-6">
              <p className="text-white font-slack text-base md:text-lg">{post.date}</p>
            </div>
          </div>
          
          <div className="p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold font-sans mb-4 md:mb-6">{post.title}</h1>
            
            <div className="prose max-w-none text-base md:text-lg">
              {formatContent(post.content)}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 md:mt-8 mb-8">
          <button
            onClick={() => router.push('/swiftpost')}
            className="px-4 py-2 md:px-6 md:py-3 bg-[#2EB67D] text-white rounded-lg shadow-md hover:bg-[#218a5e] font-slack text-base md:text-xl"
          >
            Back to SwiftPosts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;