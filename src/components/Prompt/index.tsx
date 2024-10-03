import React, { useState } from 'react';

interface PromptProps {
    isOpen: boolean;
    onClose: () => void;
}

const Prompt: React.FC<PromptProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{ fontFamily: 'Cinzel' }} className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-[80vw] max-w-lg p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-white focus:outline-none focus:text-white focus:bg-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>

                {/* Modal Content */}
                <h2 className="text-2xl font-bold mb-4">Evermore Fund Giveaway</h2>
                <p className="text-sm mb-4 font-mono">
                    Cheers Chanted! We're giving away 3 tote bags with lanyards and accessories!
                </p>
                <p className="text-sm mb-4">
                    Enter the Evermore Fund Giveaway by purchasing tokens and signing up for the <strong>Meet & Win Event</strong>.
                </p>
                <p className="text-sm mb-4">
                    What's the <strong>Meet & Win Event</strong>? We'll be hosting a virtual event where we have a quick Taylor Swift trivia game (first place gets free entry to our next event). We will also announce the giveaway winners, meet with the executive team, and provide feedback on our club’s initiatives.
                </p>
                <p className="text-sm mb-4">
                    Again, we will need your Evermore Order ID to enter the giveaway. By participating, you are supporting Ontarians in their fight against hunger and helping SSC continue more such initiatives.
                </p>

                {/* Call to Action */}
                <a href="/evermorefund" className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
                    Buy Tokens Now
                </a>
            </div>
        </div>
    );
};

export default Prompt;
