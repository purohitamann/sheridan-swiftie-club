import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './TypeWriterEffect.css';
const TypewriterEffect: React.FC = () => {
    return (
        <div className='typewriter-container'>
            <h1 className='typewriter-text'>
                <Typewriter
                    words={['#1YearOfSSC', 'Celebrating a year of memories!']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    );
};

export default TypewriterEffect;
