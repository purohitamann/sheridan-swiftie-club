import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🎵</div>
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Page Not Found</h1>
        <p className="text-orange-300 mb-8 text-lg">
          Looks like this page got lost in the eras tour...
        </p>
        <Link href="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-200">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}