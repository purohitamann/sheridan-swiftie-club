'use client'; // Ensure this component runs on the client side

import React from 'react';

const PlayButton: React.FC = () => {
    const Play = (): void => {
        new Audio('/so-high-school-intro.mp3').play();
    };

    return (
        <button onClick={Play} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Play
        </button>
    );
};

export default PlayButton;
