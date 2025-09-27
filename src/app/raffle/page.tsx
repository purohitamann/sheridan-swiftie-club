'use client';
import React from 'react';
import SelfieUpload from '@/components/NewLook/SelfieUpload';
import Footer from '@/components/NewLook/Footer';

const RafflePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-4 font-heading">
            Movie Ticket Giveaway
          </h1>
          <p className="text-xl md:text-2xl text-orange-300 mb-2">
            "And, baby that's <span className="text-orange-500 font-bold">SHOW BUSINESS</span> for you"
          </p>
          <p className="text-lg text-orange-200">
            Upload your selfie for a chance to win movie tickets!
          </p>
        </div>

        {/* Upload Form */}
        <div className="flex justify-center">
          <SelfieUpload />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-lg p-6 border border-orange-500/30">
            <h3 className="text-orange-400 font-bold text-lg mb-3">Giveaway Details</h3>
            <div className="text-orange-200 space-y-2">
              <p>Prize: Movie tickets for you and a friend</p>
              <p>Requirements: Upload a selfie and fill out the form</p>
              <p>Drawing: Winner will be announced by end of Day on October 3rd, 2025</p>
              <p>Good luck, Bruins</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RafflePage;